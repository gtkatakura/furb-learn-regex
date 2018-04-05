const { Schema } = require('mongoose');
const database = require('../database');

const ActivitySchema = new Schema({
  name: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
}, {
  timestamps: true,
});

const Activity = database.model('Activity', ActivitySchema);

module.exports = { Activity, ActivitySchema };
