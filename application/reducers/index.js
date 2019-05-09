import { combineReducers } from 'redux';

import authReducer from './authReducer';
import feedReducer from './feedReducer';
import eventReducer from './eventReducer';
import entitiesReducer from './entitiesReducer';

export default combineReducers({
  auth: authReducer,
  feed: feedReducer,
  events: eventReducer,
  entities: entitiesReducer,
});
