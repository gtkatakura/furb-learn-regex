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
  const nextStep = exercise.steps[currentStepIndexOf + 1];

  return nextStep;
};

module.exports = getNextStep;
