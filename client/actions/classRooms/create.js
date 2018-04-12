import { replace } from 'react-router-redux';
import WebApi from 'services/WebApi';

const create = values => async dispatch => {
  if (values._id) {
    await new WebApi('/api/classRooms').update(values);
  } else {
    await new WebApi('/api/classRooms').create(values);
  }

  dispatch(replace('/professor/turmas'));
};

export default create;
