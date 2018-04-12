const { fromModel } = require('./factory');
const { ClassRoom } = require('../models/classRoom');

const repository = fromModel(ClassRoom);

module.exports = Object.assign({}, repository, {
  all() {
    return repository.all().populate('classworks.activity');
  },
});
