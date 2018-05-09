import _ from 'lodash';
import confirm from './confirm';

const createActions = actions => dispatch => _.mapValues(actions, action => {
  return async (...args) => {
    try {
      await action(...args)(dispatch);
    } catch (err) {
      await confirm(err.message);
    }
  };
});

export default createActions;
