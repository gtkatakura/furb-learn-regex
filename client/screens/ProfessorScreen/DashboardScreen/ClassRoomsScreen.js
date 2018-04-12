import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClassRoomListContainer from 'containers/classRooms/ClassRoomList';
import fetchAll from 'actions/classRooms/fetchAll';

const ActivitiesScreen = ({ load }) => {
  load();

  return <ClassRoomListContainer />;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ActivitiesScreen);
