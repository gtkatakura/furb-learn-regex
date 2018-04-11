import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExerciseListContainer from '../../../containers/exercises/ExerciseList';
import fetchAll from '../../../actions/exercises/fetchAll';

const ExercisesScreen = ({ load }) => {
  load();

  return <ExerciseListContainer />;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  load: fetchAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(ExercisesScreen);
