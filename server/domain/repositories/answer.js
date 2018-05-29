const { fromModel } = require('./factory');
const { Answer } = require('../models/answer');

const repository = fromModel(Answer);

module.exports = Object.assign({}, repository, {
  all(params) {
    return repository.all(params).populate('student', 'name');
  },
  async findOrCreate({ student, exercise }) {
    const record = await this.find({
      student,
      exercise,
    });

    if (record) {
      return record;
    }

    return this.create({
      currentStep: exercise.steps[0],
      student,
      exercise,
      valid: false,
    });
  },
});
