import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import ClassRoomForm from 'components/classRooms/ClassRoomForm';
import getCurrentClassRoom from 'selectors/getCurrentClassRoom';
import { create, destroy } from 'actions/classRooms';

const ClassRoomFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ClassRoomForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentClassRoom(...args) || {},
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: create,
  onDestroyClick: destroy,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'classRoom' }),
)(ClassRoomFormContainer);
