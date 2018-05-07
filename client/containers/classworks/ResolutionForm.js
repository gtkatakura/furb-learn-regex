import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import _ from 'lodash';

import ResolutionForm from 'components/student/exercises/ResolutionForm';
import fetchCurrentStep from 'actions/student/resolutions/fetchCurrentStep';
import create from 'actions/student/resolutions/create';

const ResolutionFormContainer = ({ exerciseId, onSubmit, handleSubmit, ...props }) => (
  <ResolutionForm
    exerciseId={exerciseId}
    onSubmit={handleSubmit(values => {
      const newValues = _.assign({ exerciseId }, values);
      return onSubmit(newValues);
    })}
    {...props}
  />
);

const mapStateToProps = (state, { params: { exerciseId } }) => ({
  exerciseId,
  currentStep: state.resolution.payload && state.resolution.payload.currentStep,
});

const mapDispatchToProps = dispatch => ({
  onMount: ({ exerciseId }) => fetchCurrentStep(exerciseId)(dispatch),
  onSubmit: values => create(values)(dispatch),
});

export default _.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'resolution' }),
)(ResolutionFormContainer);
