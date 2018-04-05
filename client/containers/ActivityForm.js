import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { create, destroy } from '../actions/activities';

import ActivityForm from '../components/ActivityForm';
import getCurrentActivity from '../selectors/getCurrentActivity';

const ActivityFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ActivityForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentActivity(...args) || {},
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
  onDestroyClick: destroy,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'activity' }),
)(ActivityFormContainer);
