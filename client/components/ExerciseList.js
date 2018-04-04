import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const ExerciseList = ({ exercises }) => (
  <div>
    <Link className="btn btn-outline-dark m-2" to="/professor/exercicios/criar">Criar</Link>
    <div className="col-md-12 p-3">
      <table className="table table-hover table-striped table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Expressão Regular</th>
            <th scope="col">Criado</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, key) => (
            <tr key={key.toString()}>
              <th scope="row">
                <Link to={`/professor/exercicios/${exercise.description}`}>
                  {exercise.description}
                </Link>
              </th>
              <td>{exercise.regularExpression}</td>
              <td>{moment(exercise.createdAt).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ExerciseList;
