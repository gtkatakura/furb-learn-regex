const mongoose = require('mongoose');

const ClassWorkSchema = new mongoose.Schema({
  deadline: Date,
});

module.exports = { ClassWorkSchema };
