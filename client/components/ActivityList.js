import React from 'react';

import ResourceList from './ResourceList';
import ActivityTable from './ActivityTable';

const ActivityList = ({ ...props }) => (
  <ResourceList
    newLink="/professor/atividades/criar"
    component={ActivityTable}
    {...props}
  />
);

export default ActivityList;
