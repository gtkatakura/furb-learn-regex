const mongoose = require('mongoose');
const database = require('../database');

const { ExerciseStepSchema } = require('./exerciseStep');

const ExerciseSchema = new mongoose.Schema({
  description: String,
  regularExpression: String,
  createdAt: Date,
  steps: [ExerciseStepSchema],
});

const Exercise = database.model('Exercise', ExerciseSchema);

module.exports = { Exercise, ExerciseSchema };
