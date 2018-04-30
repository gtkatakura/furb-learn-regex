const express = require('express');

const StudentRepository = require('../../domain/repositories/student');
const ExerciseRepository = require('../../domain/repositories/exercise');
const { validWords, invalidWords } = require('../../../shared/regex');

const app = express.Router();

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

  response.json(student[0]);
});

app.get('/me/exercises/:id/currentStep', async (request, response) => {
  const exercise = await ExerciseRepository.find({
    _id: request.params.id,
  });

  response.json({
    words: {
      valids: validWords(exercise.regularExpression),
      invalids: invalidWords(exercise.regularExpression),
    },
  });
});

module.exports = app;
