const express = require('express');

const UserRepository = require('../../domain/repositories/users');

const app = express.Router();

app.put('/', async (request, response) => {
  const model = request.body;

  if (model._id !== request.user.id) {
    response.json(false);
  } else {
    await UserRepository.update(model);

    response.json(true);
  }
});

module.exports = app;
