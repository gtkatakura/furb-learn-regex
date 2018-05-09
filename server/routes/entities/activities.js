const express = require('express');
const HttpStatus = require('http-status-codes');

const ActivityRepository = require('../../domain/repositories/activity');
const ClassRoomRepository = require('../../domain/repositories/classRoom');

const app = express.Router();

app.get('/', async (request, response) => {
  const entities = await ActivityRepository.all({
    createdBy: request.user,
  });

  response.send(entities);
});

app.put('/', async (request, response) => {
  const model = request.body;

  await ActivityRepository.update(model);
  response.json(true);
});

app.post('/', async (request, response) => {
  const model = Object.assign(request.body, {
    createdBy: request.user,
  });

  await ActivityRepository.create(model);
  response.json(true);
});

app.delete('/:id', async (request, response) => {
  if (await ClassRoomRepository.find({ 'classworks.activity': request.params.id })) {
    response.status(HttpStatus.NOT_ACCEPTABLE).json({
      message: 'Não foi possível excluir esta atividade porque a mesma já está sendo utilizada por uma turma.',
    });
  } else {
    await ActivityRepository.destroy({ _id: request.params.id });
    response.json(true);
  }
});

module.exports = app;
