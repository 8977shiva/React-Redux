"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCourse = createCourse;
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.updateCourseSuccess = updateCourseSuccess;
exports.createCourseSuccess = createCourseSuccess;
exports.loadCourses = loadCourses;
exports.saveCourse = saveCourse;

var types = _interopRequireWildcard(require("./actionTypes"));

var courseApi = _interopRequireWildcard(require("../../api/courseApi"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createCourse(course) {
  // debugger;
  return {
    type: types.CREATE_COURSE,
    course: course
  };
}

function loadCoursesSuccess(course) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    course: course
  };
}

function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course: course
  };
}

function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course: course
  };
} // every  thunk return an function that accepts  dipatch as an arugment
// thunks
// 1


function loadCourses() {
  return function (dispatch) {
    return courseApi.getCourses().then(function (course) {
      dispatch(loadCoursesSuccess(course));
    })["catch"](function (error) {
      throw error;
    }); // return fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((course) => {
    //     dispatch(loadCoursesSuccess(course));
    //   })
    //   .catch((error) => console.log(error));
  };
}

function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(function (saveCourse) {
      course.id ? dispatch(updateCourseSuccess(saveCourse)) : dispatch(createCourseSuccess(saveCourse));
    })["catch"](function (error) {
      throw error;
    });
  };
}