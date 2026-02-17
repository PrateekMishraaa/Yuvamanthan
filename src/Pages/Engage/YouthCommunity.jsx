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

const YuuthCommunity = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeBlog, setActiveBlog] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Color theme constants
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
    }
  };

  // Core Values/Features - Updated with new colors
  const coreValues = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "430 Million Youth",
      description: "Largest youth population in the world (16-35 years)",
      gradient: "from-[#6A3E2E] to-[#8B4513]",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Open Platform",
      description: "Discussion forums & collaborative workshops",
      gradient: "from-[#8B4513] to-[#C46200]",
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Social Impact",
      description: "Voice to make credible impact in society",
      gradient: "from-[#C46200] to-[#E07B00]",
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Digital Transformation",
      description: "Leveraging technology for youth empowerment",
      gradient: "from-[#E07B00] to-[#FFA500]",
    },
  ];

  // What We Offer - Updated with new colors
  const offerings = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Confidence Building",
      description: "Participate in forums, workshops, and social media events",
      color: "bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10",
      borderColor: "border-[#6A3E2E]/20",
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Personality Development",
      description: "Daily challenges and activities to polish your potential",
      color: "bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10",
      borderColor: "border-[#8B4513]/20",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Awareness in Your Pocket",
      description: "Latest updates on national headlines via digital platforms",
      color: "bg-gradient-to-br from-[#C46200]/10 to-[#E07B00]/10",
      borderColor: "border-[#C46200]/20",
    },
    {
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Social Storytelling",
      description: "Showcase your story across multiple social media platforms",
      color: "bg-gradient-to-br from-[#E07B00]/10 to-[#FFA500]/10",
      borderColor: "border-[#E07B00]/20",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Speakers of Tomorrow",
      description: "Live debates, mock summit sessions, and dialogue initiation",
      color: "bg-gradient-to-br from-[#FFA500]/10 to-[#FF8C00]/10",
      borderColor: "border-[#FFA500]/20",
    },
  ];

  // Trending Topics - Updated with new colors
  const trendingTopics = [
    {
      title: "Cyber Safety",
      stats: "1 out of 5 young people experience cyber trolling",
      description: "Exploring cyber security measures and online safety",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]",
    },
    {
      title: "G20 in India",
      stats: "India's 2023 G20 Presidency",
      description: "Digital Transformation, Sustainability, Startup India",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#8B4513] to-[#C46200]",
    },
    {
      title: "Post-Pandemic Culture",
      stats: "1/3 Indians faced joblessness during COVID-19",
      description: "Remote work, mental health, and lifestyle changes",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#C46200] to-[#E07B00]",
      image: null,
    },
    {
      title: "Women's Empowerment",
      stats: "Breaking barriers, creating examples",
      description: "Strengthening the narrative of women's empowerment",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#E07B00] to-[#FFA500]",
    },
    {
      title: "Future of Work",
      stats: "India climbed 30 spots in ease of doing business",
      description: "Economic growth and overcoming obstacles",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#FFA500] to-[#FF8C00]",
      image: null,
    },
    {
      title: "Climate Change",
      stats: "45% non-fossil fuel target by 2030",
      description: "India's commitment to sustainable development",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-[#FF8C00] to-[#FF7F00]",
    },
  ];

  // Key Initiatives - Updated with new colors
  const keyInitiatives = [
    {
      title: "New Education Policy (NEP) 2020",
      description: "Focus on online learning, critical thinking, and 21st-century skills",
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      stats: "34+ years policy overhaul",
    },
    {
      title: "LIFE Initiative",
      description: "Lifestyle for Environment - Sustainable living campaign",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-[#8B4513] to-[#C46200]",
      stats: "Pro-Planet People Community",
    },
    {
      title: "Startup India",
      description: "90,000+ active startups with government support",
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-[#C46200] to-[#E07B00]",
      stats: "100+ Unicorn Startups",
    },
    {
      title: "CDRI",
      description: "Coalition for Disaster Resilient Infrastructure",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-[#E07B00] to-[#FFA500]",
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
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      date: "Feb 25",
      title: "Workshops & Seminars",
      description: "Women empowerment, Startup India, Jan Bhagidari",
      time: "Last updated 10 mins ago",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      date: "Mar 22",
      title: "21-day LiFE Challenge",
      description: "Sustainable living initiative under LiFE",
      time: "Last updated 28 mins ago",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      date: "Mar 22",
      title: "Earth Day Celebration",
      description: "Selfie with a Plant contest and activities",
      time: "Last updated 3 mins ago",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
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

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                    The Discussion Platform for the Indian Youth
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#6A3E2E]">Yuva </span>
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Manthan
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8B4513] max-w-2xl">
                  Empowering India's 430 million youth to connect, contribute, and change
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#6A3E2E]/10 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-2 sm:p-3 bg-gradient-to-br ${value.gradient} rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">{value.title}</h3>
                      <p className="text-xs sm:text-sm text-[#8B4513]/80 mt-1 line-clamp-2">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 border border-[#8B4513]/10">
                <p className="text-[#8B4513] text-sm sm:text-base lg:text-lg leading-relaxed">
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
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#6A3E2E]/20 to-[#E07B00]/20 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6 lg:p-8">
                      <Globe className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#8B4513]/50 mx-auto mb-3 sm:mb-4" />
                      <p className="text-[#8B4513] font-semibold text-sm sm:text-base">Youth Community Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative -bottom-1 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-[#FFF7ED]"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-[#FFEDD5]"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
          </svg>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#6A3E2E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-[#8B4513]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Comprehensive development programs for India's youth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border ${offering.borderColor} ${offering.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2`}
              >
                <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                    <div className="p-2 sm:p-2.5 md:p-3 bg-white rounded-lg sm:rounded-xl shadow-md">
                      <div className="text-[#6A3E2E]">{offering.icon}</div>
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B4513]/20">0{index + 1}</div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E] mb-2 sm:mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-[#8B4513]/80 text-xs sm:text-sm md:text-base leading-relaxed">
                    {offering.description}
                  </p>

                  <button className="mt-4 sm:mt-5 md:mt-6 flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                    <span>Explore More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#8B4513]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              Trending{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Topics
              </span>
            </h2>
            <p className="text-[#8B4513]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Join discussions on issues that matter to India's youth
            </p>
          </div>

          {/* Topic Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Mobile/Tablet Navigation Buttons */}
              <button
                onClick={() => setActiveTopic((prev) => (prev - 1 + trendingTopics.length) % trendingTopics.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4 z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-xl border border-[#6A3E2E]/20 flex items-center justify-center hover:bg-[#FFF7ED] hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E]" />
              </button>

              <button
                onClick={() => setActiveTopic((prev) => (prev + 1) % trendingTopics.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 lg:translate-x-4 z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-xl border border-[#6A3E2E]/20 flex items-center justify-center hover:bg-[#FFF7ED] hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E]" />
              </button>

              {/* Main Topic Display */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white shadow-2xl border border-[#6A3E2E]/20">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <div className={`w-full h-48 sm:h-56 md:h-64 lg:h-full bg-gradient-to-br ${trendingTopics[activeTopic].gradient} flex items-center justify-center`}>
                      <div className="text-white text-3xl sm:text-4xl lg:text-5xl">💬</div>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4">
                      <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">Hot Topic</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${trendingTopics[activeTopic].gradient} mr-2 sm:mr-3`}>
                        <div className="text-white">{trendingTopics[activeTopic].icon}</div>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E]">
                        {trendingTopics[activeTopic].title}
                      </h3>
                    </div>

                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full mb-3 sm:mb-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                          {trendingTopics[activeTopic].stats}
                        </span>
                      </div>
                      <p className="text-[#8B4513] text-sm sm:text-base md:text-lg leading-relaxed">
                        {trendingTopics[activeTopic].description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                        Join Discussion
                      </button>
                      <div className="text-xs sm:text-sm text-[#8B4513]/80">
                        <span className="font-semibold text-[#6A3E2E]">+245</span> participants
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topic Indicators */}
              <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-4 sm:mt-6 lg:mt-8">
                {trendingTopics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTopic(index)}
                    className={`transition-all duration-300 ${
                      index === activeTopic
                        ? `w-4 sm:w-5 lg:w-6 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${trendingTopics[index].gradient}`
                        : "w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#8B4513]/30 hover:bg-[#8B4513]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* All Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTopic(index)}
                  className={`group cursor-pointer rounded-xl sm:rounded-2xl border-2 p-4 sm:p-5 lg:p-6 transition-all duration-300 ${
                    index === activeTopic
                      ? "border-[#6A3E2E] shadow-lg bg-[#6A3E2E]/5"
                      : "border-[#6A3E2E]/20 bg-white hover:border-[#6A3E2E]/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${topic.gradient} mr-2 sm:mr-3`}>
                      <div className="text-white">{topic.icon}</div>
                    </div>
                    <h4 className="font-bold text-[#6A3E2E] text-sm sm:text-base">{topic.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8B4513]/80 line-clamp-2">{topic.description}</p>
                  <div className="mt-3 sm:mt-4 flex items-center text-xs text-[#8B4513]/60">
                    <div className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      <span>Discuss</span>
                    </div>
                    <div className="ml-3 sm:ml-4 flex items-center">
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
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#C46200]/10 to-[#E07B00]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#C46200]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              National{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Initiatives
              </span>
            </h2>
            <p className="text-[#8B4513]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Government programs shaping India's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {keyInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white border border-[#6A3E2E]/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-5 md:mb-6">
                    <div className={`p-2 sm:p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${initiative.gradient} shadow-md mr-0 sm:mr-4 mb-3 sm:mb-0`}>
                      <div className="text-white w-5 h-5 sm:w-6 sm:h-6">{initiative.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A3E2E]">
                        {initiative.title}
                      </h3>
                      <div className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full mt-1 sm:mt-2">
                        <span className="text-xs font-semibold text-[#6A3E2E]">
                          {initiative.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#8B4513]/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
                    {initiative.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#8B4513]/10">
                    <button className="flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513]">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </button>
                    <div className="text-[10px] sm:text-xs text-[#8B4513]/60">Govt. Initiative</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Gallery Section */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#E07B00] via-[#8B4513] to-[#6A3E2E] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B4513]/20 to-[#FFA500]/20 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6 lg:p-8">
                      <Users className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#8B4513]/50 mx-auto mb-3 sm:mb-4" />
                      <p className="text-[#8B4513] font-semibold text-sm sm:text-base">Showcase Your Talent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#E07B00]/10 to-[#FFA500]/10 rounded-full">
                <span className="text-xs sm:text-sm font-semibold text-[#E07B00]">
                  Showcase Your Talent
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E]">
                Youth{" "}
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>

              <p className="text-[#8B4513] text-sm sm:text-base md:text-lg">
                Showcase your talent, culture or fashion. Post us your pics, videos and reels and we will feature them in this section.
              </p>

              <div className="space-y-2 sm:space-y-3 bg-gradient-to-br from-[#E07B00]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#E07B00]/20">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6A3E2E]">How to Participate:</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#E07B00] to-[#FFA500] rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2"></div>
                    <span className="text-[#8B4513] text-xs sm:text-sm">Create your best content - photos, videos, reels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#E07B00] to-[#FFA500] rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2"></div>
                    <span className="text-[#8B4513] text-xs sm:text-sm">Email to: YouthGallery@yuvamanthan.org</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#E07B00] to-[#FFA500] rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2"></div>
                    <span className="text-[#8B4513] text-xs sm:text-sm">Get featured on our platform</span>
                  </li>
                </ul>
              </div>

              <button className="group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold overflow-hidden hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Submit Your Content</span>
                <div className="absolute -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Blogs Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-4 sm:mb-5 lg:mb-8">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#8B4513]" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6A3E2E]">
                  Upcoming Events
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeEvent === index
                        ? "border-[#8B4513] bg-[#8B4513]/5"
                        : "border-[#6A3E2E]/20 bg-white hover:border-[#8B4513]/40 hover:shadow-md"
                    }`}
                    onClick={() => setActiveEvent(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10 rounded-lg sm:rounded-xl flex flex-col items-center justify-center">
                        <span className="text-sm sm:text-base lg:text-lg font-bold text-[#8B4513]">{event.date.split(' ')[0]}</span>
                        <span className="text-[10px] sm:text-xs text-[#C46200]">{event.date.split(' ')[1]}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-1 sm:mb-2">
                        {event.icon}
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#6A3E2E] ml-1.5 sm:ml-2">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-[#8B4513]/80 text-xs sm:text-sm mb-1 sm:mb-2">{event.description}</p>
                      <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/60">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Blogs */}
            <div>
              <div className="flex items-center mb-4 sm:mb-5 lg:mb-8">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-[#E07B00]/10 to-[#FFA500]/10 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#E07B00]" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6A3E2E]">
                  Featured Blogs
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {featuredBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer rounded-xl sm:rounded-2xl border-2 p-4 sm:p-5 lg:p-6 transition-all duration-300 ${
                      activeBlog === index
                        ? "border-[#E07B00] bg-[#E07B00]/5"
                        : "border-[#6A3E2E]/20 bg-white hover:border-[#E07B00]/40 hover:shadow-md"
                    }`}
                    onClick={() => setActiveBlog(index)}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        <div className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-[#E07B00]/10 to-[#FFA500]/10 rounded-full mb-2">
                          <span className="text-[10px] sm:text-xs font-semibold text-[#E07B00]">
                            {blog.date}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#6A3E2E] mb-1 sm:mb-2">
                          {blog.title}
                        </h3>
                      </div>
                      <div className="text-2xl sm:text-3xl">📝</div>
                    </div>
                    <p className="text-[#8B4513]/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-[#8B4513]/60">{blog.readTime}</span>
                      <button className="flex items-center text-xs sm:text-sm font-semibold text-[#E07B00] hover:text-[#FFA500]">
                        Read More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 sm:mt-5 lg:mt-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg sm:rounded-xl font-semibold hover:shadow-md transition-all duration-300 text-sm sm:text-base">
                View All Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#6A3E2E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl border border-[#6A3E2E]/20 overflow-hidden hover:border-[#6A3E2E]/40 hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-left flex justify-between items-center"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#6A3E2E] pr-4">
                    {faq.question}
                  </h3>
                  <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60 group-hover:text-[#6A3E2E] transition-all duration-300 flex-shrink-0 ${
                    expandedFaq === index ? "rotate-90" : ""
                  }`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-5 lg:px-6 pb-3 sm:pb-4">
                    <p className="text-[#8B4513] text-xs sm:text-sm lg:text-base">{faq.answer}</p>
                  </div>
                )}
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