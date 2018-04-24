import React from 'react';
import ResourceList from 'components/ResourceList';

import ExerciseTable from './Table';

const ExerciseList = ({ ...props }) => (
  <ResourceList
    newLink="/professor/exercicios/criar"
    component={ExerciseTable}
    {...props}
  />
);

export default ExerciseList;
