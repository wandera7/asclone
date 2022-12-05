import React from "react";

function Foreman({man}){
    const {name, img, summary , age , location} = man;
    return(
        <div>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{age}</h4>
        <img src={img} alt="Foreman pic"/>
        <p>{summary}</p>
        </div>
    )
}

export default Foreman;
