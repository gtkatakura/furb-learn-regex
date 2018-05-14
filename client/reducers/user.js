import cookies from '../http/cookies';

const initialValue = {
  _id: cookies.find('X-User-Id'),
  name: cookies.find('X-User-Name'),
  email: cookies.find('X-User-Email'),
};

const userReducer = (state = initialValue, { type, payload }) => {
  if (type === 'USER_LOGOUT') {
    return { name: null };
  }

  if (type === 'USER_UPDATE') {
    return {
      ...state,
      ...payload,
    };
  }

  return state;
};

export default userReducer;
