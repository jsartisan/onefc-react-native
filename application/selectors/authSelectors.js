import _ from 'lodash';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { user } from '@constants/schemas';
import { getEntities } from './commonSelectors';

export const getAuthUserId = state => _.get(state, 'auth.user', null);
export const getAuthUser = createSelector(
  getEntities,
  getAuthUserId,
  (entities, id) => denormalize(id, user, entities),
);
