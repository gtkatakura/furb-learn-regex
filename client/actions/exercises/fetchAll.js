import WebApi from '../../services/WebApi';

const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: 'EXERCISE_FETCH_REQUESTED' });

    const exercises = await new WebApi('/api/exercises').all();

    dispatch({ type: 'EXERCISE_FETCH_SUCCEEDED', payload: exercises });
  } catch (err) {
    dispatch({ type: 'EXERCISE_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
