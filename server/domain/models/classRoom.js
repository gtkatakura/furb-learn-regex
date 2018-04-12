const { Schema } = require('mongoose');
const database = require('../database');

const ClassRoomSchema = new Schema({
  name: String,
});

const ClassRoom = database.model('ClassRoom', ClassRoomSchema);

module.exports = { ClassRoom, ClassRoomSchema };
