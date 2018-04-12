import React, { Fragment } from 'react';
import ResourceTable from 'components/ResourceTable';
import Link from 'components/Link';

const ExerciseTable = ({ withLink = false, ...props }) => (
  <ResourceTable
    render={resource => (
      <Fragment>
        <th scope="row">
          <Link to={`/professor/exercicios/${encodeURIComponent(resource.description)}`} disabled={!withLink}>
            {resource.description}
          </Link>
        </th>
        <td>{resource.regularExpression}</td>
      </Fragment>
    )}
    {...props}
  >
    <th>Descrição</th>
    <th style={{ width: '200px' }}>Expressão Regular</th>
  </ResourceTable>
);

export default ExerciseTable;
