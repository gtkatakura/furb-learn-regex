import React from 'react';
import { FieldArray } from 'redux-form';
import { Form, TextField } from 'components/forms';
import { required } from 'validations';
import { SaveButton } from 'components/buttons';

import ExerciseSteps from './Steps';
import RegularExpressionField from './RegularExpressionField';

const ExerciseForm = ({ submitting, ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <Form {...props}>
          <SaveButton type="submit" className="mb-2" disabled={submitting} />
          <TextField
            name="description"
            label="Descrição"
            validate={required}
          />
          <RegularExpressionField
            name="regularExpression"
            label="Expressão Regular"
          />
          <FieldArray name="steps" component={ExerciseSteps} />
        </Form>
      </div>
    </div>
  </div>
);

export default ExerciseForm;
