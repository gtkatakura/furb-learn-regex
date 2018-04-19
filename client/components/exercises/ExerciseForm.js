import React from 'react';
import { FieldArray } from 'redux-form';
import { Form, TextField } from 'components/forms';
import { required } from 'validations';

import ExerciseSteps from './ExerciseSteps';

const ExerciseForm = ({ submitting, ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <Form {...props}>
        <button type="submit" className="btn btn-primary mb-2" disabled={submitting}>Salvar</button>
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
        </Form>
      </div>
    </div>
  </div>
);

export default ExerciseForm;
