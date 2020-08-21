import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/coursesAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert(error);
    });
  }
  render() {
    console.log(this.props.course);
    return (
      <div>
        {this.props.course.map((c) => (
          <div key={c.title}>{c.title}</div>
        ))}
      </div>
    );
  }
}
//  to send dispatch as props
CoursesPage.propTypes = {
  course: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return {
    course: state.course,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseAction.createCourse(course)),
    actions: bindActionCreators(courseAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//if we  omited mapDipatchToProps so that the connect passes dispatch
