import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Userpage from "./components/Userpage";
import Details from "./components/Details";
import NewLogin from "./components/NewLogin";
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route  exact path="/">
        <Home/>
        </Route>
        <Route exact path="/loginpage">
        <NewLogin/>
        </Route>
        <Route exact path="/signup">
        <Signup/>
        </Route>
        <Route exact path="/userpage">
        <Userpage/>
        </Route>
        <Route exact path={`/foreman/:id`}>
        <Details/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
