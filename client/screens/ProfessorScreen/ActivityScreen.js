import React, { Fragment } from 'react';

import ActivityNavigator from 'containers/ActivityNavigator';
import ActivityForm from 'containers/ActivityForm';

const ExerciseScreen = () => (
  <Fragment>
    <ActivityNavigator />
    <ActivityForm />
  </Fragment>
);

export default ExerciseScreen;
