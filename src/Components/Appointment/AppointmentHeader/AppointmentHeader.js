import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import chair from "../../../images/chair.png";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Calendar from "../../Shared/Calendar/Calendar";
function AppointmentHeader({date,setDate}) {

  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <Calendar date={date} setDate={setDate}></Calendar>
            </Grid>
            <Grid item xs={6} md={6}>
              <img src={chair} alt="" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AppointmentHeader;
