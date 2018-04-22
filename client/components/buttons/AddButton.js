import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';

const AddButton = ({ ...props }) => (
  <PrimaryButton {...props} />
);

AddButton.propTypes = {
  children: PropTypes.string,
};

AddButton.defaultProps = {
  children: 'Adicionar',
};

export default AddButton;
