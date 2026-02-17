import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaRocket,
  FaGraduationCap,
  FaHandsHelping,
  FaLeaf,
  FaCheckCircle
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // Simulate subscription
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'All Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ]

  const programs = [
    { name: 'NIPAM Programme', path: '/programs/nipam', icon: <FaRocket /> },
    { name: 'Air Quality Champions', path: '/programs/air-quality', icon: <FaLeaf /> },
    { name: 'Yuvamanthan UN', path: '/programs/un', icon: <FaGraduationCap /> },
    { name: 'Innovation Hackathon', path: '/programs/hackathon', icon: <FaHandsHelping /> },
    { name: 'Model G20', path: '/programs/g20', icon: <FaGraduationCap /> },
    { name: 'Youth Parliament', path: '/programs/parliament', icon: <FaHandsHelping /> }
  ]

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'contact@yuvamanthan.org', link: 'mailto:contact@yuvamanthan.org' },
    { icon: <FaPhoneAlt />, text: '+91-XXXXXXXXXX', link: 'tel:+91XXXXXXXXXX' },
    { icon: <FaMapMarkerAlt />, text: 'New Delhi, India', link: '#' }
  ]

  const socialMedia = [
    { icon: <FaFacebookF />, link: 'https://facebook.com/yuvamanthan', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, link: 'https://twitter.com/yuvamanthan', color: 'hover:bg-sky-500' },
    { icon: <FaInstagram />, link: 'https://instagram.com/yuvamanthan', color: 'hover:bg-pink-600' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com/company/yuvamanthan', color: 'hover:bg-blue-700' },
    { icon: <FaYoutube />, link: 'https://youtube.com/yuvamanthan', color: 'hover:bg-red-600' }
  ]

  const partners = [
    "NITI Aayog",
    "Ministry of Education",
    "CBSE",
    "Atal Innovation Mission",
    "DPIIT",
    "UGC"
  ]

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
              Ready to Join India's Largest Youth Innovation Platform?
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Register now and become part of 2.4M+ students shaping Viksit Bharat
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link to="/register" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-[#8B4513] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FaArrowRight className="text-xs sm:text-sm" /> Register Now
                </motion.button>
              </Link>
              <Link to="/programs" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold uppercase hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Explore Programs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-[#000080] via-[#1a1a8a] to-[#000066] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
          {/* Grid Layout - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 xl:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4 sm:space-y-5 lg:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl sm:text-2xl">Y</span>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                    Yuvamanthan
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-200">Empowering India's Young Innovators</p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                A national movement democratizing access to innovation, sustainability, and leadership education for India's youth.
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <p className="font-semibold text-base sm:text-lg">Contact Us</p>
                <div className="space-y-2 sm:space-y-3">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-blue-100 hover:text-orange-300 transition-colors group"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                        <span className="text-xs sm:text-sm">{item.icon}</span>
                      </div>
                      <span className="break-all">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-blue-900/50 rounded-full flex items-center justify-center ${social.color} transition-colors text-xs sm:text-sm`}
                      aria-label={`Follow us on ${social.icon.type.name}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-blue-700">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 hover:text-orange-300 transition-colors group"
                    >
                      <FaArrowRight className="text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <span className="group-hover:translate-x-2 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-blue-700">Our Programs</h3>
              <ul className="space-y-2 sm:space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      to={program.path}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-blue-100 hover:text-orange-300 transition-colors group"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-900/50 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                        <span className="text-[10px] sm:text-xs">{program.icon}</span>
                      </div>
                      <span className="group-hover:translate-x-2 transition-transform line-clamp-1">
                        {program.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4 sm:space-y-5 lg:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Stay Updated</h3>
                <p className="text-xs sm:text-sm text-blue-100 mb-4 sm:mb-6">
                  Get the latest opportunities, program updates, and innovation insights directly in your inbox.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="w-full bg-blue-900/30 border-2 border-blue-700 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-blue-300 focus:outline-none focus:border-orange-500 transition-colors text-xs sm:text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-1.5 sm:p-2 rounded-lg hover:opacity-90 transition-opacity"
                      aria-label="Subscribe"
                    >
                      <FaArrowRight className="text-xs sm:text-sm" />
                    </button>
                  </div>
                  
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-green-400 bg-green-900/20 p-2 sm:p-3 rounded-lg text-xs sm:text-sm"
                    >
                      <FaCheckCircle className="flex-shrink-0" />
                      <span>Subscribed successfully!</span>
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Partners */}
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">In Partnership With</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-blue-900/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs text-blue-200"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-blue-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-300">2.4M+</div>
                <div className="text-xs sm:text-sm text-blue-200">Students Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-300">15K+</div>
                <div className="text-xs sm:text-sm text-blue-200">Partner Schools</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-300">450+</div>
                <div className="text-xs sm:text-sm text-blue-200">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-300">₹12Cr+</div>
                <div className="text-xs sm:text-sm text-blue-200">Funding Enabled</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-blue-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <p className="text-xs sm:text-sm text-blue-300">
                  © {new Date().getFullYear()} Yuvamanthan. All rights reserved.
                </p>
                <p className="text-[10px] sm:text-xs text-blue-400 mt-1">
                  Empowering youth for Viksit Bharat 2047
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-blue-300">
                <Link to="/privacy" className="text-xs sm:text-sm hover:text-orange-300 transition-colors whitespace-nowrap">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-xs sm:text-sm hover:text-orange-300 transition-colors whitespace-nowrap">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-xs sm:text-sm hover:text-orange-300 transition-colors whitespace-nowrap">
                  Sitemap
                </Link>
                <Link to="/accessibility" className="text-xs sm:text-sm hover:text-orange-300 transition-colors whitespace-nowrap">
                  Accessibility
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer