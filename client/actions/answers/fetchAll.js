import WebApi from 'services/WebApi';

const fetchAll = classRoomId => async dispatch => {
  try {
    dispatch({ type: 'ANSWER_FETCH_REQUESTED' });

    const answers = await new WebApi(`/api/classRooms/${classRoomId}/answers`).all();

    dispatch({ type: 'ANSWER_FETCH_SUCCEEDED', payload: answers });
  } catch (err) {
    dispatch({ type: 'ANSWER_FETCH_FAILED', payload: err });
  }
};

export default fetchAll;
