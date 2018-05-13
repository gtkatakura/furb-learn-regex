import WebApi from 'services/WebApi';

const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: 'STUDENT_FETCH_REQUESTED' });

    const students = await new WebApi('/api/student').all();

    dispatch({ type: 'STUDENT_FETCH_SUCCEEDED', payload: students });
  } catch (err) {
    dispatch({ type: 'STUDENT_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
