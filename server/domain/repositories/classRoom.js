const { fromModel } = require('./factory');
const { ClassRoom } = require('../models/classRoom');

const repository = fromModel(ClassRoom);

module.exports = Object.assign({}, repository, {
  all(params) {
    return repository.all(params).populate({
      path: 'classworks.activity',
      populate: { path: 'exercises' },
    });
  },
});
