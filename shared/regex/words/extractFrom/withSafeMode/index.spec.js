const extractFromWithSafeMode = require('./index');

describe('shared/regex/words/extractFrom/withSafeMode', () => {
  const limits = [
    -1,
    NaN,
  ];

  for (const limit of limits) {
    describe(`quando for limit = ${limit}`, () => {
      it('deve retornar um array vazio', () => {
        const result = extractFromWithSafeMode('abc', limit);

        expect(result).toEqual([]);
      });
    });
  }
});
