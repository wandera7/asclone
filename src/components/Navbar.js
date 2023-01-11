import React from "react";
import { NavLink } from "react-router-dom";
import {BiLogIn} from "react-icons/bi"
import {SiGnuprivacyguard} from "react-icons/si"
function Navbar (){
    return(
        <div className="bg-primary-200 p-5 flex justify-end">
            <NavLink className="p-3 text-white ml-32 " exact to='/'>HOME</NavLink>
            <NavLink className="p-3" exact to='/loginpage'>LOGIN</NavLink>
            <NavLink className="p-3"exact to='/signup'>SIGNUP</NavLink>
        </div>
    )

}

export default Navbar;
