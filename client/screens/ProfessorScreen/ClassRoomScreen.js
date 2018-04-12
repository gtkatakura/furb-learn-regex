import React, { Fragment } from 'react';

import ClassRoomNavigator from 'containers/classRooms/ClassRoomNavigator';
import ClassRoomForm from 'containers/classRooms/ClassRoomForm';

const ExerciseScreen = () => (
  <Fragment>
    <ClassRoomNavigator />
    <ClassRoomForm />
  </Fragment>
);

export default ExerciseScreen;
