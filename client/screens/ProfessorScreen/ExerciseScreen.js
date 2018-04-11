import React, { Fragment } from 'react';

import ExerciseNavigator from '../../containers/exercises/ExerciseNavigator';
import ExerciseForm from '../../containers/exercises/ExerciseForm';

const ExerciseScreen = () => (
  <Fragment>
    <ExerciseNavigator />
    <ExerciseForm />
  </Fragment>
);

export default ExerciseScreen;
