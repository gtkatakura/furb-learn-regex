import WebApi from 'services/WebApi';

const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: 'ACTIVITY_FETCH_REQUESTED' });

    const activities = await new WebApi('/api/activities').all();

    dispatch({ type: 'ACTIVITY_FETCH_SUCCEEDED', payload: activities });
  } catch (err) {
    dispatch({ type: 'ACTIVITY_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
