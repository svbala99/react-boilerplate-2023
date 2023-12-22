import { fork, put, takeLatest } from "redux-saga/effects";
import {
  DECREMENT_REQUEST,
  INCREMENT_REQUEST,
  triggerDecrementError,
  triggerDecrementSuccess,
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

function* decrementSaga() {
  try {
    yield put(triggerDecrementSuccess());
  } catch (e) {
    yield put(triggerDecrementError(e));
  }
}

// watcher saga - MASTER
function* countWatcherSaga() {
  yield takeLatest(INCREMENT_REQUEST, incrementSaga);
  yield takeLatest(DECREMENT_REQUEST, decrementSaga);
}

const countSaga = [fork(countWatcherSaga)];

// exports
export default countSaga;
