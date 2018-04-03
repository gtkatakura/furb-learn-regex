import React from 'react';
import { TextField } from '../components/forms';
import { required } from '../validations';

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
          <button type="submit" className="btn btn-primary float-right" disabled={submitting}>Salvar</button>
        </form>
      </div>
    </div>
  </div>
);

export default ExerciseForm;
