import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash/fp';

const getInitials = _.flow(
  _.split(' '),
  _.map(_.first),
  _.join(''),
);

const Menu = ({ logout, userName }) => (
  <nav className="navbar navbar-expand-md  navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/minhas-atividades">
        <b>Learn Regex</b>
      </Link>
      <div className="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/professor/turmas">
              Professor
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/minhas-atividades">
              Minhas Atividades
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/" onClick={logout}>
              <i className="fa d-inline fa-lg fa-user-circle-o" />
              <span>{getInitials(userName)}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
