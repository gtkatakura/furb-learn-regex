import { connect } from 'react-redux';
import createActions from 'util/createActions';

import ClassRoomList from 'components/classRooms/List';
import { destroy } from 'actions/classRooms';

const mapStateToProps = state => ({
  resources: state.classRoom.entities,
  isLoading: state.classRoom.isLoading,
});

const mapDispatchToProps = createActions({
  onDestroy: destroy,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoomList);
