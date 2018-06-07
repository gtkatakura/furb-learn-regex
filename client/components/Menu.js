import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash/fp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';

const getInitials = _.flow(
  _.split(' '),
  _.map(_.first),
  _.join(''),
);

const Menu = ({ logout, user }) => (
  <nav className="navbar navbar-expand-md  navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/minhas-atividades/em-andamento">
        <b>Learn Regex</b>
      </Link>
      <button type="button" className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarLightSupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
        <ul className="navbar-nav">
          {user.isProfessor && (
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/professor/turmas">
                Professor
              </Link>
            </li>)
          }
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/minhas-atividades/em-andamento">
              Minhas Atividades
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/minhas-informacoes">
              <FontAwesomeIcon
                className="fa d-inline fa-lg"
                icon={faUserCircle}
              />
              <span>{` ${getInitials(user.name)}`}</span>
            </Link>
          </li>
          <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ paddingTop: '12px' }}
              >
                <span>
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    onClick={logout}
                    style={{ cursor: 'pointer' }}
                  />
                </span>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
