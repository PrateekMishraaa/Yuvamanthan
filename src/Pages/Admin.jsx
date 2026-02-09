import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6">
        
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          🚧 Coming Soon
        </h1>

        <p className="text-lg text-gray-300 text-center max-w-xl mb-8">
          Admin dashboard is under development.  
          We're working hard to bring powerful analytics and controls for you.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition transform hover:scale-105"
        >
          Back to Home
        </button>

      </div>
    </>
  );
};

export default Admin;
