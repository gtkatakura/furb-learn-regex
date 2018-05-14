import React from 'react';
import { Field as FieldBase } from 'redux-form';

const render = ({ className, input, label, placeholder = label, type, meta: { touched, error, warning } }) => (
  <div className="form-check">
    <input
      type="checkbox"
      className={['form-check-input', touched && error ? 'is-invalid' : '', className].join(' ')}
      placeholder={placeholder}
      {...input}
    />
    <label className="form-check-label">{label}</label>
    <span className="invalid-feedback">{error}</span>
  </div>
);

const CheckboxField = props => (
  <FieldBase
    component={render}
    {...props}
  />
);

export default CheckboxField;
