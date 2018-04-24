import React, { Fragment } from 'react';

import ClassRoomNavigator from 'containers/classRooms/Navigator';
import ClassRoomForm from 'containers/classRooms/Form';

const ExerciseScreen = () => (
  <Fragment>
    <ClassRoomNavigator />
    <ClassRoomForm />
  </Fragment>
);

export default ExerciseScreen;
