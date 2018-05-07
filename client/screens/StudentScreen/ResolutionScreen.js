import React, { Fragment } from 'react';

import ResolutionNavigator from 'containers/student/resolutions/Navigator';
import ResolutionForm from 'containers/classworks/ResolutionForm';

const ResolutionScreen = () => (
  <Fragment>
    <ResolutionNavigator />
    <ResolutionForm />
  </Fragment>
);

export default ResolutionScreen;
