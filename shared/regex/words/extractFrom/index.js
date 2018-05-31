const _ = require('lodash');

const recursive = require('../../../functions/recursive');
const memoize = require('../../../functions/memoize');
const extractSymbols = require('../../symbols/extractFrom');

const extractFrom = recursive(self => (text, limit) => {
  if (limit === 0) {
    return [['']];
  }

  const symbols = extractSymbols(text);
  const words = self(text, limit - 1);
  const currentLevel = _.last(words);

  return [
    ...words,
    _.flatMap(currentLevel, word => symbols.map(symbol => word + symbol)),
  ];
});

Object.assign(extractFrom, {
  withCache: extractFrom.withMiddleware(memoize),
});

module.exports = extractFrom;
