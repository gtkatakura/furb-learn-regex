const mongoose = require('mongoose');
const database = require('../database');

const ExerciseSchema = new mongoose.Schema({
  description: String,
  regularExpression: String,
  createdAt: Date,
});

const Exercise = database.model('Exercise', ExerciseSchema);

module.exports = { Exercise, ExerciseSchema };
