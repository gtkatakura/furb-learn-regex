import React, { Fragment } from 'react';
import classNames from 'classnames';
import ResourceTable from 'components/ResourceTable';

const Submissions = ({ ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <ResourceTable
          render={resource => {
            const className = classNames({
              'text-success': resource.status === 'Concluída',
              'text-danger': resource.status === 'Em andamento',
            });

            return (
              <Fragment>
                <td className={className}>{resource.exercise.description}</td>
                <td className={className}>{resource.lastSolution}</td>
              </Fragment>
            );
          }}
          withCreatedAt={false}
          {...props}
        >
          <th>Exercício</th>
          <th style={{ width: '300px' }}>Última Resposta</th>
        </ResourceTable>
      </div>
    </div>
  </div>
);

export default Submissions;
