import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          <ContactUs></ContactUs>
        </Route>
        <Route exact path="/">
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
