const express = require('express');
const bodyParser = require('body-parser');

const { Exercise } = require('../domain/models/exercise');

const app = express.Router();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.get('/', async (request, response) => {
  Exercise.find({}, (err, models) => {
    if (err) {
      response.statusCode = 402;
    } else {
      response.send(models);
    }
  });
});

app.put('/', async (request, response) => {
  const model = request.body;

  Exercise.findById(model._id, (err, exercise) => {
    exercise.set(model);
    exercise.save((err2) => {
      if (!err2) {
        response.json(true);
      }
    })
  });
});

app.post('/', async (request, response) => {
  const model = Object.assign(request.body, {
    createdAt: new Date(),
  });

  new Exercise(model).save((err) => {
    if (!err) {
      response.json(true);
    }
  });
});

module.exports = app;
