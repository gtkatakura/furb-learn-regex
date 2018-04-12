import React from 'react';
import ResourceList from 'components/ResourceList';

import ClassRoomTable from './ClassRoomTable';

const ClassRoomList = ({ ...props }) => (
  <ResourceList
    newLink="/professor/turmas/criar"
    component={ClassRoomTable}
    {...props}
  />
);

export default ClassRoomList;
