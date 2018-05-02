import { toRegex } from 'regex';

const solutionIsValid = currentStep => regularExpression => {
  const allInvalid = currentStep.words.invalids.every(
    words => words.split(' ').every(word => !toRegex(regularExpression).test(word)),
  );

  if (!allInvalid) {
    return 'Algumas palavras inválidas foram capturadas pela expressão regular';
  }

  const allValid = currentStep.words.valids.every(
    words => words.split(' ').every(word => toRegex(regularExpression).test(word)),
  );

  if (!allValid) {
    return 'Algumas palavras válidas não foram capturadas pela expressão regular';
  }

  return undefined;
};

export default solutionIsValid;
