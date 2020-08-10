import { all } from "redux-saga/effects";
import { templateSaga } from "~/store/modules/templateReducer/sagas";

export default function* rootSaga() {
  return yield all([templateSaga]);
}
