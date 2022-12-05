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
        <h3>Name:</h3>
        <h4>Age:</h4>
        <h3>Image</h3>
        <h4>Rating</h4>
        </div>
    )
}

export default Details;
