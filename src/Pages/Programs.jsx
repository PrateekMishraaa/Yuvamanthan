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
  FaQuoteLeft
} from "react-icons/fa";
import { motion } from "framer-motion";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Main programs data
  const mainPrograms = [
    {
      id: "yuvamanthan",
      title: "Yuva manthan",
      tagline: "India's Largest Youth Innovation Platform",
      description: "A comprehensive innovation ecosystem empowering students with 21st-century skills, mentorship, and real-world problem-solving opportunities.",
      category: "innovation",
      students: "1.2M+",
      duration: "Year-round",
      icon: <FaRocket className="text-3xl" />,
      gradient: "from-blue-600 to-cyan-500",
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
      icon: <FaLightbulb className="text-3xl" />,
      gradient: "from-orange-500 to-red-500",
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
      icon: <FaGlobeAmericas className="text-3xl" />,
      gradient: "from-purple-600 to-pink-500",
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

  // Additional programs
  const additionalPrograms = [
    {
      id: "air-quality",
      title: "Air Quality Champions",
      tagline: "Young Eco-Warriors for Clean Air",
      description: "Training students to monitor, understand, and improve air quality in their communities through citizen science and advocacy.",
      category: "sustainability",
      students: "350K+",
      duration: "Ongoing",
      icon: <FaChartLine className="text-3xl" />,
      gradient: "from-green-500 to-emerald-500",
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
      icon: <FaGraduationCap className="text-3xl" />,
      gradient: "from-indigo-600 to-blue-500",
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
      icon: <FaBookOpen className="text-3xl" />,
      gradient: "from-purple-500 to-pink-600",
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

  // Program benefits
  const benefits = [
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Certification",
      description: "Earn recognized certificates from partner organizations"
    },
    {
      icon: <FaHandsHelping className="text-2xl" />,
      title: "Mentorship",
      description: "Guidance from 450+ industry and academic experts"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Funding Support",
      description: "Access to ₹12Cr+ innovation funding and scholarships"
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Career Opportunities",
      description: "Connect with top companies and startups"
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
      <section className="relative w-full px-4 sm:px-6 lg:px-24 py-16 md:py-28 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Programs</span> for Young Innovators
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join India's most comprehensive innovation ecosystem. From intellectual property to global leadership, sustainability to technology—we have programs designed to unlock your potential.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white flex items-center gap-2">
                <FaUsers />
                <span>2.4M+ Students Empowered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white flex items-center gap-2">
                <FaCalendarAlt />
                <span>Year-round Programs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white flex items-center gap-2">
                <FaGraduationCap />
                <span>450+ Expert Mentors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FEATURED PROGRAMS */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flagship programs that have transformed thousands of young minds across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {mainPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
                  {/* Program Header */}
                  <div className={`bg-gradient-to-r ${program.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                      Featured
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                        <p className="text-white/90 text-sm">{program.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                      <div className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FaCheck className="text-green-500 text-sm" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{program.students}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{program.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                    </div>

                    <Link to={program.link}>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group/btn">
                        Explore Program
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ADDITIONAL PROGRAMS */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional <span className="text-blue-600">Programs</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-r ${program.gradient} p-3 rounded-xl text-white`}>
                        {program.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{program.title}</h4>
                        <p className="text-gray-600 text-sm">{program.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6">
                      {program.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaUsers className="text-blue-500" />
                        <span className="font-semibold">{program.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaClock className="text-purple-500" />
                        <span className="font-semibold">{program.duration}</span>
                      </div>
                    </div>
                    
                    <Link to={program.link}>
                      <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PROGRAM BENEFITS */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Programs?</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every program participant gains access to exclusive benefits and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 mb-4`}>
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-8 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <FaQuoteLeft className="text-4xl text-yellow-300 mb-6" />
                  <p className="text-xl italic mb-6">
                    "Yuva manthan programs transformed my perspective on innovation. The NIPAM program helped me file my first patent while still in school. This platform is creating India's next generation of innovators."
                  </p>
                  <div>
                    <p className="font-bold text-lg">Priya Sharma</p>
                    <p className="text-blue-200">Student Innovator | Patent Holder</p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-1 rounded-2xl">
                    <div className="bg-blue-900 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold mb-2">9.2/10</div>
                      <p className="text-blue-200">Average Student Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <FaChevronDown 
                      className={`transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-gray-600"
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Innovation Journey?</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join 2.4M+ students who have transformed their ideas into impact through our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                    Register Now
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                    Request More Info
                  </button>
                </Link>
              </div>
              <p className="mt-6 text-blue-200">
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