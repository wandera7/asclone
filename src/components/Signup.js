import React from "react";
import { useState } from "react";
import { useHistory,Redirect } from "react-router-dom";
function Signup(){
    const history= useHistory()
    const [signup,setSignup] = useState({
        name: "",
        password: "",
        passwordconfirm:" "
    })
    function handleChange(e){
        setSignup({...signup, [e.target.name]:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        setSignup({...signup, name: " ",password:" ", passwordconfirm:" "});
        history.push('/login');
    }
    return(
        <form onSubmit={handleSubmit}>
       Name <input type="text" name="name" value={signup.name} onChange={handleChange}/>
       Password <input type="text" name="password" value={signup.password} onChange={handleChange}/>
       PasswordConfirm <input type="text" name="passwordconfirm" value={signup.passwordconfirm} onChange={handleChange}/>
       <input type="submit" value="SignUp"/>
        </form>
    )

}



export default Signup;
