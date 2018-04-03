import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = applyMiddleware(
  thunk,
  routerMiddleware(browserHistory),
);

const store = createStore(
  rootReducer,
  middleware,
);

export default store;
