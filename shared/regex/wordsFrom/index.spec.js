const { expect } = require('chai');

const wordsFrom = require('./index');

describe('shared/regex/wordsFrom', () => {
  describe('quando for a expressão regular: abc', () => {
    describe('deve retornar as combinacoes possiveis para', () => {
      const regularExpression = 'abc';

      const level1 = [
        [''],
        [
          'a', 'b', 'c',
        ],
      ];

      const level2 = [
        ...level1,
        [
          'aa', 'ab', 'ac',
          'ba', 'bb', 'bc',
          'ca', 'cb', 'cc',
        ],
      ];

      const level3 = [
        ...level2,
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

      const levels = [
        level1,
        level2,
        level3,
      ];

      levels.forEach((level, index) => {
        const limit = index + 1;

        it(`limit = ${limit}`, () => {
          const result = wordsFrom(regularExpression, limit);

          expect(result).to.eql(level);
        });
      });
    });
  });
});
