import React from 'react';
import { Link } from 'react-router';
import { NavItem } from 'reactstrap';

const TabLink = ({ children, to, active }) => {
  const className = active ? 'active' : null;

  return (
    <NavItem>
      <Link className={['nav-link', className].join(' ')} to={to} href={to}>
        {children}
      </Link>
    </NavItem>
  );
};

export default TabLink;
