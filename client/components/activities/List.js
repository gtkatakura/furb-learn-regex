import React from 'react';

import ResourceList from 'components/ResourceList';
import ActivityTable from './Table';

const ActivityList = ({ ...props }) => (
  <ResourceList
    newLink="/professor/atividades/criar"
    component={ActivityTable}
    {...props}
  />
);

export default ActivityList;
