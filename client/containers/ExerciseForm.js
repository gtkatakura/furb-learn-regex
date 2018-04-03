import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { create } from '../actions/exercises';

import ExerciseForm from '../components/ExerciseForm';

const ExerciseFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ExerciseForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
}, dispatch);

export default reduxForm({
  form: 'exercise',
})(connect(null, mapDispatchToProps)(ExerciseFormContainer));
