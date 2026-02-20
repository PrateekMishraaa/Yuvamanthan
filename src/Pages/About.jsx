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
  FaGraduationCap,
  FaHeart,
  FaLeaf,
  FaHands,
  FaBrain,
  FaCompass,
  FaChartLine
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
      title: "Yuvamanthan Model G20 (YMG20)",
      participants: "2,20,000",
      description: "YMG20 provides the youth with an opportunity to engage in policymaking and diplomatic negotiations, tackling real-world problems with innovative solutions. By participating in YMG20, the youth gain firsthand experience in the complexities of global diplomacy and consensus building.",
      icon: <FaGlobeAmericas className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Yuvamanthan Youth Parliament (YMYP)",
      participants: "1,96,000",
      description: "YMYP empowers the youth to voice their opinions on critical issues, honing their public speaking and debate skills. In the spirit of democratic governance, YMYP simulates parliamentary proceedings, fostering an understanding of the legislative process and the art of persuasive communication.",
      icon: <FaMicrophone className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Yuvamanthan Hackathon (YMH)",
      participants: "2,00,000",
      description: "YMH is a platform for young innovators and technologists to collaborate and address pressing challenges through technology and innovation. The hackathon nurtures an entrepreneurial spirit and problem-solving mindset among the youth, encouraging them to create impactful solutions.",
      icon: <FaLightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#C46200] to-[#E07B00]"
    },
    {
      title: "Yuvamanthan Model United Nations (YMUN)",
      participants: "2,50,000",
      description: "An exhilarating academic simulation that propels students into international diplomacy. At YMUN, young learners and professionals hone their public speaking, diplomacy, and problem-solving skills, while representing different countries and tackling pressing global issues.",
      icon: <FaGlobeAmericas className="w-5 h-5 sm:w-6 sm:h-6" />,
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

  // YuvaManthan Topics
  const topics = [
    {
      title: "India at 2047",
      subtitle: "Future of New India",
      icon: <FaRocket className="text-2xl" />
    },
    {
      title: "Future of Work",
      subtitle: "Industry 4.0, Innovation, & 21st Century Skills",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      title: "Climate Change and Disaster Risk Reduction",
      subtitle: "Making Sustainability a Way of Life",
      icon: <FaLeaf className="text-2xl" />
    },
    {
      title: "Shared Future",
      subtitle: "Youth in Democracy and Governance",
      icon: <FaHands className="text-2xl" />
    },
    {
      title: "Health, Wellbeing, And Sports",
      subtitle: "Agenda For Youth",
      icon: <FaHeart className="text-2xl" />
    }
  ];

  // Principles
  const principles = [
    {
      title: "Self-Awareness",
      description: "Yuvamanthan encourages the youth to explore their passions, talents, and purpose, matching their career paths with their inner aspirations as they grow.",
      icon: <FaBrain className="text-3xl" />
    },
    {
      title: "Inclusivity",
      description: "Fostering an environment where every voice matters and diverse perspectives are celebrated.",
      icon: <FaUsers className="text-3xl" />
    },
    {
      title: "Role Sharing",
      description: "Where the youth are encouraged to take on leadership roles and share responsibilities.",
      icon: <FaHandsHelping className="text-3xl" />
    },
    {
      title: "Innovation",
      description: "Creating a safe space for the youth to test, experiment, and improve their ideas in a risk-free environment.",
      icon: <FaLightbulb className="text-3xl" />
    }
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              ABOUT US!!
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              DISCOVER<span className="text-[#FFD700]">YUVAMANTHAN</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-6">
              Empowering Youth for Positive Change
            </h3>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-semibold">
              Unleashing The Power Of Youth
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
              The world is experiencing a transformative era, driven by rapid technological advancements, globalization, and environmental challenges. Amidst this changing landscape, the youth stand as aspirations of young minds, Yuvamanthan has emerged as a beacon of experiential learning and collective action.
            </p>
            
            <div className="bg-[#8B4513]/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#6A3E2E]/50 max-w-4xl">
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                YuvaManthan through its unique engagement mode brings hope and opportunity for the youth of India. By providing a transformative experiential learning platform and fostering a global dialogue on critical issues, YuvaManthan empowers the youth to be agents of change, progress, and sustainable development. With self-awareness, inclusivity, role sharing, and innovation as guiding principles, YuvaManthan equips the youth with the skills, knowledge, and passion to build a better tomorrow – a future that is sustainable, inclusive, and peaceful. As the youth of YuvaManthan take their place on the world stage, they proudly represent India, leading the way towards a brighter and more prosperous future for all.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YuvaManthan Gateway Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-24 bg-gradient-to-b from-white to-[#FFF7ED]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">YuvaManthan</span>
            </h2>
            <p className="text-xl sm:text-2xl text-[#8B4513] font-semibold mb-8">
              A Gateway To Experiential Learning And Global Dialogue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#8B4513] text-lg leading-relaxed mb-6">
                Yuvamanthan stands as a bridge between theoretical knowledge and practical application, offering an experiential learning platform that equips the youth with skills-based capabilities. Rooted in a problem-centered orientation, the platform nurtures the ability to contribute to a diverse and multigenerational workforce. By combining intellectual comprehension with hands-on experience, Yuvamanthan fosters a new way of learning - one that is immersive, engaging, and empowering.
              </p>
              <p className="text-[#8B4513] text-lg leading-relaxed">
                At the core of Yuvamanthan's philosophy lies the belief that learning should be an individual and group comprehension, achieved through shared contextual exploration and reflective thought processes. Guided discussions, simulated situations, and large plenary meetings create a friendly space where knowledge nuggets are digested, and subject matter expertise is strengthened.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Navigating the Changing Economic Scenarios</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                In the age of unprecedented technological disruptions and economic shifts, the youth face the challenge of navigating the new intersection of work. Yuvamanthan addresses this challenge by empowering the youth with practical knowledge and skills for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proudly Representing India */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-[#8B4513]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Proudly Representing India to the World
            </h2>
            <p className="text-white/90 text-xl leading-relaxed max-w-4xl mx-auto">
              Yuvamanthan proudly represents India as a proponent of sustainability, peace, and growth on the global stage. By engaging in a global dialogue on international diplomacy, leadership, and collective duty, Yuvamanthan positions the youth as catalysts for positive change on a global scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engaging Events Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-4">
              The Engaging Events Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Yuvamanthan</span>
            </h2>
            <p className="text-[#8B4513] text-lg max-w-3xl mx-auto">
              Yuvamanthan brings its vision to life through a series of engaging events that serve as crucibles of learning and collaboration. These events are designed to foster creativity, emotional intelligence, and the ability to negotiate, providing a platform for the youth to learn life-long transferable skills in a risk-free environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className={`bg-gradient-to-r ${program.gradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                          {program.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{program.title}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                        <span className="text-white font-bold">{program.participants}+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-[#8B4513] leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-gradient-to-b from-[#FFF7ED] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-4">
              The Objectives Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Yuvamanthan</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Fostering Solutions To Real-World Problems</h3>
              <p className="text-[#6A3E2E] text-lg">
                One of the primary objectives of Yuvamanthan is to encourage the youth to come up with innovative solutions to real-world challenges. By empowering the youth to think critically and creatively, Yuvamanthan paves the way for a future generation of problem solvers and changemakers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Informing Youth About Government Initiatives</h3>
              <p className="text-[#6A3E2E] text-lg">
                Through Yuvamanthan, the youth gain insights into government initiatives and policies. By fostering an understanding of the broader socio-political landscape, Yuvamanthan equips the youth to be informed and engaged citizens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Empowering Youth Participation In Governance</h3>
              <p className="text-[#6A3E2E] text-lg">
                Yuvamanthan actively works to empower youth participation in governance structures, creating pathways for young voices to be heard in decision-making processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Providing A Global Outlook To Youth</h3>
              <p className="text-[#6A3E2E] text-lg">
                Yuvamanthan offers the youth a unique opportunity to gain a global perspective on issues that transcend borders. By engaging with international stakeholders and global challenges, Yuvamanthan prepares the youth to be global citizens and effective advocates for positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kartavya Kaal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-[#8B4513]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Empowering Youth For The <span className="text-[#FFD700]">Kartavya Kaal</span>
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              As we enter the 'Kartavya Kaal,' a futuristic and inclusive era at the core of which are responsibilities for each citizen, Yuvamanthan seeks to build the youth's capacity to position themselves and the nation for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-4">
              Principles And <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl shadow-lg p-8 border-b-4 border-[#E07B00]"
              >
                <div className="text-[#8B4513] mb-4">{principle.icon}</div>
                <h3 className="text-2xl font-bold text-[#8B4513] mb-3">{principle.title}</h3>
                <p className="text-[#6A3E2E] text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Matching Passions With Career Paths</h3>
              <p className="text-[#6A3E2E] text-lg">
                Yuvamanthan believes that true fulfillment and success come from aligning one's passions with their career paths. By encouraging the youth to discover and pursue their passions, Yuvamanthan fosters a generation of driven individuals who are inspired to create positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Testing, Experimenting, And Improving In A Risk-Free Environment</h3>
              <p className="text-[#6A3E2E] text-lg">
                In the journey of growth, Yuvamanthan celebrates the value of testing, experimenting, and learning from experiences. The platform provides a safe environment for the youth to explore new ideas, iterate, and continuously improve, enabling them to be adaptive and resilient in the face of challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Covered Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-gradient-to-b from-[#FFF7ED] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-4">
              Topics Covered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#E07B00]">YuvaManthan</span>
            </h2>
            <p className="text-[#8B4513] text-xl max-w-3xl mx-auto">
              Navigating The Future
            </p>
            <p className="text-[#6A3E2E] text-lg mt-4 max-w-4xl mx-auto">
              YuvaManthan offers a diverse range of topics that equip the youth with the knowledge and skills to navigate the future with confidence and purpose. The platform addresses critical global challenges, opening doors to opportunities for collaboration and collective action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-b-4 border-[#E07B00]"
              >
                <div className="text-[#8B4513] mb-3">{topic.icon}</div>
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">{topic.title}</h3>
                <p className="text-[#6A3E2E]">{topic.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6A3E2E] mb-4">
              The Yuvamanthan Learning Approach
            </h2>
            <p className="text-xl text-[#8B4513] mb-8">A Transformation In Education</p>
            <p className="text-[#6A3E2E] text-lg max-w-4xl mx-auto">
              Yuvamanthan's learning approach is a departure from traditional educational paradigms. It transforms education into an immersive and dynamic experience that nurtures critical thinking, creativity, and problem-solving skills among the youth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Experiential Learning In A Risk-Free Environment</h3>
              <p className="text-[#6A3E2E] text-lg">
                Experiential learning lies at the heart of Yuvamanthan's pedagogy. Through interactive sessions, simulated situations, and guided discussions, the platform offers the youth a practical learning environment, where they can apply their knowledge and skills in a risk-free setting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Multimodal And Personalized Learning</h3>
              <p className="text-[#6A3E2E] text-lg">
                Yuvamanthan recognizes that every individual learns differently. The platform embraces a multimodal approach that caters to diverse learning styles, empowering the youth to learn in ways that resonate with them personally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Microcredentialing Program</h3>
              <p className="text-[#6A3E2E] text-lg">
                Recognizing Tangible Mission Outcomes. Yuvamanthan's microcredentialing program acknowledges the tangible outcomes achieved by the youth in their experiential learning journey. By recognizing their accomplishments, the platform motivates the youth to continue their pursuit of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-xl shadow-lg p-8 border-l-4 border-[#E07B00]"
            >
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Talent Development Through Emotional Intelligence</h3>
              <p className="text-[#6A3E2E] text-lg">
                Yuvamanthan not only focuses on academic knowledge but also emphasizes the development of emotional intelligence and negotiation skills. These essential soft skills empower the youth to navigate interpersonal relationships and lead with empathy and effectiveness.
              </p>
            </motion.div>
          </div>
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