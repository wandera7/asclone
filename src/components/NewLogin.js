import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import { LockIcon, UserIcon } from "./Icons";
import logo from '../assets/logo.png'
function NewLogin({user,setUser}){
    console.log(user);
    const history =useHistory()
    const [errors,setErrors] = useState({})
    const [login,setLogin] = useState({
        name: "",
        password: ""
    })
    function handleChange(e){
        setLogin({...login, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("/login",{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify( { user:{
                username: login.name,
                password:login.password,
            }})
        })
        .then((r)=>{
            if (r.ok){
                r.json().then((user)=>{
                    console.log(user)
                    setUser(true);
                    history.push('/userpage');
                });
            }else{
                r.json().then((err)=>{
                    console.log(err.message)
                    setErrors((errors)=>{
                        return {...errors,err}
                    })
                    console.log(errors.err.message);
                });
            }
        })
        setLogin({...login, name: " ",password:""});
    }

    return (

        <div className="flex justify-between min-h-screen">
        <div className="hidden lg:block w-1/2 bg-cover bg-center back" ></div>
        <div className="flex-1 mx-auto max-w-2xl ">
        <div className="flex flex-col px-8 lg:px-14 xl:px-24 pt-10">
        <h3 className="self-center md:self-end w-32"> MY FOREMAN</h3>
        <div className="pt-20 pb-3">
        <h1 className="text-3xl font-bold tracking-wide leading leading-loose">
            Hi, Welcome Back!
        </h1>
        <img source={logo} alt="Logo"/>
        <span className="font-light text-gray-500">
            Login to get your foreman today
        </span>
        </div>
        <form onSubmit={handleSubmit} >
        <div className="pt-6">
            <label htmlFor="username" >Username</label>
            <div className="flex items-center mt-2 w-full rounded-lg border border-gray-400"   >
             <div className="flex justify-center items-center pl-6">
               <UserIcon className=" w-8 h-8  pointer-events-none" />
            </div>
             <input
              type="text"
              name="name"
              id="username"
              required
              placeholder="Enter your username"
              className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 focus-within:shadow-lg"
              value={login.name}
              onChange={handleChange}/>
            </div>
        </div>
        <div className="pt-6">
            <label htmlFor="password" >Password</label>
            <div className="flex items-center mt-2 w-full rounded-lg border border-gray-400" >
             <div className="flex justify-center items-center pl-6">
                  <LockIcon className=" w-6 h-6  pointer-events-none" />
            </div>
            <input
             type="password"
             name="password"
             required
             placeholder="Enter your password"
             className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0  focus-within:shadow-lg"
             value={login.password}
             onChange={handleChange}/>
            </div>
        </div>
        <div className="flex justify-between items-center pt-4">
        <div className="flex items-center" >
        <input type="checkbox"
        name="remember"
        className="w-5 h-5  bg-white rounded border border-gray-400 focus:outline-none focus"
        id="remember"/>
        <label htmlFor="remember" className="pl-2 font-light text-gray-900">Remember me</label>
        </div>
        </div>
        <div className="pt-8">
        <button type="submit" className="py-4 px-8 w-full text-white bg-primary-200 rounded-lg shadow-lg hover:bg-primary-300 focus:ring-4  ">
        Sign In
        </button>
        </div>
        </form>
        <div className="pt-4">
        <div className="font-light text-center text-gray-600">
            Not registered yet ?
                <Link to="/signup"  className=" pl-2 font-normal text-teal-500 hover:text-teal-600" >Create an account</Link>
        </div>
        <div className="flex justify-between items-center pt-14 flex-wrap text-center whitespace-nowrap gap-y-2">
        <span className="flex-1 text-gray-500">2022 Foreman.   All rights reserved.</span>
            <span className="flex flex-1 items-center space-x-1 justify-center ">
                <a href="/" className=" text-gray-500 hover:text-gray-600">  Terms of service </a>
                <span  className=" text-gray-500 ">&#183;</span>
                <a href="#/"  className=" text-gray-500 hover:text-gray-600" > Privacy Policy </a>
            </span>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default NewLogin;
