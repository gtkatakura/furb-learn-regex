import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: 'CLASS_ROOM_FETCH_REQUESTED' });

    const classRooms = await new WebApi('/api/classRooms').all();
    const activities = _.flow(
      _.flatMap('classworks'),
      _.map('activity'),
      _.uniq,
    )(classRooms);

    const exercises = _.uniq(_.flatMap('exercises', activities));

    dispatch({ type: 'CLASS_ROOM_FETCH_SUCCEEDED', payload: classRooms });
    dispatch({ type: 'ACTIVITY_FETCH_SUCCEEDED', payload: activities });
    dispatch({ type: 'EXERCISE_FETCH_SUCCEEDED', payload: exercises });

  } catch (err) {
    dispatch({ type: 'CLASS_ROOM_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
