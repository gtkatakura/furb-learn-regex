import { replace } from 'react-router-redux';
import WebApi from '../../services/WebApi';

const destroy = values => async dispatch => {
  await new WebApi(`/api/activities/${values._id}`).delete();
  dispatch(replace('/professor/atividades'));
};

export default destroy;
