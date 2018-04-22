import React from 'react';
import PropTypes from 'prop-types';

import DangerButton from './DangerButton';

const DeleteButton = ({ ...props }) => (
  <DangerButton {...props} />
);

DeleteButton.propTypes = {
  children: PropTypes.string,
};

DeleteButton.defaultProps = {
  children: 'Excluir',
};

export default DeleteButton;
