import { Grid } from "@mui/material";
import React from "react";
import Calendar from "../../../Shared/Calendar/Calendar";
import AppointmentList from "../../Dashboard/AppointmentList/AppointmentList";
function DashBoardHome() {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={5}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={6} md={7}>
        <AppointmentList date={date}></AppointmentList>
      </Grid>
    </Grid>
  );
}

export default DashBoardHome;
