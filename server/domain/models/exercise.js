const { Schema } = require('mongoose');
const database = require('../database');

const { ExerciseStepSchema } = require('./exerciseStep');

const ExerciseSchema = new Schema({
  description: String,
  regularExpression: String,
  createdAt: Date,
  steps: [ExerciseStepSchema],
  professor: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

const Exercise = database.model('Exercise', ExerciseSchema);

module.exports = { Exercise, ExerciseSchema };
