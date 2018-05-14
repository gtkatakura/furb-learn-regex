const { Schema } = require('mongoose');
const database = require('../database');
const { ExerciseStepSchema } = require('./exerciseStep');

const SolutionSchema = new Schema({
  value: String,
  valid: Boolean,
});

const AnswerSchema = new Schema({
  solutions: [SolutionSchema],
  student: { type: Schema.Types.ObjectId, ref: 'User' },
  exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
  currentStep: ExerciseStepSchema,
}, {
  timestamps: true,
});

const Answer = database.model('Answer', AnswerSchema);

module.exports = { Answer, AnswerSchema };
