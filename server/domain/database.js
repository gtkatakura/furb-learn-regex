const mongoose = require('mongoose');

const config = require('../config');

const uri = config.get('mongodb.uri');
const database = mongoose.createConnection(uri);

module.exports = database;
