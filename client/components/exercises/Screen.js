import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';
import { Nav, NavItem } from 'reactstrap';

import ExerciseForm from 'containers/exercises/Form';
import Solutions from './Solutions';
import Activities from './Activities';

const ExerciseScreen = ({ location: { hash, pathname } }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 pt-1">
        <Nav tabs>
          <NavItem
            className={classNames('nav-link', {
              active: hash === '',
            })}
          >
            <Link to={pathname}>
              Informações
            </Link>
          </NavItem>
          <NavItem
            className={classNames('nav-link', {
              active: hash === '#atividades',
            })}
          >
            <Link to={`${pathname}#atividades`}>
              Atividades
            </Link>
          </NavItem>
          <NavItem
            className={classNames('nav-link', {
              active: hash === '#solucoes',
            })}
          >
            <Link to={`${pathname}#solucoes`}>
              Soluções
            </Link>
          </NavItem>
        </Nav>
        <div style={{ display: hash !== '' ? 'none' : 'block' }}>
          <ExerciseForm />
        </div>
        <div style={{ display: hash !== '#atividades' ? 'none' : 'block' }}>
          <Activities />
        </div>
        <div style={{ display: hash !== '#solucoes' ? 'none' : 'block' }}>
          <Solutions />
        </div>
      </div>
    </div>
  </div>
);


export default withRouter(ExerciseScreen);
