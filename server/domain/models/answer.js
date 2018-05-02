const { Schema } = require('mongoose');
const database = require('../database');
const { ExerciseStepSchema } = require('./exerciseStep');

const AnswerSchema = new Schema({
  response: [String],
  valid: Boolean,
  student: { type: Schema.Types.ObjectId, ref: 'User' },
  exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
  currentStep: ExerciseStepSchema,
}, {
  timestamps: true,
});

const Answer = database.model('Answer', AnswerSchema);

module.exports = { Answer, AnswerSchema };
