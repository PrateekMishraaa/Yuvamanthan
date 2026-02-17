import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCog, FaChartBar, FaUsers, FaUniversity, FaCalendarAlt, FaRocket } from "react-icons/fa";

const Admin = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <FaChartBar className="text-xl sm:text-2xl" />, label: "Analytics" },
    { icon: <FaUsers className="text-xl sm:text-2xl" />, label: "User Management" },
    { icon: <FaUniversity className="text-xl sm:text-2xl" />, label: "Institutions" },
    { icon: <FaCalendarAlt className="text-xl sm:text-2xl" />, label: "Events" },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white px-4 sm:px-6 lg:px-8">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-2 border-white rounded-full"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-full border-2 border-white/20">
              <FaCog className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white animate-spin-slow" />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-wide">
            🚧 <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-200">Coming Soon</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Admin dashboard is under development.  
            We're working hard to bring powerful analytics and controls for you.
          </p>

          {/* Feature Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-white/80">{feature.icon}</div>
                  <span className="text-xs sm:text-sm font-medium text-white/70">{feature.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 sm:h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mb-6 sm:mb-8 mx-auto max-w-xs sm:max-w-sm"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto text-sm sm:text-base"
          >
            <span>Back to Home</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9l9 9-9 9" />
            </svg>
          </motion.button>

          {/* Additional Info */}
          <p className="text-xs sm:text-sm text-white/40 mt-6 sm:mt-8">
            Expected release: Q2 2024 • Stay tuned for updates
          </p>
        </motion.div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Admin;