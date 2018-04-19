import WebApi from 'services/WebApi';

const subscribe = token => async dispatch => {
  const classWork = await new WebApi(`/api/classRooms/subscribe/${token}`).all();

  dispatch({
    type: 'SUBSCRIBE_LOADED',
    payload: classWork,
  });
};

export default subscribe;
