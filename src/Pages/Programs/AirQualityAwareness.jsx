import React from "react";
import Navbar from "../../Components/Navbar";
import CAQM from "../../assets/caqm.png";
import SaveTree from "../../assets/savetrees.png";
import Modi from "../../assets/modi2.png"
import Bhupender from "../../assets/bhupender.png"
import Kirti from "../../assets/kirti.jpg"
import CleanOne from "../../assets/cleanair1.png"
import CleanTwo from "../../assets/cleanair2.jpg"
import CleanThree from "../../assets/cleanair3.png"
import CleanFour from "../../assets/cleanair4.png"
import { 
  Leaf, Wind, Target, Users, BarChart, Award, Shield, 
  Calendar, ChevronRight, TreePine, Cloud, Droplets, 
  Thermometer, Quote, BookOpen, Trophy, TrendingUp,
  Lightbulb, Users as UsersIcon, School, Flag, CheckCircle,
  Zap, Monitor, Presentation, FileText,
  TrendingUpDown
} from "lucide-react";
import Footer from "../../Components/Footer";

const AirQualityAwareness = () => {
  const programFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "Clean air awareness for sustainable future",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "CAQM & Yuvamanthan partnership",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Multi-Level Impact",
      description: "Individual, school & district levels",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Recognition for participation",
      color: "from-[#E07B00] to-[#FFA500]"
    },
  ];

  const actionPoints = [
    {
      title: "Student Engagement",
      points: ["Air quality monitoring", "Sustainable practices", "Awareness campaigns"],
      icon: <Users className="w-8 h-8" />,
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200",
      dotColor: "bg-[#E07B00]"
    },
    {
      title: "Teacher Training",
      points: ["Curriculum integration", "Workshops", "Resource materials"],
      icon: <Shield className="w-8 h-8" />,
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200",
      dotColor: "bg-[#C46200]"
    },
    {
      title: "Community Outreach",
      points: ["Parent workshops", "Local initiatives", "Policy advocacy"],
      icon: <TreePine className="w-8 h-8" />,
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200",
      dotColor: "bg-[#8B4513]"
    },
  ];

