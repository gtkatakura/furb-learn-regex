import React, { Fragment } from 'react';
import moment from 'moment';

import ResourceTable from 'components/ResourceTable';

const ClassworkTable = ({ ...props }) => (
  <ResourceTable
    withCreatedAt={false}
    render={classwork => (
      <Fragment>
        <td>
          {classwork.activity.name}
        </td>
        <td>
          {moment(classwork.deadline).calendar()}
        </td>
      </Fragment>
    )}
    {...props}
  >
    <th>Atividade</th>
    <th style={{ width: '170px' }}>Prazo de Entrega</th>
  </ResourceTable>
);

export default ClassworkTable;
