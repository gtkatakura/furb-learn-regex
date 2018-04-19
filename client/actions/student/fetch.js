import _ from 'lodash/fp';
import WebApi from 'services/WebApi';

const fetch = () => async dispatch => {
  try {
    dispatch({ type: 'CLASSWORK_FETCH_REQUESTED' });

    const student = await new WebApi('/api/student/me').all();
    const classworks = _.flatMap('classworks', student.classRooms);

    dispatch({ type: 'CLASSWORK_FETCH_SUCCEEDED', payload: classworks });
  } catch (err) {
    dispatch({ type: 'CLASSWORK_FETCH_FAILED', payload: err });
  }
};

export default fetch;
