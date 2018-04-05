import { connect } from 'react-redux';

import ActivityList from '../components/ActivityList';

const mapStateToProps = state => ({
  activities: state.activity.entities,
});

export default connect(mapStateToProps, null)(ActivityList);
