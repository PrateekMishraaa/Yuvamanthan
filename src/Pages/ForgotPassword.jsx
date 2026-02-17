import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowLeft, FaEnvelope, FaCheckCircle, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password, 4: Success
  const [loading, setLoading] = useState(false);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2); // Move to OTP step
    }, 1500);
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Move to new password step
    }, 1500);
  };

  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate password reset
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Move to success step
    }, 1500);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFEDD5] px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <button
              onClick={handleBackToLogin}
              className="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#6A3E2E] mb-3 sm:mb-4 transition-colors"
            >
              <FaArrowLeft className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm font-semibold">Back to Login</span>
            </button>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6A3E2E] mb-2">
              Reset Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Password</span>
            </h1>
            <p className="text-[#8B4513]/80 text-sm sm:text-base">
              Follow the steps to reset your Yuvamanthan account password
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 sm:mb-10 relative px-2 sm:px-0">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#6A3E2E]/10 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] -translate-y-1/2 z-10 transition-all duration-500"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>

            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="relative z-20">
                <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  stepNumber < step 
                    ? 'bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] border-[#6A3E2E] text-white'
                    : stepNumber === step
                    ? 'bg-white border-[#8B4513] text-[#8B4513]'
                    : 'bg-white border-[#6A3E2E]/30 text-[#6A3E2E]/30'
                }`}>
                  {stepNumber < step ? (
                    <FaCheckCircle className="text-xs sm:text-sm" />
                  ) : (
                    <span className="font-bold text-xs sm:text-sm">{stepNumber}</span>
                  )}
                </div>
                <div className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-medium">
                  {stepNumber === 1 && "Email"}
                  {stepNumber === 2 && "Verify"}
                  {stepNumber === 3 && "New Pass"}
                  {stepNumber === 4 && "Success"}
                </div>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <motion.div 
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#6A3E2E]/10 p-5 sm:p-6 md:p-8"
          >
            {/* Step 1: Email Input */}
            {step === 1 && (
              <div>
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <FaEnvelope className="text-xl sm:text-2xl text-[#8B4513]" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-1 sm:mb-2">Enter Your Email</h2>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm">
                    We'll send a verification code to your registered email address
                  </p>
                </div>

                <form onSubmit={handleSubmitEmail}>
                  <div className="mb-4 sm:mb-6">
                    <label className="block text-xs sm:text-sm font-semibold text-[#6A3E2E] mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                        <FaEnvelope className="text-sm sm:text-base" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-lg sm:rounded-xl uppercase hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-xs sm:text-sm">Sending...</span>
                      </span>
                    ) : (
                      "Send Verification Code"
                    )}
                  </button>
                </form>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#6A3E2E]/10">
                  <p className="text-center text-xs sm:text-sm text-[#8B4513]/60">
                    Remember your password?{" "}
                    <span
                      onClick={handleBackToLogin}
                      className="text-[#6A3E2E] font-semibold cursor-pointer hover:underline"
                    >
                      Login here
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <div>
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#8B4513]">OTP</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-1 sm:mb-2">Verify Your Email</h2>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm mb-1 sm:mb-2 break-all">
                    We've sent a 6-digit code to <span className="font-semibold text-[#6A3E2E]">{email}</span>
                  </p>
                  <p className="text-xs text-[#8B4513]/60">Enter the code below to continue</p>
                </div>

                <form onSubmit={handleSubmitOTP}>
                  <div className="mb-4 sm:mb-6">
                    <label className="block text-xs sm:text-sm font-semibold text-[#6A3E2E] mb-2 sm:mb-3">
                      6-Digit Verification Code *
                    </label>
                    <div className="flex gap-1 sm:gap-2 md:gap-3 justify-center">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center text-base sm:text-lg md:text-xl font-bold border-2 border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                          required
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6 text-center">
                    <p className="text-xs sm:text-sm text-[#8B4513]/80">
                      Didn't receive the code?{" "}
                      <button type="button" className="text-[#6A3E2E] font-semibold hover:underline">
                        Resend
                      </button>
                    </p>
                    <p className="text-[10px] sm:text-xs text-[#8B4513]/60 mt-1 sm:mt-2">Resend available in 00:59</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-lg sm:rounded-xl uppercase hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-xs sm:text-sm">Verifying...</span>
                      </span>
                    ) : (
                      "Verify Code"
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
              <div>
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <FaKey className="text-xl sm:text-2xl text-[#8B4513]" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-1 sm:mb-2">Create New Password</h2>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm">
                    Create a strong password to secure your account
                  </p>
                </div>

                <form onSubmit={handleSubmitNewPassword}>
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-[#6A3E2E] mb-1 sm:mb-2">
                        New Password *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                          <FaKey className="text-sm sm:text-base" />
                        </div>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#8B4513]/60 mt-1">
                        Must be at least 8 characters with letters and numbers
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-[#6A3E2E] mb-1 sm:mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                          <FaKey className="text-sm sm:text-base" />
                        </div>
                        <input
                          type="password"
                          placeholder="Re-enter new password"
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-lg sm:rounded-xl uppercase hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-xs sm:text-sm">Updating...</span>
                      </span>
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] flex items-center justify-center mb-4 sm:mb-6"
                >
                  <FaCheckCircle className="text-xl sm:text-2xl md:text-3xl text-white" />
                </motion.div>

                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">Password Reset Successful!</h2>
                
                <p className="text-[#8B4513]/80 text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
                  Your password has been successfully reset. You can now login with your new password.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={handleBackToLogin}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-lg sm:rounded-xl uppercase hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                  >
                    Login to Your Account
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className="w-full py-2.5 sm:py-3 border-2 border-[#6A3E2E]/20 text-[#6A3E2E] font-bold rounded-lg sm:rounded-xl uppercase hover:bg-[#FFF7ED] transition-all duration-300 text-xs sm:text-sm"
                  >
                    Return to Homepage
                  </button>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#6A3E2E]/10">
                  <p className="text-xs text-[#8B4513]/60">
                    If you didn't request this password reset, please contact our support team immediately.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Security Note */}
          <div className="mt-4 sm:mt-6 bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#FFA500]/20">
            <h3 className="font-bold text-[#6A3E2E] text-xs sm:text-sm mb-1 sm:mb-2">Security Tips:</h3>
            <ul className="text-[10px] sm:text-xs text-[#8B4513] space-y-0.5 sm:space-y-1">
              <li>• Never share your password with anyone</li>
              <li>• Use a combination of letters, numbers, and special characters</li>
              <li>• Avoid using personal information in your password</li>
              <li>• Consider using a password manager for better security</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-[10px] sm:text-xs text-[#8B4513]/60">
              Need help?{" "}
              <button className="text-[#6A3E2E] font-semibold hover:underline text-xs sm:text-sm">
                Contact Support
              </button>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPassword;