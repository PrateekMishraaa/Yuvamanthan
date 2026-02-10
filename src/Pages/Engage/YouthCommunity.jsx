import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  Users,
  MessageSquare,
  Target,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Home,
  FileText,
  Rocket,
  BarChart,
  DollarSign,
  Clock,
  User,
  ShieldAlert,
  Brain,
  Lightbulb,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Heart,
  Award,
  Briefcase,
  GraduationCap,
  Users as UsersIcon,
  Target as TargetIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

// Import placeholder images (you'll need to create/use actual images)
// import YouthHeroImage from "../../assets/youth-hero.svg";
// import G20Image from "../../assets/g20.svg";
// import CyberSafetyImage from "../../assets/cyber-safety.svg";
// import WomenEmpowermentImage from "../../assets/women-empowerment.svg";
// import ClimateChangeImage from "../../assets/climate-change.svg";
// import StartupImage from "../../assets/startup.svg";
// import NEPImage from "../../assets/nep.svg";
// import LifeInitiativeImage from "../../assets/life-initiative.svg";
// import CDRIImage from "../../assets/cdri.svg";
// import YouthGalleryImage from "../../assets/youth-gallery.svg";

const YuuthCommunity = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeBlog, setActiveBlog] = useState(0);

  // Core Values/Features
  const coreValues = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "430 Million Youth",
      description: "Largest youth population in the world (16-35 years)",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Open Platform",
      description: "Discussion forums & collaborative workshops",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Social Impact",
      description: "Voice to make credible impact in society",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Leveraging technology for youth empowerment",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // What We Offer
  const offerings = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Confidence Building",
      description: "Participate in forums, workshops, and social media events",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Personality Development",
      description: "Daily challenges and activities to polish your potential",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Awareness in Your Pocket",
      description: "Latest updates on national headlines via digital platforms",
      color: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Storytelling",
      description: "Showcase your story across multiple social media platforms",
      color: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Speakers of Tomorrow",
      description: "Live debates, mock summit sessions, and dialogue initiation",
      color: "bg-gradient-to-br from-indigo-50 to-violet-50",
      borderColor: "border-indigo-200",
    },
  ];

  // Trending Topics
  const trendingTopics = [
    {
      title: "Cyber Safety",
      stats: "1 out of 5 young people experience cyber trolling",
      description: "Exploring cyber security measures and online safety",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    //   image: CyberSafetyImage,
    },
    {
      title: "G20 in India",
      stats: "India's 2023 G20 Presidency",
      description: "Digital Transformation, Sustainability, Startup India",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
    //   image: G20Image,
    },
    {
      title: "Post-Pandemic Culture",
      stats: "1/3 Indians faced joblessness during COVID-19",
      description: "Remote work, mental health, and lifestyle changes",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      image: null,
    },
    {
      title: "Women's Empowerment",
      stats: "Breaking barriers, creating examples",
      description: "Strengthening the narrative of women's empowerment",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500",
    //   image: WomenEmpowermentImage,
    },
    {
      title: "Future of Work",
      stats: "India climbed 30 spots in ease of doing business",
      description: "Economic growth and overcoming obstacles",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      image: null,
    },
    {
      title: "Climate Change",
      stats: "45% non-fossil fuel target by 2030",
      description: "India's commitment to sustainable development",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-teal-500 to-green-500",
    //   image: ClimateChangeImage,
    },
  ];

  // Key Initiatives
  const keyInitiatives = [
    {
      title: "New Education Policy (NEP) 2020",
      description: "Focus on online learning, critical thinking, and 21st-century skills",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      stats: "34+ years policy overhaul",
    },
    {
      title: "LIFE Initiative",
      description: "Lifestyle for Environment - Sustainable living campaign",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      stats: "Pro-Planet People Community",
    },
    {
      title: "Startup India",
      description: "90,000+ active startups with government support",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      stats: "100+ Unicorn Startups",
    },
    {
      title: "CDRI",
      description: "Coalition for Disaster Resilient Infrastructure",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      stats: "Global resilience platform",
    },
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      date: "Jan 10",
      title: "Youth Participation in G20 Summit 2023",
      description: "Line up of youth engagement activities",
      time: "Last updated 23 mins ago",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      date: "Feb 25",
      title: "Workshops & Seminars",
      description: "Women empowerment, Startup India, Jan Bhagidari",
      time: "Last updated 10 mins ago",
      icon: <Users className="w-5 h-5" />,
    },
    {
      date: "Mar 22",
      title: "21-day LiFE Challenge",
      description: "Sustainable living initiative under LiFE",
      time: "Last updated 28 mins ago",
      icon: <Target className="w-5 h-5" />,
    },
    {
      date: "Mar 22",
      title: "Earth Day Celebration",
      description: "Selfie with a Plant contest and activities",
      time: "Last updated 3 mins ago",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  // Featured Blogs
  const featuredBlogs = [
    {
      title: "Model G20: Not Just A Simulation",
      excerpt: "Before one dives into how a Model G20 will benefit the students...",
      date: "02/06/2023",
      author: "by Yuvamanthan",
      readTime: "5 min read",
    },
    {
      title: "Youth Perception On Climate Change In The G20",
      excerpt: "Climate change is defined as drastic temperature shifts and unpredictable weather patterns...",
      date: "02/01/2023",
      author: "by Yuvamanthan",
      readTime: "4 min read",
    },
    {
      title: "How India Became A Unicorn Nation?",
      excerpt: "The term 'unicorn' was first coined by Aileen Lee, founder of Cowboy Ventures, in 2013...",
      date: "01/25/2023",
      author: "by Yuvamanthan",
      readTime: "6 min read",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What Is YuvaManthan?",
      answer: "YuvaManthan community is an open platform that celebrates Indian youth and allows open discussions, participation and collaboration from all youngsters across India on trending subjects.",
    },
    {
      question: "What Is The Significance Of Having This Community?",
      answer: "With India having the largest youth population, YuvaManthan provides a crucial platform for youth to voice opinions, build confidence, and create social impact.",
    },
    {
      question: "What Kind Of Activities Does The YuvaManthan Community Associate With?",
      answer: "Workshops, seminars, debates, social media campaigns, Model G20 simulations, and various youth-centric challenges and activities.",
    },
    {
      question: "Who Can Join This Forum?",
      answer: "All Indian youth aged 16-35 years who are passionate about making a difference and contributing to national development.",
    },
    {
      question: "How Can I Join The YuvaManthan Community?",
      answer: "Simply sign up or register through our platform to become part of the Youngistaan tribe.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
                  <span className="text-sm font-semibold text-blue-700">
                    The Discussion Platform for the Indian Youth
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Yuva </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Manthan
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700">
                  Empowering India's 430 million youth to connect, contribute, and change
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-3 bg-gradient-to-br ${value.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{value.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We at Yuva manthan believe that India is a land of tradition and innovation 
                  that mixes well with the impressionable minds of today's youth. As youngsters 
                  today are more inclined towards Social Awareness, Freedom of Change and Digital 
                  Transformation, we are here to provide a platform that gives them the voice to 
                  make a credible impact in society.
                </p>
              </div>

          
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    // src={YouthHeroImage}
                    alt="Indian Youth Community"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative -bottom-1 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-blue-50"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-blue-100"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
          </svg>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 md:mb-6">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive development programs for India's youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border ${offering.borderColor} ${offering.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-md">
                      <div className="text-blue-600">{offering.icon}</div>
                    </div>
                    <div className="text-5xl font-bold text-gray-200/50">0{index + 1}</div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {offering.description}
                  </p>

                  <button className="mt-6 flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group">
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-4 md:mb-6">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trending{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Topics
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Join discussions on issues that matter to India's youth
            </p>
          </div>

          {/* Topic Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <button
                onClick={() => setActiveTopic((prev) => (prev - 1 + trendingTopics.length) % trendingTopics.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={() => setActiveTopic((prev) => (prev + 1) % trendingTopics.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Main Topic Display */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    {trendingTopics[activeTopic].image ? (
                      <img
                        src={trendingTopics[activeTopic].image}
                        alt={trendingTopics[activeTopic].title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-64 lg:h-full bg-gradient-to-br ${trendingTopics[activeTopic].gradient} flex items-center justify-center`}>
                        <div className="text-white text-4xl">💬</div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold text-gray-800">Hot Topic</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-6 md:p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${trendingTopics[activeTopic].gradient} mr-3`}>
                        <div className="text-white">{trendingTopics[activeTopic].icon}</div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {trendingTopics[activeTopic].title}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-semibold text-blue-700">
                          {trendingTopics[activeTopic].stats}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {trendingTopics[activeTopic].description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Join Discussion
                      </button>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold text-blue-600">+245</span> participants
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topic Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {trendingTopics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTopic(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTopic
                        ? `bg-gradient-to-r ${trendingTopics[index].gradient} w-6`
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* All Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTopic(index)}
                  className={`group cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                    index === activeTopic
                      ? "border-blue-500 shadow-lg bg-blue-50"
                      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${topic.gradient} mr-3`}>
                      <div className="text-white">{topic.icon}</div>
                    </div>
                    <h4 className="font-bold text-gray-900">{topic.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{topic.description}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <div className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      <span>Discuss</span>
                    </div>
                    <div className="ml-4 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>Join</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl mb-4 md:mb-6">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              National{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Initiatives
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Government programs shaping India's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {keyInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${initiative.gradient} shadow-md`}>
                        <div className="text-white w-6 h-6">{initiative.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {initiative.title}
                        </h3>
                        <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mt-2">
                          <span className="text-xs font-semibold text-blue-700">
                            {initiative.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {initiative.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="text-xs text-gray-500">Govt. Initiative</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Gallery Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    // src={YouthGalleryImage}
                    alt="Youth Gallery - Showcase Your Talent"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-pink-700">
                  Showcase Your Talent
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Youth{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>

              <p className="text-gray-700 text-lg">
                Showcase your talent, culture or fashion. Post us your pics, videos and reels and we will feature them in this section.
              </p>

              <div className="space-y-4 bg-gradient-to-br from-pink-50/50 to-purple-50/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-gray-900">How to Participate:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></div>
                    <span>Create your best content - photos, videos, reels</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></div>
                    <span>Email to: YouthGallery@yuvamanthan.org</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></div>
                    <span>Get featured on our platform</span>
                  </li>
                </ul>
              </div>

              <button className="group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold overflow-hidden hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5" />
                <span>Submit Your Content</span>
                <div className="absolute -right-2 w-8 h-8 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Blogs Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl mr-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Upcoming Events
                </h2>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`group flex items-start space-x-4 p-4 rounded-2xl border transition-all duration-300 ${
                      activeEvent === index
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
                    }`}
                    onClick={() => setActiveEvent(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-green-700">{event.date.split(' ')[0]}</span>
                        <span className="text-xs text-green-600">{event.date.split(' ')[1]}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-2">
                        {event.icon}
                        <h3 className="text-lg font-semibold text-gray-900 ml-2">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Blogs */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mr-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Featured Blogs
                </h2>
              </div>

              <div className="space-y-6">
                {featuredBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                      activeBlog === index
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                    }`}
                    onClick={() => setActiveBlog(index)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-orange-50 to-red-50 rounded-full mb-2">
                          <span className="text-xs font-semibold text-orange-700">
                            {blog.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {blog.title}
                        </h3>
                      </div>
                      <div className="text-3xl">📝</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{blog.readTime}</span>
                      <button className="flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-semibold hover:shadow-md transition-all duration-300">
                View All Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 md:mb-6">
              <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <button className="w-full px-6 py-4 text-left flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:rotate-90 transition-all duration-300" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default YuuthCommunity;