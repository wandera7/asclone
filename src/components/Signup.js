import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Signup(){
    const history = useHistory();
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
        <form onSubmit={handleSubmit} className="p-5">
       Name <input type="text" className="bg-gray-500 m-3" name="name" value={signup.name} onChange={handleChange}/><br/>
       Password <input type="text" className="bg-gray-500 m-3" name="password" value={signup.password} onChange={handleChange}/> <br/>
       PasswordConfirm <input type="text" className="bg-gray-500 m-3" name="passwordconfirm" value={signup.passwordconfirm} onChange={handleChange}/> <br/>
       <input type="submit" className="bg-red-500" value="SignUp"/>
        </form>
    )

}



export default Signup;
