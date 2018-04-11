import cookies from 'http/cookies';

const logout = () => dispatch => {
  cookies.remove('X-User-Name');
  dispatch({ type: 'USER_LOGOUT' });
};

export default logout;
