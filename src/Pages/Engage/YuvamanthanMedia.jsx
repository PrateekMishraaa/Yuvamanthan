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
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-400 to-blue-600",
      url: "https://twitter.com/Yuvamanthan_org",
      followers: "15.8K",
      description: "Official Twitter handle for Yuvamanthan updates, news, and youth engagement"
    },
    {
      platform: "Instagram",
      handle: "@yuvamanthan_official",
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-pink-400 to-purple-600",
      url: "https://instagram.com/yuvamanthan_official",
      followers: "28.4K",
      description: "Visual storytelling and youth community engagement"
    },
    {
      platform: "Facebook",
      handle: "YuvamanthanOfficial",
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-600 to-blue-800",
      url: "https://facebook.com/YuvamanthanOfficial",
      followers: "42.1K",
      description: "Connect with youth community and join discussions"
    },
    {
      platform: "YouTube",
      handle: "Yuvamanthan",
      icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-red-500 to-red-700",
      url: "https://youtube.com/Yuvamanthan",
      followers: "12.5K",
      description: "Educational content, workshops, and youth empowerment videos"
    },
    {
      platform: "LinkedIn",
      handle: "yuvamanthan",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
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
      icon: <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "blue"
    },
    {
      platform: "Instagram",
      date: "Mar 8, 2024",
      content: "Celebrating International Women's Day with stories of young women entrepreneurs who are breaking barriers and creating opportunities. #IWD2024 #WomenEmpowerment",
      likes: "3.4K",
      shares: "512",
      comments: "234",
      icon: <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "pink"
    },
    {
      platform: "YouTube",
      date: "Mar 5, 2024",
      content: "New Episode Alert! Watch our special session with young innovators discussing 'Technology for Social Change'. Full video now streaming!",
      views: "45.2K",
      likes: "2.3K",
      comments: "156",
      icon: <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "red"
    }
  ]

  // Media Statistics
  const mediaStats = [
    { metric: "Total Followers", value: "107.1K", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, change: "+12.5%", color: "from-[#6A3E2E] to-[#8B4513]" },
    { metric: "Monthly Reach", value: "2.4M", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, change: "+8.3%", color: "from-[#8B4513] to-[#C46200]" },
    { metric: "Engagement Rate", value: "4.8%", icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, change: "+2.1%", color: "from-[#C46200] to-[#E07B00]" },
    { metric: "Content Posts", value: "1,248", icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, change: "+15.7%", color: "from-[#E07B00] to-[#FFA500]" }
  ]

  // Latest Campaigns
  const campaigns = [
    {
      title: "Digital India Champions",
      platform: "All Platforms",
      duration: "Mar 1 - 31, 2024",
      participants: "15K",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      title: "Youth Climate Action",
      platform: "Instagram & Twitter",
      duration: "Feb 15 - Mar 15, 2024",
      participants: "23.5K",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      title: "Startup Stories",
      platform: "YouTube & LinkedIn",
      duration: "Ongoing",
      participants: "8.7K",
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#C46200] to-[#E07B00]"
    }
  ]

  // Content Types
  const contentTypes = [
    { type: "Videos", count: "248", icon: <Video className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { type: "Articles", count: "512", icon: <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { type: "Podcasts", count: "89", icon: <Mic className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { type: "Infographics", count: "156", icon: <BarChart className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { type: "Live Sessions", count: "45", icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ]

  return (
   <>
    <Navbar/>
    
    {/* Hero Section */}
    <section className="w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-16 sm:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                  Connect with Yuvamanthan
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                  Social Media
                </span>
                <br />
                <span className="text-[#6A3E2E] text-xl sm:text-2xl md:text-3xl">
                  Stay Connected, Stay Empowered
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#8B4513] leading-relaxed">
                Join our vibrant community across social platforms. Follow us for daily updates, 
                youth success stories, interactive sessions, and opportunities to engage with 
                India's growing youth community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {mediaStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-[#6A3E2E]/10">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className={`p-1 sm:p-1.5 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10 mr-1 sm:mr-2`}>
                      <div className="text-[#6A3E2E]">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#8B4513]/60">{stat.metric}</div>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#6A3E2E]">{stat.value}</div>
                  <div className="text-[8px] sm:text-xs text-green-600 mt-0.5 sm:mt-1">{stat.change} ↑</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="group relative h-12 sm:h-14 w-full sm:w-40 md:w-44 lg:w-48 px-4 sm:px-6 md:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-semibold">Follow All</span>
                </div>
              </button>
              
              <button className="group relative h-12 sm:h-14 w-full sm:w-40 md:w-44 lg:w-48 px-4 sm:px-6 md:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-semibold">Media Kit</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Social Platforms */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6A3E2E]">Our Social Platforms</h3>
                  <p className="text-xs sm:text-sm text-[#8B4513]/80 mt-1 sm:mt-2">Connect with us everywhere</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {socialHandles.map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg sm:rounded-xl blur-xl"></div>
                      <div className="relative flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-white to-[#FFF7ED] rounded-lg sm:rounded-xl border border-[#6A3E2E]/10 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center">
                          <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${platform.color} mr-2 sm:mr-3 md:mr-4 shadow-md flex-shrink-0`}>
                            <div className="text-white">
                              {platform.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#6A3E2E] text-xs sm:text-sm md:text-base">{platform.platform}</h4>
                            <p className="text-xs text-[#8B4513]/80">{platform.handle}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#6A3E2E] text-xs sm:text-sm">{platform.followers}</div>
                          <div className="text-[10px] sm:text-xs text-[#8B4513]/60">Followers</div>
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
    <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#8B4513]/10 to-[#C46200]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-[#8B4513]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 md:mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#8B4513]/80 max-w-2xl mx-auto px-4">
            Recent highlights from our social media platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                post.color === 'blue' ? 'from-blue-400/20 to-blue-600/20' :
                post.color === 'pink' ? 'from-pink-400/20 to-purple-600/20' :
                'from-red-500/20 to-red-700/20'
              } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${
                      post.platform === 'Twitter' ? 'bg-blue-100 text-blue-600' :
                      post.platform === 'Instagram' ? 'bg-pink-100 text-pink-600' :
                      'bg-red-100 text-red-600'
                    } mr-2 sm:mr-3`}>
                      {post.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#6A3E2E] text-xs sm:text-sm">{post.platform}</h4>
                      <div className="text-[10px] sm:text-xs text-[#8B4513]/60">{post.date}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]/60 flex-shrink-0" />
                </div>

                <p className="text-[#8B4513] text-xs sm:text-sm mb-4 sm:mb-5 lg:mb-6 line-clamp-4">{post.content}</p>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#6A3E2E]/10">
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.comments}
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                      <Share className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.retweets || post.shares || post.views}
                    </div>
                  </div>
                  <button className="text-[10px] sm:text-xs font-semibold text-[#6A3E2E] hover:text-[#8B4513]">
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
    <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Current Campaigns */}
          <div>
            <div className="flex items-center mb-4 sm:mb-5 lg:mb-8">
              <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-[#C46200]/10 to-[#E07B00]/10 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C46200]" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#6A3E2E]">
                  Active Campaigns
                </h2>
                <p className="text-xs sm:text-sm text-[#8B4513]/80">Join ongoing initiatives</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {campaigns.map((campaign, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${campaign.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-[#6A3E2E]/10 transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg bg-gradient-to-r ${campaign.color} mr-2 sm:mr-3 lg:mr-4 shadow-md flex-shrink-0`}>
                          <div className="text-white">
                            {campaign.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#6A3E2E]">{campaign.title}</h3>
                          <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80 mt-0.5 sm:mt-1">
                            {campaign.platform}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 rounded-lg p-2 sm:p-3">
                        <div className="text-[10px] sm:text-xs text-[#8B4513]/60 mb-0.5 sm:mb-1">Duration</div>
                        <div className="font-medium text-[#6A3E2E] text-[10px] sm:text-xs">{campaign.duration}</div>
                      </div>
                      <div className="bg-gradient-to-r from-[#8B4513]/5 to-[#C46200]/5 rounded-lg p-2 sm:p-3">
                        <div className="text-[10px] sm:text-xs text-[#8B4513]/60 mb-0.5 sm:mb-1">Participants</div>
                        <div className="font-medium text-[#6A3E2E] text-[10px] sm:text-xs">{campaign.participants}</div>
                      </div>
                    </div>

                    <button className="w-full py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg font-semibold hover:shadow-md transition-all duration-300 text-xs sm:text-sm">
                      Join Campaign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Statistics */}
          <div>
            <div className="flex items-center mb-4 sm:mb-5 lg:mb-8">
              <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-[#E07B00]/10 to-[#FFA500]/10 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                <BarChart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#E07B00]" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#6A3E2E]">
                  Content Library
                </h2>
                <p className="text-xs sm:text-sm text-[#8B4513]/80">Explore our media resources</p>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-[#6A3E2E]/10">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 lg:mb-8">
                {contentTypes.map((content, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto rounded-lg bg-gradient-to-r ${
                      index === 0 ? 'from-[#6A3E2E]/20 to-[#8B4513]/20' :
                      index === 1 ? 'from-[#8B4513]/20 to-[#C46200]/20' :
                      index === 2 ? 'from-[#C46200]/20 to-[#E07B00]/20' :
                      index === 3 ? 'from-[#E07B00]/20 to-[#FFA500]/20' :
                      'from-[#FFA500]/20 to-[#FF8C00]/20'
                    } flex items-center justify-center mb-1 sm:mb-2`}>
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
                    <div className="font-bold text-[#6A3E2E] text-xs sm:text-sm">{content.count}</div>
                    <div className="text-[8px] sm:text-xs text-[#8B4513]/80">{content.type}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base mb-2 sm:mb-3">Media Guidelines</h3>
                <div className="space-y-2">
                  <div className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 rounded-lg">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E] mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs text-[#8B4513]">Branding Guidelines</span>
                  </div>
                  <div className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-[#8B4513]/5 to-[#C46200]/5 rounded-lg">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513] mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs text-[#8B4513]">Logo & Assets</span>
                  </div>
                  <div className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-[#C46200]/5 to-[#E07B00]/5 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#C46200] mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs text-[#8B4513]">Ambassador Program</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="w-full bg-gradient-to-br from-[#6A3E2E] via-[#8B4513] to-[#E07B00] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-5 lg:mb-6">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Join Our Growing Community
          </h2>
          
          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Connect with over 100,000 youth across India. Share your voice, learn from experts, 
            and be part of meaningful conversations that shape our nation's future.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-white text-[#6A3E2E] shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
              <div className="absolute inset-0 w-0 bg-[#6A3E2E]/10 group-hover:w-full transition-all duration-500"></div>
              <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Become an Ambassador</span>
              </div>
            </button>
            
            <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10 text-sm sm:text-base">
              <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">Upcoming Events</span>
              </div>
            </button>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">15.8K</div>
              <div className="text-white/80 text-[10px] sm:text-xs">Twitter Followers</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">28.4K</div>
              <div className="text-white/80 text-[10px] sm:text-xs">Instagram Followers</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">42.1K</div>
              <div className="text-white/80 text-[10px] sm:text-xs">Facebook Community</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">1.2M+</div>
              <div className="text-white/80 text-[10px] sm:text-xs">Monthly Impressions</div>
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