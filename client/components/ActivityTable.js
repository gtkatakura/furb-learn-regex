import React from 'react';
import Link from './Link';

import ResourceTable from './ResourceTable';

const ActivityTable = ({ withLink = false, ...props }) => (
  <ResourceTable
    render={activity => (
      <th>
        <Link to={`/professor/atividades/${activity.name}`} disabled={!withLink}>
          {activity.name}
        </Link>
      </th>
    )}
    {...props}
  >
    <th>Nome</th>
  </ResourceTable>
);

export default ActivityTable;
