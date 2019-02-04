import React from "react"
import PropTypes from "prop-types"
class AppointmentForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>Make a new appointment</h2>
        <form>
          <input name="title" placeholder="Appointment title" />
          <input name="appt_time" placeholder="Date and Time" />
          <input type="submit" value="Make appointment" />
        </form>
      </React.Fragment>
    );
  }
}

export default AppointmentForm
