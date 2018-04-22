import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

const DangerButton = ({ className, ...props }) => (
  <Button
    className={classNames('btn-danger', className)}
    {...props}
  />
);

DangerButton.propTypes = {
  className: PropTypes.string,
};

DangerButton.defaultProps = {
  className: '',
};

export default DangerButton;
