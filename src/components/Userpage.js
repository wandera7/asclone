import React, { useEffect, useState } from "react";
import { Link,Redirect } from "react-router-dom";
function Userpage({user}){
    const [foremen, setForemen] = useState([]);
    useEffect(()=>{
        fetch('')
        .then((r)=>{
            if(r.ok){
                r.json().then((data)=>setForemen(data));
            }else{
                r.json().then((err)=>{
                    console.log(err);
                });

            }
        })
    },[])

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
