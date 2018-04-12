import React, { Fragment } from 'react';
import moment from 'moment';

import ResourceTable from 'components/ResourceTable';

const ClassworkTable = ({ ...props }) => (
  <ResourceTable
    withCreatedAt={false}
    render={classwork => (
      <Fragment>
        <td>
          {moment(classwork.deadline).calendar()}
        </td>
      </Fragment>
    )}
    {...props}
  >
    <th>Prazo de Entrega</th>
  </ResourceTable>
);

export default ClassworkTable;
