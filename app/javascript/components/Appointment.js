import React from "react"
import PropTypes from "prop-types"
class Appointment extends React.Component {
  render () {
    const { appointment } = this.props;
    return (
      <React.Fragment>
        <h3>{appointment.title}</h3>
        <p>{formatDate(appointment.appt_time)}</p>
      </React.Fragment>
    );
  }
}

Appointment.propTypes = {
  appointment: PropTypes.object
};
export default Appointment
