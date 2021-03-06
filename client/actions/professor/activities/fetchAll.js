import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const fetchAll = ({ exerciseId } = {}) => async dispatch => {
  try {
    dispatch({ type: 'ACTIVITY_FETCH_REQUESTED' });

    const activities = await new WebApi('/api/activities').all({ exerciseId });
    const exercises = _.uniq(_.flatMap('exercises', activities));

    dispatch({ type: 'ACTIVITY_FETCH_SUCCEEDED', payload: activities });

    if (!exerciseId) {
      dispatch({ type: 'EXERCISE_FETCH_SUCCEEDED', payload: exercises });
    }
  } catch (err) {
    dispatch({ type: 'ACTIVITY_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
