const filterWordBy = (manyWords, filter) => (
  manyWords
    .map(words => words.filter(filter))
    .filter(words => words.length !== 0)
);

module.exports = filterWordBy;
