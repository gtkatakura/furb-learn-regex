import React from 'react';
import ResourceTable from 'components/ResourceTable';
import Link from 'components/Link';

const ActivityTable = ({ withLink = false, ...props }) => (
  <ResourceTable
    render={activity => (
      <th>
        <Link to={`/professor/atividades/${encodeURIComponent(activity.name)}`} disabled={!withLink}>
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
