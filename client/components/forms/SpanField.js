import React from 'react';
import { Field as FieldBase } from 'redux-form';

const render = ({ className, input, label, placeholder = label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="form-control-label">{label}</label>
    <span
      className={['form-control', touched && error ? 'is-invalid' : '', className].join(' ')}
      placeholder={placeholder}
      {...input}
    >
      {input.value}
    </span>
    <span className="invalid-feedback">{error}</span>
  </div>
);

const SpanField = props => (
  <FieldBase
    component={render}
    {...props}
  />
);

export default SpanField;
