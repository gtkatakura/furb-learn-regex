import { connect } from 'react-redux';

import ExerciseList from '../components/ExerciseList';

const mapStateToProps = state => ({
  exercises: state.exercise.entities,
});

export default connect(mapStateToProps, null)(ExerciseList);
