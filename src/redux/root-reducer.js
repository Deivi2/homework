import { combineReducers } from "redux";
import common from "./common/common-reducer";

const rootReducer = combineReducers({
  common,
});

export default rootReducer;
