import WebApi from 'services/WebApi';
import fetchAll from './fetchAll';

const destroy = values => async dispatch => {
  if (Array.isArray(values)) {
    await Promise.all(values.map(value => new WebApi(`/api/classRooms/${value._id}`).delete()));
  } else {
    await new WebApi(`/api/classRooms/${values._id}`).delete();
  }

  await fetchAll()(dispatch);
};

export default destroy;
