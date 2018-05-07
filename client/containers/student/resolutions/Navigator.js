import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

import ResolutionNavigator from 'components/student/exercises/ResolutionNavigator';
import getCurrentExercise from 'selectors/getCurrentExercise';

const mapStateToProps = (...args) => ({
  exerciseDescription: _.get(getCurrentExercise(...args), 'description') || 'Novo',
});

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(ResolutionNavigator);
