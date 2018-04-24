import React from 'react';
import { Link } from 'react-router';

const ExerciseNavigator = ({ exerciseDescription }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/professor/exercicios" href="/professor/exercicios">Exercícios</Link>
            </li>
            <li className="breadcrumb-item active">{exerciseDescription}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ExerciseNavigator;
