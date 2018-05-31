const symbolsParser = require('../../../regex/symbols/parser');
const wordsSeparateByStatus = require('../../../regex/words/separateByStatus');

const detailsFrom = ({ exercise: { regularExpression }, step }) => ({
  symbols: symbolsParser.parse(regularExpression),
  words: wordsSeparateByStatus(regularExpression, step),
});

module.exports = detailsFrom;
