import React from "react";
import { Link } from "react-router-dom";
function Userpage(){
    const id=2
    return(
        <div className="text-gray-600">
            Welcome new user
            <h5>...<Link to={`/foreman/${id}`}>ReadMore</Link></h5>
        </div>
    )
}

export default Userpage;
