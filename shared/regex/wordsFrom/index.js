const _ = require('lodash');

const recursive = require('../../functions/recursive');
const memoize = require('../../functions/memoize');

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const wordsFrom = recursive(self => (text, limit) => {
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

Object.assign(wordsFrom, {
  withCache: wordsFrom.withMiddleware(memoize),
});

module.exports = wordsFrom;
