import React from "react";
import HiLocationMarker from 'react-icons/hi'
import BsFillBriefcaseFill from 'react-icons/bs'
import GiSandsOfTime from 'react-icons/gi'

export function LockIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    )
}

export function UserIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    )
}
export  const attributes= [
    {
        id:1,
        heading:"Experienced",
        desc:"",
        logo:BsFillBriefcaseFill
    },
    {
        id:2,
        heading:"Location",
        desc:"",
        logo:HiLocationMarker
    },
    {
        id:3,
        heading:"Time Efficient",
        desc:"",
        logo:GiSandsOfTime
    }
]

export  const links=[
    {
        id:1,
        name:"About",
    },
    {
        id:2,
        name:"Review"
    },
    {
        id:3,
        name:"SignUp",
    }
]
