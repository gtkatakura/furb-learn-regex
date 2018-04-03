import { replace } from 'react-router-redux';
import WebApi from '../../services/WebApi';

const create = values => async dispatch => {
  await new WebApi('/api/exercises').create(values);
  dispatch(replace('/professor/exercicios'));
};

export default create;
