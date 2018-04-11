import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ ...props }) => (
  <button
    type="button"
    className="btn btn-danger mb-2"
    {...props}
  />
);

DeleteButton.propTypes = {
  children: PropTypes.string,
};

DeleteButton.defaultProps = {
  children: 'Excluir',
};

export default DeleteButton;
