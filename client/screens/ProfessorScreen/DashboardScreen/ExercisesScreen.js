import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExerciseListContainer from 'containers/exercises/List';
import { fetchAll } from 'actions/professor/exercises';

const ExercisesScreen = ({ load }) => {
  load();

  return <ExerciseListContainer />;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ExercisesScreen);
