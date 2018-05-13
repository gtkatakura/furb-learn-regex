const { fromModel } = require('./factory');
const { Answer } = require('../models/answer');

const repository = fromModel(Answer);

module.exports = Object.assign({}, repository, {
  all(params) {
    return repository.all(params).populate('student', 'name');
  },
});
