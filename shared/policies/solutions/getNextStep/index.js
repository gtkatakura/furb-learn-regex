const getNextStep = ({
  exercise,
  currentStep,
}) => {
  const currentStepIndexOf = exercise.steps.findIndex(step => step.limit === currentStep.limit);
  const nextStep = currentStepIndexOf !== -1
    ? exercise.steps[currentStepIndexOf + 1]
    : null;

  return nextStep || null;
};

module.exports = getNextStep;
