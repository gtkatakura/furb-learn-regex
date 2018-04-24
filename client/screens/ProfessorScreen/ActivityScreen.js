import React, { Fragment } from 'react';

import ActivityNavigator from 'containers/activities/Navigator';
import ActivityForm from 'containers/activities/Form';

const ExerciseScreen = () => (
  <Fragment>
    <ActivityNavigator />
    <ActivityForm />
  </Fragment>
);

export default ExerciseScreen;
