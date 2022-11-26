import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div className="bg-blue-800 p-5 flex justify-end">

            <NavLink className="p-3 text-white ml-32 " exact to='/'>HOME</NavLink>
            <NavLink exact className="p-3   " to='/login'>LOGIN</NavLink>
            <NavLink exact to='/signup' className="p-3 ">SIGNUP</NavLink>
        </div>
    )

}

export default Navbar;
