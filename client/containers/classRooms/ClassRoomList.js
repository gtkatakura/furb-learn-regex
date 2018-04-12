import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClassRoomList from 'components/classRooms/ClassRoomList';
import { destroy } from 'actions/classRooms';

const mapStateToProps = state => ({
  resources: state.classRoom.entities,
  isLoading: state.classRoom.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDestroy: destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoomList);
