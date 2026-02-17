import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { 
  Users, Globe, Target, Award, BookOpen, ChevronRight,
  Calendar, MapPin, MessageSquare, TrendingUp, Zap,
  Shield, Lightbulb, HeartHandshake, BarChart,
  CheckCircle, Trophy, Star, ArrowRight, Building, Briefcase,
  ArrowRightCircle, Users2, TargetIcon, FileText, BarChart2,
  GraduationCap, School, Globe2, ShieldCheck, UsersIcon,
  Building2, BriefcaseIcon, TrendingUpIcon, ZapIcon,
  CheckCircle2, Clock, ListChecks, HelpCircle, Phone,
  UserCheck, Settings, BarChart3, Download, Upload,
  CalendarDays, UserCog, Sparkles, History, DollarSign,
  Scale, Gavel, Newspaper, Camera, Palette, AwardIcon,
  Trophy as TrophyIcon, Medal, FileCheck, UsersRound,
  ClipboardCheck, MessageSquareText, Vote, FileTextIcon,
  Clock4, Coffee, Utensils, Laptop, Cpu, Network
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const YuvamanthanUnitedNations = () => {
  const navigate = useNavigate();

  const programSteps = [
    {
      number: "01",
      title: "Institute Registration",
      description: "Registration of the Institute on the Yuvamanthan website and appointing Account Managers.",
      icon: <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      number: "02",
      title: "Invite Participants",
      description: "Inviting students and teachers to register on the Yuvamanthan platform through respective URLs provided in the dashboard.",
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      number: "03",
      title: "Event Registration",
      description: "Institutional admin will Register for the YMUN event within the dashboard and select the last date of registration of students and the date of the proposed event.",
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      number: "04",
      title: "Appoint Coordinators",
      description: "Appointment of Teacher Coordinators for YMUN. They will organise and manage the event on the day of the event as well as perform all pre-event activities.",
      icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      number: "05",
      title: "Secretariat Appointment",
      description: "Appointment of the Secretariat members.",
      icon: <UsersRound className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      number: "06",
      title: "Team Appointment",
      description: "Teacher Coordinators and Secretariat jointly discuss and appoint PRESS CORPS and EXECUTIVE BOARD members.",
      icon: <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    }
  ];

  const eventDaySteps = [
    {
      number: "01",
      title: "ROLECALL",
      description: "Attendance is to be taken for further voting.",
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      number: "02",
      title: "DISCUSSION BOARD",
      description: "The teacher Coordinator will create discussion boards on the Yuvamanthan platform for various meetings.",
      icon: <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      number: "03",
      title: "SPEECHES",
      description: "a. General Speakers List (GSL): opening speech based on agenda. b. Moderated Caucus: speeches on specific subtopics.",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      number: "04",
      title: "DISCUSSIONS",
      description: "Un-Moderated Caucus: informal/formal discussions based on the agenda to decide motions, creating blocs.",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      number: "05",
      title: "POINTS",
      description: "Information: opening speech of the respective country based on the agenda in alphabetical order.",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      number: "06",
      title: "DRAFT RESOLUTION",
      description: "Specific actions/policies to help resolve the situation that are created by the blocs of countries and then voted on.",
      icon: <FileTextIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  const eventSchedule = [
    { time: "9:00 a.m.", activity: "Rolecall", icon: <Clock4 className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "9:30 a.m.", activity: "Session 1", icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "11:45 a.m.", activity: "Break (15 mins)", icon: <Coffee className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "12:00 p.m.", activity: "Session 2", icon: <Users2 className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "1:30 p.m.", activity: "Lunch (30 mins)", icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "2:00 p.m.", activity: "Session 3", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { time: "3:30 p.m.", activity: "Final speeches and document drafting", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const committees = [
    { name: "Security Council", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { name: "General Assembly", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { name: "Economic and Social Council", icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { name: "All India Political Party Meeting", icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { name: "Economic and Finance Committee", icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { name: "International Court of Justice", icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const pressCorpsRoles = [
    { role: "Journalist", icon: <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { role: "Photographer", icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { role: "Caricaturist", icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const executiveBoardRoles = [
    { role: "Chairperson", icon: <Gavel className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { role: "Vice-Chairperson", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { role: "Rapporteur", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { role: "Judges", icon: <Scale className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const markingScheme = [
    { rank: "1st Place", title: "Best Delegate", icon: <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { rank: "2nd Place", title: "High Commendation", icon: <Medal className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { rank: "3rd Place", title: "Merit", icon: <AwardIcon className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const programFeatures = [
    {
      title: "Committees",
      description: "Select from a variety of UN and other organization committees, and implement those aligning seamlessly with your agenda.",
      icon: <Users2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      title: "Multiple Coordinators",
      description: "Curate your team of event coordinators and oversee their activities through our unique interface.",
      icon: <UserCog className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      title: "Nomination Process",
      description: "Empower a designated faculty coordinator to leverage cutting-edge software for participant selection.",
      icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      title: "Manage Members",
      description: "Institutional admins and moderators have visibility and control over all registered students and teachers.",
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      title: "Manage Event",
      description: "Effortlessly oversee the entire offline event with just a few taps at your fingertips online.",
      icon: <CalendarDays className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      title: "Event Support",
      description: "Get quick support from our team by calling up our helpdesk.",
      icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
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
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513] mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-[#8B4513]">
                    Yuvamanthan Model United Nations
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    YMUN
                  </span>
                  <br />
                  <span className="text-gray-900 text-xl sm:text-2xl md:text-3xl">
                    Experience International Diplomacy
                  </span>
                </h1>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    An exhilarating academic simulation that propels students into the world of international diplomacy, 
                    where they engage in vibrant debates and collaborate to effect positive change.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Students immerse themselves in various UN committees, tackling global issues from nuclear non-proliferation 
                    to climate change, while developing essential leadership and diplomatic skills.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button 
                  onClick={() => navigate('/register')}
                  className="group relative h-12 sm:h-14 w-full sm:w-44 md:w-48 px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base font-semibold">Get Started</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="group relative h-12 sm:h-14 w-full sm:w-44 md:w-48 px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-gray-300 text-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-gray-50">
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <span className="text-sm sm:text-base font-semibold">Learn More</span>
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6A3E2E]/20 to-[#E07B00]/20 rounded-full"></div>
                        <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Event Features</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">Experience Everything</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {programFeatures.slice(0, 4).map((feature, index) => (
                        <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] flex items-center justify-center mb-2 sm:mb-3 shadow-md">
                            <div className="text-white w-4 h-4 sm:w-5 sm:h-5">
                              {feature.icon}
                            </div>
                          </div>
                          <h4 className="font-semibold text-[#8B4513] text-[10px] sm:text-xs md:text-sm">{feature.title}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How YMUN Works Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                How Yuvamanthan United Nations Works
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto px-4">
              Immersive academic simulation where students experience international diplomacy firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Students immerse themselves in vibrant debates and discussions, collaborating with like-minded individuals 
                who share enthusiasm for effecting positive change. They experience the thrill of assuming roles in various 
                UN committees, tackling diverse topics that shape our world.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8B4513] mb-2 sm:mb-3 md:mb-4">Beyond Traditional Committees</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  YMUN goes beyond traditional committees to simulate councils like the Economic and Finance Committee 
                  and special committees mandated by the General Assembly. Students might even find themselves engaging 
                  in historical reconstructions or participating in simulations of the International Court of Justice.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="YMUN Committee Session"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A3E2E]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Immersive Engagement</h3>
                  <p className="text-orange-100 text-xs sm:text-sm">Active debates and collaborative discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Program Features
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {programFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                  index % 3 === 1 ? 'from-[#8B4513] to-[#C46200]' :
                  'from-[#C46200] to-[#E07B00]'
                } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-orange-200">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                    index % 3 === 1 ? 'from-[#8B4513] to-[#C46200]' :
                    'from-[#C46200] to-[#E07B00]'
                  } flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                    <div className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Participation Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  Committee Participation
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8B4513] mb-3 sm:mb-4">Diverse UN Committees</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                    Participants assume roles in various UN committees, including the prestigious Security Council, 
                    General Assembly, and Economic and Social Council. The experience extends to an intriguing All India 
                    Political Party Meeting (AIPPM), broadening the scope of involvement.
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {committees.slice(0, 4).map((committee, index) => (
                      <div key={index} className="flex items-center p-2 sm:p-3 bg-white rounded-lg border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[#8B4513] to-[#C46200] flex items-center justify-center mr-2 sm:mr-3 shadow-md">
                          <div className="text-white w-4 h-4 sm:w-5 sm:h-5">
                            {committee.icon}
                          </div>
                        </div>
                        <span className="font-medium text-gray-800 text-xs sm:text-sm">{committee.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#C46200] mb-3 sm:mb-4">Tackling Global Issues</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    From addressing nuclear non-proliferation to combatting climate change, students at YMUN 
                    delve into a diverse array of topics that actively shape our world.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#C46200] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-orange-200">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Special Committees</h3>
                  
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-[#E07B00] to-[#FFA500] flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shadow-md">
                          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">Economic and Finance Committee</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">Unique perspective on global economic challenges</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-[#FFA500] to-[#FF8C00] flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">Special Committee</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">Mandated by the General Assembly for comprehensive learning</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-[#C46200] to-[#E07B00] flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shadow-md">
                          <History className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base">Historical Reconstructions</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">Reenacting momentous events and ICJ simulations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Roles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-orange-200">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">PRESS CORPS</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {pressCorpsRoles.map((role, index) => (
                      <div key={index} className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-gradient-to-r from-[#8B4513] to-[#C46200] flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                          <div className="text-white w-3 h-3 sm:w-4 sm:h-4">
                            {role.icon}
                          </div>
                        </div>
                        <span className="font-medium text-gray-800 text-xs sm:text-sm">{role.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-amber-200">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">EXECUTIVE BOARD</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {executiveBoardRoles.map((role, index) => (
                      <div key={index} className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-gradient-to-r from-[#C46200] to-[#E07B00] flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                          <div className="text-white w-3 h-3 sm:w-4 sm:h-4">
                            {role.icon}
                          </div>
                        </div>
                        <span className="font-medium text-gray-800 text-xs sm:text-sm">{role.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Registration Process
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Step-by-step guide to organizing YMUN at your institution
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-[#6A3E2E] via-[#8B4513] to-[#FF8C00] hidden lg:block"></div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {programSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 sm:gap-6 lg:gap-8`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'} w-full`}>
                    <div className="relative group">
                      <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                        index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                        index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                        index === 2 ? 'from-[#C46200] to-[#E07B00]' :
                        index === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                        index === 4 ? 'from-[#FFA500] to-[#FF8C00]' :
                        'from-[#FF8C00] to-[#FF7F00]'
                      } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-orange-200">
                        <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r ${
                            index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                            index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                            index === 2 ? 'from-[#C46200] to-[#E07B00]' :
                            index === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                            index === 4 ? 'from-[#FFA500] to-[#FF8C00]' :
                            'from-[#FF8C00] to-[#FF7F00]'
                          } flex items-center justify-center mr-3 sm:mr-4 md:mr-5 lg:mr-6 shadow-lg`}>
                            <div className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                              {step.icon}
                            </div>
                          </div>
                          <div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-0.5 sm:mb-1">{step.number}</div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block">
                    <div className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r ${
                      index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                      index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                      index === 2 ? 'from-[#C46200] to-[#E07B00]' :
                      index === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                      index === 4 ? 'from-[#FFA500] to-[#FF8C00]' :
                      'from-[#FF8C00] to-[#FF7F00]'
                    } shadow-lg`}></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Activities Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  SURROUNDING ACTIVITIES
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8B4513] mb-3 sm:mb-4">Research & Preparation</h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                    Comprehensive research covering news, current affairs, policies, politics, economic/safety/environmental 
                    scenarios and previous solutions.
                  </p>
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li>Assign event dates and committees</li>
                      <li>Portfolios (countries) allocation</li>
                      <li>Document requirements and notepads</li>
                      <li>Committee rooms setup</li>
                      <li>Placards and General Speaker's List</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-800 mb-3 sm:mb-4">Mission LiFE Integration</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    All students are encouraged to participate in pre-event activities where we have integrated 
                    Mission LiFE actionable items on our interactive online platform. Students can undertake daily 
                    challenges like recycling, reuse, making eco-friendly choices and reducing their Carbon Footprint 
                    as they earn Carbon Credits online.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#8B4513] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-orange-200">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Discussion Board Technology</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                      <Laptop className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Unique Tech Functionality</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Enables Teacher Coordinators to organise live real-time meetings between participating students.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                      <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C46200]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Interactive Discussions</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Students can write views, add points (restricted to 4), and vote on others' points.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                      <Network className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#E07B00]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Automatic Leaderboards</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Leaderboards are created automatically once points have been voted upon.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFA500]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Student-Driven Discussions</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Students can create their own discussion boards and invite fellow delegates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Day Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                EVENT-DAY PROCEDURE
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {eventDaySteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                  index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                  index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                  index === 2 ? 'from-[#C46200] to-[#E07B00]' :
                  index === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                  index === 4 ? 'from-[#FFA500] to-[#FF8C00]' :
                  'from-[#FF8C00] to-[#FF7F00]'
                } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-orange-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-2 sm:mb-3 md:mb-4">{step.number}</div>
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${
                    index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                    index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                    index === 2 ? 'from-[#C46200] to-[#E07B00]' :
                    index === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                    index === 4 ? 'from-[#FFA500] to-[#FF8C00]' :
                    'from-[#FF8C00] to-[#FF7F00]'
                  } flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md`}>
                    <div className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold ${
                    index === 0 ? 'text-[#6A3E2E]' :
                    index === 1 ? 'text-[#8B4513]' :
                    index === 2 ? 'text-[#C46200]' :
                    index === 3 ? 'text-[#E07B00]' :
                    index === 4 ? 'text-[#FFA500]' :
                    'text-[#FF8C00]'
                  } mb-2 sm:mb-3`}>{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Event Schedule */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border border-orange-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">EVENT SCHEDULE</h3>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {eventSchedule.map((item, index) => (
                  <div key={index} className={`flex items-center p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl ${
                    index % 2 === 0 ? 'bg-gradient-to-r from-orange-50 to-amber-50' : 'bg-gradient-to-r from-amber-50 to-orange-50'
                  } border ${index % 2 === 0 ? 'border-orange-200' : 'border-amber-200'} shadow-sm hover:shadow-md transition-all duration-300`}>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-orange-200 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">{item.time}</span>
                        <span className={`font-medium text-xs sm:text-sm md:text-base ${
                          index % 2 === 0 ? 'text-[#8B4513]' : 'text-[#C46200]'
                        }`}>{item.activity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marking Scheme & Awards Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                MARKING SCHEME & AWARDS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            <div>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8B4513] mb-3 sm:mb-4 md:mb-6">Judging Criteria</h3>
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513] mr-2 sm:mr-3 md:mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">Scoresheet Evaluation</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Judges will use the scoresheet as provided in the Judges and Jury section</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#E07B00] mr-2 sm:mr-3 md:mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">Extra Recognition</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Extra marks to the Main Author of the Draft Resolution</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#C46200] mb-3 sm:mb-4 md:mb-6">Award Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {markingScheme.map((award, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r ${
                        index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                        index === 1 ? 'from-[#8B4513] to-[#C46200]' :
                        'from-[#C46200] to-[#E07B00]'
                      } flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-lg`}>
                        <div className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                          {award.icon}
                        </div>
                      </div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">{award.rank}</div>
                      <div className={`font-medium text-xs sm:text-sm ${
                        index === 0 ? 'text-[#6A3E2E]' :
                        index === 1 ? 'text-[#8B4513]' :
                        'text-[#C46200]'
                      }`}>{award.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="relative group h-full">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#8B4513] to-[#E07B00] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl h-full">
                  <div className="text-white">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Discussion Board</h3>
                    
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm shadow-inner">
                        <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3">Overview</h4>
                        <p className="text-orange-100 text-xs sm:text-sm md:text-base">
                          Discussion Board is a unique tech functionality that enables the Teacher Coordinator to 
                          organise live real-time meetings between the participating students.
                        </p>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start">
                          <div className="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                            <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Point Submission & Voting</h4>
                            <p className="text-orange-100 text-xs sm:text-sm">
                              Students can write their views or add points (restricted to 4 points) to be voted on 
                              by other members in the meeting.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Automatic Leaderboards</h4>
                            <p className="text-orange-100 text-xs sm:text-sm">
                              A leaderboard is created automatically once the points have been voted upon.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-lg mr-2 sm:mr-3 md:mr-4 shadow-sm">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Student-Led Discussions</h4>
                            <p className="text-orange-100 text-xs sm:text-sm">
                              Students can also create their discussion boards and invite their friends or fellow 
                              delegates to discuss anything.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default YuvamanthanUnitedNations;