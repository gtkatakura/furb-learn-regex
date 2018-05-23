import _ from 'lodash';

export const toRegex = value => {
  try {
    if (value) {
      return new RegExp(`^(${value})$`, 'g');
    }

    return { test: () => false };
  } catch (err) {
    return { test: () => false };
  }
};

export const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

export const generateWords = (text, limit = 3) => {
  const symbols = extractSymbols(text);
  const words = [[''], symbols];

  while (words.length < limit) {
    const last = _.last(words);
    const newValues = _.flatMap(last, value => symbols.map(symbol => value + symbol));

    words.push(newValues);
  }

  return words;
};

export const validWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`);

  return generateWords(text, limit)
    .map(words => words.filter(word => re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};

export const invalidWords = (text, limit = 3) => {
  const re = new RegExp(`^(${text})$`);

  return generateWords(text, limit)
    .map(words => words.filter(word => !re.test(word)))
    .filter(words => words.length !== 0)
    .map(words => words.join(' '));
};
