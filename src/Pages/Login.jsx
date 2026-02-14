import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [viewPassword, setViewPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log("This is login formdata", formData);
  const [loading, setLoading] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "All fields are required",
        confirmButtonColor: "#8B4513"
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const token = response.data.token;
      const userData = response.data.user || response.data.payload;

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Authentication token not received",
          confirmButtonColor: "#8B4513"
        });
        return;
      }

      // Save token and user data
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(userData));

      // Decode token to get role and user ID
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);

      // Get user ID from decoded token or userData (handle different possible field names)
      const userId = decoded.id || decoded.userId || decoded._id || userData.id || userData._id;
      const userRole = decoded.role || userData.role;

      // Store user ID in localStorage for easy access
      if (userId) {
        localStorage.setItem("userId", userId);
      } else {
        console.error("User ID not found in token or user data");
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "User ID not found in response",
          confirmButtonColor: "#8B4513"
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back, ${decoded.firstname || userData.firstname || "User"}!`,
        confirmButtonColor: "#8B4513"
      });

      // Navigate based on role with user ID in params
      switch (userRole) {
        case "admin":
          navigate(`/admin/dashboard/${userId}`);
          break;
        case "student":
          navigate(`/student/dashboard/${userId}`);
          break;
        case "teacher":
          navigate(`/teacher/personal-details/about-you/${userId}`);
          break;
        case "institution":
          navigate(`/institution/dashboard${userId}`);
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      console.log("Login error", error);

      let errorMessage = "Invalid email or password";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 404) {
        errorMessage = "User not found. Please check your email or register first.";
      } else if (error.response?.status === 403) {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid credentials provided.";
      } else if (!error.response) {
        errorMessage = "Network error. Please check your internet connection.";
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        confirmButtonColor: "#8B4513"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFEDD5] p-4">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-[#6A3E2E] mb-2">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Yuvamanthan</span>
            </h1>
            <p className="text-[#8B4513]/80">
              Login to continue your journey in youth empowerment
            </p>
          </div>

          {/* Login Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#6A3E2E]/10 p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#6A3E2E]">
                  Login to continue
                </span>
              </div>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                  Password *
                </label>
                <input
                  type={viewPassword ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                  required
                />
                <span
                  onClick={handleViewPassword}
                  className="absolute right-4 top-[42px] cursor-pointer text-[#8B4513]/60"
                >
                  {viewPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <span
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-[#8B4513] font-semibold cursor-pointer hover:underline"
                >
                  Forgot Password?
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-xl uppercase hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  "Login to Yuvamanthan"
                )}
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-8 pt-6 border-t border-[#6A3E2E]/10 text-center">
              <p className="text-sm text-[#8B4513]/80">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-[#6A3E2E] font-semibold cursor-pointer hover:underline"
                >
                  Register here
                </span>
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-6 text-center">
              <p className="text-xs text-[#8B4513]/60">
                By logging in, you agree to our{" "}
                <span className="text-[#6A3E2E] font-semibold cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#6A3E2E] font-semibold cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-[#6A3E2E]">2.4M+</div>
              <div className="text-sm text-[#8B4513]/80">Active Users</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-[#6A3E2E]">10K+</div>
              <div className="text-sm text-[#8B4513]/80">Events Conducted</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-[#6A3E2E]">450+</div>
              <div className="text-sm text-[#8B4513]/80">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;