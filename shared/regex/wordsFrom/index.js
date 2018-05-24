const _ = require('lodash');

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

const wordsFrom = (text, limit = 3) => {
  const symbols = extractSymbols(text);
  const words = [[''], symbols];

  while ((words.length - 1) < limit) {
    const last = _.last(words);
    const newValues = _.flatMap(last, value => symbols.map(symbol => value + symbol));

    words.push(newValues);
  }

  return words;
};

module.exports = wordsFrom;
