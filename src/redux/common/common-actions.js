import CommonActionTypes from "./common-types";

export const startAuthentication = (data) => ({
  type: CommonActionTypes.START_AUTHENTICATION,
  payload: data,
});

export const successAuthentication = (data) => ({
  type: CommonActionTypes.SUCCESS_AUTHENTICATION,
  payload: data,
});

export const failureAuthentication = (data) => ({
  type: CommonActionTypes.FAILURE_AUTHENTICATION,
  payload: data,
});

export const finishAuthentication = (data) => ({
  type: CommonActionTypes.FINISH_AUTHENTICATION,
  payload: data,
});

export const startGetClients = (data) => ({
  type: CommonActionTypes.START_GET_CLIENTS,
  payload: data,
});

export const successGetClients = (data) => ({
  type: CommonActionTypes.SUCCESS_GET_CLIENTS,
  payload: data,
});

export const failureGetClients = (data) => ({
  type: CommonActionTypes.FAILURE_GET_CLIENTS,
  payload: data,
});

export const finishGetClients = (data) => ({
  type: CommonActionTypes.FINISH_GET_CLIENTS,
  payload: data,
});

export const startLogout = (data) => ({
  type: CommonActionTypes.START_LOGOUT,
  payload: data,
});

export const successLogout = (data) => ({
  type: CommonActionTypes.SUCCESS_LOGOUT,
  payload: data,
});

export const failureLogout = (data) => ({
  type: CommonActionTypes.FAILURE_LOGOUT,
  payload: data,
});

export const finishLogout = (data) => ({
  type: CommonActionTypes.FINISH_LOGOUT,
  payload: data,
});
