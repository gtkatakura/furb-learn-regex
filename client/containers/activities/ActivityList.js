import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActivityList from 'components/activities/ActivityList';
import { destroy } from 'actions/activities';

const mapStateToProps = state => ({
  resources: state.activity.entities,
  isLoading: state.activity.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDestroy: destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
