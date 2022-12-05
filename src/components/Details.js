import React, { useEffect, useState } from "react";
import {Redirect, useParams} from "react-router-dom";
function Details({user}){
    const params = useParams();
    const [person,setPerson] = useState({})
    useEffect(()=>{
        fetch('')
        .then((r)=>{
            if(r.ok){
                r.json().then((foreman)=>setPerson(foreman))
            }else{
                r.json().then((err)=>console.log(err))
            }
        })
    },[params.id])
    if (!user) return <Redirect to="/loginpage" />
    return(
        <div>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <h4>{person.summary}</h4>
        <h3>{person.reviews}</h3>
        </div>
    )
}

export default Details;
