import React from 'react';
import { Link } from 'react-router';

const SolutionNavigator = ({ exerciseId, exerciseDescription, solution }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/professor/exercicios">Exercícios</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/professor/exercicios/${exerciseId}`}>
                {exerciseDescription}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/professor/exercicios/${exerciseId}#solucoes`}>
                Soluções
              </Link>
            </li>
            <li className="breadcrumb-item active">
              {solution}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SolutionNavigator;
