import warning from './warning';

const createAction = dispatch => action => async (...args) => {
  try {
    await action(...args)(dispatch);
  } catch (err) {
    await warning(err.message);
  }
};

export default createAction;
