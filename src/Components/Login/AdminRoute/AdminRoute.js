import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function AdminRoute({ children, ...rest }) {
  const { user, isLoading, isAdmin } = useAuth();
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
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
