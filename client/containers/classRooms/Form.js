import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import uuid from 'uuid/v4';

import ClassRoomForm from 'components/classRooms/Form';
import getCurrentClassRoom from 'selectors/getCurrentClassRoom';
import { save, destroy } from 'actions/professor/classRooms';

const ClassRoomFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <ClassRoomForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (...args) => ({
  initialValues: getCurrentClassRoom(...args) || {
    token: uuid(),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: save,
  onDestroyClick: destroy,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'classRoom' }),
)(ClassRoomFormContainer);
