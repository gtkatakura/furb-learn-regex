const { User } = require('../models/user');
const { fromModel } = require('./factory');

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

const createUser = (name, provider, id, email) => {
  return new Promise((resolve, reject) => {
    new User({
      name,
      email,
      providers: [{ id, name: provider, email }],
    }).save((err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};

const findOrCreateUser = async (name, provider, id, email) => {
  const user = await findByExternalId(provider, id);
  return user || createUser(name, provider, id, email);
};

module.exports = Object.assign(fromModel(User), {
  find,
  findByExternalId,
  createUser,
  findOrCreateUser,
});
