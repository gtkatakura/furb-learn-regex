import _ from 'lodash/fp';
import getExercises from './getExercises';

const getCurrentExercise = (state, { params: { exerciseId, description } }) => (
  _.find(
    exerciseId ? { _id: exerciseId } : { description },
    getExercises(state),
  )
);

export default getCurrentExercise;
