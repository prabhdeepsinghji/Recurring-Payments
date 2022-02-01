import { call, put } from "redux-saga/effects";
import { transAdded } from "../../Actions/dashboard";
import { requestShowTransactions } from "../requests/dashboard";

export function* handleShowTransaction(action) {
  try {
    const response = yield call(requestShowTransactions, action);
    yield put(transAdded(response));
  } catch (err) {
    console.log(err);
  }
}
