import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../containers/Menu';
import Login from '../../components/Login';

const Root = ({ logged, children }) => (
  logged ? (
    <Fragment>
      <Menu />
      <ToastContainer />
      {children}
    </Fragment>
  ) : (
    <Login />
  )
);

const mapStateToProps = state => ({
  logged: !!state.user.name,
});

export default connect(mapStateToProps, null)(Root);
