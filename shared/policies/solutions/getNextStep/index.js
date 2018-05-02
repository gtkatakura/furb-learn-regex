const isValid = require('../isValid');

const getNextStep = ({
  exercise,
  currentStep,
  solution,
}) => {
  if (isValid(exercise, solution)) {
    return null;
  }

  const currentStepIndexOf = exercise.steps.indexOf(currentStep);
  const nextStep = exercise.steps[currentStepIndexOf + 1];

  return nextStep;
};

module.exports = getNextStep;
