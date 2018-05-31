import React, { Fragment } from 'react';

import StudentNavigator from 'containers/classRooms/students/Navigator';
import Submissions from 'containers/classRooms/students/Submissions';

const StudentScreen = () => (
  <Fragment>
    <StudentNavigator />
    <Submissions />
  </Fragment>
);

export default StudentScreen;
