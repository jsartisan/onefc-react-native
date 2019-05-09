import { merge } from 'lodash';

export default (state = {}, action) => {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  switch (action.type) {
    case 'persist/REHYDRATE':
      return state;

    default:
      return state;
  }
};
