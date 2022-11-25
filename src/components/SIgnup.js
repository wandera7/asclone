import React from "react";
import { useState } from "react";
function Signup(){
    const [signup,setSignup] = useState({
        name: "",
        password: "",
        passwordconfirm:" "
    })
    function handleChange(e){
        setSignup({...signup, [e.target.name]:e.target.value});
    }
    return(
        <form>
       Name <input type="text" name="name" value={signup.name} onChange={handleChange}/>
       Password <input type="text" name="password" value={signup.password} onChange={handleChange}/>
       PasswordConfirm <input type="text" name="passwordconfirm" value={signup.passwordconfirm} onChange={handleChange}/>
        </form>
    )

}



export default Signup;
