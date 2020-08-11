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
    this.props.dispatch(courseAction.createCourse(this.state.course));
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
        </form>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state ) {
  return {
    course: state.course,
  };
}

export default connect(mapStateToProps)(CoursesPage);
