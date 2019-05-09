import { combineReducers } from 'redux';

import * as TYPES from '@constants/actionTypes';

const list = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case TYPES.FETCH_FEED_SUCCESS:
        return action.result;
      default:
        return state;
    }
  };

  const isLoading = (state = true, action) => {
    switch (action.type) {
      case TYPES.FETCH_FEED_REQUEST:
        return true;
      case TYPES.FETCH_FEED_SUCCESS:
      case TYPES.FETCH_FEED_ERROR:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case TYPES.FETCH_FEED_ERROR:
        return action.error.message;
      case TYPES.FETCH_FEED_REQUEST:
      case TYPES.FETCH_FEED_SUCCESS:
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
  list: list(),
});
