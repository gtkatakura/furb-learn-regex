import getCurrentExercise from './getCurrentExercise';

const defaults = { steps: [{ limit: 3 }] };

const getCurrentExerciseOrDefault = (...args) => getCurrentExercise(...args) || defaults;

export default getCurrentExerciseOrDefault;
