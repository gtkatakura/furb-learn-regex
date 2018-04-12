const { fromModel } = require('./factory');
const { Activity } = require('../models/activity');

const repository = fromModel(Activity);

module.exports = Object.assign({}, repository, {
  all(params) {
    return repository.all(params).populate('exercises');
  },
});
