import React from "react";
import Navbar from "../../Components/Navbar";
import { 
  Users, Globe, Target, Award, BookOpen, ChevronRight,
  Calendar, MapPin, MessageSquare, TrendingUp, Zap,
  Shield, Lightbulb, HeartHandshake, BarChart,
  CheckCircle, Trophy, Star, ArrowRight, Building, Briefcase,
  ArrowRightCircle, Mail, UserPlus, FileText, BarChart2,
  Users2, TargetIcon, GraduationCap, School, Globe2,
  ShieldCheck, UsersIcon, Building2, BriefcaseIcon,
  TrendingUpIcon, ZapIcon
} from "lucide-react";
import G20One from "../../assets/g20one.webp";
import G20Two from "../../assets/g20two.webp";
import G20Three from "../../assets/g20three.webp";
import { useNavigate } from "react-router-dom";
import Modi from "../../assets/modi3.png"
import Footer from "../../Components/Footer";

const ModelG20 = () => {
  const navigate = useNavigate();

  // Existing arrays from your code
  const benefits = [
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Critical Thinking",
      description: "Develop analytical and problem-solving skills",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Leadership",
      description: "Enhance leadership and team management abilities",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Diplomacy",
      description: "Master the art of negotiation and consensus building",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Global Awareness",
      description: "Gain insights into international relations",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Career Growth",
      description: "Boost your profile for future opportunities",
      color: "from-[#FFA500] to-[#FF8C00]"
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Recognition",
      description: "Earn certificates and awards",
      color: "from-[#FF8C00] to-[#FF7F00]"
    },
  ];

  const programStructure = [
    {
      phase: "Phase 1",
      title: "Registration & Orientation",
      description: "Participant registration and program overview",
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200",
      textColor: "text-[#8B4513]"
    },
    {
      phase: "Phase 2",
      title: "Training & Workshops",
      description: "Diplomacy, public speaking, and research skills",
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-[#8B4513] to-[#C46200]",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200",
      textColor: "text-[#C46200]"
    },
    {
      phase: "Phase 3",
      title: "Committee Assignments",
      description: "Country and committee allocations",
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-[#C46200] to-[#E07B00]",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200",
      textColor: "text-[#E07B00]"
    },
    {
      phase: "Phase 4",
      title: "Summit Simulation",
      description: "Actual G20 summit proceedings simulation",
      icon: <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-[#E07B00] to-[#FFA500]",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200",
      textColor: "text-[#FFA500]"
    },
    {
      phase: "Phase 5",
      title: "Resolution & Awards",
      description: "Consensus building and recognition ceremony",
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-[#FFA500] to-[#FF8C00]",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200",
      textColor: "text-[#FF8C00]"
    },
  ];



  const upcomingEvents = [
    {
      date: "15-18 March 2024",
      title: "YMG20 Winter Summit",
      location: "New Delhi, India",
      status: "Upcoming",
      gradient: "from-[#6A3E2E] to-[#8B4513]",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      textColor: "text-[#8B4513]"
    },
    {
      date: "10-13 July 2024",
      title: "YMG20 Summer Summit",
      location: "Virtual Conference",
      status: "Registration Open",
      gradient: "from-[#8B4513] to-[#C46200]",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-[#C46200]"
    },
    {
      date: "5-8 Nov 2024",
      title: "YMG20 Annual Summit",
      location: "Mumbai, India",
      status: "Coming Soon",
      gradient: "from-[#C46200] to-[#E07B00]",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      textColor: "text-[#E07B00]"
    },
  ];

  const globalIssues = [
    "Climate Action & Sustainability",
    "Digital Economy & Innovation",
    "Sustainable Development Goals",
    "Global Health Security",
    "Trade & Economic Cooperation",
    "Education & Skill Development"
  ];

  // New arrays from the files
  const learningSkills = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Team Building",
      description: "Work in groups to build friendly rapport and represent your team's message",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Discussions With Consensus",
      description: "Learn to influence others and draw meaningful conclusions from shared insights",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "International Diplomacy",
      description: "Influence actions through negotiations without rhetoric or upsetting others",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <Users2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Multilateral Negotiations",
      description: "Negotiate on economics and socio-politico issues with varied perspectives",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      icon: <TargetIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Strategy Building",
      description: "Create strategies that impact the future of the world through teamwork",
      color: "from-[#FFA500] to-[#FF8C00]"
    },
    {
      icon: <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Macroeconomics",
      description: "Research and deliberate on economic matters to create resilient economies",
      color: "from-[#FF8C00] to-[#FF7F00]"
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Research And Analysis",
      description: "Deep dive into global issues and prepare content at short notice",
      color: "from-[#FF7F00] to-[#FF6B00]"
    },
    {
      icon: <TrendingUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Public Speaking",
      description: "Perfect speaking to large audiences, debating, and influencing with impactful content",
      color: "from-[#FF6B00] to-[#FF5500]"
    },
  ];

  const institutionBenefits = [
    "Appoint faculty to manage student groups, exposing them to student and career development",
    "Career-advancement platform for civil services, international finance, business and diplomacy",
    "Real-time exposure through engagement groups, summits, webinars and podcasts",
    "Connects with schools looking to do something different as extra-curricular activity",
    "Events promoted on website and social media across India",
    "Future exchange programmes through tie-ups with foreign universities",
    "Regular engagement with experts from diverse fields sharing knowledge with students"
  ];

  const themesAndTopics = [
    {
      theme: "Future Of Work: Industry 4.0, Innovation, & 21st Century Skills",
      topics: [
        "Preparing the Workforce through the Principle of Unlearn, Relearn & Reskill",
        "Cross Border Innovation: Growth Through Collaboration",
        "Gig Economy: The New Age Industry",
        "Catalysing the Start-Up Ecosystem",
        "Traditional Economy as a Part of Industry 4.0"
      ]
    },
    {
      theme: "Peacebuilding And Reconciliation: Ushering In An Era Of No War",
      topics: [
        "Facilitating Global Consensus on Conflict Prevention and Peacebuilding",
        "Equitable Collaboration of the Global North and Global South",
        "Regulating Non-State Actors Through Concerted Efforts"
      ]
    },
    {
      theme: "Climate Change And Disaster Risk Reduction: Making Sustainability A Way Of Life",
      topics: [
        "Transitioning to Sustainable Living",
        "Mitigating Disaster Risks",
        "Accelerating the Rise of Green Energy"
      ]
    },
    {
      theme: "Shared Future: Youth in Democracy And Governance",
      topics: [
        "Youth in Legislature And Politics",
        "Youth in Policy Making and Governance",
        "Institutionalising Leadership and Governance Training",
        "Youth in Community Governance"
      ]
    },
    {
      theme: "Health, Wellbeing, And Sports: Agenda For Youth",
      topics: [
        "Promoting Digital Health Infrastructure",
        "Complete Well-being - Physical and Mental Health through Traditional Medicine and Yoga",
        "Improving Access to Health Financing for Young Citizens",
        "Prevention of Substance Abuse",
        "Promotion of Indigenous Sports"
      ]
    }
  ];

  const engagementGroups = [
    "Business20", "Civil20", "Labour20", "Parliament20", "Science20",
    "SAI20", "Startup20", "Think20", "Urban20", "Women20", "Youth20"
  ];

  const financeTrackGroups = [
    "Development Working Group",
    "Framework Working Group",
    "International Financial Architecture (IFA)",
    "Infrastructure Working Group",
    "Sustainable Finance Working Group",
    "Global Partnership for Financial Inclusion (GPFI)",
    "Joint Finance and Health Task Force",
    "International Taxation Agenda"
  ];

  const tracks = [
    {
      name: "Finance Track",
      icon: <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      description: "Discusses macroeconomic issues facing the world and reforms to mitigate global economic threats",
      representatives: "Finance Minister, Central Bank Governor, Senior Advisors",
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      name: "Sherpa Track",
      icon: <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      description: "Focuses on developmental and socio-political agendas and challenges faced by member countries",
      representatives: "Sherpa, Sous-Sherpa (deputy), Senior Advisors",
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      name: "Leaders Track",
      icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      description: "Added as a crucial platform for world leaders to engage in dialogue on global matters",
      representatives: "Country Leaders and Heads of State",
      gradient: "from-[#C46200] to-[#E07B00]"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-white via-orange-50 to-amber-50 pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513] mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-[#8B4513]">
                    YuvaManthan Initiative
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Model G20
                  </span>
                  <br />
                  <span className="text-gray-900 text-xl sm:text-2xl md:text-3xl">
                   What is Model G20?
                  </span>
                </h1>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B4513]">YuvaManthan Model G20 (YMG20)</span> is a youth engagement mock simulator created to mirror the actual G20 or Group of Twenty summit of leaders.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    It is conceived and designed for young learners and professionals who wish to ace the art of public speaking, strategy and diplomacy. It aims to unlock the true potential of Indian youth as it convenes young leaders, thinkers and innovators on a platform that promotes consensus building, negotiation, and shared ideas.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                   It offers youth a chance to participate in an all-encompassing discussion on trade, economics and socio-political affairs as well as cultural programmes centred around real global issues and craft critical actions while at it.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button onClick={()=>navigate('/register')} className="group relative h-12 sm:h-14 w-full sm:w-44 md:w-48 px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base font-semibold">Register Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="relative space-y-4 sm:space-y-6">
                {/* YMG20 Summit Card with Image */}
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white"></div>
                      <div 
                        className="absolute inset-0 opacity-10 bg-cover bg-center"
                        style={{
                          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                          backgroundBlendMode: 'overlay'
                        }}
                      ></div>
                    </div>
                    
                    <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                      {/* Logo with Image Background */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full"></div>
                        <div className="absolute inset-2 sm:inset-3 md:inset-4 overflow-hidden rounded-full border-2 sm:border-4 border-white shadow-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Global Summit"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#6A3E2E]/20 to-[#E07B00]/20 rounded-full"></div>
                          <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">YMG20 Summit</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">Youth Diplomatic Conference</p>
                      </div>
                      
                      {/* Mini Image Gallery */}
                      <div className="pt-2 sm:pt-3 md:pt-4">
                        <div className="flex justify-center -space-x-2 sm:-space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                            <img 
                              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                              alt="Delegate 1"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                            <img 
                              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                              alt="Delegate 2"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                            <img 
                              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                              alt="Delegate 3"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-[#8B4513] to-[#E07B00]">
                            <span className="text-white text-[8px] sm:text-xs font-bold">50+</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2">Join 500+ delegates from 30+ countries</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Issues Card with Images */}
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30"></div>
                      <div 
                        className="absolute inset-0 opacity-5 bg-cover bg-center"
                        style={{
                          backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                        }}
                      ></div>
                    </div>
                    
                    <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Global Issues Discussed</h4>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                        {globalIssues.slice(0, 4).map((issue, index) => (
                          <div 
                            key={index}
                            className="group/item relative overflow-hidden rounded-lg sm:rounded-xl border border-orange-200 bg-gradient-to-br from-white to-orange-50 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {/* Issue Content */}
                            <div className="h-16 sm:h-20 md:h-24 overflow-hidden flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
                              <div className="text-center p-2 sm:p-3 md:p-4">
                                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#8B4513] line-clamp-2">
                                  {issue}
                                </span>
                              </div>
                            </div>
                            
                            {/* Gradient Bottom Border */}
                            <div className={`h-0.5 sm:h-1 ${index % 2 === 0 ? 'bg-gradient-to-r from-[#6A3E2E] to-[#8B4513]' : 'bg-gradient-to-r from-[#C46200] to-[#E07B00]'}`}></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* View More Link */}
                      <div className="pt-2 sm:pt-3 md:pt-4">
                        <button className="inline-flex items-center text-[10px] sm:text-xs md:text-sm font-semibold text-[#8B4513] hover:text-[#6A3E2E] group">
                          <span>View All 20+ Global Issues</span>
                          <ArrowRightCircle className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                WHAT WILL YOU LEARN?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              As a Model G20 delegate, you will master the art of diplomacy, negotiation, and global leadership
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {learningSkills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${skill.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">{skill.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Participate Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  WHO CAN PARTICIPATE?
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-orange-200">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8B4513] mb-2 sm:mb-3 md:mb-4">Eligibility</h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
                    Model G20 summit is for school students, university undergraduates, and young working professionals within the age group of 16-27.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    You can take part in pre-summit sessions by registering within your institution.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-200">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#C46200] mb-2 sm:mb-3 md:mb-4">
                    APPLICATIONS INVITED FROM EDUCATIONAL INSTITUTIONS!
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
                    YMG20 brings a host of benefits to participating schools, colleges and universities:
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {institutionBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              {/* Campus Sherpa Card */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#8B4513] to-[#E07B00] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl text-white">
                  <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                    <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2 sm:mr-3 md:mr-4" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">BECOME A G20 CAMPUS SHERPA</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 opacity-90">
                    Engage as enthusiastic youth from schools, colleges and universities to become "Campus Sherpas". Each institution will have one campus sherpa who volunteers to promote, manage and execute Model G20 programs.
                  </p>
                  <button className="group inline-flex items-center px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-[#8B4513] font-semibold rounded-lg sm:rounded-xl hover:bg-orange-50 transition-all duration-300 text-xs sm:text-sm md:text-base">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Get Certified Card */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#C46200] to-[#FFA500] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl text-white">
                  <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2 sm:mr-3 md:mr-4" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Get Certified!</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 opacity-90">
                    As a G20 Genius. Your first step towards knowing everything about G20 India.
                  </p>
                  <button className="group inline-flex items-center px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-amber-600 font-semibold rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300 text-xs sm:text-sm md:text-base">
                    <span>Get Certified</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model G20 India Theme Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  MODEL G20 INDIA THEME
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Image Column */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                  {/* Main Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="G20 Summit Theme - Vasudhaiva Kutumbakam"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6A3E2E]/40 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Theme Badge Overlay */}
                  <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6">
                    <div className="bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                      G20 2023
                    </div>
                  </div>
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 md:p-5 lg:p-6">
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                      One Earth • One Family • One Future
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-30"></div>
                <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-full blur-xl opacity-20"></div>
              </div>

              {/* Content Column */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 shadow-2xl">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    'Vasudhaiva Kutumbakam'
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                    One Earth. One Family. One Future
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    The theme vividly discusses the poignant value of all life forms on earth and their exponential interconnectivity with the future and universe.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-green-200 mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden rounded-lg">
                          <img src={Modi} alt="PM Modi" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-green-800 mb-1 sm:mb-2">
                          LiFE Initiative
                        </p>
                        <p className="text-green-700 text-xs sm:text-sm md:text-base">
                          Lifestyle for Environment - Promoting sustainable living at individual and national levels
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-full flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#8B4513]">Global Unity</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto bg-gradient-to-r from-[#8B4513] to-[#C46200] rounded-full flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                        <HeartHandshake className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#C46200]">Shared Future</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto bg-gradient-to-r from-[#C46200] to-[#E07B00] rounded-full flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#E07B00]">Sustainability</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-1.5 sm:p-2 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2">Theme Evolution</p>
                      <p className="text-white/90 text-xs sm:text-sm md:text-base">
                        Model G20 India will reproduce the same theme among the youth through its 2023 event. 
                        The themes will change over the years to foster new thoughts and visions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes and Topics Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                THEMES AND TOPICS FOR DISCUSSION
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Choose from a wide range of current affairs and economic scenarios for discussion
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {themesAndTopics.map((theme, themeIndex) => (
              <div key={themeIndex} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                  themeIndex === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                  themeIndex === 1 ? 'from-[#8B4513] to-[#C46200]' :
                  themeIndex === 2 ? 'from-[#C46200] to-[#E07B00]' :
                  themeIndex === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                  'from-[#FFA500] to-[#FF8C00]'
                } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-orange-100">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r ${
                      themeIndex === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                      themeIndex === 1 ? 'from-[#8B4513] to-[#C46200]' :
                      themeIndex === 2 ? 'from-[#C46200] to-[#E07B00]' :
                      themeIndex === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                      'from-[#FFA500] to-[#FF8C00]'
                    } flex items-center justify-center mr-2 sm:mr-3 md:mr-4 text-white text-xs sm:text-sm`}>
                      {themeIndex + 1}
                    </div>
                    {theme.theme}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {theme.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start p-2 sm:p-3 md:p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl border border-orange-200">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#8B4513] mr-1 sm:mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-xs sm:text-sm md:text-base">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Groups Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                ENGAGEMENT GROUPS
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              A perpetual entity that organizes summits yearly with consistent youth engagement through Campus Sherpas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Engagement Groups */}
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Engagement Groups</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-8">
                  We encourage institutions to form Engagement groups that parallel the actual G20 groups:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {engagementGroups.map((group, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-orange-200">
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-[#8B4513]">{group}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Finance Track Groups */}
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#C46200] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Finance Track Working Groups</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-8">
                  For students exploring careers in economics, business and banking:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {financeTrackGroups.map((group, index) => (
                    <div key={index} className="flex items-center p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                      <TrendingUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#C46200] mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-gray-800 text-xs sm:text-sm md:text-base">{group}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tracks of Negotiations Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                THREE TRACKS OF NEGOTIATIONS
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4 mb-4 sm:mb-5 md:mb-8">
              Participants are grouped into 3 major tracks representing different aspects of G20 negotiations
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">
                <span className="font-semibold text-[#8B4513]">Team Requirements:</span> A minimum of 1-7 representatives or delegates are needed in each of the 2u teams to represent each participating country.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${track.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r ${track.gradient} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                    <div className="text-white">
                      {track.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">{track.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">{track.description}</p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-orange-200">
                    <p className="text-xs sm:text-sm font-semibold text-[#8B4513] mb-1 sm:mb-2">Represented by:</p>
                    <p className="text-gray-700 text-xs sm:text-sm">{track.representatives}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about the Leaders Track */}
          <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800">
              <span className="font-bold text-[#C46200]">Note:</span> Since G20 has become a crucial platform for world leaders to engage in dialogue, a third track is added in the form of a Leaders Track, complementing the traditional Finance Track and Sherpa Track.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ModelG20;