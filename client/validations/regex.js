import parser from 'regex/symbols/parser';

const regex = value => {
  try {
    if (value) parser.parse(value);
    return undefined;
  } catch (error) {
    return `Coluna ${error.location.start.column}: ${error.message}`;
  }
};

export default regex;
