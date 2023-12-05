import { fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREMENT_REQUEST,
  triggerIncrementError,
  triggerIncrementSuccess,
} from "../actions/countAction";

// worker sagas - SLAVES
function* incrementSaga() {
  try {
    yield put(triggerIncrementSuccess());
  } catch (e) {
    yield put(triggerIncrementError(e));
  }
}

// watcher saga - MASTER
function* countWatcherSaga() {
  yield takeLatest(INCREMENT_REQUEST, incrementSaga);
}

const countSaga = [fork(countWatcherSaga)];

// exports
export default countSaga;
