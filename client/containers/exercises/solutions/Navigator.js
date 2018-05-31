import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import SolutionNavigator from 'components/exercises/solutions/Navigator';
import getCurrentExercise from 'selectors/getCurrentExercise';

const mapStateToProps = (state, { params }) => ({
  exerciseId: params.exerciseId,
  exerciseDescription: _.get(getCurrentExercise(state, { params }), 'description') || 'Novo',
  solution: params.solution,
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(SolutionNavigator);
