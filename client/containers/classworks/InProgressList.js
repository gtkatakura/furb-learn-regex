import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import fetch from 'actions/student/fetch';
import withLifeCycle from 'util/withLifeCycle';

const ClassworkItem = ({ classwork }) => (
  <div className="py-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 order-md-2">
          <h4 className="d-flex justify-content-between mb-3">
            <span className="text-muted">
              {classwork.activity.name} - Prazo {moment(classwork.deadline).format('L')}
            </span>
            <span className="badge badge-secondary badge-pill">
              {classwork.activity.exercises.length}
            </span>
          </h4>
          <ul className="list-group">
            {classwork.activity.exercises.map(exercise => (
              <a className="list-group-item list-group-item-action d-flex justify-content-between" href="#">
                <h6 className="my-0">
                  {exercise.description}
                </h6>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const InProgressList = ({ classworks }) => (
  classworks.map(classwork => <ClassworkItem classwork={classwork} />)
);

const mapStateToProps = state => ({
  classworks: state.classwork.entities,
});

const mapDispatchToProps = dispatch => ({
  onMount: () => fetch()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLifeCycle(InProgressList));
