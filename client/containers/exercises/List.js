import { connect } from 'react-redux';
import createActions from 'util/createActions';

import ExerciseList from 'components/exercises/List';
import { destroy } from 'actions/professor/exercises';

const mapStateToProps = state => ({
  resources: state.exercise.entities,
  isLoading: state.exercise.isLoading,
});

const mapDispatchToProps = createActions({
  onDestroy: destroy,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
