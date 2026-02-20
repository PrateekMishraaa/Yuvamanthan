import React from "react";
import Navbar from "../../Components/Navbar.jsx";
import { Link } from "react-router-dom";

const MissionLife = () => {
  return (
    <>
      <Navbar />

      <section className="w-full flex items-center justify-center py-20">
        <div className="text-center space-y-8">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Lifestyle For Environment Initiative: LiFE
          </h1>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 border-2 border-[#E07B00] text-[#E07B00] px-6 py-3 rounded-full font-semibold hover:bg-[#E07B00] hover:text-white transition-colors"
          >
            Register Now →
          </Link>

        </div>
      </section>
    </>
  );
};

export default MissionLife;