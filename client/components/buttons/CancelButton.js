import React from 'react';
import PropTypes from 'prop-types';

import SecondaryButton from './SecondaryButton';

const CancelButton = ({ ...props }) => (
  <SecondaryButton {...props} />
);

CancelButton.propTypes = {
  children: PropTypes.string,
};

CancelButton.defaultProps = {
  children: 'Cancelar',
};

export default CancelButton;
