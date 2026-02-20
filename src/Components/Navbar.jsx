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
  FaInfoCircle,
  FaUser,
  FaSignInAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [user, setUser] = useState(null);

  const location = useLocation();

  // Decode JWT
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        setUser(jwtDecode(token));
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

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  // Close mobile menu on window resize (if going to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <FaHome className="lg:hidden" />
    },
    {
      label: "Programs",
      icon: <FaBookOpen className="lg:hidden" />,
      dropdown: [
        { path: "/programs/nipam", label: "NIPAM Programme" },
        { path: "/program/modelg20", label: "Model G20" },
        { path: "/program/cleanAir", label: "Air Quality Awareness" },
        { path: "/program/ymun", label: "Model United Nations" }
      ]
    },
    {
      label: "Themes",
      icon: <FaPalette className="lg:hidden" />,
      dropdown: [
        { path: "/theme/life", label: "Mission LiFE(Lifestyle of Environment in parthnership With UNDP)" },
        { path: "/theme/future-of-work", label: "Future of work" },
        { path: "/theme/peacebuilding-and-reconciliation", label: "Peacebuilding-and-Reconciliation" },
        { path: "/theme/climate-change-and-risk-disaster", label: "Climate Change And Disaster Risk Reduction" },
         { path: "/theme/health-well-being-and-sports", label: "Health, Well Being and Sports" },
         { path: "/theme/shared-future", label: "Shared Future" }
      ]
    },
    {
      label: "Engage",
      icon: <FaHandsHelping className="lg:hidden" />,
      dropdown: [
        { path: "/engage/youth-community", label: "Youth Connect" },
        { path: "/engage/yuvamanthanG20-media", label: "YMG20 Media" },
        { path: "/engage/blog", label: "Blogs" },
        { path: "/engage/news", label: "News" },
        { path: "/engage/contact-us", label: "Contact Us" }
      ]
    },
    {
      path: "/about",
      label: "About",
      icon: <FaInfoCircle className="lg:hidden" />
    }
  ];

  // Quick contact for mobile
  const quickContact = [
    { icon: <FaPhone />, text: "1800-123-4567", link: "tel:18001234567" },
    { icon: <FaEnvelope />, text: "info@yuvamanthan.org", link: "mailto:info@yuvamanthan.org" }
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:18001234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <FaPhone className="text-xs" />
              <span>1800-123-4567</span>
            </a>
            <a href="mailto:info@yuvamanthan.org" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <FaEnvelope className="text-xs" />
              <span>info@yuvamanthan.org</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow us on social media</span>
            {/* Add social icons here if needed */}
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 lg:top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-2 lg:py-2"
            : "bg-white lg:bg-transparent py-3 lg:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" 
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8B4513] whitespace-nowrap">
                Yuvamanthan
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-3 xl:px-4 py-2 font-semibold text-gray-700 hover:text-[#8B4513] transition-colors text-sm xl:text-base ${
                        location.pathname === item.path ? "text-[#8B4513]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="px-3 xl:px-4 py-2 font-semibold text-gray-700 hover:text-[#8B4513] transition-colors text-sm xl:text-base flex items-center gap-1"
                    >
                      {item.label}
                      {item.dropdown && (
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`} />
                      )}
                    </button>
                  )}

                  {/* DESKTOP DROPDOWN */}
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bg-white shadow-xl rounded-xl mt-2 w-56 xl:w-64 py-2 border border-gray-100"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 xl:px-5 py-2.5 hover:bg-orange-50 text-gray-700 hover:text-[#8B4513] transition-colors text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* DESKTOP AUTH */}
            {user ? (
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white font-bold flex items-center justify-center text-sm xl:text-base">
                  {user.firstname?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-sm xl:text-base text-gray-700 font-medium">
                  {user.firstname || "User"}
                </span>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-[#8B4513] transition-colors px-4 py-2 text-sm xl:text-base"
                >
                  <FaSignInAlt />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold text-sm xl:text-base hover:shadow-lg transition-shadow"
                >
                  <FaUserPlus />
                  Register
                </Link>
              </div>
            )}

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-xl sm:text-2xl text-[#8B4513] p-2 hover:bg-orange-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
                {/* Mobile User Info */}
                {user ? (
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white font-bold flex items-center justify-center">
                      {user.firstname?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{user.firstname || "User"}</p>
                      <p className="text-xs text-gray-600">{user.email || ""}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2 mb-4">
                    <Link
                      to="/login"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-[#8B4513] text-[#8B4513] px-4 py-3 rounded-lg font-semibold text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaSignInAlt />
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-4 py-3 rounded-lg font-semibold text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaUserPlus />
                      Register
                    </Link>
                  </div>
                )}

                {/* Mobile Navigation */}
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 last:border-0">
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 py-3 text-gray-700 hover:text-[#8B4513] font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-[#E07B00] text-lg">{item.icon}</span>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.label ? null : item.label
                            )
                          }
                          className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#8B4513] font-medium"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[#E07B00] text-lg">{item.icon}</span>
                            {item.label}
                          </div>
                          <FaChevronDown
                            className={`text-sm transition-transform duration-300 ${
                              mobileDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* MOBILE DROPDOWN */}
                        {item.dropdown && mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-8 pl-2 border-l-2 border-[#E07B00]/30 space-y-2 mb-2"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block py-2 text-sm text-gray-600 hover:text-[#8B4513] hover:translate-x-2 transition-all"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {/* Mobile Quick Contact */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Quick Contact</p>
                  {quickContact.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-[#8B4513]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[#E07B00]">{item.icon}</span>
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SPACER */}
      <div className="h-16 sm:h-20 lg:h-28" />
    </>
  );
};

export default Navbar;