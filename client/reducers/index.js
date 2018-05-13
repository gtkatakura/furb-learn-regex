import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import activityReducer from './activity';
import answerReducer from './answer';
import classRoomReducer from './classRoom';
import classworkReducer from './classwork';
import exerciseReducer from './exercise';
import resolutionReducer from './resolution';
import studentReducer from './student';
import subscribeReducer from './subscribe';
import userReducer from './user';

const rootReducer = combineReducers({
  activity: activityReducer,
  answer: answerReducer,
  classRoom: classRoomReducer,
  classwork: classworkReducer,
  user: userReducer,
  exercise: exerciseReducer,
  routing: routerReducer,
  form: formReducer,
  resolution: resolutionReducer,
  student: studentReducer,
  subscribe: subscribeReducer,
});

export default rootReducer;
