import React from 'react';
import { Field } from 'components/forms';
import { required } from 'validations';

const ClassworkForm = ({ onSubmit, submitting }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <form onSubmit={onSubmit}>
          <Field
            type="date"
            name="deadline"
            label="Prazo de Entrega"
            validate={required}
          />
        </form>
      </div>
    </div>
  </div>
);

export default ClassworkForm;
