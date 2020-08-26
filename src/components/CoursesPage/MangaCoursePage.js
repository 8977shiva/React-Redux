import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/coursesAction";
import { loadAuthors } from "../../redux/actions/authorsAction";
// import * as saveCourse from "../../redux/actions/coursesAction";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
// import { getCourses } from "../../api/courseApi";
// import { bindActionCreators } from "redux";
// import { authors } from "c:/users/bskre/downloads/react-redux-react-router-es6/11/demos/after/tools/mockdata";

function ManageCoursePage({
  loadAuthors,
  loadCourses,
  saveCourse,
  authors,
  courses,
  history,
  ...props
}) {
  //   componentDidMount() {
  // const { loadAuthors, loadCourses, authors, courses } = this.props; // changing to functional comp

  const [course, setCourse] = useState({ ...props.course });
  const [error, setError] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert(error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert(error);
      });
    }
  }, []); // empty  2nd argument  ==== compoenetDidMount()

  // console.log(this.props.courses);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  }
  return (
    <>
      <CourseForm
        course={course}
        authors={authors}
        erroor={error}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export function getCoursesBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownprops) {
  const slug = ownprops.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCoursesBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

//object type dispatchtoprops
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
