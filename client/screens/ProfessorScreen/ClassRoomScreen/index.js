import React, { Fragment } from 'react';

import ClassRoomNavigator from 'containers/classRooms/Navigator';
import ClassRoomScreen from 'components/classRooms/Screen';

const ExerciseScreen = () => (
  <Fragment>
    <ClassRoomNavigator />
    <ClassRoomScreen />
  </Fragment>
);

export default ExerciseScreen;
