import { takeLatest } from 'redux-saga/effects';

import * as TYPES from '@constants/actionTypes';
import { fetchUpcomingEvents } from '@actions/eventActions';
import { fetchFeed } from '@actions/feedActions';

function* rootSaga() {
  yield takeLatest(TYPES.FETCH_UPCOMING_EVENTS_REQUEST, fetchUpcomingEvents);
  yield takeLatest(TYPES.FETCH_FEED_REQUEST, fetchFeed);
}

export default rootSaga;
