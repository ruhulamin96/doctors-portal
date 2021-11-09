import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import Navigation from "./Components/Shared/Navigartion/Navigation";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Appointment/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/appointment">
              <Navigation></Navigation>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Navigation></Navigation>
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Navigation></Navigation>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
