const { fromModel } = require('./factory');
const { Student } = require('../models/student');

module.exports = fromModel(Student);
