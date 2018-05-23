import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withLifeCycle from 'util/withLifeCycle';
import _ from 'lodash';

import ActivityTable from 'components/activities/Table';
import { fetchAll } from 'actions/professor/activities';

const mapStateToProps = (state, { params: { exerciseId } }) => ({
  exerciseId,
  resources: state.activity.entities.filter(activity => activity.exercises.some(exercise => exercise._id === exerciseId)),
});

const mapDispatchToProps = dispatch => ({
  onMount: ({ exerciseId }) => fetchAll({ exerciseId })(dispatch),
});

const ActivityTab = ({ ...props }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 p-3">
        <ActivityTable withLink {...props} />
      </div>
    </div>
  </div>
);

export default _.compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle,
)(ActivityTab);
