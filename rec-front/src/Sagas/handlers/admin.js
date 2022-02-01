import { call, put } from "redux-saga/effects";
import { userAdded } from "../../Actions/adduser";
import { requestAddUser } from "../requests/admin";

export function* handleAddUser(action) {
  try {
    const response = yield call(requestAddUser, action);
    if (response === "success") {
      yield put(userAdded(response));
    }
  } catch (err) {
    console.log(err);
  }
}
