import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActivityList from '../components/ActivityList';
import { destroy } from '../actions/activities';

const mapStateToProps = state => ({
  resources: state.activity.entities,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDestroy: destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
