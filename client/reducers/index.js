import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import activityReducer from './activity';
import exerciseReducer from './exercise';
import userReducer from './user';

const rootReducer = combineReducers({
  activity: activityReducer,
  user: userReducer,
  exercise: exerciseReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
