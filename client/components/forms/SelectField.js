import React from 'react';
import { Field as FieldBase } from 'redux-form';

const render = ({ children, className, input, label, placeholder = label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="form-control-label">{label}</label>
    <select
      className={['form-control', touched && error ? 'is-invalid' : '', className].join(' ')}
      {...input}
      {...{ children }}
    />
    <span className="invalid-feedback">{error}</span>
  </div>
);

const SelectField = props => (
  <FieldBase
    component={render}
    {...props}
  />
);

export default SelectField;
