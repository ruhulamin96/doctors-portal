import React from "react";
import chair from "../../images/chair.png";
import bg from "../../images/bg.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, Button, Container } from "@mui/material";
const bgimage = {
  backgroundImage: `url(${bg})`,
  width: "100%",
};
const verticalAlign = {
  display: "flex",
  alignItems: "center",
  height: "30rem",
  
};

function Banner() {
  return (
    <div>
      <Container sx={{ flexGrow: 1 }}  style={{borderRight:"20rem solid rgba(45,58,75, 0.9)", marginTop:"2rem"}}>
        <Grid container spacing={2} style={bgimage}>
          <Grid item xs={12} md={6} sx={{ ...verticalAlign,textAlign: "left" }}>
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="h5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto omnis voluptate perferendis sed autem eos earum
                tempore explicabo commodi odio?
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(56,89,26)" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{...verticalAlign}}>
            <img src={chair} alt="" style={{ width: "100%", height:"40vh", position:"relative", marginLeft:"200px" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
