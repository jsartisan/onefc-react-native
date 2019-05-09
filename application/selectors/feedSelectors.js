import _ from 'lodash';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { feed } from '@constants/schemas';
import { getEntities } from './commonSelectors';

export const getFeedIsLoading = state =>
  _.get(state, 'feed.list.isLoading', false);
export const getFeedIds = state => _.get(state, 'feed.list.ids', []);
export const getFeedErrorMessage = state =>
  _.get(state, 'feed.list.errorMessage', null);
export const getFeed = createSelector(
  getEntities,
  getFeedIds,
  (entities, ids) => denormalize(ids, [feed], entities)
);
