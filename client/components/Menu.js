import React from 'react';
import { Link } from 'react-router';

const Menu = ({ logout }) => (
  <nav className="navbar navbar-expand-md  navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/minhas-atividades">
        <b>Learn Regex</b>
      </Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarLightSupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/professor">
              Professor
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="minhas-atividades">
              Minhas Atividades
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/" onClick={logout}>
              <i className="fa d-inline fa-lg fa-user-circle-o" />&nbsp;GTK
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
