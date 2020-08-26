import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
export function createCourse(course) {
  // debugger;
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(course) {
  return { type: types.LOAD_COURSES_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((saveCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(saveCourse))
          : dispatch(createCourseSuccess(saveCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
