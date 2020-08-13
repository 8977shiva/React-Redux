import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/coursesAction";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }
  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
    console.log(this.state.course);
  };
  handleSave = (e) => {
    e.preventDefault();
    // debugger;
    // this.props.dispatch(courseAction.createCourse(this.state.course));
    this.props.createCourse(this.state.course);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <h2>Courses</h2>
          <h3>Add Courses</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="save" />
          {this.props.course.map((c) => (
            <div key={c.title}>{c.title}</div>
          ))}
        </form>
      </div>
    );
  }
}
//  to send dispatch as props
CoursesPage.propTypes = {
  course: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return {
    course: state.course,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseAction.createCourse(course)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//if we  omited mapDipatchToProps so that the connect passes dispatch
