const users = [
  {
    id: 1,
    name: 'Graham',
    providers: [],
  },
];

const find = id => users.find(user => user.id === id);

const findByExternalId = (providerName, id) => {
  return users.find(user => user.providers.find((provider) => provider.name === providerName && provider.id === id));
};

const createUser = (name, provider, id) => {
  const user = {
    id: users.length + 1,
    name,
    providers: [{ provider, id }],
  };

  users.push(user);

  return user;
};

const findOrCreateUser = (name, provider, id) => {
  const user = findByExternalId(provider, id);
  return user || createUser(name, provider, id);
};

module.exports = {
  find,
  findByExternalId,
  createUser,
  findOrCreateUser,
};
