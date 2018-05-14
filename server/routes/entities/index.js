const express = require('express');
const bodyParser = require('body-parser');

const app = express.Router();

const entities = [
  'exercises',
  'activities',
  'classRooms',
  'student',
  'users',
];

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

entities.forEach(entity => {
  const route = require(`./${entity}`);
  app.use(`/${entity}`, route);
});

module.exports = app;
