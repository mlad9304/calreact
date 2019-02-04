import React from "react"
import PropTypes from "prop-types"
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";
class Appointments extends React.Component {
  render () {
    const { appointments } = this.props;
    return (
      <React.Fragment>
        <AppointmentForm />
        <AppointmentList appointments={appointments} />
      </React.Fragment>
    );
  }
}

Appointments.propTypes = {
  appointments: PropTypes.array
};
export default Appointments
