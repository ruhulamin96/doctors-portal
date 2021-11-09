import React, { useState } from "react";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

function Appointment() {
    const [date, setDate]=useState(new Date());
    
  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment  date={date} setDate={setDate}></AvailableAppointment>
    </div>
  );
}

export default Appointment;
