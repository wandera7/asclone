import React from "react";
import { Link,Redirect } from "react-router-dom";
function Userpage({user}){
    if (!user) return <Redirect to="/loginpage" />
    const id=2
    return(
        <div className="text-gray-600">
            Welcome new user
            <h5>...<Link to={`/foreman/${id}`}>ReadMore</Link></h5>
        </div>
    )
}

export default Userpage;
