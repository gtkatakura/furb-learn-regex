const { Schema } = require('mongoose');
const database = require('../database');

const { ClassWorkSchema } = require('./classwork');

const ClassRoomSchema = new Schema({
  name: String,
  classworks: [ClassWorkSchema],
});

const ClassRoom = database.model('ClassRoom', ClassRoomSchema);

module.exports = { ClassRoom, ClassRoomSchema };
