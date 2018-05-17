const { expect } = require('chai');

const parser = require('./index');

describe('regex/symbols/parser', () => {
  const { SyntaxError, parse } = parser;

  const useCases = [{
    inputs: [
      ...'abcdefghijklmnopqrstuvwxyz',
      ...'0123456789',
      ...['abc', 'a1b2c'],
      ...['(abc)', '(abc(a1b2c))'],
      ...['a?', '(a)?', 'a|b?', 'a+?', 'a*?', 'a{1}?'],
      ...['a+', '(a)+'],
      ...['(a)*', 'a*'],
      ...['a{1}', 'a{10}'],
      ...['a|b', 'a|b|c', '(a|b)', '(a|b)|(c|d)'],
      '((a?|b+)*(a{1})){10}',
    ],
  }, {
    inputs: [
      ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ...'"!@#$%¨&_\'¹²³£¢¬§´[~],.;/`{^}<>:?ªº°\\|',
      ...['()', '(a', 'a)', '(ab()', '(ab(c)'],
      ...['?', 'a??'],
      ...['+', 'a++'],
      ...['*', 'a**'],
      ...['{1}', 'a{1}{1}'],
      ...['a?+', 'a?*', 'a?{1}'],
    ],
    error: true,
  }];

  useCases.forEach(({ inputs, error }) => {
    for (const input of inputs) {
      describe(`quando for ${input}`, () => {
        const subject = () => parse(input);

        if (error) {
          it('deve ocorrer um SyntaxError', () => {
            expect(subject).to.throw(SyntaxError);
          });
        } else {
          it('nao deve ocorrer um SyntaxError', () => {
            expect(subject).not.to.throw();
          });
        }
      });
    }
  });
});
