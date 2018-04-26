import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const fetch = () => async dispatch => {
  try {
    dispatch({ type: 'CLASSWORK_FETCH_REQUESTED' });

    const student = await new WebApi('/api/student/me').all();
    const classworks = _.flatMap('classworks', student.classRooms);
    const activities = _.map('activity', classworks);
    const exercises = _.flatMap('exercises', activities);

    dispatch({ type: 'CLASSWORK_FETCH_SUCCEEDED', payload: classworks });
    dispatch({ type: 'ACTIVITY_FETCH_SUCCEEDED', payload: activities });
    dispatch({ type: 'EXERCISE_FETCH_SUCCEEDED', payload: exercises });
  } catch (err) {
    dispatch({ type: 'CLASSWORK_FETCH_FAILED', payload: err });
  }
};

export default fetch;
