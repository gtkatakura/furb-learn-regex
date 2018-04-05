const { fromModel } = require('./factory');
const { Activity } = require('../models/activity');

module.exports = fromModel(Activity);
