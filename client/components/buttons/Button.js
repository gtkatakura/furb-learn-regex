import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withRedirectTo from 'util/withRedirectTo';

const Button = ({ children, className, ...props }) => (
  <button
    type="button"
    className={classNames('btn', className)}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default withRedirectTo(Button);
