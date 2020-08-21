import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
export function createCourse(course) {
  // debugger;
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(course) {
  return { type: types.LOAD_COURSES_SUCCESS, course };
}
// every  thunk return an function that accepts  dipatch as an arugment
// thunks
// 1
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((course) => {
        dispatch(loadCoursesSuccess(course));
      })
      .catch((error) => {
        throw error;
      });

    // return fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((course) => {
    //     dispatch(loadCoursesSuccess(course));
    //   })
    //   .catch((error) => console.log(error));
  };
}
