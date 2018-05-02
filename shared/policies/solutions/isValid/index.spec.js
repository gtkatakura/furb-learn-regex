const { expect } = require('chai');

const solutionIsValid = require('./index');

describe('policies/solutions/isValid', () => {
  const exercise = {
    regularExpression: '(a|b)*bb(a|b)*',
  };

  describe('quando a solução é exatamente resposta cadastrada', () => {
    it('deve retornar true', () => {
      const solution = '(a|b)*bb(a|b)*';

      expect(solutionIsValid(exercise, solution)).to.eql(true);
    });
  });

  describe('quando a solução é diferente da resposta', () => {
    it('deve retornar true', () => {
      const solution = '((b|a)+)?bb((b|a)+)?';

      expect(solutionIsValid(exercise, solution)).to.eql(true);
    });
  });

  describe('quando a solução é inválida', () => {
    it('deve retornar false', () => {
      const solution = '(a|b)*bb?(a|b)*';

      expect(solutionIsValid(exercise, solution)).to.eql(false);
    });
  });
});
