import React from 'react';
import ResourceTable from 'components/ResourceTable';
import Link from 'components/Link';

const ClassRoomTable = ({ withLink = false, ...props }) => (
  <ResourceTable
    render={classRoom => (
      <th scope="row">
        <Link to={`/professor/turmas/${encodeURIComponent(classRoom.name)}`} disabled={!withLink}>
          {classRoom.name}
        </Link>
      </th>
    )}
    {...props}
  >
    <th>Nome</th>
  </ResourceTable>
);

export default ClassRoomTable;
