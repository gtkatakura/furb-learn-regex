import React, { Fragment } from 'react';

import SolutionNavigator from 'containers/exercises/solutions/Navigator';
import Submissions from 'containers/exercises/solutions/Submissions';

const SolutionScreen = () => (
  <Fragment>
    <SolutionNavigator />
    <Submissions />
  </Fragment>
);

export default SolutionScreen;
