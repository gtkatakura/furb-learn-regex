const { expect } = require('chai');

const getNextStep = require('./index');

describe('policies/solutions/getNextStep', () => {
  const step1 = { limit: 3 };
  const step2 = { limit: 5 };
  const step3 = { limit: 7 };

  const exercise = {
    regularExpression: '(a|b)*bb(a|b)*',
    steps: [
      step1,
      step2,
      step3,
    ],
  };

  describe('quando a solucao valida todos os niveis', () => {
    const currentStep = step1;
    const solution = '(a|b)*bb(a|b)*';

    it('deve retornar null', () => {
      expect(getNextStep({ exercise, currentStep, solution })).to.eql(null);
    });
  });

  describe('quando a solucao valida somente o primeiro nivel', () => {
    const currentStep = step1;
    const solution = 'bb|abb|bba|bbb';

    it('deve retornar o segundo nivel', () => {
      expect(getNextStep({ exercise, currentStep, solution })).to.eql(step2);
    });
  });
});
