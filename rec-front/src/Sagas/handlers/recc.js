import { reccAdded, reccShow } from "../../Actions/reccpayaction";
import {
  requestAddRecurring,
  requestShowRecurring,
  requestCancelRecc,
} from "../requests/recc";
import { call, put } from "redux-saga/effects";

export function* handleAddRecurring(action) {
  try {
    const response = yield call(requestAddRecurring, action);
    if (response === "success") {
      yield put(reccAdded(response));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* handleShowRecurring(action) {
  try {
    const response = yield call(requestShowRecurring, action);
    yield put(reccShow(response));
  } catch (err) {
    console.log(err);
  }
}

export function* handleCancelRecc(action) {
  try {
    yield call(requestCancelRecc, action);
  } catch (err) {
    console.log(err);
  }
}
