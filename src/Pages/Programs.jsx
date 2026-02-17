import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  FaArrowRight, 
  FaRocket, 
  FaUsers, 
  FaCalendarAlt,
  FaGraduationCap,
  FaGlobeAmericas,
  FaLightbulb,
  FaChartLine,
  FaBookOpen,
  FaCertificate,
  FaHandsHelping,
  FaChevronDown,
  FaCheck,
  FaClock,
  FaUserTie,
  FaAward,
  FaPlay,
  FaQuoteLeft,
  FaLeaf,
  FaBrain,
  FaShieldAlt,
  FaBullhorn
} from "react-icons/fa";
import { motion } from "framer-motion";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Main programs data - Updated with theme colors
  const mainPrograms = [
    {
      id: "yuvamanthan",
      title: "Yuva manthan",
      tagline: "India's Largest Youth Innovation Platform",
      description: "A comprehensive innovation ecosystem empowering students with 21st-century skills, mentorship, and real-world problem-solving opportunities.",
      category: "innovation",
      students: "1.2M+",
      duration: "Year-round",
      icon: <FaRocket className="text-2xl sm:text-3xl" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      link: "/programs/yuvamanthan",
      featured: true,
      highlights: [
        "National Innovation Challenge",
        "Industry Mentorship",
        "Prototype Funding",
        "Patent Support"
      ]
    },
    {
      id: "nipam",
      title: "NIPAM Programme",
      tagline: "Democratizing Intellectual Property Education",
      description: "India's first large-scale initiative to teach students about patents, trademarks, and protecting intellectual property. Empowering the next generation of innovators.",
      category: "education",
      students: "500K+",
      duration: "12 Weeks",
      icon: <FaLightbulb className="text-2xl sm:text-3xl" />,
      gradient: "from-[#8B4513] to-[#C46200]",
      link: "/programs/nipam",
      featured: true,
      highlights: [
        "Patent Drafting Workshops",
        "IPR Certification",
        "Idea Protection",
        "Industry Connect"
      ]
    },
    {
      id: "g20",
      title: "Yuva manthan G20",
      tagline: "Global Youth Leadership Initiative",
      description: "Engaging youth in G20 thematic areas, developing policy recommendations, and fostering international collaboration among young leaders.",
      category: "leadership",
      students: "250K+",
      duration: "6 Months",
      icon: <FaGlobeAmericas className="text-2xl sm:text-3xl" />,
      gradient: "from-[#C46200] to-[#E07B00]",
      link: "/programs/g20",
      featured: true,
      highlights: [
        "Policy Making Workshops",
        "International Collaboration",
        "G20 Simulation",
        "Global Networking"
      ]
    }
  ];

  // Additional programs - Updated with theme colors
  const additionalPrograms = [
    {
      id: "air-quality",
      title: "Air Quality Champions",
      tagline: "Young Eco-Warriors for Clean Air",
      description: "Training students to monitor, understand, and improve air quality in their communities through citizen science and advocacy.",
      category: "sustainability",
      students: "350K+",
      duration: "Ongoing",
      icon: <FaLeaf className="text-xl sm:text-2xl md:text-3xl" />,
      gradient: "from-[#E07B00] to-[#FFA500]",
      link: "/programs/air-quality"
    },
    {
      id: "un",
      title: "Yuva manthan UN",
      tagline: "Model United Nations Experience",
      description: "Developing diplomatic skills, global thinking, and leadership through Model UN simulations and international relations workshops.",
      category: "leadership",
      students: "180K+",
      duration: "Annual",
      icon: <FaGraduationCap className="text-xl sm:text-2xl md:text-3xl" />,
      gradient: "from-[#FFA500] to-[#FF8C00]",
      link: "/programs/un"
    },
    {
      id: "hackathon",
      title: "Innovation Hackathon",
      tagline: "48-Hour Innovation Sprint",
      description: "Intense problem-solving sessions where students tackle real-world challenges with mentorship from industry experts.",
      category: "innovation",
      students: "25K+",
      duration: "Quarterly",
      icon: <FaBrain className="text-xl sm:text-2xl md:text-3xl" />,
      gradient: "from-[#FF8C00] to-[#FF7F00]",
      link: "/programs/hackathon"
    }
  ];

  // Program categories
  const categories = [
    { id: "all", label: "All Programs" },
    { id: "innovation", label: "Innovation" },
    { id: "education", label: "Education" },
    { id: "leadership", label: "Leadership" },
    { id: "sustainability", label: "Sustainability" }
  ];

  // Program benefits - Updated with theme colors
  const benefits = [
    {
      icon: <FaCertificate className="text-xl sm:text-2xl" />,
      title: "Certification",
      description: "Earn recognized certificates from partner organizations",
      color: "from-[#6A3E2E]/20 to-[#8B4513]/20",
      iconColor: "text-[#6A3E2E]"
    },
    {
      icon: <FaHandsHelping className="text-xl sm:text-2xl" />,
      title: "Mentorship",
      description: "Guidance from 450+ industry and academic experts",
      color: "from-[#8B4513]/20 to-[#C46200]/20",
      iconColor: "text-[#8B4513]"
    },
    {
      icon: <FaChartLine className="text-xl sm:text-2xl" />,
      title: "Funding Support",
      description: "Access to ₹12Cr+ innovation funding and scholarships",
      color: "from-[#C46200]/20 to-[#E07B00]/20",
      iconColor: "text-[#C46200]"
    },
    {
      icon: <FaUserTie className="text-xl sm:text-2xl" />,
      title: "Career Opportunities",
      description: "Connect with top companies and startups",
      color: "from-[#E07B00]/20 to-[#FFA500]/20",
      iconColor: "text-[#E07B00]"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Who can participate in these programs?",
      answer: "All programs are open to students from class 6th to university level. Some programs have specific age or grade requirements mentioned in their detailed descriptions."
    },
    {
      question: "Are these programs free?",
      answer: "Yes, all Yuva manthan programs are completely free for students. We're supported by government partnerships and corporate sponsorships."
    },
    {
      question: "How do I register for a program?",
      answer: "You can register directly through the program page or contact your school coordinator. Individual registrations are also accepted through our portal."
    },
    {
      question: "What kind of support do participants receive?",
      answer: "Participants receive mentorship, learning resources, access to online platforms, and in some cases, funding for project development and patent filing."
    },
    {
      question: "Can schools register multiple students?",
      answer: "Yes, schools can register as partner institutions and enroll multiple students in different programs. Contact our school partnership team for bulk registration."
    }
  ];

  // Filter programs based on active tab
  const filteredPrograms = activeTab === "all" 
    ? [...mainPrograms, ...additionalPrograms]
    : [...mainPrograms, ...additionalPrograms].filter(program => program.category === activeTab);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">Programs</span> for Young Innovators
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
              Join India's most comprehensive innovation ecosystem. From intellectual property to global leadership, sustainability to technology—we have programs designed to unlock your potential.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                <FaUsers className="text-xs sm:text-sm md:text-base" />
                <span>2.4M+ Students</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                <FaCalendarAlt className="text-xs sm:text-sm md:text-base" />
                <span>Year-round</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                <FaGraduationCap className="text-xs sm:text-sm md:text-base" />
                <span>450+ Mentors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#6A3E2E]/10 py-2 sm:py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 overflow-x-auto">
          <div className="flex flex-nowrap sm:flex-wrap gap-2 justify-start sm:justify-center min-w-max sm:min-w-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white shadow-lg"
                    : "bg-[#FFF7ED] text-[#6A3E2E] hover:bg-[#FFEDD5] border border-[#6A3E2E]/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FEATURED PROGRAMS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-gradient-to-b from-white to-[#FFF7ED]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Programs</span>
            </h2>
            <p className="text-[#8B4513]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Our flagship programs that have transformed thousands of young minds across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {mainPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  {/* Program Header */}
                  <div className={`bg-gradient-to-r ${program.gradient} p-4 sm:p-5 md:p-6 lg:p-8 relative overflow-hidden`}>
                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase font-bold">
                      Featured
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                      <div className="bg-white/20 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{program.title}</h3>
                        <p className="text-white/90 text-xs sm:text-sm">{program.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Content */}
                  <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                    <p className="text-[#8B4513] text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                      <h4 className="font-semibold text-[#6A3E2E] text-xs sm:text-sm md:text-base mb-2 sm:mb-3">Key Highlights:</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1 sm:gap-2">
                            <FaCheck className="text-green-600 text-[10px] sm:text-xs" />
                            <span className="text-[#6A3E2E] text-xs sm:text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6">
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E]">{program.students}</div>
                        <div className="text-[10px] sm:text-xs text-[#8B4513]/80">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg md:text-xl font-bold text-[#6A3E2E]">{program.duration}</div>
                        <div className="text-[10px] sm:text-xs text-[#8B4513]/80">Duration</div>
                      </div>
                    </div>

                    <Link to={program.link}>
                      <button className="w-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-2 hover:opacity-90 transition-opacity group/btn">
                        Explore Program
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-[10px] sm:text-xs" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ADDITIONAL PROGRAMS */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-4 sm:mb-5 md:mb-8 text-center">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Programs</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {additionalPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-[#6A3E2E]/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className={`bg-gradient-to-r ${program.gradient} p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl text-white`}>
                        {program.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#6A3E2E] text-sm sm:text-base md:text-lg">{program.title}</h4>
                        <p className="text-[#8B4513]/80 text-xs sm:text-sm">{program.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-[#8B4513] text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <div className="flex items-center gap-1 sm:gap-2 text-[#6A3E2E]">
                        <FaUsers className="text-[#8B4513] text-xs sm:text-sm" />
                        <span className="font-semibold text-xs sm:text-sm">{program.students}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-[#6A3E2E]">
                        <FaClock className="text-[#C46200] text-xs sm:text-sm" />
                        <span className="font-semibold text-xs sm:text-sm">{program.duration}</span>
                      </div>
                    </div>
                    
                    <Link to={program.link}>
                      <button className="w-full border border-[#6A3E2E] text-[#6A3E2E] py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#FFF7ED] transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PROGRAM BENEFITS */}
          <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 mb-12 sm:mb-14 md:mb-16 border border-[#6A3E2E]/10">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Our Programs?</span>
              </h3>
              <p className="text-[#8B4513]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                Every program participant gains access to exclusive benefits and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#6A3E2E]/10"
                >
                  <div className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-r ${benefit.color} ${benefit.iconColor} mb-2 sm:mb-3 md:mb-4`}>
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-[#6A3E2E] text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{benefit.title}</h4>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <div className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <div className="lg:w-2/3">
                  <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-[#FFD700] mb-3 sm:mb-4 md:mb-6" />
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-3 sm:mb-4 md:mb-6">
                    "Yuva manthan programs transformed my perspective on innovation. The NIPAM program helped me file my first patent while still in school. This platform is creating India's next generation of innovators."
                  </p>
                  <div>
                    <p className="font-bold text-base sm:text-lg md:text-xl">Priya Sharma</p>
                    <p className="text-[#FFEDD5]/80 text-xs sm:text-sm md:text-base">Student Innovator | Patent Holder</p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-1 rounded-xl sm:rounded-2xl">
                    <div className="bg-[#6A3E2E] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">9.2/10</div>
                      <p className="text-[#FFEDD5]/80 text-xs sm:text-sm">Average Student Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-4 sm:mb-5 md:mb-8 text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Questions</span>
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-3 sm:p-4 md:p-5 lg:p-6 text-left flex justify-between items-center hover:bg-[#FFF7ED] transition-colors"
                  >
                    <span className="font-semibold text-[#6A3E2E] text-xs sm:text-sm md:text-base pr-4">{faq.question}</span>
                    <FaChevronDown 
                      className={`transition-transform text-[#8B4513] flex-shrink-0 text-xs sm:text-sm ${expandedFAQ === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-3 sm:px-4 md:px-5 lg:px-6 pb-3 sm:pb-4 md:pb-5 lg:pb-6 text-[#8B4513] text-xs sm:text-sm md:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Ready to Start Your Innovation Journey?</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
                Join 2.4M+ students who have transformed their ideas into impact through our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link to="/register">
                  <button className="w-full sm:w-auto bg-white text-[#6A3E2E] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors">
                    Register Now
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white/10 transition-colors">
                    Request More Info
                  </button>
                </Link>
              </div>
              <p className="mt-4 sm:mt-5 md:mt-6 text-[#FFEDD5]/80 text-xs sm:text-sm">
                Need help choosing a program? <Link to="/contact" className="underline font-semibold">Talk to our program advisors</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Programs;