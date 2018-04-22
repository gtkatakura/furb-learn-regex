import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const withRedirectTo = WrappedComponent => {
  const wrapped = ({ redirectTo, ...props }) => (
    redirectTo
      ? <Link to={redirectTo}><WrappedComponent {...props} /></Link>
      : <WrappedComponent {...props} />
  );

  wrapped.propTypes = {
    redirectTo: PropTypes.string,
  };

  wrapped.defaultProps = {
    redirectTo: '',
  };

  return wrapped;
};

export default withRedirectTo;
