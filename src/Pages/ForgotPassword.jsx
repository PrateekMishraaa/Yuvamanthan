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

      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFEDD5] p-4">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={handleBackToLogin}
              className="inline-flex items-center gap-2 text-[#8B4513] hover:text-[#6A3E2E] mb-4 transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              <span className="text-sm font-semibold">Back to Login</span>
            </button>
            
            <h1 className="text-4xl font-extrabold text-[#6A3E2E] mb-2">
              Reset Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Password</span>
            </h1>
            <p className="text-[#8B4513]/80">
              Follow the steps to reset your Yuvamanthan account password
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#6A3E2E]/10 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] -translate-y-1/2 z-10 transition-all duration-500"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>

            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="relative z-20">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  stepNumber < step 
                    ? 'bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] border-[#6A3E2E] text-white'
                    : stepNumber === step
                    ? 'bg-white border-[#8B4513] text-[#8B4513]'
                    : 'bg-white border-[#6A3E2E]/30 text-[#6A3E2E]/30'
                }`}>
                  {stepNumber < step ? (
                    <FaCheckCircle className="text-sm" />
                  ) : (
                    <span className="font-bold">{stepNumber}</span>
                  )}
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium mt-2">
                  {stepNumber === 1 && "Enter Email"}
                  {stepNumber === 2 && "Verify OTP"}
                  {stepNumber === 3 && "New Password"}
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
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#6A3E2E]/10 p-8"
          >
            {/* Step 1: Email Input */}
            {step === 1 && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-4">
                    <FaEnvelope className="text-2xl text-[#8B4513]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#6A3E2E] mb-2">Enter Your Email</h2>
                  <p className="text-[#8B4513]/80">
                    We'll send a verification code to your registered email address
                  </p>
                </div>

                <form onSubmit={handleSubmitEmail}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

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
                        Sending Code...
                      </span>
                    ) : (
                      "Send Verification Code"
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-[#6A3E2E]/10">
                  <p className="text-center text-sm text-[#8B4513]/60">
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
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-[#8B4513]">OTP</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#6A3E2E] mb-2">Verify Your Email</h2>
                  <p className="text-[#8B4513]/80 mb-2">
                    We've sent a 6-digit code to <span className="font-semibold text-[#6A3E2E]">{email}</span>
                  </p>
                  <p className="text-sm text-[#8B4513]/60">Enter the code below to continue</p>
                </div>

                <form onSubmit={handleSubmitOTP}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                      6-Digit Verification Code *
                    </label>
                    <div className="flex gap-3 justify-center">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-12 h-12 text-center text-xl font-bold border-2 border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                          required
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <p className="text-sm text-[#8B4513]/80">
                      Didn't receive the code?{" "}
                      <button type="button" className="text-[#6A3E2E] font-semibold hover:underline">
                        Resend
                      </button>
                    </p>
                    <p className="text-xs text-[#8B4513]/60 mt-2">Resend available in 00:59</p>
                  </div>

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
                        Verifying...
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
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-4">
                    <FaKey className="text-2xl text-[#8B4513]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#6A3E2E] mb-2">Create New Password</h2>
                  <p className="text-[#8B4513]/80">
                    Create a strong password to secure your account
                  </p>
                </div>

                <form onSubmit={handleSubmitNewPassword}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                        New Password *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                          <FaKey />
                        </div>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full pl-12 pr-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                          required
                        />
                      </div>
                      <p className="text-xs text-[#8B4513]/60 mt-1">
                        Must be at least 8 characters with letters and numbers
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#6A3E2E] mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B4513]/60">
                          <FaKey />
                        </div>
                        <input
                          type="password"
                          placeholder="Re-enter new password"
                          className="w-full pl-12 pr-4 py-3 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

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
                        Updating...
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
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] flex items-center justify-center mb-6"
                >
                  <FaCheckCircle className="text-3xl text-white" />
                </motion.div>

                <h2 className="text-2xl font-bold text-[#6A3E2E] mb-4">Password Reset Successful!</h2>
                
                <p className="text-[#8B4513]/80 mb-8">
                  Your password has been successfully reset. You can now login with your new password.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={handleBackToLogin}
                    className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white font-bold rounded-xl uppercase hover:shadow-lg transition-all duration-300"
                  >
                    Login to Your Account
                  </button>

                  <button
                    onClick={() => navigate("/")}
                    className="w-full py-3 border-2 border-[#6A3E2E]/20 text-[#6A3E2E] font-bold rounded-xl uppercase hover:bg-[#FFF7ED] transition-all duration-300"
                  >
                    Return to Homepage
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-[#6A3E2E]/10">
                  <p className="text-sm text-[#8B4513]/60">
                    If you didn't request this password reset, please contact our support team immediately.
                  </p>
                </div>
              </div>
            )}
          </motion.div> {/* Added closing tag for motion.div */}

          {/* Security Note */}
          <div className="mt-6 bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-xl p-4 border border-[#FFA500]/20">
            <h3 className="font-bold text-[#6A3E2E] mb-2">Security Tips:</h3>
            <ul className="text-sm text-[#8B4513] space-y-1">
              <li>• Never share your password with anyone</li>
              <li>• Use a combination of letters, numbers, and special characters</li>
              <li>• Avoid using personal information in your password</li>
              <li>• Consider using a password manager for better security</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="mt-4 text-center">
            <p className="text-sm text-[#8B4513]/60">
              Need help?{" "}
              <button className="text-[#6A3E2E] font-semibold hover:underline">
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