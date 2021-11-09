import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Booking from "../Booking/Booking";
function AvailableAppointment({ date, setDate }) {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("booking.json")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
  return (
    <div>
      <Container>
      <Typography variant="h3" sx={{color:"primary.main", my:5}}>AvailableAppointment {date.toDateString()}</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}  >
              
              {
              booking.map(book=><Booking
              key={book.id}
              book={book}
              date={date}
              ></Booking>)
              }
            
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AvailableAppointment;
