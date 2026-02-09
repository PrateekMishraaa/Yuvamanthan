import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  FaQuoteLeft, 
  FaUsers, 
  FaUniversity, 
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaMicrophone,
  FaLightbulb,
  FaHandsHelping,
  FaChevronDown,
  FaStar,
  FaAward,
  FaBullhorn
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(0);

  const stats = [
    {
      number: "50K+",
      title: "Registered Institutes",
      icon: <FaUniversity className="text-2xl" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      number: "2L+",
      title: "Registered Students",
      icon: <FaUsers className="text-2xl" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      number: "5k+",
      title: "Registered Teachers",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      color: "from-purple-500 to-pink-400"
    },
    {
      number: "10K+",
      title: "Events Conducted",
      icon: <FaCalendarAlt className="text-2xl" />,
      color: "from-orange-500 to-yellow-400"
    },
  ];

  const programs = [
    {
      title: "Yuvamanthan Model United Nations",
      participants: "2,50,000",
      description: "An exhilarating academic simulation that propels students into international diplomacy. At YMUN, young learners and professionals hone their public speaking, diplomacy, and problem-solving skills, while representing different countries and tackling pressing global issues.",
      icon: <FaGlobeAmericas />,
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      title: "Yuvamanthan Hackathon",
      participants: "2,00,000",
      description: "A hybrid workshop for students of all ages where they participate in exciting tasks to learn, practice and build innovation. Guided by the Vision 2047 of Viksit Bharat, it's a call to action for young changemakers, disruptors, and problem solvers.",
      icon: <FaLightbulb />,
      gradient: "from-green-600 to-emerald-700"
    },
    {
      title: "Yuvamanthan Model Youth Parliament",
      participants: "1,96,000",
      description: "An exceptional platform designed to impart a transformative learning experience to future citizens of India. With Vision 2047 at its core, it aims to create leaders of the future and acquaint students with parliamentary functioning.",
      icon: <FaMicrophone />,
      gradient: "from-purple-600 to-pink-700"
    },
    {
      title: "Yuvamanthan Model G20",
      participants: "2,20,000",
      description: "A youth engagement mock simulator mirroring the actual G20 summit. Designed for young learners and professionals to ace public speaking, strategy and diplomacy, unlocking the true potential of Indian youth through consensus building and negotiation.",
      icon: <FaHandsHelping />,
      gradient: "from-orange-600 to-red-600"
    },
  ];

  const testimonials = [
    {
      quote: "Yuvamanthan model is a good opportunity for the youth to come forward and share their views on global issues which is a good initiative to solve the problems faced by the global citizens. Yuvamanthan model is an extraordinary platform designed to provide a transformative learning experience to the future youth of India.",
    //   name: "Prof. S.K. Singh",
    //   position: "Vice Chancellor",
    //   institution: "Rajasthan Technical University Kota"
    },
    {
      quote: "Yuvamanthan-Model United Nations is an experiential learning initiative of the University Grants Commission, Government of India. It aims to develop leadership qualities, foster collaborative learning, and enhance problem-solving abilities among students.",
    //   name: "Prof. G.D. Sharma",
    //   position: "Vice Chancellor",
    //   institution: "University of Science and Technology Meghalaya"
    },
    {
      quote: "It gives me immense pleasure to see that University Grant Commission, Government of India has come up with a brilliant notion in the format of Yuvamanthan- Model United Nations that facilitate the students and provides a platform to think critically and blossom as global leaders.",
    //   name: "Dr Partha Sarathi Pramanik",
    //   position: "Registrar",
    //   institution: "Archarya Narendra Deo University Of Agriculture & Technology Ayodhya"
    }
  ];

  const skills = [
    "International Diplomacy",
    "Research and Analysis", 
    "Public Speaking",
    "Strategy Building"
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full px-4 sm:px-6 lg:px-24 py-16 md:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Unleashing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Power of Youth</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Yuvamanthan serves as a bridge between theoretical knowledge and practical application, providing a platform that empowers young people with skills-based capabilities. Through transformative experiential learning programs, we acknowledge the potential and aspirations of youth, cultivating knowledge through hands-on experience.
            </p>
            
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 max-w-3xl">
              <FaQuoteLeft className="text-3xl text-yellow-300 mb-4" />
              <p className="text-white text-lg italic mb-4">
                "We need to cultivate a generation whose aspiration is a 'Viksit Bharat', whose resolve is a 'Viksit Bharat', and whose commitment is a 'Viksit Bharat'. It's imperative that every citizen remains committed towards 'Viksit Bharat'"
              </p>
              <p className="text-white/80 font-semibold">- Prime Minister Narendra Modi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Youth Empowerment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Viksit Bharat</span> at Our Core
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  This initiative aims to empower India's Vision 2047, enabling youth to thrive, lead, and spearhead collective action towards a developed nation.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pioneering educators like John Dewey and Jean Piaget, even tracing back to ancient Greek wisdom, discovered the inseparable bond between knowledge and experience. Their teachings underscored the need to honour this link, with an emphasis on learning grounded in real-life encounters.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">Critical Skills Cultivated</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-white/90">{stat.title}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-center text-white/80">
                    Empowering youth across India through experiential learning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Engage with Our <span className="text-blue-600">Events</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              An array of experiential programmes for young individuals seeking to expand their knowledge and soft skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
                  <div className={`bg-gradient-to-r ${program.gradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                          {program.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                        <span className="text-white font-bold">{program.participants}+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <Link to={''}>
                      <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                        Explore more
                        <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What People Are <span className="text-purple-600">Saying</span> About Us!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to improve our platform through feedback. See what students, teachers and other educational stakeholders have to share about us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setExpandedTestimonial(index)}
                className={`cursor-pointer transition-all ${
                  expandedTestimonial === index 
                    ? 'transform scale-105' 
                    : 'hover:scale-102'
                }`}
              >
                <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 h-full border-2 ${
                  expandedTestimonial === index 
                    ? 'border-blue-500 shadow-xl' 
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}>
                  <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {expandedTestimonial === index 
                      ? testimonial.quote 
                      : `${testimonial.quote.substring(0, 150)}...`
                    }
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3">
              <FaAward className="text-yellow-500" />
              <span className="text-gray-700 font-semibold">
                Recognized and supported by University Grants Commission, Government of India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the Movement for <span className="text-yellow-300">Viksit Bharat</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of India's largest youth empowerment platform that bridges theoretical knowledge with practical application. Transform your potential into impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Register Your Institute
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Become a Mentor
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <FaBullhorn className="text-yellow-400" />
                  <span>Transformative Experiential Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHandsHelping className="text-green-400" />
                  <span>Skills-Based Empowerment</span>
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

export default About;