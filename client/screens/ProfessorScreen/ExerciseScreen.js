import React, { Fragment } from 'react';
import { Link } from 'react-router';
import ExerciseForm from '../../containers/ExerciseForm';

const ExerciseScreen = () => (
  <Fragment>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/professor/exercicios" href="/professor/exercicios">Exercícios</Link>
              </li>
              <li className="breadcrumb-item active">Novo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ExerciseForm />
  </Fragment>
);

export default ExerciseScreen;
