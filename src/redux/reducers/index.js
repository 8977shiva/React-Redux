import { combineReducers } from "redux";
import courses from "./coursesReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
