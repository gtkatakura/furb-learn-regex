import React, { Fragment } from 'react';

import ExerciseNavigator from 'containers/exercises/Navigator';
import ExerciseForm from 'containers/exercises/Form';

const ExerciseScreen = () => (
  <Fragment>
    <ExerciseNavigator />
    <ExerciseForm />
  </Fragment>
);

export default ExerciseScreen;
