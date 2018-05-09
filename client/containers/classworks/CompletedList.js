import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import fetch from 'actions/student/fetch';
import withLifeCycle from 'util/withLifeCycle';

import ClassworkItem from './ClassworkItem';

const InProgressList = ({ isLoading, classworks }) => (
  isLoading
    ? <p>Carregando...</p>
    : classworks.length === 0 ? <p>Nenhuma atividade foi encontrada.</p>
    : classworks.map(classwork => <ClassworkItem classwork={classwork} />)
);

const mapStateToProps = state => ({
  isLoading: state.classwork.isLoading,
  classworks: _.filter(state.classwork.entities, classwork => moment(classwork.deadline).isBefore(moment(), 'day')),
});

const mapDispatchToProps = dispatch => ({
  onMount: () => fetch()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLifeCycle(InProgressList));
