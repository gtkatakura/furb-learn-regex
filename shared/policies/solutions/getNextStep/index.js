const getNextStep = ({
  exercise: { steps },
  currentStep,
}) => {
  const currentStepIndexOf = steps.findIndex(step => step.limit === currentStep.limit);
  const nextStep = currentStepIndexOf !== -1
    ? steps[currentStepIndexOf + 1]
    : null;

  return nextStep || null;
};

module.exports = getNextStep;
