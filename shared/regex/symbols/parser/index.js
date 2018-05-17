const { SyntaxError, parse } = require('../pegjs/parser');

const translateMessage = message => (
  message
    .replace('Expected ', 'Esperado ')
    .replace(' or ', ' ou ')
    .replace(' but ', ' mas ')
    .replace(' found.', ' foi encontrado.')
    .replace('any character', 'qualquer caractere')
    .replace('end of input', 'fim da entrada')
    .replace('integer', 'inteiro')
    .replace('lower case', 'letra minúscula')
);

const parser = {
  SyntaxError,
  parse(...args) {
    try {
      return parse(...args);
    } catch (error) {
      if (error instanceof SyntaxError) {
        Object.assign(error, {
          message: translateMessage(error.message),
        });
      }

      throw error;
    }
  },
};

module.exports = parser;
