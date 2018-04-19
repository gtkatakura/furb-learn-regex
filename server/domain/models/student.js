const { Schema } = require('mongoose');
const database = require('../database');

const StudentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  classRooms: [{ type: Schema.Types.ObjectId, ref: 'ClassRoom' }],
}, {
  timestamps: true,
});

const Student = database.model('Student', StudentSchema);

module.exports = { Student, StudentSchema };
