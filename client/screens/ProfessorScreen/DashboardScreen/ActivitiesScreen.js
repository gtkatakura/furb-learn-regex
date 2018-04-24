import { compose } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withLifeCycle from 'util/withLifeCycle';

import ActivityListContainer from 'containers/activities/List';
import fetchAll from 'actions/activities/fetchAll';

const mapDispatchToProps = dispatch => bindActionCreators({
  onMount: fetchAll,
}, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  withLifeCycle,
)(ActivityListContainer);
