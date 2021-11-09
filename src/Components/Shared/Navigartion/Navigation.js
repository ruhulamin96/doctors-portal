import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navigation() {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/appointment">
              <Button color="inherit">Appoinment</Button>
            </Link>
           { user.email && <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>}
            {user.email && <Typography>{user.displayName}</Typography>}
          
            {user.email ? (
              <Button  color="inherit" onClick={logOut}>logout</Button>
            ) : (
              <Link to="/login">
                <Button
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navigation;
