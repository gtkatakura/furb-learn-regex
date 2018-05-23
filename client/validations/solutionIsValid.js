import { toRegex } from 'regex';

const getAllLetters = text => [...text.matchAll(/[a-z]/)].map(([letter]) => letter);

const solutionIsValid = currentStep => solution => {
  const lettersFromSolution = getAllLetters(solution || '');

  if (lettersFromSolution.some(letter => !currentStep.symbols.includes(letter))) {
    return 'A expressão regular especificada usa símbolos que não pertencem ao alfabeto da linguagem';
  }

  const allInvalid = currentStep.words.invalids.every(
    words => words.split(' ').every(word => !toRegex(solution).test(word)),
  );

  if (!allInvalid) {
    return 'Algumas palavras inválidas foram capturadas pela expressão regular';
  }

  const allValid = currentStep.words.valids.every(
    words => words.split(' ').every(word => toRegex(solution).test(word)),
  );

  if (!allValid) {
    return 'Algumas palavras válidas não foram capturadas pela expressão regular';
  }

  return undefined;
};

export default solutionIsValid;
