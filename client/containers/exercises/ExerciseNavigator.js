import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import ExerciseNavigator from '../../components/exercises/ExerciseNavigator';
import getCurrentExercise from '../../selectors/getCurrentExercise';

const mapStateToProps = (...args) => ({
  exerciseDescription: _.get(getCurrentExercise(...args), 'description') || 'Novo',
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(ExerciseNavigator);
