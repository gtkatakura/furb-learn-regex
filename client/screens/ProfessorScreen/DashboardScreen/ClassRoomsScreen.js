import { compose } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withLifeCycle from 'util/withLifeCycle';

import ClassRoomListContainer from 'containers/classRooms/List';
import { fetchAll } from 'actions/professor/classRooms';

const mapDispatchToProps = dispatch => bindActionCreators({
  onMount: fetchAll,
}, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  withLifeCycle,
)(ClassRoomListContainer);
