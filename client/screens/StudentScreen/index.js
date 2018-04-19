import React, { Fragment } from 'react';

const StudentPanel = ({ children }) => (
  <Fragment>
    <div className="py-2 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Minhas Atividades</h1>
          </div>
        </div>
      </div>
    </div>
    {children}
  </Fragment>
);

export default StudentPanel;
