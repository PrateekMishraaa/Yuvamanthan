import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  MessageSquare,
  Share2,
  Heart,
  MessageCircle,
  Users,
  TrendingUp,
  Globe,
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Camera,
  Video,
  Newspaper,
  Mic,
  ThumbsUp,
  Share,
  BarChart,
  Users as UsersIcon,
  Target,
  Rocket,
  Star,
  Download,
  Filter
} from 'lucide-react'

const YuvamanthanMedia = () => {
  
  // Social Media Handles Data
  const socialHandles = [
    {
      platform: "Twitter",
      handle: "@Yuvamanthan_org",
      icon: <Twitter className="w-5 h-5" />,
      color: "from-blue-400 to-blue-600",
      url: "https://twitter.com/Yuvamanthan_org",
      followers: "15.8K",
      description: "Official Twitter handle for Yuvamanthan updates, news, and youth engagement"
    },
    {
      platform: "Instagram",
      handle: "@yuvamanthan_official",
      icon: <Instagram className="w-5 h-5" />,
      color: "from-pink-400 to-purple-600",
      url: "https://instagram.com/yuvamanthan_official",
      followers: "28.4K",
      description: "Visual storytelling and youth community engagement"
    },
    {
      platform: "Facebook",
      handle: "YuvamanthanOfficial",
      icon: <Facebook className="w-5 h-5" />,
      color: "from-blue-600 to-blue-800",
      url: "https://facebook.com/YuvamanthanOfficial",
      followers: "42.1K",
      description: "Connect with youth community and join discussions"
    },
    {
      platform: "YouTube",
      handle: "Yuvamanthan",
      icon: <Youtube className="w-5 h-5" />,
      color: "from-red-500 to-red-700",
      url: "https://youtube.com/Yuvamanthan",
      followers: "12.5K",
      description: "Educational content, workshops, and youth empowerment videos"
    },
    {
      platform: "LinkedIn",
      handle: "yuvamanthan",
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-500 to-blue-700",
      url: "https://linkedin.com/company/yuvamanthan",
      followers: "8.3K",
      description: "Professional network for career guidance and opportunities"
    }
  ]

  // Featured Posts Data
  const featuredPosts = [
    {
      platform: "Twitter",
      date: "Mar 10, 2024",
      content: "माननीय @sanjayjaiswalMP जी, आपको पुनः प्रत्याशी बनाए जाने पर बधाई। आपका सम्पर्क और मार्गदर्शन युवामंत्रण को सफल बनाने में प्रशंसनीय है। आपके आगामी चुनाव के लिए शुभकामनाएँ! प्रधानमंत्री @narendramodi के विकसित भारत 2047 के सपने को साकार करने में आपकी महत्वपूर्ण भूमिका के लिए उम्मीदें।",
      likes: "1.2K",
      retweets: "245",
      comments: "89",
      icon: <Twitter className="w-4 h-4" />
    },
    {
      platform: "Instagram",
      date: "Mar 8, 2024",
      content: "Celebrating International Women's Day with stories of young women entrepreneurs who are breaking barriers and creating opportunities. #IWD2024 #WomenEmpowerment",
      likes: "3.4K",
      shares: "512",
      comments: "234",
      icon: <Instagram className="w-4 h-4" />
    },
    {
      platform: "YouTube",
      date: "Mar 5, 2024",
      content: "New Episode Alert! Watch our special session with young innovators discussing 'Technology for Social Change'. Full video now streaming!",
      views: "45.2K",
      likes: "2.3K",
      comments: "156",
      icon: <Youtube className="w-4 h-4" />
    }
  ]

  // Media Statistics
  const mediaStats = [
    { metric: "Total Followers", value: "107.1K", icon: <Users className="w-6 h-6" />, change: "+12.5%" },
    { metric: "Monthly Reach", value: "2.4M", icon: <Globe className="w-6 h-6" />, change: "+8.3%" },
    { metric: "Engagement Rate", value: "4.8%", icon: <Heart className="w-6 h-6" />, change: "+2.1%" },
    { metric: "Content Posts", value: "1,248", icon: <MessageSquare className="w-6 h-6" />, change: "+15.7%" }
  ]

  // Latest Campaigns
  const campaigns = [
    {
      title: "Digital India Champions",
      platform: "All Platforms",
      duration: "Mar 1 - 31, 2024",
      participants: "15K",
      icon: <Target className="w-5 h-5" />,
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Youth Climate Action",
      platform: "Instagram & Twitter",
      duration: "Feb 15 - Mar 15, 2024",
      participants: "23.5K",
      icon: <Globe className="w-5 h-5" />,
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Startup Stories",
      platform: "YouTube & LinkedIn",
      duration: "Ongoing",
      participants: "8.7K",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-[#C46200] to-[#E07B00]"
    }
  ]

  // Content Types
  const contentTypes = [
    { type: "Videos", count: "248", icon: <Video className="w-5 h-5" /> },
    { type: "Articles", count: "512", icon: <Newspaper className="w-5 h-5" /> },
    { type: "Podcasts", count: "89", icon: <Mic className="w-5 h-5" /> },
    { type: "Infographics", count: "156", icon: <BarChart className="w-5 h-5" /> },
    { type: "Live Sessions", count: "45", icon: <Camera className="w-5 h-5" /> }
  ]

  return (
   <>
    <Navbar/>
    
    {/* Hero Section */}
    <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                <MessageSquare className="w-5 h-5 text-[#6A3E2E] mr-2" />
                <span className="text-sm font-semibold text-[#6A3E2E]">
                  Connect with Yuvamanthan
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  Social Media
                </span>
                <br />
                <span className="text-[#6A3E2E] text-3xl sm:text-4xl md:text-3xl">
                  Stay Connected, Stay Empowered
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                Join our vibrant community across social platforms. Follow us for daily updates, 
                youth success stories, interactive sessions, and opportunities to engage with 
                India's growing youth community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mediaStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#6A3E2E]/10">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${
                      index === 0 ? 'from-[#6A3E2E]/20 to-[#8B4513]/20' :
                      index === 1 ? 'from-[#8B4513]/20 to-[#C46200]/20' :
                      index === 2 ? 'from-[#C46200]/20 to-[#E07B00]/20' :
                      'from-[#E07B00]/20 to-[#FFA500]/20'
                    } mr-3`}>
                      <div className={`${
                        index === 0 ? 'text-[#6A3E2E]' :
                        index === 1 ? 'text-[#8B4513]' :
                        index === 2 ? 'text-[#C46200]' :
                        'text-[#E07B00]'
                      }`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-xs text-[#8B4513]/60">{stat.metric}</div>
                  </div>
                  <div className="text-2xl font-bold text-[#6A3E2E]">{stat.value}</div>
                  <div className="text-xs text-green-600 mt-1">{stat.change} ↑</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative h-14 w-full sm:w-48 px-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Share2 className="w-5 h-5" />
                  <span className="text-lg font-semibold">Follow All</span>
                </div>
              </button>
              
              <button className="group relative h-14 w-full sm:w-48 px-8 overflow-hidden rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                <div className="relative flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5" />
                  <span className="text-lg font-semibold">Media Kit</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Social Platforms */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#6A3E2E]">Our Social Platforms</h3>
                  <p className="text-[#8B4513]/80 mt-2">Connect with us everywhere</p>
                </div>
                
                <div className="space-y-4">
                  {socialHandles.map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl"></div>
                      <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-white to-[#FFF7ED] rounded-xl border border-[#6A3E2E]/10 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color} mr-4 shadow-md`}>
                            <div className="text-white">
                              {platform.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#6A3E2E]">{platform.platform}</h4>
                            <p className="text-sm text-[#8B4513]/80">{platform.handle}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#6A3E2E]">{platform.followers}</div>
                          <div className="text-xs text-[#8B4513]/60">Followers</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Posts Section */}
    <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10 rounded-2xl mb-4 md:mb-6">
            <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-[#8B4513]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="text-[#8B4513]/80 text-base md:text-lg max-w-2xl mx-auto">
            Recent highlights from our social media platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${
                index === 0 ? 'from-blue-400/20 to-blue-600/20' :
                index === 1 ? 'from-pink-400/20 to-purple-600/20' :
                'from-red-500/20 to-red-700/20'
              } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${
                      post.platform === 'Twitter' ? 'bg-blue-100 text-blue-600' :
                      post.platform === 'Instagram' ? 'bg-pink-100 text-pink-600' :
                      'bg-red-100 text-red-600'
                    } mr-3`}>
                      {post.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#6A3E2E]">{post.platform}</h4>
                      <div className="text-xs text-[#8B4513]/60">{post.date}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8B4513]/60" />
                </div>

                <p className="text-[#8B4513] mb-6 line-clamp-4">{post.content}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[#6A3E2E]/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <Share className="w-4 h-4 mr-1" />
                      {post.retweets || post.shares || post.views}
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513]">
                    View Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Campaigns & Initiatives Section */}
    <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Campaigns */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-br from-[#C46200]/10 to-[#E07B00]/10 rounded-xl mr-4">
                <Target className="w-6 h-6 text-[#C46200]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E]">
                  Active Campaigns
                </h2>
                <p className="text-[#8B4513]/80">Join ongoing initiatives</p>
              </div>
            </div>

            <div className="space-y-6">
              {campaigns.map((campaign, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${campaign.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${campaign.color} mr-4 shadow-md`}>
                          <div className="text-white">
                            {campaign.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#6A3E2E]">{campaign.title}</h3>
                          <div className="flex items-center text-sm text-[#8B4513]/80 mt-1">
                            {campaign.platform}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 rounded-lg p-3">
                        <div className="text-xs text-[#8B4513]/60 mb-1">Duration</div>
                        <div className="font-medium text-[#6A3E2E]">{campaign.duration}</div>
                      </div>
                      <div className="bg-gradient-to-r from-[#8B4513]/5 to-[#C46200]/5 rounded-lg p-3">
                        <div className="text-xs text-[#8B4513]/60 mb-1">Participants</div>
                        <div className="font-medium text-[#6A3E2E]">{campaign.participants}</div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg font-semibold hover:shadow-md transition-all duration-300">
                      Join Campaign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Statistics */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-br from-[#E07B00]/10 to-[#FFA500]/10 rounded-xl mr-4">
                <BarChart className="w-6 h-6 text-[#E07B00]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E]">
                  Content Library
                </h2>
                <p className="text-[#8B4513]/80">Explore our media resources</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {contentTypes.map((content, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${
                      index === 0 ? 'from-[#6A3E2E]/20 to-[#8B4513]/20' :
                      index === 1 ? 'from-[#8B4513]/20 to-[#C46200]/20' :
                      index === 2 ? 'from-[#C46200]/20 to-[#E07B00]/20' :
                      index === 3 ? 'from-[#E07B00]/20 to-[#FFA500]/20' :
                      'from-[#FFA500]/20 to-[#FF8C00]/20'
                    } flex items-center justify-center mb-3`}>
                      <div className={`${
                        index === 0 ? 'text-[#6A3E2E]' :
                        index === 1 ? 'text-[#8B4513]' :
                        index === 2 ? 'text-[#C46200]' :
                        index === 3 ? 'text-[#E07B00]' :
                        'text-[#FFA500]'
                      }`}>
                        {content.icon}
                      </div>
                    </div>
                    <div className="font-bold text-[#6A3E2E]">{content.count}</div>
                    <div className="text-xs text-[#8B4513]/80">{content.type}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-[#6A3E2E] mb-4">Media Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 rounded-lg">
                    <BookOpen className="w-4 h-4 text-[#6A3E2E] mr-3" />
                    <span className="text-sm text-[#8B4513]">Branding Guidelines</span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-[#8B4513]/5 to-[#C46200]/5 rounded-lg">
                    <Download className="w-4 h-4 text-[#8B4513] mr-3" />
                    <span className="text-sm text-[#8B4513]">Logo & Assets</span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-[#C46200]/5 to-[#E07B00]/5 rounded-lg">
                    <UsersIcon className="w-4 h-4 text-[#C46200] mr-3" />
                    <span className="text-sm text-[#8B4513]">Ambassador Program</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="w-full bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with over 100,000 youth across India. Share your voice, learn from experts, 
            and be part of meaningful conversations that shape our nation's future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative h-14 px-8 overflow-hidden rounded-xl bg-white text-[#6A3E2E] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 w-0 bg-[#6A3E2E]/10 group-hover:w-full transition-all duration-500"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <MessageSquare className="w-5 h-5" />
                <span className="text-lg font-semibold">Become an Ambassador</span>
              </div>
            </button>
            
            <button className="group relative h-14 px-8 overflow-hidden rounded-xl border-2 border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
              <div className="relative flex items-center justify-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-semibold">Upcoming Events</span>
              </div>
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15.8K</div>
              <div className="text-white/80 text-sm">Twitter Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">28.4K</div>
              <div className="text-white/80 text-sm">Instagram Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">42.1K</div>
              <div className="text-white/80 text-sm">Facebook Community</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1.2M+</div>
              <div className="text-white/80 text-sm">Monthly Impressions</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
   </>
  )
}

export default YuvamanthanMedia