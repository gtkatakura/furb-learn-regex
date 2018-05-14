const mongoose = require('mongoose');
const database = require('../database');

const { ProviderSchema } = require('./provider');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  providers: [ProviderSchema],
});

const User = database.model('User', UserSchema);

module.exports = { User, UserSchema };
