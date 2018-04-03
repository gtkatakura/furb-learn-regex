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
