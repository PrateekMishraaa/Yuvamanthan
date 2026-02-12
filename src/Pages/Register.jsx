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
  const [selectedRole, setSelectedRole] = useState("");
  console.log('selected role',selectedRole)
  // console.log('set selected role',setSelectedRole)
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    role:""
  });
console.log("This is role based form data",formData)
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.mobile || !formData.password || !formData.role) {
      Swal.fire("Error", "All fields are required", "error");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Error", "Please enter a valid email address", "error");
      return false;
    }

    // Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      Swal.fire("Error", "Please enter a valid 10-digit mobile number", "error");
      return false;
    }

    // Password validation (minimum 6 characters)
    if (formData.password.length < 6) {
      Swal.fire("Error", "Password must be at least 6 characters long", "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Prepare data for backend (only the fields your API expects)
      const backendData = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        role: formData.role
        // Do NOT send role-specific fields as your backend doesn't expect them yet
      };

      console.log("Sending to backend:", backendData);

      const response = await axios.post(
        "https://yuvamanthanbackend.onrender.com/api/register",
        backendData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
console.log("respose",response)
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: `Welcome to Yuvamanthan! Your ${formData.role} account has been created successfully.`,
        confirmButtonColor: "#8B4513"
      }).then(() => {
        navigate("/login");
      });

    } catch (error) {
      console.log("Registration error:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid request. Please check your input.";
      } else if (error.response?.status === 205) {
        errorMessage = "User already exists with this email.";
      }
      
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
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
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-[#6A3E2E] mb-2">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Yuvamanthan</span> Movement
            </h1>
            <p className="text-[#8B4513]/80">
              Register and be part of India's largest youth empowerment platform
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#6A3E2E]/10">
            <div className="md:flex">
              {/* Left Side - Role Selection */}
              <div className="md:w-2/5 bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Select Your Role</h2>
                <p className="text-white/80 mb-8">
                  Choose how you want to participate in Yuvamanthan
                </p>

                <div className="space-y-4">
                  {[
                    {
                      id: "student",
                      title: "Student",
                      description: "Participate in events and learning programs",
                      icon: "🎓"
                    },
                    {
                      id: "teacher",
                      title: "Teacher/Educator",
                      description: "Guide students and access resources",
                      icon: "👨‍🏫"
                    },
                    {
                      id: "institution",
                      title: "Institution",
                      description: "Register your school/college",
                      icon: "🏛️"
                    }
                  ].map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => handleRoleChange(role.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        selectedRole === role.id
                          ? "bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white shadow-lg"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${
                          selectedRole === role.id ? "bg-white/20" : "bg-white/10"
                        }`}>
                          <span className="text-xl">{role.icon}</span>
                        </div>
                        <h3 className="font-bold text-lg">{role.title}</h3>
                      </div>
                      <p className="text-sm opacity-90">{role.description}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    Already have an account?{" "}
                    <span
                      onClick={() => navigate("/login")}
                      className="text-[#FFD700] font-semibold cursor-pointer hover:underline"
                    >
                      Login here
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Side - Registration Form */}
              <div className="md:w-3/5 p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                    <span className="text-sm font-semibold text-[#6A3E2E]">
                      Registering as: <span className="capitalize">{selectedRole}</span>
                    </span>
                  </div>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="9876543210"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        className="w-full px-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                        required
                      />
                    </div>
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
                      placeholder="Enter your password (min. 6 characters)"
                      minLength="6"
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

                  {/* Role field (hidden) */}
                  <input
                    type="hidden"
                    name="role"
                    value={selectedRole}
                    onChange={handleChange}
                  />

                  {/* Note about role-specific info */}
                  <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-xl p-4 border border-[#FFA500]/20">
                    <p className="text-sm text-[#8B4513]">
                      <span className="font-semibold">Note:</span> Complete your profile after registration to add {selectedRole}-specific information.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-2 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-xl uppercase hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Registering...
                      </span>
                    ) : (
                      `Register as ${selectedRole}`
                    )}
                  </button>
                </form>

                <p className="text-center text-sm text-[#8B4513]/60 mt-6">
                  By registering, you agree to our{" "}
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
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center">
              <div className="text-2xl font-bold text-[#6A3E2E]">2.4M+</div>
              <div className="text-sm text-[#8B4513]/80">Students Registered</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center">
              <div className="text-2xl font-bold text-[#6A3E2E]">50K+</div>
              <div className="text-sm text-[#8B4513]/80">Institutions</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 text-center">
              <div className="text-2xl font-bold text-[#6A3E2E]">5K+</div>
              <div className="text-sm text-[#8B4513]/80">Teachers</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Register;