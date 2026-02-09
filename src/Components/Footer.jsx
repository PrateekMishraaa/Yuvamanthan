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
      <section className="bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join India's Largest Youth Innovation Platform?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Register now and become part of 2.4M+ students shaping Viksit Bharat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#8B4513] px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <FaArrowRight /> Register Now
                </motion.button>
              </Link>
              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white/10 transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Y</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                    Yuvamanthan
                  </h2>
                  <p className="text-sm text-blue-200">Empowering India's Young Innovators</p>
                </div>
              </div>
              
              <p className="text-blue-100 leading-relaxed">
                A national movement democratizing access to innovation, sustainability, and leadership education for India's youth.
              </p>
              
              <div className="space-y-3">
                <p className="font-semibold text-lg">Contact Us</p>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-3 text-blue-100 hover:text-orange-300 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center ${social.color} transition-colors`}
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
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-700">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-blue-100 hover:text-orange-300 transition-colors group"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
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
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-700">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      to={program.path}
                      className="flex items-center gap-3 text-blue-100 hover:text-orange-300 transition-colors group"
                    >
                      <div className="w-6 h-6 bg-blue-900/50 rounded flex items-center justify-center">
                        {program.icon}
                      </div>
                      <span className="group-hover:translate-x-2 transition-transform">
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
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-6">
                  Get the latest opportunities, program updates, and innovation insights directly in your inbox.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="w-full bg-blue-900/30 border-2 border-blue-700 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                  
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-green-400 bg-green-900/20 p-3 rounded-lg"
                    >
                      <FaCheckCircle />
                      <span>Subscribed successfully!</span>
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Partners */}
              <div>
                <h4 className="font-semibold mb-4">In Partnership With</h4>
                <div className="flex flex-wrap gap-2">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-blue-900/30 px-3 py-1.5 rounded-lg text-sm text-blue-200"
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
            className="mt-12 pt-8 border-t border-blue-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300">2.4M+</div>
                <div className="text-blue-200">Students Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300">15K+</div>
                <div className="text-blue-200">Partner Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300">450+</div>
                <div className="text-blue-200">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300">₹12Cr+</div>
                <div className="text-blue-200">Funding Enabled</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-blue-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-blue-300">
                  © {new Date().getFullYear()} Yuvamanthan. All rights reserved.
                </p>
                <p className="text-blue-400 text-sm mt-1">
                  Empowering youth for Viksit Bharat 2047
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 text-blue-300">
                <Link to="/privacy" className="hover:text-orange-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-orange-300 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="hover:text-orange-300 transition-colors">
                  Sitemap
                </Link>
                <Link to="/accessibility" className="hover:text-orange-300 transition-colors">
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