const config = require('../../config');
const users = require('../../domain/repositories/users');

module.exports = {
  jwt: require('./jwt').create({ config, users }),
  facebook: require('./facebook').create({ config, users }),
  google: require('./google').create({ config, users }),
};
