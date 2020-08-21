import * as types from "../actions/actionTypes";
export default function coursesReducer(state = [], action) {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case types.CREATE_COURSE:
      // debugger;
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.course;
    default:
      return state;
  }
}
