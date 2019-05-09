import { normalize } from 'normalizr';
import { call, put } from 'redux-saga/effects';

import * as TYPES from '@constants/actionTypes';
import * as URLS from '@constants/apiUrls';
import api from '@utilities/configureAxios';
import * as SCHEMAS from '@constants/schemas';

/**
 * -------------------------------------------------------------
 * fetch upcoming event
 * -------------------------------------------------------------
 */

export const fetchUpcomingEventsSuccess = (entities, result) => ({
  type: TYPES.FETCH_UPCOMING_EVENTS_SUCCESS,
  entities,
  result,
});

export const fetchUpcomingEventsRequest = (onSuccess = () => { }, onFailure = () => { }) => ({
  type: TYPES.FETCH_UPCOMING_EVENTS_REQUEST,
  onSuccess,
  onFailure,
});

export const fetchUpcomingEventsError = error => ({
  type: TYPES.FETCH_UPCOMING_EVENTS_ERROR,
  error,
});

/**
 * fetches upcoming events
 *
 * @param action action type
 */
export function* fetchUpcomingEvents(action) {
  const { onSuccess, onFailure } = action;

  try {
    const response = yield call(api.get, URLS.UPCOMING_EVENT_URL);
    const { entities, result } = normalize(response.data, [SCHEMAS.event]);

    yield put(fetchUpcomingEventsSuccess(entities, result));

    onSuccess();
  } catch (error) {
    yield put(fetchUpcomingEventsError(error));

    onFailure(error);
  }
}
