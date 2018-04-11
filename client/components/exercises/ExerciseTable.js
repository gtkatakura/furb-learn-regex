import React, { Fragment } from 'react';
import Link from '../Link';

import ResourceTable from '../ResourceTable';

const ActivityTable = ({ withLink = false, ...props }) => (
  <ResourceTable
    render={activity => (
      <Fragment>
        <th scope="row">
          <Link to={`/professor/exercicios/${activity.description}`} disabled={!withLink}>
            {activity.description}
          </Link>
        </th>
        <td>{activity.regularExpression}</td>
      </Fragment>
    )}
    {...props}
  >
    <th>Descrição</th>
    <th style={{ width: '200px' }}>Expressão Regular</th>
  </ResourceTable>
);

export default ActivityTable;
