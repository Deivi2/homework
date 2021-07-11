import CommonActionTypes from "./common-types";
import { localStorageHelper } from "../../utils/helpers";

export const INITIAL_STATE = {
  loader: null,
  success: null,
  error: null,
  clients: null,
  isLoggedIn: !!localStorageHelper("session")?.sessionToken,
  identity: localStorageHelper("session"),
};

const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CommonActionTypes.START_AUTHENTICATION:
      return {
        ...state,
        loader: { ...state.loader, AUTHENTICATION: true },
      };
    case CommonActionTypes.SUCCESS_AUTHENTICATION:
      return {
        ...state,
        loader: { ...state.loader, AUTHENTICATION: null },
        success: { ...state.success, AUTHENTICATION: true },
        error: { ...state.error, AUTHENTICATION: null },
        isLoggedIn: true,
        identity: payload,
      };
    case CommonActionTypes.FAILURE_AUTHENTICATION:
      return {
        ...state,
        loader: { ...state.loader, AUTHENTICATION: null },
        success: { ...state.success, AUTHENTICATION: null },
        error: { ...state.error, AUTHENTICATION: payload },
      };
    case CommonActionTypes.FINISH_AUTHENTICATION:
      return {
        ...state,
        success: { ...state.success, AUTHENTICATION: null },
        error: { ...state.error, AUTHENTICATION: null },
      };

    case CommonActionTypes.START_GET_CLIENTS:
      return {
        ...state,
        loader: { ...state.loader, GET_CLIENTS: true },
      };
    case CommonActionTypes.SUCCESS_GET_CLIENTS:
      return {
        ...state,
        loader: { ...state.loader, GET_CLIENTS: null },
        success: { ...state.success, GET_CLIENTS: true },
        clients: payload,
      };
    case CommonActionTypes.FAILURE_GET_CLIENTS:
      return {
        ...state,
        loader: { ...state.loader, GET_CLIENTS: null },
        success: { ...state.success, GET_CLIENTS: null },
        error: { ...state.error, GET_CLIENTS: true },
      };
    case CommonActionTypes.FINISH_GET_CLIENTS:
      return {
        ...state,
        success: { ...state.success, GET_CLIENTS: null },
        error: { ...state.error, GET_CLIENTS: null },
      };

    case CommonActionTypes.START_LOGOUT:
      return {
        ...state,
        loader: { ...state.loader, LOGOUT: true },
      };
    case CommonActionTypes.SUCCESS_LOGOUT:
      return {
        ...state,
        loader: { ...state.loader, LOGOUT: null },
        success: { ...state.success, LOGOUT: true },
        isLoggedIn: null,
        identity: null,
      };
    case CommonActionTypes.FAILURE_LOGOUT:
      return {
        ...state,
        loader: { ...state.loader, LOGOUT: null },
        success: { ...state.success, LOGOUT: null },
        error: { ...state.error, LOGOUT: true },
      };
    case CommonActionTypes.FINISH_LOGOUT:
      return {
        ...state,
        success: { ...state.success, LOGOUT: null },
        error: { ...state.error, LOGOUT: null },
      };

    default:
      return state;
  }
};

export default commonReducer;
