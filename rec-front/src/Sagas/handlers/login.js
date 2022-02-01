import { call, put } from "redux-saga/effects";
import { requestLogin } from "../requests/login";
import { userLoggedIn } from "../../Actions/user";
import { requestForgotPass, requestValidToken } from "../requests/token";
import { passChanged, tokenValid } from "../../Actions/change-pass";
import { requestPasswordChange } from "../requests/passchange";
import { forgotPassSuccess } from "../../Actions/forgot-pass";
import { getBalance, showBalance } from "../../Actions/dashboard";
import { requestGetBalance, requestAddMoney } from "../requests/dashboard";
// import history from "../../history";

export function* handleLogin(action) {
  try {
    const response = yield call(requestLogin, action);
    yield put(userLoggedIn(response));
    // history.push("/");
  } catch (err) {
    console.log(err);
  }
}

export function* handleForgotPass(action) {
  try {
    const response = yield call(requestForgotPass, action);
    if (response === "success") {
      yield put(forgotPassSuccess());
    }
  } catch (err) {
    console.log(err);
  }
}

export function* changePass(action) {
  try {
    const response = yield call(requestPasswordChange, action);
    if (response === "success") {
      yield put(passChanged());
    }
  } catch (err) {
    console.log(err);
  }
}

export function* handleAddMoney(action) {
  try {
    const response = yield call(requestAddMoney, action);
    yield put(getBalance(response));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetBalance(action) {
  try {
    const response = yield call(requestGetBalance, action);
    yield put(showBalance(response));
  } catch (err) {
    console.log(err);
  }
}

export function* handleValidToken(action) {
  try {
    const response = yield call(requestValidToken, action);
    if (response === "success") {
      yield put(tokenValid());
    }
  } catch (err) {
    console.log(err);
  }
}
