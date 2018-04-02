import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import Login from '../components/Login';

const Root = ({ logged, children }) => (
  logged ? (
    <Fragment>
      <Menu />
      {children}
    </Fragment>
  ) : (
    <Login />
  )
);

const mapStateToProps = state => ({
  logged: !!state.user.name,
});

export default connect(
  mapStateToProps,
  null,
)(Root);
