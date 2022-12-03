import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Userpage from "./components/Userpage";
import Details from "./components/Details";
import NewLogin from "./components/NewLogin";
function App() {
  const [user,setUser] = useState(false)
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <Switch>
        <Route  exact path="/">
        <Home/>
        </Route>
        <Route exact path="/loginpage">
        <NewLogin user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/signup">
        <Signup/>
        </Route>
        <Route exact path="/userpage">
        <Userpage  user={user}/>
        </Route>
        <Route exact path={`/foreman/:id`}>
        <Details user={user}/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
