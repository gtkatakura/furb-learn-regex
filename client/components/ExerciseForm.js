import React from 'react';
import { FieldArray } from 'redux-form';

import { TextField } from '../components/forms';
import { required } from '../validations';

import ExerciseSteps from './ExerciseSteps';

const ExerciseForm = ({ onSubmit, onDestroyClick, submitting, initialValues }) => (
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
          <div className="float-right">
            {initialValues._id && <button type="button" className="btn btn-danger mr-1" onClick={() => onDestroyClick(initialValues)}>Excluir</button>}
            <button type="submit" className="btn btn-primary" disabled={submitting}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ExerciseForm;
