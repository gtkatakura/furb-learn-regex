import React from 'react';
import { Link } from 'react-router';

import ExerciseTable from './ExerciseTable';

const ExerciseList = ({ exercises }) => (
  <div>
    <Link className="btn btn-outline-dark m-2" to="/professor/exercicios/criar">Criar</Link>
    <div className="col-md-12 p-3">
      <ExerciseTable withLink={true} exercises={exercises} />
    </div>
  </div>
);

export default ExerciseList;
