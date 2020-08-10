import { takeLatest, call, put, all, select } from "redux-saga/effects";
import { get } from "axios";
import {
  Types as templateTypes,
  templateActionSuccess,
  templateActionFailure,
} from "./actions";

export function* templateSaga() {
  try {
    const response = yield call(
      get,
      `${process.env.REACT_APP_BASE_API_URL}login`
    );
    put(templateActionSuccess(response));
  } catch (err) {
    put(templateActionFailure());
  }
}

export default all([
  takeLatest(templateTypes.TEMPLATE_ACTION_TRIGGER, templateSaga),
]);
