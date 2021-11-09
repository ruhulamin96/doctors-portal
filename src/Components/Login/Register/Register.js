import { Button, Container, Grid, TextField, Typography,Box,Alert } from "@mui/material";
import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Register() {
  const [loginData, setLoginData] = useState({});
  const history=useHistory();
  const { registerUser, authError, user } = useAuth();
  const handleOnBlur = (e) => {
    
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleForm = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    
    e.preventDefault();
  };

  return (
    <div>
      <Container style={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body1">Create Account</Typography>
            <form onSubmit={handleForm}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
                type="text"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
                type="email"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "75%", m: 1 }}
              >
                Submit
              </Button>
            </form>
            <Typography>
              Are you new here?
              <Link to="/login">Login</Link>
            </Typography>
            <Box>
          {user.email && <Alert severity="success">Created Account Successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
