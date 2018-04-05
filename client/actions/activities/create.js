import { replace } from 'react-router-redux';
import WebApi from '../../services/WebApi';

const create = values => async dispatch => {
  if (values._id) {
    await new WebApi('/api/activities').update(values);
  } else {
    await new WebApi('/api/activities').create(values);
  }

  dispatch(replace('/professor/atividades'));
};

export default create;
