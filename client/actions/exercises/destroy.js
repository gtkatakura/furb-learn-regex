import { replace } from 'react-router-redux';
import WebApi from '../../services/WebApi';

const destroy = values => async dispatch => {
  await new WebApi(`/api/exercises/${values._id}`).delete();
  dispatch(replace('/professor/exercicios'));
};

export default destroy;
