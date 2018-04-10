import WebApi from '../../services/WebApi';
import fetchAll from './fetchAll';

const destroy = values => async dispatch => {
  if (Array.isArray(values)) {
    await Promise.all(values.map(value => new WebApi(`/api/exercises/${value._id}`).delete()));
  } else {
    await new WebApi(`/api/exercises/${values._id}`).delete();
  }

  await fetchAll()(dispatch);
};

export default destroy;
