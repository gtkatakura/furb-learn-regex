import React, { Fragment } from 'react';
import { Nav } from 'reactstrap';

const TabList = ({ children, activeTab }) => {
  const ActivedChild = children.find(child => child.props.to === activeTab);
  const ActivedComponent = ActivedChild.props.component;

  return (
    <Fragment>
      <Nav tabs>
        {children}
      </Nav>
      <ActivedComponent />
    </Fragment>
  );
};

export default TabList;
