import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { create, destroy } from '../actions/exercises';

import ExerciseForm from '../components/ExerciseForm';
import getCurrentExerciseOrDefault from '../selectors/getCurrentExerciseOrDefault';

const ExerciseFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ExerciseForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentExerciseOrDefault(...args),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
  onDestroyClick: destroy,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'exercise' }),
)(ExerciseFormContainer);
