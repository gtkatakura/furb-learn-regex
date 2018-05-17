import React from 'react';
import { TextField } from 'components/forms';
import { regex, required } from 'validations';

const RegularExpressionField = ({ ...props }) => (
  <TextField
    validate={[required, regex]}
    {...props}
  />
);

export default RegularExpressionField;
