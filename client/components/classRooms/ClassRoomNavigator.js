import React from 'react';
import { Link } from 'react-router';

const ClassRoomNavigator = ({ classRoomName }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/professor/turmas" href="/professor/turmas">Turmas</Link>
            </li>
            <li className="breadcrumb-item active">{classRoomName}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ClassRoomNavigator;
