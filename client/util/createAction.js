import confirm from './confirm';

const createAction = dispatch => action => async (...args) => {
  try {
    await action(...args)(dispatch);
  } catch (err) {
    await confirm(err.message);
  }
};

export default createAction;
