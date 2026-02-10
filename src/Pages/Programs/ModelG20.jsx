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
import Footer from "../../Components/Footer";

const ModelG20 = () => {
  const navigate = useNavigate();

  // ... (keep all your existing arrays: benefits, programStructure, targetParticipants, upcomingEvents, globalIssues)

  // Add these new arrays based on the file content

  const learningSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building",
      description: "Work in groups to build friendly rapport and represent your team's message",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discussions With Consensus",
      description: "Learn to influence others and draw meaningful conclusions from shared insights",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Diplomacy",
      description: "Influence actions through negotiations without rhetoric or upsetting others",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Multilateral Negotiations",
      description: "Negotiate on economics and socio-politico issues with varied perspectives",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Strategy Building",
      description: "Create strategies that impact the future of the world through teamwork",
      color: "from-[#FFA500] to-[#FF8C00]"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Macroeconomics",
      description: "Research and deliberate on economic matters to create resilient economies",
      color: "from-[#FF8C00] to-[#FF7F00]"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Research And Analysis",
      description: "Deep dive into global issues and prepare content at short notice",
      color: "from-[#FF7F00] to-[#FF6B00]"
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" />,
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
      icon: <BarChart2 className="w-8 h-8" />,
      description: "Discusses macroeconomic issues facing the world and reforms to mitigate global economic threats",
      representatives: "Finance Minister, Central Bank Governor, Senior Advisors",
      gradient: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      name: "Sherpa Track",
      icon: <UsersIcon className="w-8 h-8" />,
      description: "Focuses on developmental and socio-political agendas and challenges faced by member countries",
      representatives: "Sherpa, Sous-Sherpa (deputy), Senior Advisors",
      gradient: "from-[#8B4513] to-[#C46200]"
    },
    {
      name: "Leaders Track",
      icon: <Building2 className="w-8 h-8" />,
      description: "Added as a crucial platform for world leaders to engage in dialogue on global matters",
      representatives: "Country Leaders and Heads of State",
      gradient: "from-[#C46200] to-[#E07B00]"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section (keep your existing hero section) */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-orange-50 to-amber-50">
        {/* ... Your existing hero section code ... */}
      </section>

      {/* What You Will Learn Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                WHAT WILL YOU LEARN?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a Model G20 delegate, you will master the art of diplomacy, negotiation, and global leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningSkills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Participate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  WHO CAN PARTICIPATE?
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Eligibility</h3>
                  <p className="text-gray-700 text-lg mb-2">
                    Model G20 summit is for school students, university undergraduates, and young working professionals within the age group of 16-27.
                  </p>
                  <p className="text-gray-600">
                    You can take part in pre-summit sessions by registering within your institution.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-2xl font-bold text-[#C46200] mb-4">
                    APPLICATIONS INVITED FROM EDUCATIONAL INSTITUTIONS!
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    YMG20 brings a host of benefits to participating schools, colleges and universities:
                  </p>
                  <ul className="space-y-3">
                    {institutionBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#8B4513] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Campus Sherpa Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#8B4513] to-[#E07B00] rounded-2xl p-8 shadow-2xl text-white">
                  <div className="flex items-center mb-6">
                    <UserPlus className="w-10 h-10 mr-4" />
                    <h3 className="text-2xl font-bold">BECOME A G20 CAMPUS SHERPA</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-90">
                    Engage as enthusiastic youth from schools, colleges and universities to become "Campus Sherpas". Each institution will have one campus sherpa who volunteers to promote, manage and execute Model G20 programs.
                  </p>
                  <button className="group inline-flex items-center px-6 py-3 bg-white text-[#8B4513] font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Get Certified Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C46200] to-[#FFA500] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 shadow-2xl text-white">
                  <div className="flex items-center mb-6">
                    <Award className="w-10 h-10 mr-4" />
                    <h3 className="text-2xl font-bold">Get Certified!</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-90">
                    As a G20 Genius. Your first step towards knowing everything about G20 India.
                  </p>
                  <button className="group inline-flex items-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300">
                    <span>Get Certified</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model G20 India Theme Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                MODEL G20 INDIA THEME
              </span>
            </h2>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
              <div className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
                'Vasudhaiva Kutumbakam'
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-8">
                One Earth. One Family. One Future
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The theme vividly discusses the poignant value of all life forms on earth and their exponential interconnectivity with the future and universe.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <p className="text-lg font-semibold text-green-800">
                  The summit theme also highlights the significance of LiFE (Lifestyle for Environment). 
                  The key indication to environmental sustainability on individual and national levels.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg">
              Model G20 India will reproduce the same theme among the youth through its 2023 event. 
              The themes will change over the years to foster new thoughts and visions.
            </p>
          </div>
        </div>
      </section>

      {/* Themes and Topics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                THEMES AND TOPICS FOR DISCUSSION
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a wide range of current affairs and economic scenarios for discussion
            </p>
          </div>

          <div className="space-y-8">
            {themesAndTopics.map((theme, themeIndex) => (
              <div key={themeIndex} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  themeIndex === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                  themeIndex === 1 ? 'from-[#8B4513] to-[#C46200]' :
                  themeIndex === 2 ? 'from-[#C46200] to-[#E07B00]' :
                  themeIndex === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                  'from-[#FFA500] to-[#FF8C00]'
                } rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                      themeIndex === 0 ? 'from-[#6A3E2E] to-[#8B4513]' :
                      themeIndex === 1 ? 'from-[#8B4513] to-[#C46200]' :
                      themeIndex === 2 ? 'from-[#C46200] to-[#E07B00]' :
                      themeIndex === 3 ? 'from-[#E07B00] to-[#FFA500]' :
                      'from-[#FFA500] to-[#FF8C00]'
                    } flex items-center justify-center mr-4 text-white`}>
                      {themeIndex + 1}
                    </div>
                    {theme.theme}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {theme.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                        <CheckCircle className="w-5 h-5 text-[#8B4513] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-800">{topic}</span>
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
      <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                ENGAGEMENT GROUPS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A perpetual entity that organizes summits yearly with consistent youth engagement through Campus Sherpas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Engagement Groups */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Engagement Groups</h3>
                <p className="text-gray-600 mb-8">
                  We encourage institutions to form Engagement groups that parallel the actual G20 groups:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {engagementGroups.map((group, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 text-center border border-orange-200">
                      <span className="font-semibold text-[#8B4513]">{group}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Finance Track Groups */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C46200] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Finance Track Working Groups</h3>
                <p className="text-gray-600 mb-8">
                  For students exploring careers in economics, business and banking:
                </p>
                <div className="space-y-3">
                  {financeTrackGroups.map((group, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                      <TrendingUpIcon className="w-4 h-4 text-[#C46200] mr-3" />
                      <span className="text-gray-800">{group}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tracks of Negotiations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                THREE TRACKS OF NEGOTIATIONS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Participants are grouped into 3 major tracks representing different aspects of G20 negotiations
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-[#8B4513]">Team Requirements:</span> A minimum of 1-7 representatives or delegates are needed in each of the 2u teams to represent each participating country.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${track.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${track.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <div className="text-white">
                      {track.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.name}</h3>
                  <p className="text-gray-600 mb-6">{track.description}</p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                    <p className="text-sm font-semibold text-[#8B4513] mb-2">Represented by:</p>
                    <p className="text-gray-700">{track.representatives}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about the Leaders Track */}
          <div className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-800">
              <span className="font-bold text-[#C46200]">Note:</span> Since G20 has become a crucial platform for world leaders to engage in dialogue, a third track is added in the form of a Leaders Track, complementing the traditional Finance Track and Sherpa Track.
            </p>
          </div>
        </div>
      </section>

    
      <Footer/>
    </>
  );
};

export default ModelG20;