import React, { Fragment } from 'react';
import moment from 'moment';

import Link from 'components/Link';
import ResourceTable from 'components/ResourceTable';

const ClassworkTable = ({ ...props }) => (
  <ResourceTable
    withCreatedAt={false}
    render={classwork => (
      <Fragment>
        <th>
          <Link to={`/professor/atividades/${encodeURIComponent(classwork.activity.name)}`}>
            {classwork.activity.name}
          </Link>
        </th>
        <td>
          {moment(classwork.deadline).format('L')}
        </td>
      </Fragment>
    )}
    {...props}
  >
    <th>Descrição</th>
    <th style={{ width: '200px' }}>Prazo de Entrega</th>
  </ResourceTable>
);

export default ClassworkTable;
