import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware];

const middlevareEnhancers = applyMiddleware(...middlewares);
const composedEnhancers = compose(
  middlevareEnhancers,
  devToolsEnhancer({ trace: true })
);

const store = createStore(rootReducer, {}, composedEnhancers);

sagaMiddleware.run(rootSaga);

export { store };
