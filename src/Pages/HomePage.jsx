import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  FaArrowRight, 
  FaRocket, 
  FaUsers, 
  FaSchool, 
  FaHandsHelping,
  FaChartLine,
  FaLeaf,
  FaGlobeAmericas,
  FaLightbulb,
  FaCrown,
  FaMedal
} from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  const stats = [
    {
      number: "2.4M+",
      title: "Students Empowered",
      description: "Across 28 Indian states",
      icon: <FaUsers className="text-2xl" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      number: "15,000+",
      title: "Partner Schools",
      description: "Government & private",
      icon: <FaSchool className="text-2xl" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      number: "450+",
      title: "Expert Mentors",
      description: "Industry & academia",
      icon: <FaHandsHelping className="text-2xl" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-400"
    },
    {
      number: "₹12Cr+",
      title: "Scholarships",
      description: "Supporting students",
      icon: <FaChartLine className="text-2xl" />,
      color: "bg-gradient-to-br from-orange-500 to-yellow-400"
    },
  ];

  const impactPrograms = [
    {
      title: "NIPAM Programme",
      tag: "FLAGSHIP PROGRAM",
      description: "Democratizing innovation culture by teaching 1M+ students about patents, trademarks, and protecting ideas.",
      students: "500K+",
      duration: "12 Weeks",
      link: "/nipam",
      gradient: "from-orange-500 to-orange-600",
      icon: <FaLightbulb />,
      highlight: true
    },
    {
      title: "Air Quality Champions",
      tag: "SUSTAINABILITY",
      description: "Train young eco-warriors to monitor, understand, and improve air quality in their communities.",
      students: "350K+",
      duration: "Ongoing",
      link: "/air-quality",
      gradient: "from-emerald-500 to-green-600",
      icon: <FaLeaf />,
      highlight: true
    },
    {
      title: "Yuva manthan UN",
      tag: "LEADERSHIP",
      description: "Develop diplomatic skills, global thinking, and leadership through Model UN experiences.",
      students: "180K+",
      duration: "Annual",
      link: "/yuvamanthan-un",
      gradient: "from-blue-600 to-indigo-700",
      icon: <FaGlobeAmericas />,
      highlight: false
    },
    {
      title: "Innovation Hackathon",
      tag: "NEW",
      description: "48-hour innovation sprint solving challenges for Viksit Bharat 2047 with expert mentors.",
      students: "25K+",
      duration: "Quarterly",
      link: "/hackathon",
      gradient: "from-purple-600 to-pink-600",
      icon: <FaRocket />,
      highlight: true
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION - EXACTLY AS SHOWN */}
      <section className="relative w-full px-4 sm:px-6 lg:px-24 py-16 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Empowering India's Youth to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Viksit Bharat</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Join India's largest innovation platform connecting students, schools, and mentors to transform ideas into impact. From intellectual property to sustainability, leadership to technology—shape the future, today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  START YOUR JOURNEY
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
                >
                  EXPLORE PROGRAMS
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS & STATS SECTION - EXACTLY AS SHOWN */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Partners */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-gray-500 text-sm font-semibold mb-8">
              IN PARTNERSHIP WITH
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {["NITI Aayog", "Ministry of Education", "CBSE", "Atal Innovation Mission", "DPIIT"].map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 font-semibold text-lg px-6 py-3 hover:text-blue-600 transition-colors"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-full ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{stat.title}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION - EXACTLY AS SHOWN */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <p className="uppercase tracking-[0.3em] text-gray-500 text-sm font-semibold mb-6">
                WHO WE ARE
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                India's Largest Youth Innovation & Leadership Platform
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yuva manthan is a national movement democratizing access to innovation education, sustainable development training, and leadership opportunities for students across India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded with a mission to empower 10 million young minds by 2030, we partner with government bodies, schools, NGOs, and industry leaders to create transformative learning experiences.
                </p>
              </div>
              
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Join 2.4M+ innovators</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <FaCrown className="text-3xl text-yellow-300" />
                      <h3 className="text-2xl font-bold">Vision 2030</h3>
                    </div>
                    <p className="text-lg mb-6">Empowering 10 million young innovators by 2030 through accessible innovation education.</p>
                    
                    <div className="space-y-4">
                      {[
                        "Nationwide reach across 28 states",
                        "Industry-aligned curriculum",
                        "Government & private partnerships",
                        "Mentorship from 450+ experts"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT PROGRAMS - EXACTLY AS SHOWN */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-gray-500 text-sm font-semibold mb-4">
              OUR IMPACT PROGRAMS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Your Path to Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're passionate about intellectual property, sustainability, global leadership, or technology—we have a program designed to unlock your potential and create real-world impact.
            </p>
          </div>

          {/* Programs Grid - Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {impactPrograms.slice(0, 2).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 ${
                          program.tag === "FLAGSHIP PROGRAM" 
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                        }`}>
                          {program.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                      </div>
                      <div className="text-white p-3 rounded-full bg-white/10">
                        {program.icon}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-white">
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="text-2xl font-bold">{program.students}</div>
                            <div className="text-sm text-gray-400">Students</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold">{program.duration}</div>
                            <div className="text-sm text-gray-400">Duration</div>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={program.link}
                        className="group/link flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Programs Grid - Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {impactPrograms.slice(2).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 ${
                          program.tag === "LEADERSHIP" 
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                            : "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                        }`}>
                          {program.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${program.gradient} text-white`}>
                        {program.icon}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-gray-900">
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="text-2xl font-bold">{program.students}</div>
                            <div className="text-sm text-gray-600">Students</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold">{program.duration}</div>
                            <div className="text-sm text-gray-600">Duration</div>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={program.link}
                        className={`group/link flex items-center gap-2 font-semibold ${
                          program.tag === "LEADERSHIP" 
                            ? "text-blue-600 hover:text-blue-800"
                            : "text-purple-600 hover:text-purple-800"
                        } transition-colors`}
                      >
                        {program.tag === "LEADERSHIP" ? "Register Now →" : "View Challenges →"}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Button for Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/programs">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all">
                Join the Movement →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA - EXACTLY AS SHOWN */}
      <section className="py-24 px-4 sm:px-6 lg:px-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-white/80 text-sm font-semibold mb-6">
              JOIN THE MOVEMENT
            </p>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Your Ideas Can Change India
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for tomorrow to build the future. Register now to access programs, mentorship, events, and a community of innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  REGISTER FREE
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all w-full sm:w-auto"
                >
                  TALK TO OUR TEAM
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <FaMedal className="text-yellow-400" />
                  <span>450+ Expert Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSchool className="text-blue-400" />
                  <span>15,000+ Partner Schools</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-green-400" />
                  <span>2.4M+ Students</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;