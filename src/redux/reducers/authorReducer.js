import * as types from "../actions/actionTypes";
export default function coursesReducer(state = [], action) {
  console.log(JSON.stringify(action.type.LOAD_AUTHORS_SUCCESS));
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
