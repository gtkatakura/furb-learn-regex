const { expect } = require('chai');

const wordsFrom = require('./index');

describe('shared/regex/wordsFrom', () => {
  describe('quando for a expressão regular: abc', () => {
    describe('deve retornar as combinacoes possiveis para', () => {
      const regularExpression = 'abc';

      const limit0 = [
        [''],
      ];

      const limit1 = [
        ...limit0,
        [
          'a', 'b', 'c',
        ],
      ];

      const limit2 = [
        ...limit1,
        [
          'aa', 'ab', 'ac',
          'ba', 'bb', 'bc',
          'ca', 'cb', 'cc',
        ],
      ];

      const limit3 = [
        ...limit2,
        [
          'aaa', 'aab', 'aac',
          'aba', 'abb', 'abc',
          'aca', 'acb', 'acc',
          'baa', 'bab', 'bac',
          'bba', 'bbb', 'bbc',
          'bca', 'bcb', 'bcc',
          'caa', 'cab', 'cac',
          'cba', 'cbb', 'cbc',
          'cca', 'ccb', 'ccc',
        ],
      ];

      const limits = [
        limit0,
        limit1,
        limit2,
        limit3,
      ];

      limits.forEach((level, limit) => {
        it(`limit = ${limit}`, () => {
          const result = wordsFrom(regularExpression, limit);

          expect(result).to.eql(level);
        });
      });
    });
  });
});
