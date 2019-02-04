import React from "react"
import PropTypes from "prop-types"
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";
class Appointments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: props.appointments,
      input_title: 'Team startup meeting',
      input_appt_time: 'Tomorrow at 9am',
    };
  }

  handleUserInput = obj => {
    this.setState(prevState => ({
      ...prevState,
      ...obj,
    }));
  };

  render () {
    const { appointments, input_title, input_appt_time } = this.state;
    const { handleUserInput } = this;
    return (
      <React.Fragment>
        <AppointmentForm
          input_title={input_title}
          input_appt_time={input_appt_time}
          onUserInput={handleUserInput}
        />
        <AppointmentList appointments={appointments} />
      </React.Fragment>
    );
  }
}

Appointments.propTypes = {
  appointments: PropTypes.array
};
export default Appointments
