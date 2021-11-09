import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../images/doctor.png";
import bgimage from "../../images/appointment-bg.png";
import { Typography } from "@mui/material";

function AppointmentBanner() {
  const bannerimg = {
    background: `url(${bgimage}) no-repeat  center fixed`,
    width: "70%",
    margin:"0 auto",
    marginTop: "20vh",
    // backgroundColor: "rgba(45,50,65, 0.5)",
    backgroundSize: "cover",
   
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={bannerimg}>
        <Grid
          container
          spacing={2}
         style={{backgroundColor:"rgba(45,58,75, 0.9)"}}
        >
          <Grid item xs={12} md={6}>
            <img
              src={doctor}
              style={{
                width: "100%",
                height: "30rem",
               
                marginTop: "-8rem",
                  
              }}
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            
          >
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              Appointment
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white" }}
              style={{ color: "white" }}
            >
              Make an Appintment Today
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AppointmentBanner;
