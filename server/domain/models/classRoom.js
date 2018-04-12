const { Schema } = require('mongoose');
const database = require('../database');

const { ClassWorkSchema } = require('./classwork');

const ClassRoomSchema = new Schema({
  name: String,
  classworks: [ClassWorkSchema],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const ClassRoom = database.model('ClassRoom', ClassRoomSchema);

module.exports = { ClassRoom, ClassRoomSchema };
