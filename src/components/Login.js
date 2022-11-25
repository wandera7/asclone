import React, { useState } from "react";

function Login(){
    const [login,setLogin] = useState({
        name: "",
        password: ""
    })
    function handleChange(e){
        setLogin({...login, [e.target.name]:e.target.value})
    }
    return(
        <form>
       Username: <input type="text" name="name" value={login.name} onChange={handleChange}/>
       Password: <input type="text" name="password" value={login.password} onChange={handleChange}/>
       <input type="submit" value="Login"/>
        </form>
    )
}

export default Login;
