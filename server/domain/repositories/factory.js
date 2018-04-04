const _ = require('lodash');

const fromModel = Model => {
  const all = params => Model.find(params);

  const find = async params => {
    const entities = await all(params);
    return _.first(entities);
  };

  const update = async attributes => {
    const entity = await find({
      _id: attributes._id,
    });

    entity.set(attributes);

    return entity.save();
  };

  const create = attributes => new Model(attributes).save();

  return {
    all,
    find,
    update,
    create,
  };
};

module.exports = { fromModel };
