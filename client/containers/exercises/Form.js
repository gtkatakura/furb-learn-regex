import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import ExerciseForm from 'components/exercises/Form';
import getCurrentExerciseOrDefault from 'selectors/getCurrentExerciseOrDefault';
import { save } from 'actions/professor/exercises';

const ExerciseFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ExerciseForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentExerciseOrDefault(...args),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: save,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'exercise' }),
)(ExerciseFormContainer);
