const isValid = require('../isValid');

const getNextStep = ({
  exercise,
  currentStep,
  solution,
}) => {
  if (isValid(exercise, solution)) {
    return null;
  }

  const currentStepIndexOf = exercise.steps.findIndex(step => step.limit === currentStep.limit);
  const nextStep = currentStepIndexOf !== -1
    ? exercise.steps[currentStepIndexOf + 1]
    : null;

  return nextStep || { limit: currentStep.limit + 1 };
};

module.exports = getNextStep;
