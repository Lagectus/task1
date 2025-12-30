import React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
export default function LandingPage() {
  return (
    <>

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-10 text-white">
        <div className="bg-black rounded-2xl w-4xl ml-44 h-14"> <Navbar /></div>
       
        <div className="text-center max-w-3xl mt-20 mx-auto">
          <p className="text-sm text-gray-400 mb-4">+100 happy customers</p>

          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            AI <span className="text-purple-400">Readiness</span> Score <br />
            For <span className="text-orange-400">Growth Stage</span> Companies
          </h1>

          <p className="text-gray-400 mb-10">
            Understand how ready your business is to use AI across systems,
            team, and data. Get a clear score, see what breaks first, and know
            exactly what to fix.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
              Get My AI Readiness Score
            </button>

            <button className="border border-gray-600 text-black px-6 py-3 rounded-full">
              Request Callback →
            </button>
          </div>
        </div>
        <Card />  
        
      </div>
      </div>
    </>
  );
}
