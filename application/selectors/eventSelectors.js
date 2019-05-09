import _ from 'lodash';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

import { event } from '@constants/schemas';
import { getEntities } from './commonSelectors';

export const getUpcomingEventsIsLoading = state =>
  _.get(state, 'events.upcoming.isLoading', false);
export const getUpcomingEventsIds = state =>
  _.get(state, 'events.upcoming.ids', []);
export const getUpcomingEventsErrorMessage = state =>
  _.get(state, 'events.upcoming.errorMessage', null);
export const getUpcomingEvents = createSelector(
  getEntities,
  getUpcomingEventsIds,
  (entities, ids) => denormalize(ids, [event], entities)
);
