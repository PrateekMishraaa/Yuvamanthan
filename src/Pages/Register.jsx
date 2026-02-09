import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      Swal.fire("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://yuvamanthanbackend.onrender.com/api/register",
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      Swal.fire("User Registration has been completed");
      navigate("/login");
    } catch (error) {
      console.log("error", error);
      Swal.fire("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-600 px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
          
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-blue-900 mb-2">
              Register
            </h1>
            <p className="text-gray-500">
              Join the Yuvamanthan movement
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                type={viewPassword ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Eye */}
              <span
                onClick={handleViewPassword}
                className="absolute right-4 top-[42px] cursor-pointer text-gray-600"
              >
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 mt-3 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white font-bold rounded-full uppercase hover:scale-105 transition"
            >
              Register
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#78434e] font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;
