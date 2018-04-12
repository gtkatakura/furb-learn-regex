import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import ActivityForm from 'components/activities/ActivityForm';
import getCurrentActivity from 'selectors/getCurrentActivity';
import { create } from 'actions/activities';

const ActivityFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ActivityForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentActivity(...args) || {},
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'activity' }),
)(ActivityFormContainer);
