import { replace } from 'react-router-redux';

const save = ({ service, redirectTo }) => values => async dispatch => {
  await service.save(values);

  dispatch(replace(redirectTo));
};

export default save;
