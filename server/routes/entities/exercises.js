const express = require('express');
const HttpStatus = require('http-status-codes');

const ExerciseRepository = require('../../domain/repositories/exercise');
const ActivityRepository = require('../../domain/repositories/activity');
const AnswerRepository = require('../../domain/repositories/answer');

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
  if (await ActivityRepository.find({ exercises: request.params.id })) {
    response.status(HttpStatus.NOT_ACCEPTABLE).json({
      message: 'Não foi possível excluir este exercício porque o mesmo já está sendo utilizado por uma atividade.',
    });
  } else {
    await ExerciseRepository.destroy({ _id: request.params.id });
    response.json(true);
  }
});

app.get('/:id/answers', async (request, response) => {
  const answers = await AnswerRepository.all({
    exercise: request.params.id,
  });

  response.json(answers);
});

module.exports = app;
