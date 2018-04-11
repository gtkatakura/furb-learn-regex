import React from 'react';
import ResourceList from 'components/ResourceList';

import ExerciseTable from './ExerciseTable';

const ExerciseList = ({ ...props }) => (
  <ResourceList
    newLink="/professor/exercicios/criar"
    component={ExerciseTable}
    {...props}
  />
);

export default ExerciseList;
