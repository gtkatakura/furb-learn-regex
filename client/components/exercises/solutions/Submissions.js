import React, { Fragment } from 'react';
import ResourceTable from 'components/ResourceTable';

const Submissions = ({ ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <ResourceTable
          render={resource => (
            <Fragment>
              <td>{resource.student.name}</td>
              <td>{resource.ocorrences}</td>
            </Fragment>
          )}
          withCreatedAt={false}
          {...props}
        >
          <th>Estudante</th>
          <th style={{ width: '200px' }}>Ocorrências</th>
        </ResourceTable>
      </div>
    </div>
  </div>
);

export default Submissions;
