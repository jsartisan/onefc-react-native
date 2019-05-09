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

export const fetchFeedSuccess = (entities, result) => ({
  type: TYPES.FETCH_FEED_SUCCESS,
  entities,
  result,
});

export const fetchFeedRequest = (
  onSuccess = () => {},
  onFailure = () => {}
) => ({
  type: TYPES.FETCH_FEED_REQUEST,
  onSuccess,
  onFailure,
});

export const fetchFeedError = error => ({
  type: TYPES.FETCH_FEED_ERROR,
  error,
});

/**
 * fetches feed
 *
 * @param action action type
 */
export function* fetchFeed(action) {
  const { onSuccess, onFailure } = action;

  try {
    const response = yield call(api.get, URLS.FEED_URL);
    const { entities, result } = normalize(response.data, [SCHEMAS.feed]);

    yield put(fetchFeedSuccess(entities, result));

    onSuccess();
  } catch (error) {
    yield put(fetchFeedError(error));

    onFailure(error);
  }
}
