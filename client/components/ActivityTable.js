import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import TableBody from './TableBody';

const ActivityTable = ({ withLink = false, onSelecteds, collection }) => (
  <table className="table table-hover table-striped table-bordered">
    <thead className="thead-inverse">
      <tr>
        <th scope="col" className="text-center">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Criado</th>
      </tr>
    </thead>
    <TableBody
      onSelecteds={onSelecteds}
      elementKey={activity => activity._id}
      collection={collection}
      render={activity => ([
        <th scope="row">
          {withLink ? (
            <Link to={`/professor/atividades/${activity.name}`}>
              {activity.name}
            </Link>
          ) : activity.name}
        </th>,
        <td style={{ width: "15%" }}>{moment(activity.createdAt).fromNow()}</td>,
      ])}
    />
  </table>
);

export default ActivityTable;
