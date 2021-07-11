import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import CommonActionTypes from "./common-types";
import * as commonAction from "./common-actions";
import { getRequest, postRequest } from "../../services/api.js";
import { localStorageHelper } from "../../utils/helpers";

function* startAuthentication({ payload: { email, password } }) {
  try {
    const data = yield postRequest("/identity", { email, password });
    yield put(commonAction.finishAuthentication());
    yield delay(1000);
    yield localStorageHelper("session", data);
    yield put(commonAction.successAuthentication(data));
    yield put(commonAction.finishAuthentication());
  } catch (err) {
    yield put(commonAction.failureAuthentication(err.toString()));
  }
}
export function* onStartAuthentication() {
  yield takeLatest(CommonActionTypes.START_AUTHENTICATION, startAuthentication);
}

function* startGetClients() {
  try {
    const data = yield getRequest("/clients");
    yield delay(1000);
    yield put(commonAction.successGetClients(data || []));
    yield put(commonAction.finishGetClients());
  } catch (err) {
    yield put(commonAction.failureGetClients(err.toString()));
  }
}
export function* onStartGetClients() {
  yield takeLatest(CommonActionTypes.START_GET_CLIENTS, startGetClients);
}

function* startLogout() {
  try {
    yield delay(1000);
    yield localStorage.removeItem("session");
    yield put(commonAction.successLogout());
    yield put(commonAction.finishLogout());
  } catch (err) {
    yield put(commonAction.failureLogout(err.toString()));
  }
}
export function* onStartLogout() {
  yield takeLatest(CommonActionTypes.START_LOGOUT, startLogout);
}

export function* commonSagas() {
  yield all([
    call(onStartAuthentication),
    call(onStartGetClients),
    call(onStartLogout),
  ]);
}
