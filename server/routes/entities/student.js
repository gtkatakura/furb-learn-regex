const express = require('express');
const _ = require('lodash');

const StudentRepository = require('../../domain/repositories/student');
const ExerciseRepository = require('../../domain/repositories/exercise');
const AnswerRepository = require('../../domain/repositories/answer');

const { validWords, invalidWords } = require('../../../shared/regex');
const getNextStep = require('../../../shared/policies/solutions/getNextStep');

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

    response.json(student[0]); _.flatMap(_.flatMap(student[0].classRooms, 'classworks'), 'activity.exercises');

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

  const limit = answer ? answer.currentStep.limit : 3;

  response.json({
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

  const answer = await AnswerRepository.find({
    student: request.user,
    exercise,
  }) || await AnswerRepository.create({
    currentStep: exercise.steps[0],
    student: request.user,
    exercise,
    valid: false,
  });

  const nextStep = getNextStep({
    exercise,
    currentStep: answer.currentStep,
    solution: request.body.solution,
  });

  answer.response.push(request.body.solution);

  if (nextStep) {
    answer.currentStep = nextStep;
    await AnswerRepository.update(answer);

    response.json({
      error: true,
      data: {
        nextStep: {
          words: {
            valids: validWords(exercise.regularExpression, nextStep.limit),
            invalids: invalidWords(exercise.regularExpression, nextStep.limit),
          },
        },
      },
    });
  } else {
    answer.valid = true;
    await AnswerRepository.update(answer);

    response.json(true);
  }

  request.app.io.emit(`professors/${exercise.professor}/action`, {
    type: 'ANSWER_UPDATE',
    payload: Object.assign(answer, { exercise: exercise._id, student: request.user }),
  });
});

module.exports = app;
