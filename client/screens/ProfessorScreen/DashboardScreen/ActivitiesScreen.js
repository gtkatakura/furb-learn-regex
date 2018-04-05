import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActivityListContainer from '../../../containers/ActivityList';
import fetchAll from '../../../actions/activities/fetchAll';

const ActivitiesScreen = ({ load }) => {
  load();

  return <ActivityListContainer />;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ActivitiesScreen);
