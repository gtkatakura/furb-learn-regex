import React from 'react';
import { FieldArray } from 'redux-form';
import { TextField } from 'components/forms';
import { required } from 'validations';

import ExerciseSteps from './ExerciseSteps';

const ExerciseForm = ({ onSubmit, submitting }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <form onSubmit={onSubmit}>
          <TextField
            name="description"
            label="Descrição"
            validate={required}
          />
          <TextField
            name="regularExpression"
            label="Expressão Regular"
            validate={required}
          />
          <FieldArray name="steps" component={ExerciseSteps} />
          <button type="submit" className="btn btn-primary float-right" disabled={submitting}>Salvar</button>
        </form>
      </div>
    </div>
  </div>
);

export default ExerciseForm;
