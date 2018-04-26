import { connect } from 'react-redux';

import ResolutionForm from 'components/student/exercises/ResolutionForm';
import fetchCurrentStep from 'actions/student/resolutions/fetchCurrentStep';

const mapStateToProps = (state, { params: { exerciseId } }) => ({
  exerciseId,
  currentStep: state.resolution.payload && state.resolution.payload.currentStep,
});

const mapDispatchToProps = dispatch => ({
  onMount: ({ exerciseId }) => fetchCurrentStep(exerciseId)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResolutionForm);
