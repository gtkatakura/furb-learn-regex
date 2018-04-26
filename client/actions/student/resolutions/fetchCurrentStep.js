import WebApi from 'services/WebApi';

const fetchCurrentStep = exerciseId => async dispatch => {
  dispatch({ type: 'RESOLUTION_FETCH_REQUESTED' });

  const currentStep = await new WebApi(`/api/student/me/exercises/${exerciseId}/currentStep`).all();

  dispatch({ type: 'RESOLUTION_FETCH_SUCCEEDED', payload: { currentStep } });
};

export default fetchCurrentStep;
