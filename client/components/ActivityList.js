import React from 'react';

import ResourceList from './ResourceList';
import ActivityTable from './ActivityTable';

const ActivityList = ({ onDestroy, activities }) => (
  <ResourceList
    newLink="/professor/atividades/criar"
    component={ActivityTable}
    collection={activities}
    onDestroy={onDestroy}
  />
);

export default ActivityList;
