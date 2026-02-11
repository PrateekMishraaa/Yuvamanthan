import React from 'react';
import Navbar from '../Components/Navbar';
import { Calendar, Clock, Users, Mail, Search, MapPin, Building, BookOpen, Award, Target, Globe, ChevronRight, Filter, Sparkles, TrendingUp, BarChart, Newspaper, Eye, Share2, Bookmark, ExternalLink } from 'lucide-react';

const Institution = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Student Management',
      description: 'Comprehensive student profiles, attendance tracking, and performance analytics',
      stats: '10K+ Students'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Course Scheduling',
      description: 'Smart timetable management and resource allocation',
      stats: '500+ Courses'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Communication Hub',
      description: 'Seamless communication with students, parents, and staff',
      stats: '99% Satisfaction'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning Management',
      description: 'Digital classrooms, assignments, and progress tracking',
      stats: '24/7 Access'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Assessment Tools',
      description: 'Automated grading, analytics, and performance insights',
      stats: 'AI-Powered'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Campus Management',
      description: 'Resource booking, facility management, and administrative tools',
      stats: 'All-in-One'
    }
  ];

  const stats = [
    { value: '50+', label: 'Institutions' },
    { value: '10K+', label: 'Students' },
    { value: '500+', label: 'Courses' },
    { value: '200+', label: 'Faculty' }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <Building className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-sm font-semibold text-[#6A3E2E]">
                    Educational Institution Portal
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Institution
                  </span>
                  <br />
                  <span className="text-[#6A3E2E] text-3xl sm:text-4xl md:text-3xl">
                    Management Platform
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Empowering educational institutions with advanced tools for student management, 
                  course administration, and academic excellence. Transform your campus with our 
                  comprehensive digital ecosystem.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#6A3E2E]/10">
                    <div className="text-2xl font-bold text-[#6A3E2E]">{stat.value}</div>
                    <div className="text-sm text-[#8B4513]/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-semibold">Join Waitlist</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-semibold">View Demo</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Coming Soon Card */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <Sparkles className="w-4 h-4 text-[#6A3E2E] mr-2" />
                      <span className="text-sm font-semibold text-[#6A3E2E]">COMING SOON</span>
                    </div>
                    <div className="text-sm text-[#8B4513]/60">Launching Soon</div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-4">
                    Transform Your Institution With Digital Excellence
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-sm text-[#8B4513]/80 mr-4">
                      <Clock className="w-4 h-4 mr-1" />
                      Active Development
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <Target className="w-4 h-4 mr-1" />
                      Beta Testing
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513] mb-6">
                    We're building powerful features to help you manage your educational 
                    institution efficiently. Our platform combines cutting-edge technology 
                    with educational expertise.
                  </p>
                  
                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { value: '15', label: 'Days' },
                      { value: '08', label: 'Hours' },
                      { value: '45', label: 'Minutes' },
                      { value: '30', label: 'Seconds' },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] text-xl md:text-2xl font-bold py-3 px-4 rounded-lg">
                          {item.value}
                        </div>
                        <div className="text-xs text-[#8B4513]/60 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Join Early Access</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4">
              Comprehensive Features
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto">
              Everything you need to manage your educational institution efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-[#6A3E2E]/10 to-[#8B4513]/10' :
                  index % 3 === 1 ? 'from-[#8B4513]/10 to-[#C46200]/10' :
                  'from-[#C46200]/10 to-[#E07B00]/10'
                } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index % 3 === 0 ? 'bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 text-[#6A3E2E]' :
                    index % 3 === 1 ? 'bg-gradient-to-r from-[#8B4513]/20 to-[#C46200]/20 text-[#8B4513]' :
                    'bg-gradient-to-r from-[#C46200]/20 to-[#E07B00]/20 text-[#C46200]'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">{feature.title}</h3>
                  <p className="text-[#8B4513] text-sm mb-4">{feature.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#6A3E2E]/10">
                    <span className="text-sm font-semibold text-[#6A3E2E]">{feature.stats}</span>
                    <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group flex items-center">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Benefits */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Statistics */}
            <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <BarChart className="w-10 h-10 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Platform Impact</h3>
                <p className="text-white/80">Transforming educational management</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80">Administrative Efficiency</span>
                    <span className="text-white font-bold">87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-4/5 h-2 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80">Student Engagement</span>
                    <span className="text-white font-bold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-9/10 h-2 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80">Parent Satisfaction</span>
                    <span className="text-white font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-19/20 h-2 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80">Resource Optimization</span>
                    <span className="text-white font-bold">78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-3/4 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Notify Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6A3E2E]/10">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-[#6A3E2E] mr-3" />
                <h3 className="text-2xl font-bold text-[#6A3E2E]">Get Notified at Launch!</h3>
              </div>
              
              <p className="text-[#8B4513] mb-6">
                Be the first to access our comprehensive institution management platform. 
                Early adopters get exclusive benefits and priority support.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your institutional email"
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] text-[#6A3E2E]"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Institution Name"
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 border border-[#6A3E2E]/20 rounded-lg focus:outline-none focus:border-[#8B4513] text-[#6A3E2E]"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 text-[#6A3E2E] rounded focus:ring-[#8B4513]"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-[#8B4513]">
                    I agree to receive updates and promotional materials
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </form>
              
              <p className="text-xs text-[#8B4513]/60 mt-4 text-center">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institution Types */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4">
              For All Educational Institutions
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto">
              Tailored solutions for every type of educational organization
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { type: "Schools", icon: "🏫", count: "1,000+" },
              { type: "Colleges", icon: "🎓", count: "500+" },
              { type: "Universities", icon: "🏛️", count: "100+" },
              { type: "Coaching", icon: "📚", count: "2,000+" },
              { type: "Online", icon: "💻", count: "300+" },
              { type: "Vocational", icon: "⚒️", count: "400+" },
              { type: "International", icon: "🌍", count: "50+" },
              { type: "Government", icon: "🏢", count: "200+" }
            ].map((institution, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {institution.icon}
                  </div>
                  <div className="font-bold text-[#6A3E2E] mb-1">{institution.type}</div>
                  <div className="text-sm text-[#8B4513]/60">{institution.count} institutions</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join hundreds of institutions already waiting to revolutionize their educational management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#6A3E2E] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Demo
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Institution;