const { Schema } = require('mongoose');
const database = require('../database');

const { ExerciseStepSchema } = require('./exerciseStep');

const ExerciseSchema = new Schema({
  description: String,
  regularExpression: String,
  createdAt: Date,
  steps: [ExerciseStepSchema],
  professor: { type: Schema.Types.ObjectId, ref: 'User' },
  answer: { type: Schema.Types.ObjectId, ref: 'Answer' }, // TODO: virtual
}, {
  timestamps: true,
});

const Exercise = database.model('Exercise', ExerciseSchema);

module.exports = { Exercise, ExerciseSchema };
