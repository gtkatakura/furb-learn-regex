const _ = require('lodash');

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const base = (limit, { symbols, words }) => {
  if (limit === 0) {
    return words;
  }

  const currentLevel = _.last(words);
  const nextLevel = _.flatMap(currentLevel, word => symbols.map(symbol => word + symbol));

  return base(limit - 1, {
    symbols,
    words: [...words, nextLevel],
  });
};

const wordsFrom = (text, limit) => {
  const symbols = extractSymbols(text);
  const words = [[''], symbols];

  return base(limit - 1, { symbols, words });
};

module.exports = wordsFrom;
