import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link,  useHistory,useLocation} from "react-router-dom";
import login from "../../images/login.png";
import useAuth from "../hooks/useAuth";

const verticalAlign = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
function Login() {
  const [loginData, setLoginData] = useState({});
  const { isLoading, logIn, user, authError, googleLogIn } = useAuth();
  const history = useHistory();
  const location=useLocation();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };
  const handleForm = (e) => {
    logIn(loginData.email, loginData.password, location, history);
   
    e.preventDefault();
  };
const handleGoogleLogIn=()=>{
  googleLogIn(location, history);
}

  return (
    <Container>
      <Grid container spacing={2} style={verticalAlign}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Login</Typography>
          <form onSubmit={handleForm}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
              type="email"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              name="password"
              onBlur={handleOnChange}
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
            <p>---------------------</p>
            <Button onClick={handleGoogleLogIn} variant="contained">Google Sign In</Button>
          </form>
          <Typography>
            Are you new here?
            <Link to="/register">Create Account</Link>
          </Typography>
          <Box>
            {user.email && <Alert severity="success">Login Success</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>

        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: "100%", height: "90vh" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
