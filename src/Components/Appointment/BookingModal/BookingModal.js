import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from 'axios';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BookingModal({ open, handleClose, book, date }) {
  const { name, time } = book;
  const { user } = useAuth();
  const initalInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initalInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newbookingInfo = { ...bookingInfo };
    newbookingInfo[field] = value;
    setBookingInfo(newbookingInfo);
    console.log(newbookingInfo);
  };
  const handleForm = (e) => {
    const appoint = {
      ...bookingInfo,
      time,
      date: date.toLocaleDateString(),
      serviceName: name,
    };
    // setBookingInfo(appointment)
    axios.post("https://intense-reef-07418.herokuapp.com/appointments",appoint)
    .then(result=>{
      if(result.data.acknowledged){
        alert('Appointment Place Successfully');
      }
    });

    handleClose();
    e.preventDefault();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form action="" onSubmit={handleForm}>
          <TextField
            disabled
            sx={{ width: "90%", my: 1 }}
            label="Time"
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ width: "90%", my: 1 }}
            label="Your Name"
            name="patientName"
            onBlur={handleOnBlur}
            id="outlined-size-small"
            defaultValue={user.displayName}
            size="small"
          />
          <TextField
            sx={{ width: "90%", my: 1 }}
            label="Your Email"
            name="email"
            onBlur={handleOnBlur}
            id="outlined-size-small"
            defaultValue={user.email}
            size="small"
          />
          <TextField
            sx={{ width: "90%", my: 1 }}
            label="Phone Number"
            name="phone"
            id="outlined-size-small"
            defaultValue=""
            size="small"
          />
          <TextField
            disabled
            sx={{ width: "90%", my: 1 }}
            label="Date"
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type="submit" variant="contained" sx={{ width: "90%" }}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default BookingModal;
