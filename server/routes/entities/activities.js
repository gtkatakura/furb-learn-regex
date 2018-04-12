const express = require('express');

const ActivityRepository = require('../../domain/repositories/activity');

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
  await ActivityRepository.destroy({ _id: request.params.id });
  response.json(true);
});

module.exports = app;
