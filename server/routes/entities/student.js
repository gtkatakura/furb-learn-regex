const express = require('express');
const _ = require('lodash')

const StudentRepository = require('../../domain/repositories/student');
const ExerciseRepository = require('../../domain/repositories/exercise');

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

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const generateWords = (text, limit = 3) => {
  const symbols = extractSymbols(text);
  const words = [symbols];

  while (words.length < limit) {
    const last = _.last(words);
    const newValues = _.flatMap(last, value => symbols.map(symbol => value + symbol));

    words.push(newValues);
  }

  return words;
};

const validWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`, 'g');

  return generateWords(text, limit)
    .map(words => words.filter(word => re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};

const invalidWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`, 'g');

  return generateWords(text, limit)
    .map(words => words.filter(word => !re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};

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
