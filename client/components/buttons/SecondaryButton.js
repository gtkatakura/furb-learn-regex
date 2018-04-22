import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

const SecondaryButton = ({ className, ...props }) => (
  <Button
    className={classNames('btn-secondary', className)}
    {...props}
  />
);

SecondaryButton.propTypes = {
  className: PropTypes.string,
};

SecondaryButton.defaultProps = {
  className: '',
};

export default SecondaryButton;
