import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserPlus,
  FaHome,
  FaBookOpen,
  FaPalette,
  FaHandsHelping,
  FaInfoCircle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [user, setUser] = useState(null);

  const location = useLocation();

  // Decode JWT on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
        { path: "/programs/nipam", label: "YUVAMANTHAN NIPAM Programme" },
        { path: "/program/modelg20", label: "YUVAMANTHAN Model G20" },
        { path: "/program/cleanAir", label: "YUVAMANTHAN Air Quality Awareness" },
        { path: "/program/ymun", label: "Yuvamanthan Model United Nations" },
        // { path: "/programs/hackathon", label: "Innovation Hackathon" }
      ]
    },
    {
      label: "Themes",
      icon: <FaPalette className="md:hidden" />
    },
    {
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
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
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
            <Link to="/" className="flex items-center space-x-3">
              <img src={Logo} alt="Yuvamanthan Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-[#8B4513]">Yuvamanthan</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path || "#"}
                    className="px-4 py-3 font-semibold text-gray-700 hover:text-[#8B4513]"
                  >
                    {item.label}
                    {item.dropdown && <FaChevronDown className="inline ml-1 text-xs" />}
                  </Link>

                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute bg-white shadow-xl rounded-xl mt-2 w-64 py-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-5 py-2 hover:bg-orange-50"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* DESKTOP AUTH */}
            {user ? (
              <div className="hidden lg:flex w-11 h-11 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white font-bold items-center justify-center">
                {user.firstname?.charAt(0).toUpperCase() || "U"}
              </div>
            ) : (
              <Link
                to="/register"
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-6 py-3 rounded-full font-bold"
              >
                <FaUserPlus />
                Register Now
              </Link>
            )}

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              {isOpen ? <FaTimes /> : <FaBars />}
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
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path || "#"}
                    className="block font-semibold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
