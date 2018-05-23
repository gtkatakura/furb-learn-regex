const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const ClassRoomRepository = require('../../domain/repositories/classRoom');
const StudentRepository = require('../../domain/repositories/student');
const AnswerRepository = require('../../domain/repositories/answer');

const app = express.Router();

app.get('/', async (request, response) => {
  const entities = await ClassRoomRepository.all({
    createdBy: request.user,
  });

  response.send(entities);
});

app.put('/', async (request, response) => {
  const model = request.body;

  await ClassRoomRepository.update(model);
  response.json(true);
});

app.post('/', async (request, response) => {
  const model = Object.assign(request.body, {
    createdBy: request.user,
  });

  await ClassRoomRepository.create(model);
  response.json(true);
});

app.delete('/:id', async (request, response) => {
  if (await StudentRepository.find({ classRooms: request.params.id })) {
    response.status(HttpStatus.NOT_ACCEPTABLE).json({
      message: 'Não foi possível excluir esta turma porque a mesma já possui alunos cadastrados.',
    });
  } else {
    await ClassRoomRepository.destroy({ _id: request.params.id });
    response.json(true);
  }
});

app.get('/subscribe/:token', async (request, response) => {
  const classRoom = await ClassRoomRepository.find({
    token: request.params.token,
  });

  let student = await StudentRepository.find({
    user: request.user,
  });

  student = student || await StudentRepository.create({
    user: request.user,
  });

  if (!student.classRooms.find(el => el.equals(classRoom._id))) {
    student.classRooms.push(classRoom);
    await student.save();
  }

  response.json(classRoom);
});

app.get('/:id/answers', async (request, response) => {
  const classRooms = await ClassRoomRepository.all({
    _id: request.params.id,
  });

  const classRoom = classRooms[0];

  const answers = await AnswerRepository.all({
    exercise: _.flatMap(classRoom.classworks, 'activity.exercises'),
  });

  response.json(answers);
});

module.exports = app;
