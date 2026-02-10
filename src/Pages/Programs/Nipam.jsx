import React from "react";
import Navbar from "../../Components/Navbar";
import LeftImage from "../../assets/nipamImage.svg";
import {
  ArrowRight,
  Target,
  Users,
  Award,
  BookOpen,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Factory,
  Shield,
  Zap,
  Home,
  FileText,
  Rocket,
  BarChart,
  DollarSign,
  Users as UsersIcon,
  Target as TargetIcon,
  Clock,
  MessageSquare,
  ChevronRight as ChevronRightIcon,
  User,
  ShieldAlert,
  TrendingUp as TrendingUpIcon,
  Brain,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import modi from "../../assets/modi.svg";
import piyush from "../../assets/piyush.svg";
import Project from "../../assets/projects.svg";
import InnovationImage from "../../assets/ipimage.svg";
import Footer from "../../Components/Footer";

const Nipam = () => {
  const navigate = useNavigate();
  const [activeQuote, setActiveQuote] = useState(0);

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pan-India Initiative",
      description: "Reaching students across the nation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1 Million Students",
      description: "Ambitious nationwide awareness goal",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Recognition for participation",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expert Knowledge",
      description: "Learn from IP professionals",
    },
  ];

  const quotes = [
    {
      text: "Technology and ideas serve as the twin engines of growth, with the intellectual property regime acting as the fuel that powers this engine.",
      author: "Shri Piyush Goyal",
      designation:
        "Hon'ble Minister of Commerce & Industry, Consumer Affairs & Food & Public Distribution and Textiles, Govt. of India",
      gradient: "from-[#8B4513] to-[#E07B00]",
      image: piyush,
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
    },
    {
      text: "The rise in patent applications in India demonstrates the rising innovative zeal of our youth and is a very positive sign for the times to come.",
      author: "Shri Narendra Modi",
      designation: "Hon'ble Prime Minister of India",
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      image: modi,
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
    },
    {
      text: "Intellectual property is the fuel that drives innovation & creativity... protect it fiercely.",
      author: "Shri Unnat P. Pandit",
      designation: "Prof. (Dr.) Unnat P. Pandit, CGPDTM",
      gradient: "from-[#E07B00] to-[#FFA500]",
      image: null,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
  ];

  const ipInitiatives = [
    {
      title: "Vocal For Local",
      description:
        "Shri Narendra Modi, our Prime Minister, spearheaded the 'Vocal for Local' campaign, calling for backing local products to propel the nation's progress and actualize the vision of Aatmanirbhar Bharat.",
      icon: <Home className="w-8 h-8" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      stats: "5000+ Local Brands",
      impact: "Boosting domestic innovation",
    },
    {
      title: "Impact on FDI",
      description:
        "The potential for R&D-driven innovation and adept utilization of information technology in business operations could mark a substantial shift in foreign direct investment (FDI) inflows into India. This shift may transition from market-seeking investments to a more export-oriented focus, driven by increased intellectual property creation.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-[#8B4513] to-[#C46200]",
      stats: "$83.6B FDI Inflows",
      impact: "Export-oriented growth",
    },
    {
      title: "MAKE IN INDIA",
      description:
        "Robust intellectual property protection has spurred increased foreign investment in India. Numerous companies opt to establish their facilities in the country or outsource significant portions of their business operations to India.",
      icon: <Factory className="w-8 h-8" />,
      gradient: "from-[#C46200] to-[#E07B00]",
      stats: "27 Manufacturing Sectors",
      impact: "Global manufacturing hub",
    },
    {
      title: "Technology Transfers",
      description:
        "To propel its economic growth, India must facilitate Technology Transfers. Leveraging entities like Technology Transfer Offices (TTOs), Technology and Innovation Support Centers (TISCs), science and technology parks, technology incubators, and IP marketplaces can play a pivotal role in achieving this goal.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-[#E07B00] to-[#FFA500]",
      stats: "1000+ Tech Transfers",
      impact: "Accelerating innovation",
    },
    {
      title: "Protection Of The Economy",
      description:
        "Intellectual Property safeguards the economy—bolstering GDP, employment, tax revenues, development, and competitiveness. SMEs, supported by IP, experience up to 20% higher growth. IP facilitates innovation monetization, investment security, increased market value, and the expansion into new markets.",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-[#FFA500] to-[#FFB347]",
      stats: "20% Higher SME Growth",
      impact: "Economic resilience",
    },
  ];

  const economicImpacts = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "GDP Growth",
      value: "25% Contribution",
      description: "IP-intensive industries contribute to GDP",
      color: "from-[#6A3E2E] to-[#8B4513]",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Employment",
      value: "18.5M Jobs",
      description: "Created by IP-driven sectors",
      color: "from-[#8B4513] to-[#C46200]",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Tax Revenue",
      value: "₹2.8T Annually",
      description: "Generated through IP activities",
      color: "from-[#C46200] to-[#E07B00]",
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "2047 Vision",
      value: "Developed Nation",
      description: "IP as catalyst for development",
      color: "from-[#E07B00] to-[#FFA500]",
    },
  ];

  const discussions = [
    {
      name: "Rahul",
      avatar: null,
      statement: "Aspiring to be an entrepreneur, I seek comprehensive knowledge before launching my venture, emphasizing a crucial understanding of business laws.",
      icon: <User className="w-5 h-5" />,
      color: "from-[#6A3E2E] to-[#8B4513]",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-100 to-amber-100",
    },
    {
      name: "Shivam",
      avatar: null,
      statement: "Companies with Intellectual Property Rights (IPRs) boast a remarkable 29% higher revenue per employee, employ nearly six times as many staff, and offer wages up to 20% higher than non-IP-owning counterparts.",
      icon: <TrendingUpIcon className="w-5 h-5" />,
      color: "from-[#8B4513] to-[#C46200]",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
    },
    {
      name: "Austin",
      avatar: null,
      statement: "Safeguarding intellectual property is costly and challenging. Over 50% are ill-prepared to navigate its complexities when launching their ventures.",
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "from-[#C46200] to-[#E07B00]",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-100 to-amber-100",
    },
  ];

  const nextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-orange-50 to-amber-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Image Container */}
            <div className="w-full lg:w-2/5 relative order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={LeftImage}
                    alt="NIPAM Initiative Visual"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tr from-[#6A3E2E]/20 to-transparent rounded-full opacity-30 hidden lg:block"></div>
            </div>

            {/* Right Content Container */}
            <div className="w-full lg:w-3/5 space-y-6 lg:space-y-12 order-1 lg:order-2">
              {/* Main Heading */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
                  <span className="text-sm font-semibold text-[#8B4513]">
                    Ministry of Commerce & Industry Initiative
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">
                    National IP Awareness Mission{" "}
                  </span>
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    (NIPAM)
                  </span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mt-2">
                  IPR Initiative For Students And Teachers At{" "}
                  <span className="text-[#E07B00]">Yuvamanthan</span>
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#E07B00]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[#8B4513]">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-6 bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6A3E2E] to-[#E07B00] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                    Join the NIPAM Programmes
                  </h2>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  National Intellectual Property Awareness Mission (NIPAM),
                  under the aegis of Office of the Controller General of
                  Patents, Designs & Trademarks, Ministry of Commerce & Industry
                  is a beacon entrusted with the mission of democratising
                  awareness of intellectual property and its rights. This
                  ambitious, pan-India initiative aspires to enlighten a million
                  students about the nuances of intellectual property, thereby
                  fostering a culture of innovation and safeguarding creativity
                  on a national scale.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative h-14 w-full sm:w-80 px-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-semibold">Register Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
                <p className="text-gray-600 text-sm mt-3 ml-2">
                  Click here to join the mission and become part of the
                  innovation revolution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative -bottom-1 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 md:h-24"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-current text-gradient-to-r from-amber-50 to-white"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-current text-gradient-to-r from-amber-100 to-white"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-current text-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4 md:mb-6">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Words of{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Inspiration
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              Hear from visionary leaders about the importance of intellectual
              property and innovation in India's growth story
            </p>
          </div>

          {/* Main Quote Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevQuote}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#E07B00]" />
              </button>

              <button
                onClick={nextQuote}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#E07B00]" />
              </button>

              {/* Quote Card */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl md:blur-2xl opacity-10"></div>

                {/* Quote Content */}
                <div
                  className={`relative bg-white rounded-2xl md:rounded-3xl shadow-2xl border ${quotes[activeQuote].borderColor} overflow-hidden`}
                >
                  <div className="p-6 md:p-8 lg:p-12 xl:p-16">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                      {/* Speaker Image */}
                      <div className="lg:w-1/4">
                        <div
                          className={`${quotes[activeQuote].bgColor} rounded-xl md:rounded-2xl p-3 md:p-4 border ${quotes[activeQuote].borderColor}`}
                        >
                          {quotes[activeQuote].image ? (
                            <div className="relative">
                              <img
                                src={quotes[activeQuote].image}
                                alt={quotes[activeQuote].author}
                                className="w-full h-auto rounded-lg md:rounded-xl shadow-lg"
                              />
                              <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg md:rounded-xl`}
                              ></div>
                            </div>
                          ) : (
                            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <Quote
                                className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${quotes[activeQuote].gradient} bg-clip-text text-transparent`}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quote Content */}
                      <div className="lg:w-3/4 space-y-4 lg:space-y-6">
                        {/* Quote Text */}
                        <div className="space-y-3 lg:space-y-4">
                          <div className="flex items-center space-x-3">
                            <Quote
                              className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${quotes[activeQuote].gradient} bg-clip-text text-transparent`}
                            />
                            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                              Inspiring Words
                            </h3>
                          </div>
                          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 leading-relaxed italic">
                            "{quotes[activeQuote].text}"
                          </p>
                        </div>

                        {/* Speaker Info */}
                        <div className="pt-4 lg:pt-6 border-t border-gray-200">
                          <div className="flex items-center mb-3 lg:mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 md:w-5 md:h-5 fill-current text-amber-400"
                              />
                            ))}
                          </div>

                          <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                              {quotes[activeQuote].author}
                            </h3>
                            <p className="text-gray-600 mt-1 text-sm md:text-base">
                              {quotes[activeQuote].designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Bottom Border */}
                  <div
                    className={`h-1 md:h-2 bg-gradient-to-r ${quotes[activeQuote].gradient}`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quote Indicators */}
            <div className="flex justify-center items-center space-x-4 mt-8 lg:mt-12">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveQuote(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeQuote
                      ? "bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] w-6 md:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            {/* All Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 lg:mt-16">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  onClick={() => setActiveQuote(index)}
                  className={`group cursor-pointer p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                    index === activeQuote
                      ? `border-[#E07B00] ${quote.bgColor} shadow-lg`
                      : `border-gray-200 bg-white hover:border-[#E07B00]/50 hover:shadow-md`
                  }`}
                >
                  <div className="space-y-3 md:space-y-4">
                    {/* Quote Image */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex-shrink-0">
                        {quote.image ? (
                          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden border-2 border-white shadow-md">
                            <img
                              src={quote.image}
                              alt={quote.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl ${quote.bgColor} flex items-center justify-center border ${quote.borderColor}`}
                          >
                            <Quote
                              className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${quote.gradient} bg-clip-text text-transparent`}
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">
                          {quote.author}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {quote.designation}
                        </p>
                      </div>
                    </div>

                    {/* Quote Text */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Quote className="w-3 h-3 md:w-4 md:h-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-xs md:text-sm font-medium text-gray-700 line-clamp-3">
                          "{quote.text}"
                        </p>
                      </div>
                      <div className="flex items-center pt-1 md:pt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-3 h-3 md:w-4 md:h-4 fill-current text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IP Initiatives & Economic Impact Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-4 md:mb-6">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Essential Aspects of{" "}
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Intellectual Property Rights
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
              In India's Journey To Achieve Developed Nation Status By 2047
            </p>
          </div>

          {/* Economic Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 lg:mb-16">
            {economicImpacts.map((impact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg md:rounded-xl mb-3 md:mb-4">
                  <div className={`bg-gradient-to-r ${impact.color} bg-clip-text text-transparent`}>
                    {impact.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                  {impact.value}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
                  {impact.title}
                </p>
                <p className="text-xs text-gray-500">{impact.description}</p>
              </div>
            ))}
          </div>

          {/* IP Initiatives Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {ipInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div
                        className={`p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${initiative.gradient} shadow-md`}
                      >
                        <div className="text-white w-6 h-6 md:w-8 md:h-8">
                          {initiative.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                          {initiative.title}
                        </h3>
                        <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mt-1 md:mt-2">
                          <span className="text-xs md:text-sm font-semibold text-gray-700">
                            {initiative.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Impact Tag */}
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${initiative.gradient}`}></div>
                        <span className="text-xs md:text-sm font-medium text-gray-600">
                          {initiative.impact}
                        </span>
                      </div>

                      {/* Read More */}
                      <button className="flex items-center text-xs md:text-sm font-semibold text-[#8B4513] hover:text-[#6A3E2E]">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </button>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-5">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${initiative.gradient} rounded-full`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IPR Benefits Section with Project Image */}
          <div className="mt-12 md:mt-20 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 border border-gray-200 shadow-lg md:shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-orange-100 to-transparent rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-tr from-amber-100 to-transparent rounded-full translate-y-16 md:translate-y-32 -translate-x-16 md:-translate-x-32 opacity-30"></div>

            <div className="relative z-10 p-6 md:p-8 lg:p-12 xl:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-6 md:space-y-8">
                  {/* Header */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
                      <div className="w-3 h-3 md:w-5 md:h-5 mr-2 bg-gradient-to-r from-[#6A3E2E] to-[#E07B00] rounded-full"></div>
                      <span className="text-xs md:text-sm font-semibold text-[#8B4513]">
                        National Impact
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                      <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                        IPR Yields Profound Advantages
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl md:shadow-2xl transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-300">
                      <img
                        src={Project}
                        alt="IPR Benefits Infographic"
                        className="w-full h-auto rounded-lg md:rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-amber-300 to-orange-300 rounded-full opacity-20"></div>
                  </div>

                  {/* Image Caption */}
                  <div className="mt-4 md:mt-6 text-center">
                    <p className="text-gray-600 text-xs md:text-sm italic">
                      Comprehensive overview of Intellectual Property Rights
                      benefits for national development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Border */}
            <div className="h-1 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00]"></div>
          </div>
        </div>

        {/* IP Innovation Club Section */}
        <div className="w-full p-6 md:p-8 lg:p-12 xl:p-16 mt-12 md:mt-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20">
              {/* Left Image Container */}
              <div className="w-full lg:w-2/5">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-300">
                    <img
                      src={InnovationImage}
                      alt="IP Innovation Club - Empowering Young Innovators"
                      className="w-full h-auto rounded-xl md:rounded-2xl object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        Featured Program
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-20"></div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-tr from-orange-300 to-amber-300 rounded-full opacity-20"></div>
                </div>
              </div>

              {/* Right Content Container */}
              <div className="w-full lg:w-3/5 space-y-6 md:space-y-8">
                {/* Header Section */}
                <div className="space-y-3 md:space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs md:text-sm font-semibold text-[#8B4513]">
                      Exclusive Opportunity
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                      Join the IP Innovation Club
                    </span>
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 leading-relaxed">
                    Unleash your innovation at Yuvamanthan's IP Innovation Club!
                    Dive into IPR activities, discussions, and projects.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 md:space-y-6 bg-gradient-to-br from-orange-50/50 to-amber-50/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-orange-200/30">
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                    Students from classes 8th to 12th from each school are
                    encouraged to join the IP Innovation Club on the Yuvamanthan
                    website. Here they will be able to organise and manage
                    activities related to Intellectual Property Rights awareness
                    while encouraging the spirit of entrepreneurship, creativity
                    and innovation. Participate in IPR sessions, discussions,
                    projects and workshops. The club members will have
                    multitudes of opportunities to get certificates as they are
                    encouraged to undertake activities under the purview of the
                    National Intellectual Property Awareness Mission (NIPAM).
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className="group relative inline-flex items-center justify-center sm:justify-start space-x-2 bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold overflow-hidden hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => navigate("/login")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E07B00] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="relative z-10 w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  <span className="relative z-10 text-base md:text-lg font-semibold">
                    Join Bharat IP Innovation Club
                  </span>
                  <div className="absolute -right-2 w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NIPAM Certificate Course Section */}
        <div className="w-full p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-gray-200 shadow-lg p-6 md:p-8 lg:p-10">
              {/* Left Content */}
              <div className="lg:w-1/2 space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-3">
                  <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#8B4513] mr-2" />
                    <span className="text-xs md:text-sm font-semibold text-[#8B4513]">
                      Free Certification Course
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    NIPAM Certificate Course for{" "}
                    <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                      Students and Teachers
                    </span>
                  </h2>
                </div>

                <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                  These complimentary training courses offer an invaluable
                  resource for staff and students keen on IP, providing a
                  comprehensive understanding of IP fundamentals and highlighting
                  its significance.
                </p>

                {/* Course Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                  <div className="flex items-center space-x-3 p-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <div className="p-2 md:p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-500">
                        Course Duration
                      </p>
                      <p className="text-lg md:text-xl font-bold text-gray-900">
                        40 Minutes
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Image/Icon */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full opacity-20"></div>
                  <div className="absolute inset-4 md:ins-6 lg:inset-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="mx-auto w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#6A3E2E] to-[#E07B00] rounded-full flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                        NIPAM
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        Certificate Course
                      </p>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-amber-200 to-transparent rounded-full opacity-30 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Discussions Section */}
        <div className="w-full py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-4 md:mb-6">
                <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                ACTIVE DISCUSSIONS ON{" "}
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  IP INNOVATION CLUB
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real insights from aspiring innovators and entrepreneurs
              </p>
            </div>

            {/* Discussions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {discussions.map((person, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border ${person.borderColor} ${person.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Gradient Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${person.color} opacity-10 rounded-bl-full`}></div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Header with Avatar and Name */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-xl ${person.iconBg} border ${person.borderColor}`}>
                        <div className={`bg-gradient-to-r ${person.color} bg-clip-text text-transparent`}>
                          {person.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{person.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${person.color}`}></div>
                          <span className="text-xs md:text-sm font-medium text-gray-500">Club Member</span>
                        </div>
                      </div>
                    </div>

                    {/* Statement */}
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute -left-6 top-0">
                          <div className={`w-8 h-8 rounded-full ${person.iconBg} flex items-center justify-center border ${person.borderColor}`}>
                            <MessageSquare className={`w-3 h-3 bg-gradient-to-r ${person.color} bg-clip-text text-transparent`} />
                          </div>
                        </div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-6 italic">
                          "{person.statement}"
                        </p>
                      </div>
                    </div>

                    {/* Stats/Info Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">+24 engaged</span>
                        </div>
                        <button className="flex items-center text-sm font-semibold text-[#8B4513] hover:text-[#6A3E2E] group">
                          <span>Join discussion</span>
                          <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Border */}
                  <div className={`h-1 bg-gradient-to-r ${person.color}`}></div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Nipam;