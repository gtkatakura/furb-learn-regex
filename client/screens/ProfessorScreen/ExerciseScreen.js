import React, { Fragment } from 'react';

import ExerciseNavigator from 'containers/exercises/Navigator';
import ExercisePieceOfScreen from 'components/exercises/Screen';

const ExerciseScreen = () => (
  <Fragment>
    <ExerciseNavigator />
    <ExercisePieceOfScreen />
  </Fragment>
);

export default ExerciseScreen;
