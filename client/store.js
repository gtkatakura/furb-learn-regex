import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import cookies from 'http/cookies';

import rootReducer from './reducers';

const middleware = applyMiddleware(
  thunk,
  routerMiddleware(browserHistory),
);

const store = createStore(
  rootReducer,
  middleware,
);

const socket = io();

socket.on(`professors/${cookies.find('X-User-Id')}/action`, action => {

  store.dispatch(action);
});

export default store;
