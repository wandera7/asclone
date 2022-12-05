import React from "react";
import { Link } from "react-router-dom";
function Foreman({man}){
    const {id,name, img, summary , age , location} = man;
    return(
        <div>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{age}</h4>
        <img src={img} alt="Foreman pic"/>
        <p>
        {summary}
        <h5>...<Link to={`/foreman/${id}`}>ReadMore</Link></h5>
        </p>
        </div>
    )
}

export default Foreman;
