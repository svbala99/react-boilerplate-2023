import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import postReducer from "./reducers/postRedeucer";

const rootReducer = combineReducers({
  count: countReducer,
  post: postReducer,
});

export default rootReducer;
