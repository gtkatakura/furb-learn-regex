const express = require('express');

const ExerciseRepository = require('../../domain/repositories/exercise');

const app = express.Router();

app.get('/', async (request, response) => {
  const entities = await ExerciseRepository.all({
    professor: request.user,
  });

  response.send(entities);
});

app.put('/', async (request, response) => {
  const model = request.body;

  await ExerciseRepository.update(model);
  response.json(true);
});

app.post('/', async (request, response) => {
  const model = Object.assign(request.body, {
    professor: request.user,
  });

  await ExerciseRepository.create(model);
  response.json(true);
});

app.delete('/:id', async (request, response) => {
  await ExerciseRepository.destroy({ _id: request.params.id });
  response.json(true);
});

module.exports = app;
