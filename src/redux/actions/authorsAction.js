import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
// every  thunk return an function that accepts  dipatch as an arugment
// thunks
// 1
export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((author) => {
        console.log(author);
        dispatch(loadAuthorsSuccess(author));
      })
      .catch((error) => {
        throw error;
      });
  };
}
