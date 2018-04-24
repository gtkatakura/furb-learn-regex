import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExerciseList from 'components/exercises/List';
import { destroy } from 'actions/exercises';

const mapStateToProps = state => ({
  resources: state.exercise.entities,
  isLoading: state.exercise.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDestroy: destroy,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
