import React from 'react';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router';
import { Nav, NavItem } from 'reactstrap';

import ClassRoomForm from 'containers/classRooms/Form';
import ClassworkAnswers from './ClassworkAnswers';

const ClassRoomScreen = ({ location: { hash, pathname } }) => (
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
              active: hash === '#estudantes',
            })}
          >
            <Link to={`${pathname}#estudantes`}>
              Estudantes
            </Link>
          </NavItem>
        </Nav>
        <div style={{ display: hash !== '' ? 'none' : 'block' }}>
          <ClassRoomForm />
        </div>
        <div style={{ display: hash !== '#estudantes' ? 'none' : 'block' }}>
          <ClassworkAnswers />
        </div>
      </div>
    </div>
  </div>
);


export default withRouter(ClassRoomScreen);
