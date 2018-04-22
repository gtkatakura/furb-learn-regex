import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';

const CreateButton = ({ ...props }) => (
  <PrimaryButton {...props} />
);

CreateButton.propTypes = {
  children: PropTypes.string,
};

CreateButton.defaultProps = {
  children: 'Criar',
};

export default CreateButton;