const leaders = [
  {
    img: Modi,
    quote: "On World Environment Day 2023, I reaffirmed India's commitment to Mission LiFE—banning single-use plastics and ensuring waste processing to protect the environment and fight climate change.",
    name: "Shri Narendra Modi",
    designation: "Hon'ble Prime Minister, Government of India",
    gradient: "from-[#6A3E2E] via-[#8B4513] to-[#E07B00]",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200"
  },
  {
    img: Bhupender,
    quote: "Air quality management is not just a policy matter but a matter of public health and environmental justice. Our commitment through CAQM reflects our dedication to ensuring clean air for every citizen.",
    name: "Shri Bhupender Yadav",
    designation: "Hon'ble Union Minister of Environment, Forest, and Climate Change, Government of India",
    gradient: "from-[#8B4513] via-[#C46200] to-[#E07B00]",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderColor: "border-amber-200"
  },
  {
    img: Kirti,
    quote: "Empowering schools and students with knowledge about air quality is key to building a sustainable future. This program bridges the gap between awareness and action.",
    name: "Shri Kirti Vardhan Singh",
    designation: "Hon'ble Union Minister of State Environment, Forest, and Climate Change, Government of India",
    gradient: "from-[#C46200] via-[#E07B00] to-[#FFA500]",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200"
  },
];

  const programSteps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educate",
      description: "Learn about air quality, air pollution, reasons and mitigative actions",
      color: "from-[#6A3E2E] to-[#8B4513]",
      steps: ["Online courses", "Educational materials", "Expert sessions"]
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Engage",
      description: "Conduct air monitoring, plantation drives & community outreach",
      color: "from-[#8B4513] to-[#C46200]",
      steps: ["Air monitoring kits", "Plantation drives", "Community workshops"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Impact",
      description: "Reduce pollution, track progress & earn Green Credits",
      color: "from-[#C46200] to-[#E07B00]",
      steps: ["Pollution tracking", "Green credits system", "Progress reporting"]
    }
  ];

  // Updated arrays based on your requirements
  const studentBenefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learn",
      description: "Access an engaging e-course on air pollution and sustainability.",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Lead",
      description: "Become a sustainability ambassador and change your school.",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovate",
      description: "Participate in hackathons and develop real-world solutions.",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Impact",
      description: "Contribute to a student-driven 'Youth Air Quality Taskforce'.",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Compete",
      description: "Join games to reduce your carbon footprints and win rewards.",
      color: "from-[#FFA500] to-[#FF8C00]"
    }
  ];

  const schoolBenefits = [
    {
      icon: <School className="w-6 h-6" />,
      title: "Empower",
      description: "Equip your teachers and students with air pollution knowledge.",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Engage",
      description: "Implement hands-on sustainability projects and activities.",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Showcase",
      description: "Participate in district and conferences to share your stories.",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Shunya Audit",
      description: "Utilize our comprehensive tools to reduce your school's environmental footprint.",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Recognition",
      description: "Gain recognition for your school's work towards sustainability.",
      color: "from-[#FFA500] to-[#FF8C00]"
    }
  ];

  const programComponents = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Empower",
      description: "Equip your teachers and students with air pollution knowledge.",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Engage",
      description: "Implement hands-on sustainability projects and activities.",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Shunya Audit",
      description: "Utilize our comprehensive tools to reduce your school's environmental footprint.",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Showcase",
      description: "Participate in district and conferences to share your stories.",
      color: "from-[#E07B00] to-[#FFA500]"
    },
  ];

  // Student Steps Detailed
  const studentSteps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn",
      description: "Access an engaging e-course on air pollution and sustainability",
      color: "from-[#6A3E2E] to-[#8B4513]",
      steps: ["Interactive modules", "Video lessons", "Quizzes & assessments", "Expert webinars"]
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Lead",
      description: "Become a sustainability ambassador and change your school",
      color: "from-[#8B4513] to-[#C46200]",
      steps: ["Leadership training", "Peer mentoring programs", "School initiatives planning", "Event organization"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovate",
      description: "Participate in hackathons and develop real-world solutions",
      color: "from-[#C46200] to-[#E07B00]",
      steps: ["Problem identification", "Solution brainstorming", "Prototype development", "Presentation skills"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Impact",
      description: "Contribute to a student-driven 'Youth Air Quality Taskforce'",
      color: "from-[#E07B00] to-[#FFA500]",
      steps: ["Community projects", "Data collection", "Policy recommendations", "Public awareness campaigns"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Compete",
      description: "Join games to reduce your carbon footprints and win rewards",
      color: "from-[#FFA500] to-[#FF8C00]",
      steps: ["Carbon challenges", "Leaderboard competitions", "Rewards system", "Recognition ceremonies"]
    }
  ];

  // School Steps Detailed
  const schoolSteps = [
    {
      icon: <School className="w-8 h-8" />,
      title: "Empower",
      description: "Equip your teachers and students with air pollution knowledge",
      color: "from-[#6A3E2E] to-[#8B4513]",
      steps: ["Teacher training workshops", "Curriculum integration guides", "Resource materials", "Expert sessions"]
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Engage",
      description: "Implement hands-on sustainability projects and activities",
      color: "from-[#8B4513] to-[#C46200]",
      steps: ["Field projects", "Community outreach", "Action plan development", "Monitoring activities"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Showcase",
      description: "Participate in district and conferences to share your stories",
      color: "from-[#C46200] to-[#E07B00]",
      steps: ["Case study preparation", "Presentation skills", "Networking events", "Success story documentation"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Shunya Audit",
      description: "Utilize our comprehensive tools to reduce your school's environmental footprint",
      color: "from-[#E07B00] to-[#FFA500]",
      steps: ["Environmental audit tools", "Carbon assessment methods", "Improvement action plans", "Progress tracking"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Recognition",
      description: "Gain recognition for your school's work towards sustainability",
      color: "from-[#FFA500] to-[#FF8C00]",
      steps: ["Certification process", "Award applications", "Public recognition events", "Best practice sharing"]
    }
  ];

  // Program Components Detailed
  const programComponentsDetailed = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Empower",
      description: "Equip your teachers and students with powerful knowledge about air pollution",
      color: "from-[#6A3E2E] to-[#8B4513]",
      steps: ["Training modules development", "Expert sessions organization", "Resource library access", "Skill building workshops"]
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Engage",
      description: "Implement hands-on sustainability projects and activities",
      color: "from-[#8B4513] to-[#C46200]",
      steps: ["Project planning tools", "Activity implementation guides", "Community engagement strategies", "Monitoring systems"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Shunya Audit",
      description: "Utilize our comprehensive tools to reduce your school's environmental footprint",
      color: "from-[#C46200] to-[#E07B00]",
      steps: ["Assessment tools access", "Progress tracking systems", "Action recommendation engines", "Reporting frameworks"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Showcase",
      description: "Participate in district and conferences to share your stories",
      color: "from-[#E07B00] to-[#FFA500]",
      steps: ["Presentation platforms", "Networking opportunities", "Best practice sharing forums", "Recognition events"]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-orange-50 to-amber-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
                  <Cloud className="w-5 h-5 text-[#8B4513] mr-2" />
                  <span className="text-sm font-semibold text-[#8B4513]">
                    Commission for Air Quality Management
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Building a Sustainable Future: </span>
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Air Quality Awareness in Schools
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  A collaborative effort by the Commission for Air Quality Management in NCR and 
                  Adjoining Areas (CAQM) and Yuvamanthan for students, teachers and parents in 
                  Delhi-NCR, fostering sustainable practices at individual, school, and district levels.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {programFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#E07B00]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-2 bg-gradient-to-br ${feature.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="group relative h-14 w-full sm:w-64 px-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <Leaf className="w-5 h-5" />
                    <span className="text-lg font-semibold">Join Program</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                        <Wind className="w-10 h-10 text-[#8B4513]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">CAQM</h3>
                        <p className="text-gray-600 text-sm mt-1">Commission for Air Quality Management</p>
                      </div>
                      <img 
                        src={CAQM} 
                        alt="CAQM Logo" 
                        className="w-full max-w-xs mx-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#8B4513] via-[#C46200] to-[#E07B00] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={SaveTree} 
                      alt="Save Trees - Save Future" 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <Leaf className="w-5 h-5 text-[#8B4513]" />
                          <span className="font-semibold text-gray-900">Clean Air = Healthy Future</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -bottom-1 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 md:h-24"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-current text-amber-50"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-current text-orange-50"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-current text-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Leadership Speaks Section */}
      <section className="w-full bg-gradient-to-b from-white to-orange-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4 md:mb-6">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                LEADERSHIP SPEAKS
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from our leaders about their commitment to environmental conservation and air quality improvement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border ${leader.borderColor} bg-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${leader.gradient} opacity-10 rounded-bl-full`}></div>
                
                <div className="relative p-6 md:p-8">
                  <div className="mb-6">
                    <Quote className={`w-8 h-8 bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`} />
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    "{leader.quote}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                        <img 
                          src={leader.img} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{leader.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`h-1 bg-gradient-to-r ${leader.gradient}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4 md:mb-6">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  ABOUT
                </span>
              </h2>
              
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-orange-200 shadow-lg mb-8 md:mb-12">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                  Commission for Air Quality Management in NCR and Adjoining Areas (CAQM) is a Statutory Body 
                  established by the Govt. of India for better co-ordination, research, identification and 
                  resolution of air quality issues of Delhi-NCR and adjoining areas. The body ensures coordinated 
                  actions among different stakeholders responsible for control of air pollution in the region 
                  aimed towards the objective of abatement of air pollution in NCR and adjoining areas.
                </p>
              </div>
              
              {/* Clean Air Photos Grid */}
              <div className="mt-8 md:mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Clean Air Initiatives
                  </span>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={CleanOne} 
                        alt="Clean Air Initiative 1" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={CleanTwo} 
                        alt="Clean Air Initiative 2" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={CleanThree} 
                        alt="Clean Air Initiative 3" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={CleanFour} 
                        alt="Clean Air Initiative 4" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How the Program Works */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    HOW THE PROGRAM WORKS
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {programSteps.map((step, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-orange-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative p-6 md:p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3 bg-gradient-to-br ${step.color} rounded-xl`}>
                          <div className="text-white">{step.icon}</div>
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h4>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{step.description}</p>
                      
                      <div className="space-y-2">
                        {step.steps.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`h-1 bg-gradient-to-r ${step.color}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Students Section - Updated with Detailed Steps */}
      <section className="w-full bg-gradient-to-b from-white to-orange-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                FOR STUDENTS
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Empowering the next generation of environmental leaders
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto mb-12 lg:mb-16">
            {studentBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl border border-orange-200 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`p-2 md:p-3 bg-gradient-to-br ${benefit.color} rounded-lg md:rounded-xl inline-block mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{benefit.icon}</div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}></div>
              </div>
            ))}
          </div>

          {/* Student Steps Details */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                Student Journey Steps
              </span>
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              {studentSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-orange-200 bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <div className={`p-3 md:p-4 bg-gradient-to-br ${step.color} rounded-xl md:rounded-2xl flex-shrink-0`}>
                        <div className="text-white">{step.icon}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-sm font-medium text-[#8B4513]">
                              Step {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
                          {step.steps.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                              <span className="text-sm md:text-base text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`h-1 bg-gradient-to-r ${step.color}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Schools Section - Updated with Detailed Steps */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                FOR SCHOOLS
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Transform your school into a center of environmental excellence
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto mb-12 lg:mb-16">
            {schoolBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl border border-amber-200 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`p-2 md:p-3 bg-gradient-to-br ${benefit.color} rounded-lg md:rounded-xl inline-block mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{benefit.icon}</div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}></div>
              </div>
            ))}
          </div>

          {/* School Steps Details */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                School Implementation Steps
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {schoolSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-orange-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${step.color} rounded-xl`}>
                        <div className="text-white">{step.icon}</div>
                      </div>
                      <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-sm font-medium text-[#8B4513] mb-1">
                          Step {index + 1}
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.steps.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`h-1 bg-gradient-to-r ${step.color}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Components Section - Updated with Detailed Steps */}
      <section className="w-full bg-gradient-to-b from-white to-orange-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                PROGRAM COMPONENTS
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive framework for sustainable school transformation
            </p>
          </div>

          {/* Components Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 lg:mb-16">
            {programComponents.map((component, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-orange-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative p-6 md:p-8">
                  <div className={`p-3 bg-gradient-to-br ${component.color} rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{component.icon}</div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{component.title}</h3>
                  <p className="text-gray-700">{component.description}</p>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${component.color}`}></div>
              </div>
            ))}
          </div>

  
        </div>
      </section>

            {/* Program in Numbers Section */}
<section className="w-full bg-gradient-to-b from-orange-50 to-white py-12 md:py-20 lg:py-32">
  <div className="container mx-auto px-4 md:px-8 lg:px-16">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4 md:mb-6">
          <BarChart className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
            PROGRAM IN NUMBERS
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our nationwide reach and impact in promoting air quality awareness
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* District Card */}
        <div className="group relative bg-white rounded-2xl md:rounded-3xl border border-orange-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] opacity-5 rounded-bl-full"></div>
          
          <div className="relative text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] bg-clip-text text-transparent mb-2">
              38
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Districts</div>
            <p className="text-gray-600 text-sm mt-2">Across Delhi-NCR region</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513]"></div>
        </div>

        {/* Schools Card */}
        <div className="group relative bg-white rounded-2xl md:rounded-3xl border border-orange-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8B4513] to-[#C46200] opacity-5 rounded-bl-full"></div>
          
          <div className="relative text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8B4513] to-[#C46200] bg-clip-text text-transparent mb-2">
              4K
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Schools</div>
            <p className="text-gray-600 text-sm mt-2">Participating actively</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B4513] to-[#C46200]"></div>
        </div>

        {/* Students & Families Card */}
        <div className="group relative bg-white rounded-2xl md:rounded-3xl border border-orange-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C46200] to-[#E07B00] opacity-5 rounded-bl-full"></div>
          
          <div className="relative text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#C46200] to-[#E07B00] bg-clip-text text-transparent mb-2">
              24L+
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Students & Families</div>
            <p className="text-gray-600 text-sm mt-2">Directly impacted</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C46200] to-[#E07B00]"></div>
        </div>

        {/* Teachers Card */}
        <div className="group relative bg-white rounded-2xl md:rounded-3xl border border-orange-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E07B00] to-[#FFA500] opacity-5 rounded-bl-full"></div>
          
          <div className="relative text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E07B00] to-[#FFA500] bg-clip-text text-transparent mb-2">
              60K+
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Teachers</div>
            <p className="text-gray-600 text-sm mt-2">Trained & empowered</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07B00] to-[#FFA500]"></div>
        </div>
      </div>

      {/* Additional Impact Info */}
      <div className="mt-12 md:mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-orange-200">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
            <TrendingUpDown className="w-5 h-5 text-[#8B4513] mr-2" />
            <span className="text-sm font-semibold text-[#8B4513]">Growing Impact</span>
          </div>
          <p className="text-gray-700 md:text-lg">
            These numbers represent our commitment to creating a cleaner, healthier environment through 
            education and community engagement. Every day, more schools join our mission to build 
            sustainable futures.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   

  
      <Footer/>
    </>
  );
};

export default AirQualityAwareness;