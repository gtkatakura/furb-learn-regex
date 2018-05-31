const detailsFrom = require('./index');

describe('shared/exercises/steps/detailsFrom', () => {
  const exercise = {
    regularExpression: 'ab',
  };

  it('should be a function', () => {
    const step = { limit: 1 };
    const result = detailsFrom({ exercise, step });

    expect(result).toEqual({
      symbols: ['a', 'b'],
      words: {
        valids: [],
        invalids: [
          [''],
          ['a', 'b'],
        ],
      },
    });
  });

  it('should be a function', () => {
    const step = { limit: 2 };
    const result = detailsFrom({ exercise, step });

    expect(result).toEqual({
      symbols: ['a', 'b'],
      words: {
        valids: [
          ['ab'],
        ],
        invalids: [
          [''],
          ['a', 'b'],
          ['aa', 'ba', 'bb'],
        ],
      },
    });
  });
});
