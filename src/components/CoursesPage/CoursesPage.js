import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/coursesAction";
import * as authorAction from "../../redux/actions/authorsAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CoursesList";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert(error);
    });
    this.props.actions.loadAuthors().catch((error) => {
      alert(error);
    });
  }
  render() {
    console.log(this.props.courses);
    return (
      <>
        <CourseList course={this.props.courses} />
      </>
    );
  }
}
//  to send dispatch as props
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  // return {
  //   course: state.course,
  // };

  // getting both course and authorname

  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseAction.createCourse(course)),
    actions: {
      loadCourses: bindActionCreators(courseAction.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorAction.loadAuthors, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//if we  omited mapDipatchToProps so that the connect passes dispatch
