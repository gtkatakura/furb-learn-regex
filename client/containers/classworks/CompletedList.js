import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import fetch from 'actions/student/fetch';
import withLifeCycle from 'util/withLifeCycle';

import ClassworkItem from './ClassworkItem';

const InProgressList = ({ classworks }) => (
  classworks.map(classwork => (
    moment(classwork.deadline).isBefore(moment(), 'day') && <ClassworkItem classwork={classwork} />
  ))
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
