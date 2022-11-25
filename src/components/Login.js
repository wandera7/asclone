import React, { useState } from "react";
import { useHistory} from "react-router-dom";
function Login(){
    const history =useHistory()
    const [login,setLogin] = useState({
        name: "",
        password: ""
    })
    function handleChange(e){
        setLogin({...login, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        setLogin({...login, name: " ",password:" "});
        history.push('/userpage');
    }
    return(
        <form onSubmit={handleSubmit}  >
       Username: <input type="text" name="name" value={login.name} onChange={handleChange}/>
       Password: <input type="text" name="password" value={login.password} onChange={handleChange}/>
       <input type="submit" value="Login"/>
        </form>
    )
}

export default Login;
