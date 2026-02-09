import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaUserPlus, FaHome, FaBookOpen, FaPalette, FaHandsHelping, FaInfoCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <FaHome className="md:hidden" />
    },
    {
      path: "/programs",
      label: "Programs",
      icon: <FaBookOpen className="md:hidden" />,
      dropdown: [
        { 
          // path: "/programs/yuvamanthan",
           label: "Yuva manthan" },
        { 
          // path: "/programs/nipam", 
          label: "NIPAM Programme" },
        {
          //  path: "/programs/g20", 
          label: "Yuva manthan G20" },
        { 
          // path: "/programs/air-quality",
           label: "Air Quality Champions" },
        { 
          // path: "/programs/un",
           label: "Yuva manthan UN" },
        { 
          // path: "/programs/hackathon",
           label: "Innovation Hackathon" }
      ]
    },
    {
      // path: "/themes",
      label: "Themes",
      icon: <FaPalette className="md:hidden" />
    },
    {
      // path: "/engage",
      label: "Engage",
      icon: <FaHandsHelping className="md:hidden" />
    },
    {
      path: "/about",
      label: "About",
      icon: <FaInfoCircle className="md:hidden" />
    }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-2" 
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Y</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Yuvamanthan
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Empowering Youth for Viksit Bharat</p>
                </div>
              </Link>
            </motion.div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                      location.pathname === item.path
                        ? "text-[#8B4513] bg-gradient-to-r from-orange-50 to-amber-50"
                        : "text-gray-700 hover:text-[#8B4513] hover:bg-gray-50"
                    }`}
                  >
                    <span className="mr-1">{item.label}</span>
                    {item.dropdown && (
                      <FaChevronDown className={`text-xs transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-center px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-[#8B4513] transition-colors group/item"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
                          <span className="font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* DESKTOP CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Link
                to="/register"
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] text-white px-8 py-3.5 rounded-full font-bold uppercase text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E07B00] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaUserPlus className="relative z-10" />
                <span className="relative z-10">Register Now</span>
                <div className="absolute -right-2 w-8 h-8 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </Link>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
            >
              {isOpen ? (
                <FaTimes className="text-2xl text-[#8B4513]" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-xl"
            >
              <div className="px-4 py-6">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    {item.dropdown ? (
                      <div className="mb-2">
                        <button
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )}
                          className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon}
                            <span className="font-semibold text-gray-800">{item.label}</span>
                          </div>
                          <FaChevronDown className={`transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="ml-8 mt-2 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-[#8B4513] transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-[#E07B00] rounded-full mr-3"></div>
                                <span>{subItem.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors mb-2"
                      >
                        {item.icon}
                        <span className={`font-semibold ${
                          location.pathname === item.path
                            ? "text-[#8B4513]"
                            : "text-gray-800"
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* MOBILE CTA BUTTON */}
                <motion.div variants={itemVariants} className="mt-6">
                  <Link
                    to="/register"
                    className="block w-full bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white text-center py-4 rounded-xl font-bold uppercase shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <FaUserPlus />
                      <span>Register Now</span>
                    </div>
                  </Link>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <p>Join 2.4M+ students already registered</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SPACER FOR FIXED NAVBAR */}
      <div className="h-20"></div>

      {/* SCROLL INDICATOR */}
      <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8B4513] to-[#E07B00]"
          initial={{ width: "0%" }}
          animate={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </>
  );
};

export default Navbar;