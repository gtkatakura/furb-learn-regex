const { Schema } = require('mongoose');

const ClassWorkSchema = new Schema({
  activity: { type: Schema.Types.ObjectId, ref: 'Activity' },
  deadline: Date,
});

module.exports = { ClassWorkSchema };
