import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

function Booking({book,date}) {
    const {name, time, space}=book;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
  return (
   
      <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py:3}}>
          <Typography variant="h5" sx={{ color: "primary.main", fontWeight:"bold"}}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: "main.primary" }}>
           {time}
          </Typography>
          <Typography variant="h6">{space} Available Space</Typography>
          <Button variant="contained" onClick={handleOpen}>Book Now</Button>
        </Paper>
      </Grid>
      <BookingModal
     open={open}
      handleClose={handleClose}
      book={book}
      date={date}
      ></BookingModal>
      </>
  );
}

export default Booking;
