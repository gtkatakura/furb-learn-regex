import _ from 'lodash';
import wordsFrom from './wordsFrom';

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
  if (Number.isNaN(limit) || limit < 0) {
    return [];
  }

  return wordsFrom.withCache(text, limit);
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
