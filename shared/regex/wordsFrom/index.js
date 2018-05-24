const _ = require('lodash');

const recursive = require('../../functions/recursive');

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const base = recursive(self => (limit, { symbols, words }) => {
  if (limit === 0) {
    return words;
  }

  const currentLevel = _.last(words);
  const nextLevel = _.flatMap(currentLevel, word => symbols.map(symbol => word + symbol));

  return self(limit - 1, {
    symbols,
    words: [...words, nextLevel],
  });
});

const wordsFrom = (text, limit) => {
  const symbols = extractSymbols(text);
  const words = [[''], symbols];

  return base(limit - 1, { symbols, words });
};

module.exports = wordsFrom;
