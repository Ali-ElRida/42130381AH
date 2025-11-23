import React from 'react'
import passport from "../assets/passport.png"
import cedrus from "../assets/cedrus.png"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <img
        src={cedrus}
        alt="Bottom Left Image"
        class="fixed bottom-0 left-0 w-24 h-24 "
      />

      <div className="max-w-3xl">
       
        <div className="p-6">
          <div className=" bg-[#438cb5]  text-white p-10 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl font-bold mb-4 font-mono">Welcome to Passport Portal</h1>
            <p className="text-lg opacity-90">
              Easily manage your passport appointment, documents, and status.
            </p>
              
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
            <div className="p-6 bg-white rounded-2xl shadow-md border transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">Book Appointment</h2>
              <p className="text-gray-600 text-sm">
                Schedule your passport appointment in a simple and fast way.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">Upload Documents</h2>
              <p className="text-gray-600 text-sm">
                Upload and submit all your required documents securely.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2">Track Status</h2>
              <p className="text-gray-600 text-sm">
                Check your application progress anytime.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            All services are secured and managed by the Passport System.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register" className="px-6 py-3 bg-[#438cb5]  text-white rounded-lg text-lg hover:bg-blue-700 transition font-['JannaLt']" >
            Get Started
          </Link>
          <Link
            to="/login" className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg text-lg hover:bg-gray-500 transition font-['JannaLt']">
            Login
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Home