const express = require('express');

const ClassRoomRepository = require('../../domain/repositories/classRoom');

const app = express.Router();

app.get('/', async (request, response) => {
  const entities = await ClassRoomRepository.all();

  response.send(entities);
});

app.put('/', async (request, response) => {
  const model = request.body;

  await ClassRoomRepository.update(model);
  response.json(true);
});

app.post('/', async (request, response) => {
  const model = request.body;

  await ClassRoomRepository.create(model);
  response.json(true);
});

app.delete('/:id', async (request, response) => {
  await ClassRoomRepository.destroy({ _id: request.params.id });
  response.json(true);
});

module.exports = app;
