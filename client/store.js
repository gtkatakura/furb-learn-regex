import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import history from './history';

const middleware = applyMiddleware(
  thunk,
  routerMiddleware(history),
);

const store = createStore(
  rootReducer,
  middleware,
);

export default store;
