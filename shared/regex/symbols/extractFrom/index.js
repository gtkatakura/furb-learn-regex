const _ = require('lodash');

const extractSymbols = text => _.sortBy(_.uniq(text.match(/[a-zA-Z]/g)));

module.exports = extractSymbols;
