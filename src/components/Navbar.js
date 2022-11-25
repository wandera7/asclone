import React from "react";
import {Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navabr navbar-nav">
            <nav>
            <Link to="/">Link</Link>
            <Link to="/login">Link</Link>
            <Link to="/signup">Link</Link>
            </nav>
        </div>
    )

}

export default Navbar;
