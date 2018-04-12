import React, { Fragment } from 'react';

import ActivityNavigator from 'containers/activities/ActivityNavigator';
import ActivityForm from 'containers/activities/ActivityForm';

const ExerciseScreen = () => (
  <Fragment>
    <ActivityNavigator />
    <ActivityForm />
  </Fragment>
);

export default ExerciseScreen;
