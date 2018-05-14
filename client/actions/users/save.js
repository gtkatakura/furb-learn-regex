import WebApi from 'services/WebApi';
import confirm from 'util/confirm';
import cookies from 'http/cookies';

const save = values => async dispatch => {
  await new WebApi('/api/users').update(values);

  cookies.set('X-User-Name', values.name);
  cookies.set('X-User-Email', values.email);

  dispatch({
    type: 'USER_UPDATE',
    payload: values,
  });

  await confirm('Alteração efetuada com sucesso.');
};

export default save;
