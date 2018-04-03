import React, { Fragment } from 'react';

const ProfessorPanel = ({ children }) => (
  <Fragment>
    <div className="py-2 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Painel do Professor</h1>
          </div>
        </div>
      </div>
    </div>
    {children}
  </Fragment>
);

export default ProfessorPanel;
