import React from "react";
import { Link } from "react-router-dom";
function Home(){
    const links=[
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
    return (
        <div className="w-full min-h-screen font-sans">
        <div className="px-6 bg-primary-200 ">
           <div className="flex items-center justify-between py-7">
           <h2 className=" text-4xl text-white">MY FOREMAN</h2>
            <nav className="flex items-center space-x-10">
            {
                links.map(({id,name})=>(
            <a href="logo" key={id}  className="text-white">{name}</a>

                ))
            }
            </nav>
           </div>
        </div>
        <div className="px-6">
        <div className="flex ">
            <div className="w-1/2 pr-8 pt-10 ml-1">
                <h1 className="text-6xl font-bold font-display" >Start building today, with a skilled and verified  foreman </h1>
                <p className="pt-8 max-w-md text-2xl leading-relaxed">
                Building a house requires a qualified foreman,
                we're here to help you get started with the most qualified foremen in the industry</p>
                <div  className="flex items-center pt-8 space-x-6">
                    <Link to="/loginpage" className="flex justify-center hover:shadow-xl items-center px-4 py-4 bg-primary-200 rounded-xl font-bold tracking-wide leading-7 text-white">Get yours today</Link>
                </div>
            </div>
            <div className="back2 flex items-end ">

            </div>
        </div>
        <div>
            <div className="py-12 px-6 mx-auto max-w-6xl">
                <div className="flex gap-x-5">
                    <div className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-3">
                        <h1 className="text-xl ">Work Description</h1>
                        </div>
                        <p className="text-sm leading-relaxed">

                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}


export default Home;
