import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardMedia, Container } from "@mui/material";

function Services() {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        
        setServices(data);
      });
  }, []);
  return (
    <div>
      <Container>
          <Typography sx={{color:"primary.main", fontSize:'h5.fontSize', mt:3}}>
              Our Services
          </Typography>
          <Typography sx={{color:"primary.main", fontSize:'h4.fontSize', fontWeight:"bold"}}>
            SERVICES WE PROVIDE
          </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services?.map((service, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ minWidth: 275, border:0,boxShadow:0 }} style={{ marginTop: "2rem" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      style={{
                        width: "auto",
                        height: "20vh",
                        margin: "0 auto",
                      }}
                      image={service?.img}
                      alt="green iguana"
                    />
                    <Typography variant="h5" component="div">
                      {service?.name}
                    </Typography>

                    <Typography variant="body2">{service?.desc}</Typography>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Services;
