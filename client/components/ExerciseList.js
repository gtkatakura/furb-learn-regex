import React from 'react';

import ResourceList from './ResourceList';
import ExerciseTable from './ExerciseTable';

const ExerciseList = ({ onDestroy, exercises }) => (
  <ResourceList
    newLink="/professor/exercicios/criar"
    component={ExerciseTable}
    collection={exercises}
    onDestroy={onDestroy}
  />
);

export default ExerciseList;
