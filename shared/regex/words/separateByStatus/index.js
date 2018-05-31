const wordsExtractFrom = require('../../words/extractFrom/withSafeMode');
const toRegex = require('../../toRegex');
const filterWordBy = require('../filterWordBy');

const wordsSeparateByStatus = (regularExpression, { limit }) => {
  const { isValid, isInvalid } = toRegex(regularExpression);
  const manyOfWords = wordsExtractFrom(regularExpression, limit);

  return {
    valids: filterWordBy(manyOfWords, isValid),
    invalids: filterWordBy(manyOfWords, isInvalid),
  };
};

module.exports = wordsSeparateByStatus;
