import React from "react"
import PropTypes from "prop-types"
class AppointmentForm extends React.Component {
  handleChange = e => {
    const { onUserInput } = this.props;
    onUserInput({
      [e.target.name]: e.target.value,
    });
  };

  render () {
    const { input_title, input_appt_time } = this.props;
    const { handleChange } = this;
    return (
      <React.Fragment>
        <h2>Make a new appointment</h2>
        <form>
          <input
            name="input_title"
            placeholder="Appointment title"
            value={input_title}
            onChange={handleChange}
          />
          <input
            name="input_appt_time"
            placeholder="Date and Time"
            value={input_appt_time}
            onChange={handleChange}
          />
          <input type="submit" value="Make appointment" />
        </form>
      </React.Fragment>
    );
  }
}

AppointmentForm.propTypes = {
  input_title: PropTypes.string,
  input_appt_time: PropTypes.string,
  onUserInput: PropTypes.func,
};

export default AppointmentForm
