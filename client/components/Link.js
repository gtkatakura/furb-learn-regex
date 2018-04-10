import React from 'react';
import { Link as Base } from 'react-router';

const Link = ({ to, disabled, ...props }) => (
  disabled
    ? <span {...props} />
    : <Base to={to} {...props} />
);

export default Link;
