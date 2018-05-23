import _ from 'lodash';

import createAction from './createAction';

const createActions = actions => dispatch => _.mapValues(actions, createAction(dispatch));

export default createActions;
