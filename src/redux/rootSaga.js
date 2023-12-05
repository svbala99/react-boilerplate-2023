import { all } from "redux-saga/effects";
import countSaga from "./sagas/countSagas";
import postSaga from "./sagas/postSagas";

function* rootSaga() {
  yield all([...countSaga, ...postSaga]);
}

// exports
export default rootSaga;
