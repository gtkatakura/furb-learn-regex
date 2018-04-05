import React from 'react';
import { Link } from 'react-router';

const ActivityNavigator = ({ activityName }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/professor/atividades" href="/professor/atividades">Atividades</Link>
            </li>
            <li className="breadcrumb-item active">{activityName}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ActivityNavigator;
