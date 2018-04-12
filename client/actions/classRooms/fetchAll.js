import WebApi from 'services/WebApi';

const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: 'CLASS_ROOM_FETCH_REQUESTED' });

    const classRooms = await new WebApi('/api/classRooms').all();

    dispatch({ type: 'CLASS_ROOM_FETCH_SUCCEEDED', payload: classRooms });
  } catch (err) {
    dispatch({ type: 'CLASS_ROOM_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
