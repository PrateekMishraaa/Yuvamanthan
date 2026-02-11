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
  // Color theme constants from YuuthCommunity
  const COLORS = {
    primary: {
      dark: "#6A3E2E",
      medium: "#8B4513", 
      light: "#E07B00"
    },
    secondary: {
      dark: "#C46200",
      medium: "#FF8C00",
      light: "#FFA500"
    },
    background: {
      light: "#FFF7ED",
      lighter: "#FFEDD5",
      white: "#FFFFFF"
    }
  };

  const stats = [
    {
      number: "2.4M+",
      title: "Students Empowered",
      description: "Across 28 Indian states",
      icon: <FaUsers className="text-2xl" />,
      color: "from-[#6A3E2E] to-[#8B4513]",
      bgLight: "bg-[#6A3E2E]/10"
    },
    {
      number: "15,000+",
      title: "Partner Schools",
      description: "Government & private",
      icon: <FaSchool className="text-2xl" />,
      color: "from-[#8B4513] to-[#C46200]",
      bgLight: "bg-[#8B4513]/10"
    },
    {
      number: "450+",
      title: "Expert Mentors",
      description: "Industry & academia",
      icon: <FaHandsHelping className="text-2xl" />,
      color: "from-[#C46200] to-[#E07B00]",
      bgLight: "bg-[#C46200]/10"
    },
    {
      number: "₹12Cr+",
      title: "Scholarships",
      description: "Supporting students",
      icon: <FaChartLine className="text-2xl" />,
      color: "from-[#E07B00] to-[#FF8C00]",
      bgLight: "bg-[#E07B00]/10"
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
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      icon: <FaLightbulb />,
      highlight: true,
      tagColor: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Air Quality Champions",
      tag: "SUSTAINABILITY",
      description: "Train young eco-warriors to monitor, understand, and improve air quality in their communities.",
      students: "350K+",
      duration: "Ongoing",
      link: "/air-quality",
      gradient: "from-[#8B4513] to-[#C46200]",
      icon: <FaLeaf />,
      highlight: true,
      tagColor: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Yuva manthan UN",
      tag: "LEADERSHIP",
      description: "Develop diplomatic skills, global thinking, and leadership through Model UN experiences.",
      students: "180K+",
      duration: "Annual",
      link: "/yuvamanthan-un",
      gradient: "from-[#C46200] to-[#E07B00]",
      icon: <FaGlobeAmericas />,
      highlight: false,
      tagColor: "from-[#C46200] to-[#E07B00]"
    },
    {
      title: "Innovation Hackathon",
      tag: "NEW",
      description: "48-hour innovation sprint solving challenges for Viksit Bharat 2047 with expert mentors.",
      students: "25K+",
      duration: "Quarterly",
      link: "/hackathon",
      gradient: "from-[#E07B00] to-[#FF8C00]",
      icon: <FaRocket />,
      highlight: true,
      tagColor: "from-[#E07B00] to-[#FF8C00]"
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION - Updated with brand colors */}
      <section className="relative w-full px-4 sm:px-6 lg:px-24 py-16 md:py-28 bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#C46200] overflow-hidden">
        {/* Background pattern with brand opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#FFA500] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#FF8C00] rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Empowering India's Youth to Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] to-[#FF8C00]">
                Viksit Bharat
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-[#FFEDD5] max-w-3xl leading-relaxed">
              Join India's largest innovation platform connecting students, schools, and mentors to transform ideas into impact. From intellectual property to sustainability, leadership to technology—shape the future, today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  START YOUR JOURNEY
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6A3E2E] transition-all"
                >
                  EXPLORE PROGRAMS
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider - Brand style */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-[#FFF7ED]"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-[#FFEDD5]"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-[#FFF7ED]"></path>
          </svg>
        </div>
      </section>

      {/* PARTNERS & STATS SECTION - Updated with brand colors */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-[#FFF7ED]">
        <div className="max-w-6xl mx-auto">
          {/* Partners */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-[#8B4513]/60 text-sm font-semibold mb-8">
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
                  className="text-[#6A3E2E] font-semibold text-lg px-6 py-3 hover:text-[#8B4513] transition-colors"
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
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-[#8B4513] mb-1">{stat.title}</p>
                <p className="text-[#C46200]/80">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION - Updated with brand colors */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-[#FFEDD5] to-[#FFF7ED]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <p className="uppercase tracking-[0.3em] text-[#8B4513]/60 text-sm font-semibold mb-6">
                WHO WE ARE
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-8 leading-tight">
                India's Largest Youth Innovation & Leadership Platform
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-[#8B4513] leading-relaxed">
                  Yuva manthan is a national movement democratizing access to innovation education, sustainable development training, and leadership opportunities for students across India.
                </p>
                <p className="text-lg text-[#8B4513]/80 leading-relaxed">
                  Founded with a mission to empower 10 million young minds by 2030, we partner with government bodies, schools, NGOs, and industry leaders to create transformative learning experiences.
                </p>
              </div>
              
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] border-2 border-[#FFEDD5]"></div>
                  ))}
                </div>
                <span className="text-[#C46200] font-medium">Join 2.4M+ innovators</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-2xl rotate-12"></div>
                <div className="relative bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-3xl p-8 shadow-2xl">
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <FaCrown className="text-3xl text-[#FFA500]" />
                      <h3 className="text-2xl font-bold">Vision 2030</h3>
                    </div>
                    <p className="text-lg mb-6 text-[#FFEDD5]">Empowering 10 million young innovators by 2030 through accessible innovation education.</p>
                    
                    <div className="space-y-4">
                      {[
                        "Nationwide reach across 28 states",
                        "Industry-aligned curriculum",
                        "Government & private partnerships",
                        "Mentorship from 450+ experts"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
                          <span className="text-[#FFEDD5]">{item}</span>
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

      {/* IMPACT PROGRAMS - Updated with brand colors */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-[#FFF7ED]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-[#8B4513]/60 text-sm font-semibold mb-4">
              OUR IMPACT PROGRAMS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-6">
              Discover Your Path to Innovation
            </h2>
            <p className="text-lg text-[#8B4513]/80 max-w-3xl mx-auto">
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
                <div className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 bg-gradient-to-r ${program.tagColor} text-white`}>
                          {program.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                      </div>
                      <div className="text-white p-3 rounded-full bg-white/10">
                        {program.icon}
                      </div>
                    </div>
                    
                    <p className="text-[#FFEDD5] mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-white">
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="text-2xl font-bold">{program.students}</div>
                            <div className="text-sm text-[#FFEDD5]/80">Students</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold">{program.duration}</div>
                            <div className="text-sm text-[#FFEDD5]/80">Duration</div>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={program.link}
                        className="group/link flex items-center gap-2 text-white font-semibold hover:text-[#FFA500] transition-colors"
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
                <div className="bg-white rounded-2xl border border-[#6A3E2E]/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 bg-gradient-to-r ${program.tagColor} text-white`}>
                          {program.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-[#6A3E2E] mb-3">{program.title}</h3>
                      </div>
                      <div className={`p-3 rounded-full bg-gradient-to-r ${program.gradient} text-white`}>
                        {program.icon}
                      </div>
                    </div>
                    
                    <p className="text-[#8B4513]/80 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-[#6A3E2E]">
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="text-2xl font-bold">{program.students}</div>
                            <div className="text-sm text-[#8B4513]/60">Students</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold">{program.duration}</div>
                            <div className="text-sm text-[#8B4513]/60">Duration</div>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={program.link}
                        className={`group/link flex items-center gap-2 font-semibold ${
                          program.tag === "LEADERSHIP" 
                            ? "text-[#C46200] hover:text-[#E07B00]"
                            : "text-[#E07B00] hover:text-[#FF8C00]"
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
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all">
                Join the Movement →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

     

      <Footer />
    </>
  );
};

export default HomePage;