import * as commonActions from "./common-actions";
import { createStore, applyMiddleware } from "redux";
import { INITIAL_STATE } from "./common-reducer";
import rootReducer from "../root-reducer";
import { middlewares } from "../store";
import clientsData from '../../utils/tableData'

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

describe("auth state test", () => {
  let store;
  beforeEach(() => {
    store = storeFactory({ common: INITIAL_STATE });
  });

  test("updates loader state on start authentication", () => {
    const userCredentials = { email: "", password: "" };
    store.dispatch(commonActions.startAuthentication(userCredentials));
    const newState = store.getState();
    expect(newState.common.loader.AUTHENTICATION).toBeTruthy();
  });

  test("updates success state on success authentication", () => {
    store.dispatch(commonActions.successAuthentication());
    const newState = store.getState();
    expect(newState.common.success.AUTHENTICATION).toBeTruthy();
    expect(newState.common.isLoggedIn).toBeTruthy();
  });

  test("updates error state with given message on failure authentication", () => {
    store.dispatch(commonActions.failureAuthentication("Unauthorized"));
    const newState = store.getState();
    expect(newState.common.error.AUTHENTICATION).toBe("Unauthorized");
  });

  test("updates states with response from /clients", () => {
    store.dispatch(commonActions.successGetClients(clientsData));
    const newState = store.getState();
    expect(newState.common.clients).toBe(clientsData);
  });
});
