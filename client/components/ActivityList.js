import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const ActivityList = ({ activities }) => (
  <div>
    <Link className="btn btn-outline-dark m-2" to="/professor/atividades/criar">Criar</Link>
    <div className="col-md-12 p-3">
      <table className="table table-hover table-striped table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Criado</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index.toString()}>
              <th scope="row">
                <Link to={`/professor/atividades/${activity.name}`}>
                  {activity.name}
                </Link>
              </th>
              <td>{moment(activity.createdAt).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ActivityList;
