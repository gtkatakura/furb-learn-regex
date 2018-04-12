import React from 'react';
import PropTypes from 'prop-types';
import { Link as Base } from 'react-router';

const Link = ({ disabled, ...props }) => (
  disabled
    ? <span {...props} />
    : <Base {...props} />
);

Link.propTypes = {
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  disabled: false,
};

export default Link;
