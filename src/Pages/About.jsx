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
  FaBullhorn,
  FaRocket,
  FaGraduationCap
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(0);

  const stats = [
    {
      number: "50K+",
      title: "Registered Institutes",
      icon: <FaUniversity className="text-xl sm:text-2xl" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      number: "2L+",
      title: "Registered Students",
      icon: <FaUsers className="text-xl sm:text-2xl" />,
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      number: "5k+",
      title: "Registered Teachers",
      icon: <FaChalkboardTeacher className="text-xl sm:text-2xl" />,
      gradient: "from-[#C46200] to-[#E07B00]"
    },
    {
      number: "10K+",
      title: "Events Conducted",
      icon: <FaCalendarAlt className="text-xl sm:text-2xl" />,
      gradient: "from-[#E07B00] to-[#FFA500]"
    },
  ];

  const programs = [
    {
      title: "Yuvamanthan Model United Nations",
      participants: "2,50,000",
      description: "An exhilarating academic simulation that propels students into international diplomacy. At YMUN, young learners and professionals hone their public speaking, diplomacy, and problem-solving skills, while representing different countries and tackling pressing global issues.",
      icon: <FaGlobeAmericas className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Yuvamanthan Hackathon",
      participants: "2,00,000",
      description: "A hybrid workshop for students of all ages where they participate in exciting tasks to learn, practice and build innovation. Guided by the Vision 2047 of Viksit Bharat, it's a call to action for young changemakers, disruptors, and problem solvers.",
      icon: <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Yuvamanthan Model Youth Parliament",
      participants: "1,96,000",
      description: "An exceptional platform designed to impart a transformative learning experience to future citizens of India. With Vision 2047 at its core, it aims to create leaders of the future and acquaint students with parliamentary functioning.",
      icon: <FaMicrophone className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#C46200] to-[#E07B00]"
    },
    {
      title: "Yuvamanthan Model G20",
      participants: "2,20,000",
      description: "A youth engagement mock simulator mirroring the actual G20 summit. Designed for young learners and professionals to ace public speaking, strategy and diplomacy, unlocking the true potential of Indian youth through consensus building and negotiation.",
      icon: <FaHandsHelping className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#E07B00] to-[#FFA500]"
    },
  ];

  const testimonials = [
    {
      quote: "Yuvamanthan model is a good opportunity for the youth to come forward and share their views on global issues which is a good initiative to solve the problems faced by the global citizens. Yuvamanthan model is an extraordinary platform designed to provide a transformative learning experience to the future youth of India.",
      name: "Prof. S.K. Singh",
      position: "Vice Chancellor",
      institution: "Rajasthan Technical University Kota"
    },
    {
      quote: "Yuvamanthan-Model United Nations is an experiential learning initiative of the University Grants Commission, Government of India. It aims to develop leadership qualities, foster collaborative learning, and enhance problem-solving abilities among students.",
      name: "Prof. G.D. Sharma",
      position: "Vice Chancellor",
      institution: "University of Science and Technology Meghalaya"
    },
    {
      quote: "It gives me immense pleasure to see that University Grant Commission, Government of India has come up with a brilliant notion in the format of Yuvamanthan- Model United Nations that facilitate the students and provides a platform to think critically and blossom as global leaders.",
      name: "Dr Partha Sarathi Pramanik",
      position: "Registrar",
      institution: "Archarya Narendra Deo University Of Agriculture & Technology Ayodhya"
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
      <section className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Unleashing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">Power of Youth</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-3xl leading-relaxed">
              Yuvamanthan serves as a bridge between theoretical knowledge and practical application, providing a platform that empowers young people with skills-based capabilities. Through transformative experiential learning programs, we acknowledge the potential and aspirations of youth, cultivating knowledge through hands-on experience.
            </p>
            
            <div className="bg-[#8B4513]/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#6A3E2E]/50 max-w-3xl">
              <FaQuoteLeft className="text-2xl sm:text-3xl text-[#FFD700] mb-2 sm:mb-4" />
              <p className="text-white text-sm sm:text-base md:text-lg italic mb-3 sm:mb-4">
                "We need to cultivate a generation whose aspiration is a 'Viksit Bharat', whose resolve is a 'Viksit Bharat', and whose commitment is a 'Viksit Bharat'. It's imperative that every citizen remains committed towards 'Viksit Bharat'"
              </p>
              <p className="text-white/80 font-semibold text-sm sm:text-base">- Prime Minister Narendra Modi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4 sm:mb-6">
                Youth Empowerment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]">Viksit Bharat</span> at Our Core
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-[#8B4513] text-base sm:text-lg leading-relaxed">
                  This initiative aims to empower India's Vision 2047, enabling youth to thrive, lead, and spearhead collective action towards a developed nation.
                </p>
                
                <p className="text-[#8B4513] text-base sm:text-lg leading-relaxed">
                  Pioneering educators like John Dewey and Jean Piaget, even tracing back to ancient Greek wisdom, discovered the inseparable bond between knowledge and experience. Their teachings underscored the need to honour this link, with an emphasis on learning grounded in real-life encounters.
                </p>
                
                <div className="bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-[#6A3E2E]/20">
                  <h3 className="font-bold text-[#6A3E2E] text-lg sm:text-xl mb-3 sm:mb-4">Critical Skills Cultivated</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-1 sm:gap-2">
                        <FaStar className="text-[#FFA500] text-xs sm:text-sm" />
                        <span className="text-[#6A3E2E] text-xs sm:text-sm md:text-base">{skill}</span>
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
              <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.gradient} mb-2 sm:mb-3`}>
                        {stat.icon}
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.number}</div>
                      <div className="text-white/90 text-xs sm:text-sm md:text-base">{stat.title}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-white/20">
                  <p className="text-center text-white/80 text-xs sm:text-sm md:text-base">
                    Empowering youth across India through experiential learning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-24 bg-gradient-to-b from-[#FFF7ED] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              Engage with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Events</span>
            </h2>
            <p className="text-[#8B4513]/80 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
              An array of experiential programmes for young individuals seeking to expand their knowledge and soft skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className={`bg-gradient-to-r ${program.gradient} p-4 sm:p-5 md:p-6`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm">
                          {program.icon}
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">{program.title}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-0.5 sm:py-1">
                        <span className="text-white font-bold text-xs sm:text-sm md:text-base">{program.participants}+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6">
                    <p className="text-[#8B4513] text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <Link to={''}>
                      <button className="w-full border-2 border-[#6A3E2E] text-[#6A3E2E] py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-[#FFF7ED] transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
                        Explore more
                        <FaChevronDown className="group-hover:translate-y-1 transition-transform text-xs sm:text-sm" />
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              What People Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C46200] to-[#E07B00]">Saying</span> About Us!
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              We strive to improve our platform through feedback. See what students, teachers and other educational stakeholders have to share about us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
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
                <div className={`bg-gradient-to-br from-white to-[#FFF7ED] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 h-full border-2 ${
                  expandedTestimonial === index 
                    ? 'border-[#8B4513] shadow-xl' 
                    : 'border-[#6A3E2E]/20 shadow-lg hover:shadow-xl'
                }`}>
                  <FaQuoteLeft className="text-xl sm:text-2xl md:text-3xl text-[#8B4513] mb-2 sm:mb-3 md:mb-4" />
                  <p className="text-[#8B4513] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                    {expandedTestimonial === index 
                      ? testimonial.quote 
                      : `${testimonial.quote.substring(0, 120)}...`
                    }
                  </p>
                  <div className="border-t border-[#6A3E2E]/20 pt-3 sm:pt-4">
                    <p className="font-bold text-[#6A3E2E] text-xs sm:text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-[#8B4513] text-xs sm:text-sm">{testimonial.position}</p>
                    <p className="text-[#8B4513]/80 text-xs sm:text-sm">{testimonial.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] border border-[#FFA500] rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
              <FaAward className="text-[#FFA500] text-sm sm:text-base md:text-lg" />
              <span className="text-[#6A3E2E] font-semibold text-xs sm:text-sm md:text-base">
                Recognized and supported by University Grants Commission, Government of India
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;