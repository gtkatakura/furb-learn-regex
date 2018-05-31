const _ = require('lodash');

const toRegex = value => {
  const regex = new RegExp(`^(${value})$`);
  const isValid = text => regex.test(text);
  const isInvalid = _.negate(isValid);

  return Object.assign(regex, {
    isValid,
    isInvalid,
  });
};

module.exports = toRegex;
