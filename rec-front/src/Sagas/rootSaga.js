import { takeEvery } from "redux-saga/effects";
import { IS_VALID_TOKEN, CHANGE_PASS } from "../Actions/change-pass";
import { LOGIN_USER } from "../Actions/user";
import { FORGOT_PASS } from "../Actions/forgot-pass";
import { GET_BALANCE, SHOW_TRANSACTIONS } from "../Actions/dashboard";
import { handleGetBalance } from "./handlers/login";
import { ADD_MONEY } from "../Actions/add-money";
import { handleAddMoney } from "./handlers/login";
import {
  handleAddRecurring,
  handleShowRecurring,
  handleCancelRecc,
} from "./handlers/recc";
import {
  ADD_RECURRING,
  CANCEL_RECC,
  SHOW_RECURRING,
} from "../Actions/reccpayaction";
import { handleAddUser } from "./handlers/admin";
import {
  handleLogin,
  handleValidToken,
  changePass,
  handleForgotPass,
} from "./handlers/login";
import { ADD_USER } from "../Actions/adduser";
import { handleShowTransaction } from "./handlers/user";

export function* watcherSaga() {
  yield takeEvery(CHANGE_PASS, changePass);
  yield takeEvery(IS_VALID_TOKEN, handleValidToken);
  yield takeEvery(LOGIN_USER, handleLogin);
  yield takeEvery(FORGOT_PASS, handleForgotPass);
  yield takeEvery(GET_BALANCE, handleGetBalance);
  yield takeEvery(ADD_MONEY, handleAddMoney);
  yield takeEvery(ADD_RECURRING, handleAddRecurring);
  yield takeEvery(SHOW_RECURRING, handleShowRecurring);
  yield takeEvery(ADD_USER, handleAddUser);
  yield takeEvery(SHOW_TRANSACTIONS, handleShowTransaction);
  yield takeEvery(CANCEL_RECC, handleCancelRecc);
}
