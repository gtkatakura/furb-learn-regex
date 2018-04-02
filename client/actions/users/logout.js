import Cookies from 'js-cookie';

const logout = () => dispatch => {
  Cookies.remove('X-User-Name');
  dispatch({ type: 'USER_LOGOUT' });
};

export default logout;
