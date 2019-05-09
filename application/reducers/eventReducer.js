import { combineReducers } from 'redux';

import * as TYPES from '@constants/actionTypes';

const upcoming = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case TYPES.FETCH_UPCOMING_EVENTS_SUCCESS:
        return action.result;
      default:
        return state;
    }
  };

  const isLoading = (state = true, action) => {
    switch (action.type) {
      case TYPES.FETCH_UPCOMING_EVENTS_REQUEST:
        return true;
      case TYPES.FETCH_UPCOMING_EVENTS_SUCCESS:
      case TYPES.FETCH_UPCOMING_EVENTS_ERROR:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case TYPES.FETCH_UPCOMING_EVENTS_ERROR:
        return action.error.message;
      case TYPES.FETCH_UPCOMING_EVENTS_REQUEST:
      case TYPES.FETCH_UPCOMING_EVENTS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isLoading,
    errorMessage,
  });
};

export default combineReducers({
  upcoming: upcoming(),
});
