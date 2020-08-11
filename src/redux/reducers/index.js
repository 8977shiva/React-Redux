import { combineReducers } from "redux";
import course from "./coursesReducer";

const rootReducer = combineReducers({
  course,
});

export default rootReducer;
