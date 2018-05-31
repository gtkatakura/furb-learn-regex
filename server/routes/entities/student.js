const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const StudentRepository = require('../../domain/repositories/student');
const ExerciseRepository = require('../../domain/repositories/exercise');
const AnswerRepository = require('../../domain/repositories/answer');

const getNextStep = require('../../../shared/policies/solutions/getNextStep');
const solutionIsValid = require('../../../shared/policies/solutions/isValid');

const detailsFromStep = require('../../../shared/exercises/steps/detailsFrom');

const notifySolutionService = require('../../domain/services/exercise/notifySolution');

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

  const step = answer ? answer.currentStep : exercise.steps[0];

  response.json(detailsFromStep({
    exercise,
    step,
  }));
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

    await notifySolutionService({
      solution: request.body.solution,
      user: request.user,
      exercise,
    });
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
          nextStep: detailsFromStep({
            exercise,
            step: nextStep,
          }),
        },
      });
    } else {
      await AnswerRepository.update(answer);

      request.app.io.emit(`professors/${exercise.professor}/action`, {
        type: 'ANSWER_UPDATE',
        payload: Object.assign(answer, { exercise: exercise._id, student: request.user }),
      });

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
