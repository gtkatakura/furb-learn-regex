import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';

const SaveButton = ({ ...props }) => (
  <PrimaryButton {...props} />
);

SaveButton.propTypes = {
  children: PropTypes.string,
};

SaveButton.defaultProps = {
  children: 'Salvar',
};

export default SaveButton;
