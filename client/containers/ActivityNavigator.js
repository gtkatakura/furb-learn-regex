import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import ActivityNavigator from '../components/ActivityNavigator';
import getCurrentActivity from '../selectors/getCurrentActivity';

const mapStateToProps = (...args) => ({
  activityName: _.get(getCurrentActivity(...args), 'name') || 'Novo',
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(ActivityNavigator);
