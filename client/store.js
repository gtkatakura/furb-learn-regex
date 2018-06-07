import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
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

const { user } = store.getState();
const logged = !!user.name;

if (logged) {
  const redirectTo = user.isProfessor ? '/professor/turmas' : '/minhas-atividades/em-andamento';
  store.dispatch(push(redirectTo));
}

export default store;
