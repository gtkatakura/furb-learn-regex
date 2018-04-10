import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import TableBody from './TableBody';

const ExerciseTable = ({ withLink = false, onSelecteds = () => {}, exercises }) => (
  <table className="table table-hover table-striped table-bordered">
    <thead className="thead-inverse">
      <tr>
        <th scope="col" className="text-center">#</th>
        <th scope="col">Descrição</th>
        <th scope="col">Expressão Regular</th>
        <th scope="col">Criado</th>
      </tr>
    </thead>
    <TableBody
      onSelecteds={onSelecteds}
      elementKey={exercise => exercise._id}
      collection={exercises}
      render={exercise => ([
        <th scope="row">
          {withLink ? (
            <Link to={`/professor/exercicios/${exercise.description}`}>
              {exercise.description}
            </Link>
          ) : exercise.description}
        </th>,
        <td>{exercise.regularExpression}</td>,
        <td>{moment(exercise.createdAt).fromNow()}</td>,
      ])}
    />
  </table>
);

export default ExerciseTable;
