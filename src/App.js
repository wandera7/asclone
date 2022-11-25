import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route  exact path="/">
        <Home/>
        </Route>
        <Route exact path="/login">
        <Login  />
        </Route>
        <Route exact path="/signup">
        <Signup  />
        </Route>
      </Switch>

    </>
  );
}

export default App;
