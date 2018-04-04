import React, { Fragment } from 'react';

import ExerciseNavigator from '../../containers/ExerciseNavigator';
import ExerciseForm from '../../containers/ExerciseForm';

const ExerciseScreen = () => (
  <Fragment>
    <ExerciseNavigator />
    <ExerciseForm />
  </Fragment>
);

export default ExerciseScreen;
