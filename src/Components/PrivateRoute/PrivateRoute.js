import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <CircularProgress
        style={{
          position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
        }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
