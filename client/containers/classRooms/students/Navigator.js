import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import StudentNavigator from 'components/classRooms/students/Navigator';
import getCurrentClassRoom from 'selectors/getCurrentClassRoom';

const mapStateToProps = (state, { params }) => ({
  student: _.find(state.student.entities, ['_id', params.studentId]),
  classRoomName: _.get(getCurrentClassRoom(state, { params }), 'name'),
  classwork: _.find(getCurrentClassRoom(state, { params }).classworks, ['_id', params.classworkId]),
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(StudentNavigator);
