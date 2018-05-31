import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const StudentNavigator = ({ classRoomName, student, classwork }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/professor/turmas">Turmas</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/professor/turmas/${classRoomName}`}>
                {classRoomName}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/professor/turmas/${classRoomName}#estudantes`}>
                Estudantes
              </Link>
            </li>
            <li className="breadcrumb-item active">
              {student.user.name}
            </li>
            <li className="breadcrumb-item active">
              Tarefas
            </li>
            <li className="breadcrumb-item active">
              {classwork.activity.name} - {moment(classwork.deadline).isSameOrAfter(moment(), 'day') ? 'Prazo' : 'Encerrado em'}
              {' '}{moment(classwork.deadline).format('L')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default StudentNavigator;
