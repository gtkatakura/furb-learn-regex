import _ from 'lodash/fp';
import getExercises from './getExercises';

const getCurrentExercise = (state, { params: { description } }) => (
  _.find(
    { description },
    getExercises(state),
  )
);

export default getCurrentExercise;
