import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_DUMMY_COMPONENT_APPLICATION,
  LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
  LOAD_DUMMY_COMPONENT_APPLICATION_FAILED,
} from './actions';

function* fetchDummyComponentApplication(action) {
  try {
    const dummyComponentApplication = yield call(action.data.service.getDummyComponentApplication, action.data.patientId);
    yield put({ type: LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED, dummyComponentApplication });
  } catch (e) {
    yield put({ type: LOAD_DUMMY_COMPONENT_APPLICATION_FAILED });
  }
}

function* fetchDummyComponentApplicationSaga() {
  yield takeLatest(LOAD_DUMMY_COMPONENT_APPLICATION, fetchDummyComponentApplication);
}

export { fetchDummyComponentApplication };
export default [fetchDummyComponentApplicationSaga];
