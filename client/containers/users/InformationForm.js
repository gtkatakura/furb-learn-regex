import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import UserInformationForm from 'components/users/InformationForm';
import save from 'actions/users/save';

const UserInformationFormContainer = ({ handleSubmit, onSubmit, ...props }) => (
  <UserInformationForm onSubmit={handleSubmit(onSubmit)} {...props} />
);

const mapStateToProps = (state) => ({
  initialValues: state.user,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => save(values)(dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'userInformation' }),
)(UserInformationFormContainer);
