const { User } = require('../models/user');

const find = id => User.findById(id);

const findByExternalId = (providerName, id) => {
  return new Promise((resolve, reject) => {
    User.find({
      'providers.id': id,
      'providers.name': providerName,
    }, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response[0]);
      }
    });
  });
};

const createUser = (name, provider, id) => {
  return new Promise((resolve, reject) => {
    new User({
      name,
      providers: [{ id, name: provider }],
    }).save((err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};

const findOrCreateUser = async (name, provider, id) => {
  const user = await findByExternalId(provider, id);
  return user || createUser(name, provider, id);
};

module.exports = {
  find,
  findByExternalId,
  createUser,
  findOrCreateUser,
};
