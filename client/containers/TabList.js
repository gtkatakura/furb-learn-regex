import React from 'react';
import { withRouter } from 'react-router';
import TabList from '../components/TabList';

const TabListContainer = ({ location: { pathname }, children, ...props }) => {
  const ActiveTab = children.find(child => pathname.startsWith(child.props.to)) || children[0];

  return (
    <TabList activeTab={ActiveTab.props.to} {...props}>
      {children}
    </TabList>
  );
};

export default withRouter(TabListContainer);
