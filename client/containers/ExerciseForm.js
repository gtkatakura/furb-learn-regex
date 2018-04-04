import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { create } from '../actions/exercises';

import ExerciseForm from '../components/ExerciseForm';

const ExerciseFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ExerciseForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (state, { params }) => ({
  initialValues: state.exercise.entities.find(exercise => exercise.description === params.description),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'exercise',
  })(ExerciseFormContainer)
));
