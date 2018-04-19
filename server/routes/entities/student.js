const express = require('express');

const StudentRepository = require('../../domain/repositories/student');

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

module.exports = app;
