const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const mailer = require('../../mailer');

const StudentRepository = require('../../domain/repositories/student');
const ExerciseRepository = require('../../domain/repositories/exercise');
const AnswerRepository = require('../../domain/repositories/answer');
const ActivityRepository = require('../../domain/repositories/activity');
const ClassRoomsRepository = require('../../domain/repositories/classRoom');

const { validWords, invalidWords } = require('../../../shared/regex');
const getNextStep = require('../../../shared/policies/solutions/getNextStep');
const solutionIsValid = require('../../../shared/policies/solutions/isValid');
const symbolsParser = require('../../../shared/regex/symbols/parser');

const app = express.Router();

app.get('/', async (request, response) => {
  const students = await StudentRepository.all()
    .populate('user', 'name')
    .populate('classRooms');

  response.json(students);
});

app.get('/me', async (request, response) => {
  const student = await StudentRepository.all({
    user: request.user,
  }).populate({
    path: 'classRooms',
    populate: {
      path: 'classworks.activity',
      populate: {
        path: 'exercises',
      },
    },
  });

  if (student[0]) {
    const exercises = _.flatMap(_.flatMap(student[0].classRooms, 'classworks'), 'activity.exercises');

    await Promise.all(exercises.map(async exercise => {
      const answer = await AnswerRepository.find({
        exercise,
        student: request.user,
      });

      _.assign(exercise, {
        regularExpression: undefined,
        answer,
      });
    }));

    await Promise.all(exercises.map(async exercise => {
      const answer = await AnswerRepository.find({
        exercise,
        student: request.user,
      });

      _.assign(exercise, {
        regularExpression: undefined,
        answer,
      });
    }));

    response.json(student[0]);
  } else {
    response.json({});
  }
});

app.get('/me/exercises/:id/currentStep', async (request, response) => {
  const exercise = await ExerciseRepository.find({
    _id: request.params.id,
  });

  const answer = await AnswerRepository.find({
    student: request.user,
    exercise,
  });

  const { limit } = answer ? answer.currentStep : exercise.steps[0];

  response.json({
    symbols: symbolsParser.parse(exercise.regularExpression),
    words: {
      valids: validWords(exercise.regularExpression, limit),
      invalids: invalidWords(exercise.regularExpression, limit),
    },
  });
});

app.post('/me/exercises/:exerciseId/solution', async (request, response) => {
  const exercise = await ExerciseRepository.find({
    _id: request.params.exerciseId,
  });

  const answer = await AnswerRepository.findOrCreate({
    student: request.user,
    exercise,
  });

  if (solutionIsValid(exercise, request.body.solution)) {
    answer.solutions.push({
      value: request.body.solution,
      valid: true,
    });

    await AnswerRepository.update(answer);

    request.app.io.emit(`professors/${exercise.professor}/action`, {
      type: 'ANSWER_UPDATE',
      payload: Object.assign(answer, { exercise: exercise._id, student: request.user }),
    });

    response.json(true);

    const activities = await ActivityRepository.all({
      exercises: exercise._id,
    });

    const student = await StudentRepository.find({
      user: request.user,
    });

    const classRooms = await ClassRoomsRepository.all({
      '_id': student.classRooms,
      'classworks.activity': activities,
    }).populate('createdBy');

    if (classRooms.length !== 0) {
      _.each(classRooms, classRoom => {
        const classwork = _.find(classRoom.classworks, currentClassWork => (
          currentClassWork.notifyExerciseConclusions &&
          _.some(activities, activity => activity.equals(currentClassWork.activity))
        ));

        if (classwork) {
          mailer.send({
            to: classRoom.createdBy.email,
            subject: `${classRoom.name} - ${request.user.name} concluiu um exercício`,
            html: `<b>${exercise.description}</b> resolvido com a seguinte expressão regular: <b>${request.body.solution}</b>`,
          });
        }
      });
    }
  } else {
    answer.solutions.push({
      value: request.body.solution,
      valid: false,
    });

    const nextStep = getNextStep({
      exercise,
      currentStep: answer.currentStep,
      solution: request.body.solution,
    });

    if (nextStep) {
      answer.currentStep = nextStep;

      await AnswerRepository.update(answer);

      request.app.io.emit(`professors/${exercise.professor}/action`, {
        type: 'ANSWER_UPDATE',
        payload: Object.assign(answer, { exercise: exercise._id, student: request.user }),
      });

      response.json({
        error: true,
        data: {
          nextStep: {
            symbols: symbolsParser.parse(exercise.regularExpression),
            words: {
              valids: validWords(exercise.regularExpression, nextStep.limit),
              invalids: invalidWords(exercise.regularExpression, nextStep.limit),
            },
          },
        },
      });
    } else {
      response.status(HttpStatus.NOT_ACCEPTABLE).json({
        message: [
          'A expressão regular especificada não validou todas as palavras que pertencem à linguagem ou validou palavras que não pertencem.',
          'No entanto, não existem mais etapas com outras palavras válidas e inválidas para auxiliar na resolução.'
        ].join(' '),
      });
    }
  }
});

module.exports = app;
