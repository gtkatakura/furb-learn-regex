import cookies from '../http/cookies';

const initialValue = {
  name: cookies.find('X-User-Name'),
};

const userReducer = (state = initialValue, { type }) => {
  if (type === 'USER_LOGOUT') {
    return { name: null };
  }

  return state;
};

export default userReducer;
