import React from "react";
import { NavLink,useHistory,Redirect } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <NavLink exact to='/'>HOME</NavLink>
            <NavLink exact to='/login'>LOGIN</NavLink>
            <NavLink exact to='/signup'>SIGNUP</NavLink>
        </div>
    )

}

export default Navbar;
