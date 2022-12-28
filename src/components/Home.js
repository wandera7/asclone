import React from "react";

function Home(){
    return (
        // <div className="text-6xl mt-6 ml-9">
        //     JJ IS A G
        // </div>
        <div className="w-full min-h-screen font-sans">
        <div className="px-6 bg-primary-200 ">
           <div className="flex items-center justify-between py-7">
            <nav className="flex items-center space-x-10">
            <a href="logo"  className="text-white">Rick</a>
            </nav>
           </div>
        </div>
        <div className="px-6">
        <div className="flex">
            <div className="w-1/2 pr-8 pt-24">
                <h1 className="text-6xl font-bold font-display" >Build better , build safer </h1>
                <p className="pt-8 max-w-md text-xl leading-relaxed">
                Building a house requires a qualified foreman,
                we're her to help you get started with the most qualified</p>
                <div>
                    <button>Get yours today</button>
                </div>
            </div>
        </div>
        </div>
        </div>

    )
}


export default Home;
