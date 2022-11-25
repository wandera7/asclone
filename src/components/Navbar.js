import React from "react";
import { NavLink,useHistory,Redirect } from "react-router-dom";
function Navbar(){
    return(
        <div className="bg-gray-300  p-5">
            <NavLink className="p-3" exact to='/'>HOME</NavLink>
            <NavLink exact className="p-3" to='/login'>LOGIN</NavLink>
            <NavLink exact to='/signup'>SIGNUP</NavLink>
        </div>
    )

}

export default Navbar;
