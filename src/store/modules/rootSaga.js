import { all } from "redux-saga/effects";

import templateSaga from "./templateReducer/sagas";

export default function* rootSaga() {
  return yield all([templateSaga]);
}
