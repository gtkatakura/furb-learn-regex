import React, { Fragment } from 'react';
import ResourceTable from 'components/ResourceTable';
import Link from 'components/Link';

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
