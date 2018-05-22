import { connect } from 'react-redux';
import createActions from 'util/createActions';

import ActivityList from 'components/activities/List';
import { destroy } from 'actions/professor/activities';

const mapStateToProps = state => ({
  resources: state.activity.entities,
  isLoading: state.activity.isLoading,
});

const mapDispatchToProps = createActions({
  onDestroy: destroy,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
