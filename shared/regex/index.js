import _ from 'lodash';

export const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

export const generateWords = (text, limit = 3) => {
  const symbols = extractSymbols(text);
  const words = [symbols];

  while (words.length < limit) {
    const last = _.last(words);
    const newValues = _.flatMap(last, value => symbols.map(symbol => value + symbol));

    words.push(newValues);
  }

  return words;
};

export const validWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`, 'g');

  return generateWords(text, limit)
    .map(words => words.filter(word => re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};

export const invalidWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`, 'g');

  return generateWords(text, limit)
    .map(words => words.filter(word => !re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};
