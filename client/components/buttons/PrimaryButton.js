import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

const PrimaryButton = ({ className, ...props }) => (
  <Button
    className={classNames('btn-primary', className)}
    {...props}
  />
);

PrimaryButton.propTypes = {
  className: PropTypes.string,
};

PrimaryButton.defaultProps = {
  className: '',
};

export default PrimaryButton;
