import React from 'react';
import { Field as FieldBase } from 'redux-form';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const render = ({
  copyToClipboard,
  className,
  input,
  label,
  placeholder = label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label className="form-control-label">{label}</label>
    <div className="input-group">
      <span
        className={['form-control', touched && error ? 'is-invalid' : '', className].join(' ')}
        placeholder={placeholder}
        {...input}
      >
        {input.value}
      </span>
      <div className="input-group-append">
        <CopyToClipboard text={copyToClipboard(input.value)}>
          <button type="button" className="input-group-text">COPIAR</button>
        </CopyToClipboard>
      </div>
    </div>
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
