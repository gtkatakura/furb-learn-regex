import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import ClassRoomNavigator from 'components/classRooms/Navigator';
import getCurrentClassRoom from 'selectors/getCurrentClassRoom';

const mapStateToProps = (...args) => ({
  classRoomName: _.get(getCurrentClassRoom(...args), 'name') || 'Novo',
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(ClassRoomNavigator);
