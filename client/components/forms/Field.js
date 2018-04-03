import React from 'react';
import { Field as FieldBase } from 'redux-form';

const render = ({ input, label, placeholder = label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="form-control-label">{label}</label>
    <input
      className={['form-control', touched && error ? 'is-invalid' : ''].join(' ')}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    <span className="invalid-feedback">{error}</span>
  </div>
);

const Field = props => (
  <FieldBase
    component={render}
    {...props}
  />
);

export default Field;
