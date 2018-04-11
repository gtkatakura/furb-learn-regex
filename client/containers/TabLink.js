import React from 'react';
import { withRouter } from 'react-router';
import TabLink from 'components/TabLink';

const TabLinkContainer = ({ location: { pathname }, to, ...props }) => {
  const active = pathname.startsWith(to);

  return <TabLink active={active} to={to} {...props} />;
};

export default withRouter(TabLinkContainer);
