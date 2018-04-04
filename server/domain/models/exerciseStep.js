const mongoose = require('mongoose');

const ExerciseStepSchema = new mongoose.Schema({
  limit: Number,
});

module.exports = { ExerciseStepSchema };
