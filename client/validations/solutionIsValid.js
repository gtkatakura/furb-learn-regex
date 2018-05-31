import { toRegex } from 'regex';
import symbolParser from 'regex/symbols/parser';

const solutionIsValid = currentStep => solution => {
  if (solution) {
    const lettersFromSolution = symbolParser.parse(solution);

    if (lettersFromSolution.some(letter => !currentStep.symbols.includes(letter))) {
      return 'A expressão regular especificada usa símbolos que não pertencem ao alfabeto da linguagem';
    }
  }

  const allInvalid = currentStep.words.invalids.every(
    words => words.every(word => !toRegex(solution).test(word)),
  );

  if (!allInvalid) {
    return 'Algumas palavras inválidas foram capturadas pela expressão regular';
  }

  const allValid = currentStep.words.valids.every(
    words => words.every(word => toRegex(solution).test(word)),
  );

  if (!allValid) {
    return 'Algumas palavras válidas não foram capturadas pela expressão regular';
  }

  return undefined;
};

export default solutionIsValid;
