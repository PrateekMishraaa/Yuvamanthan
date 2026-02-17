import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { 
  Search, 
  Calendar, 
  Newspaper,
  TrendingUp,
  Filter,
  MapPin,
  Globe,
  Users,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Eye,
  Share2,
  Bookmark,
  ExternalLink,
  Clock,
  Tag,
  X,
  BarChart,
  Video,
  Mic,
  Camera,
  Award,
  Target,
  Sparkles
} from 'lucide-react'

const YuvamanthanNews = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedYear, setSelectedYear] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const postsPerPage = 4

  // News categories
  const categories = [
    { id: 'all', name: 'All News', count: 42, color: 'from-[#6A3E2E] to-[#8B4513]' },
    { id: 'g20', name: 'Model G20', count: 18, color: 'from-[#8B4513] to-[#C46200]' },
    { id: 'mun', name: 'Model UN', count: 8, color: 'from-[#C46200] to-[#E07B00]' },
    { id: 'conference', name: 'Conferences', count: 7, color: 'from-[#E07B00] to-[#FFA500]' },
    { id: 'campus', name: 'Campus Events', count: 9, color: 'from-[#FFA500] to-[#FF8C00]' }
  ]

  // Years filter
  const years = ['all', '2024', '2023', '2022']

  // News sources
  const sources = [
    { name: 'Times of India', icon: '📰', count: 12 },
    { name: 'ANI', icon: '🎥', count: 8 },
    { name: 'Amar Ujala', icon: '📖', count: 6 },
    { name: 'Jagran', icon: '📰', count: 5 },
    { name: 'India News', icon: '📺', count: 4 }
  ]

  // Featured News (Main highlight)
  const featuredNews = [
    {
      id: 1,
      title: "Y20, YuvaManthan Join Hands To Conduct 10,000 Model G20 Summits",
      excerpt: "With India's G20 presidency in progress and with the aim of engaging the youth in a dialogue on pressing global issues, Y20 India and YuvaManthan have joined hands.",
      source: "ANI",
      date: "2024-03-12",
      location: "New Delhi, India",
      category: "Model G20",
      tags: ["G20", "Youth Engagement", "National"],
      featured: true,
      views: "3.2K",
      shares: "245",
      imageType: "conference",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 2,
      title: "Panjab University Yuvamanthan Model United Nations (PUYUMN) Conference",
      excerpt: "Panjab University Yuvamanthan Model United Nations (PUYUMN) Conference commenced today with grandeur and enthusiasm in Chandigarh.",
      source: "India News",
      date: "2023-11-12",
      location: "Chandigarh",
      category: "Model UN",
      tags: ["University", "Diplomacy", "Youth"],
      featured: true,
      views: "2.8K",
      shares: "189",
      imageType: "university",
      color: "from-[#8B4513] to-[#C46200]"
    }
  ]

  // Regular News
  const regularNews = [
    {
      id: 3,
      title: "Conference On Yuvamanthan India@2047 Held At USTM",
      excerpt: "Guwahati, Feb 22: The University of Science and Technology Meghalaya (USTM) organized a conference on Yuvamanthan Model United Nations focusing on climate change.",
      source: "Times of India",
      date: "2023-09-13",
      location: "Guwahati",
      category: "Conferences",
      tags: ["Climate Change", "University", "Sustainable Development"],
      views: "1.9K",
      shares: "124",
      imageType: "climate",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      id: 4,
      title: "Yuvamanthan Model G20 Held At Army Public School",
      excerpt: "Nashik: The Army Public School, Devlali, organized Yuvamanthan Model G20 - a youth engagement mock simulator to mirror the actual G20 summit.",
      source: "Times of India",
      date: "2023-09-13",
      location: "Nashik",
      category: "Model G20",
      tags: ["School", "G20 Simulation", "Education"],
      views: "2.1K",
      shares: "156",
      imageType: "school",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 5,
      title: "G20: Y20 And Yuva Manthan Join Hands To Discuss Global Issues",
      excerpt: "Emphasis on youth participation in global discussions and policymaking through collaborative initiatives.",
      source: "Amar Ujala",
      date: "2023-03-13",
      location: "New Delhi",
      category: "Model G20",
      tags: ["Collaboration", "Policy", "Global Issues"],
      views: "1.7K",
      shares: "98",
      imageType: "collaboration",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 6,
      title: "Yuva Manthan Model G-20 Started In Goa",
      excerpt: "Youth will get opportunity to express their views on global issues. More than 50 students were present at the launch event.",
      source: "Jagran News",
      date: "2023-01-29",
      location: "Goa",
      category: "Model G20",
      tags: ["Goa", "Launch", "Student Engagement"],
      views: "1.5K",
      shares: "87",
      imageType: "goa",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 7,
      title: "CUSB: Organization Of Yuvamanthan Model United Nations Dialogue",
      excerpt: "A dialogue on Indian Vision to Combat Climate Change and Natural Disasters @2047: One Earth, One Family, One Future.",
      source: "University Press",
      date: "2023-11-15",
      location: "Patna",
      category: "Model UN",
      tags: ["CUSB", "Climate Action", "Dialogue"],
      views: "1.3K",
      shares: "76",
      imageType: "dialogue",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      id: 8,
      title: "Tirupati: ZP High School Students Excel At YuvaManthan Model G20 Summit",
      excerpt: "Students donned the roles of various leaders including Prime Minister, Finance Minister and showcased exceptional diplomatic skills.",
      source: "The Hans India",
      date: "2023-09-02",
      location: "Tirupati",
      category: "Campus Events",
      tags: ["School", "Andhra Pradesh", "Leadership"],
      views: "1.1K",
      shares: "65",
      imageType: "excellence",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      id: 9,
      title: "Bharat Lok Shiksha Parishad And Yuva Manthan Join Hands",
      excerpt: "To take G20 to every village through Ekal Vidyalayas across rural India.",
      source: "Jantaserishtha",
      date: "2023-03-12",
      location: "National",
      category: "Model G20",
      tags: ["Rural India", "Ekal Vidyalaya", "Outreach"],
      views: "980",
      shares: "54",
      imageType: "rural",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 10,
      title: "PU's Ahmedabad Homeopathic Medical College Hosts YuvaManthan Model G20",
      excerpt: "Brings together youth towards the national agenda during the simulation summit.",
      source: "College Press",
      date: "2023-08-15",
      location: "Ahmedabad",
      category: "Campus Events",
      tags: ["Medical College", "Gujarat", "Healthcare"],
      views: "890",
      shares: "48",
      imageType: "medical",
      color: "from-[#C46200] to-[#E07B00]"
    }
  ]

  // Recent Highlights
  const recentHighlights = [
    {
      id: 11,
      title: "Andhra Pradesh Students Don Role Of G20 Leaders",
      excerpt: "Demand better environment for future through simulated summit.",
      source: "Local News",
      date: "2023-10-20",
      trend: "up",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 12,
      title: "Pune: Bharati Vidyapeeth's College Of Ayurved Hosts Model G20 Summit",
      excerpt: "Traditional medicine meets global diplomacy in unique summit.",
      source: "Pune Mirror",
      date: "2023-09-25",
      trend: "up",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      id: 13,
      title: "Yuvamanthan Model G20 Summit At VHMC",
      excerpt: "Successful organization of Model G20 summit at veterinary college.",
      source: "Campus News",
      date: "2023-08-04",
      trend: "stable",
      color: "from-[#C46200] to-[#E07B00]"
    }
  ]

  // Filter news based on category, year, and search
  const filteredNews = regularNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesYear = selectedYear === 'all' || news.date.includes(selectedYear)
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesYear && matchesSearch
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredNews.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredNews.length / postsPerPage)

  // Get image type icon
  const getImageIcon = (type) => {
    switch(type) {
      case 'conference': return '🎤'
      case 'university': return '🏛️'
      case 'climate': return '🌍'
      case 'school': return '🏫'
      case 'collaboration': return '🤝'
      case 'goa': return '🏖️'
      case 'dialogue': return '💬'
      case 'excellence': return '🏆'
      case 'rural': return '🌾'
      case 'medical': return '⚕️'
      default: return '📰'
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Filter className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Mobile Filters Sidebar */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-4 sm:p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="font-bold text-[#6A3E2E] text-base sm:text-lg">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="mb-4 sm:mb-6">
              <h4 className="font-semibold text-[#6A3E2E] text-sm sm:text-base mb-2 sm:mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setShowMobileFilters(false)
                    }}
                    className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'hover:bg-[#FFF7ED] text-[#8B4513]'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-[#6A3E2E]/10'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Years */}
            <div className="mb-4 sm:mb-6">
              <h4 className="font-semibold text-[#6A3E2E] text-sm sm:text-base mb-2 sm:mb-3">Year</h4>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setShowMobileFilters(false)
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-gradient-to-r from-[#C46200] to-[#E07B00] text-white'
                        : 'bg-[#FFF7ED] text-[#6A3E2E] hover:shadow-sm'
                    }`}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Sources */}
            <div>
              <h4 className="font-semibold text-[#6A3E2E] text-sm sm:text-base mb-2 sm:mb-3">Top Sources</h4>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-2 sm:p-3 bg-[#FFF7ED] rounded-lg hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{source.icon}</span>
                      <span className="text-xs sm:text-sm text-[#6A3E2E]">{source.name}</span>
                    </div>
                    <span className="text-xs bg-[#6A3E2E]/10 text-[#6A3E2E] px-2 py-0.5 rounded-full">
                      {source.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                    Media Coverage & Updates
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    News & Media
                  </span>
                  <br />
                  <span className="text-[#6A3E2E] text-xl sm:text-2xl md:text-3xl">
                    Stay Updated With Yuvamanthan
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#8B4513] leading-relaxed">
                  Latest coverage from newspapers, media houses, and our campus events. 
                  Follow our journey as we engage youth across India in meaningful dialogues.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  <input
                    type="text"
                    placeholder="Search news, locations, or sources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
                  {[
                    { value: "42+", label: "News Articles" },
                    { value: "28+", label: "Cities" },
                    { value: "15+", label: "Media Sources" },
                    { value: "10K+", label: "Participants" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#6A3E2E]/10">
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#6A3E2E]">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-[#8B4513]/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button 
                  onClick={() => window.innerWidth >= 1024 ? setShowFilters(!showFilters) : setShowMobileFilters(true)}
                  className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Filter News</span>
                  </div>
                </button>
                
                <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                    <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Media Kit</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Featured News */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E] mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">BREAKING NEWS</span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#8B4513]/60">{featuredNews[0].date}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6A3E2E] mb-3 sm:mb-4">
                    {featuredNews[0].title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                      <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {featuredNews[0].source}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {featuredNews[0].location}
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513] text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">
                    {featuredNews[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-6 gap-3">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      {featuredNews[0].tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[10px] sm:text-xs text-[#6A3E2E] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredNews[0].views}
                      </div>
                      <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                        <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredNews[0].shares}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group text-sm sm:text-base">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Read Full Coverage</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Filters Section */}
      {showFilters && (
        <section className="hidden lg:block w-full bg-white border-b border-[#6A3E2E]/10 py-4 sm:py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Filter News</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="ml-3 text-[#8B4513]/60 hover:text-[#6A3E2E]"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white`
                          : 'bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] hover:shadow-md'
                      }`}
                    >
                      {category.name}
                      <span className={`ml-1 sm:ml-2 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-[#6A3E2E]/20'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-[#C46200] to-[#E07B00] text-white'
                          : 'bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[#6A3E2E] hover:shadow-sm'
                      }`}
                    >
                      {year === 'all' ? 'All Years' : year}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-auto">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Top Sources</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, index) => (
                    <button
                      key={index}
                      className="flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[#6A3E2E] rounded-full text-xs sm:text-sm hover:shadow-sm transition-all duration-300"
                    >
                      <span className="mr-1 sm:mr-2 text-sm sm:text-base">{source.icon}</span>
                      {source.name}
                      <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs bg-[#6A3E2E]/10 text-[#6A3E2E] px-1 py-0.5 rounded-full">
                        {source.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured News Section */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2">
                Top Stories
              </h2>
              <p className="text-sm sm:text-base text-[#8B4513]/80">Major coverage from leading media houses</p>
            </div>
            <button className="flex items-center text-[#6A3E2E] font-semibold hover:text-[#8B4513] transition-colors duration-300 text-sm sm:text-base">
              View All Featured
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {featuredNews.map((news, index) => (
              <div key={news.id} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${news.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">{news.category}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/60">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {news.date}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6A3E2E] mb-3 sm:mb-4">{news.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                      <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {news.source}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {news.location}
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513] text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">{news.excerpt}</p>

                  <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-6 gap-3">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      {news.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[10px] sm:text-xs text-[#6A3E2E] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button className="p-1.5 sm:p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Bookmark className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]/60" />
                      </button>
                      <button className="p-1.5 sm:p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Share2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]/60" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-3 sm:pt-4 border-t border-[#6A3E2E]/10 gap-3">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {news.views}
                      </div>
                      <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                        <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {news.shares}
                      </div>
                    </div>
                    <button className="flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                      Read More
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main News Grid Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* News Articles */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                    Latest Coverage
                  </h2>
                  <p className="text-xs sm:text-sm text-[#8B4513]/80">
                    {filteredNews.length} articles {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-300 ${
                      currentPage === 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#6A3E2E]/5'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  </button>
                  <span className="text-xs sm:text-sm text-[#8B4513]/60">
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-300 ${
                      currentPage === totalPages 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#6A3E2E]/5'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {currentPosts.map((news, index) => (
                  <div key={news.id} className="group relative">
                    <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-[#6A3E2E]/10 to-[#8B4513]/10' :
                      index % 3 === 1 ? 'from-[#8B4513]/10 to-[#C46200]/10' :
                      'from-[#C46200]/10 to-[#E07B00]/10'
                    } rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-6">
                        <div className="md:w-1/3">
                          <div className={`w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded-lg sm:rounded-xl bg-gradient-to-br ${
                            index % 3 === 0 ? 'from-[#6A3E2E]/20 to-[#8B4513]/20' :
                            index % 3 === 1 ? 'from-[#8B4513]/20 to-[#C46200]/20' :
                            'from-[#C46200]/20 to-[#E07B00]/20'
                          } flex items-center justify-center`}>
                            <div className="text-3xl sm:text-4xl lg:text-5xl">
                              {getImageIcon(news.imageType)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                              <span className="text-[10px] sm:text-xs font-semibold text-[#6A3E2E]">{news.category}</span>
                            </div>
                            <div className="text-[10px] sm:text-xs text-[#8B4513]/60">{news.date}</div>
                          </div>
                          
                          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#6A3E2E] mb-2 sm:mb-3">{news.title}</h3>
                          
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                              <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {news.source}
                            </div>
                            <div className="flex items-center text-[10px] sm:text-xs text-[#8B4513]/80">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {news.location}
                            </div>
                          </div>
                          
                          <p className="text-[#8B4513] text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2">{news.excerpt}</p>
                          
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                              {news.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-1.5 py-0.5 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[8px] sm:text-[10px] text-[#6A3E2E] rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="flex items-center text-[8px] sm:text-[10px] text-[#8B4513]/60">
                                <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                                {news.views}
                              </div>
                              <button className="flex items-center text-[10px] sm:text-xs font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                                Read
                                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNews.length === 0 && (
                <div className="text-center py-8 sm:py-10 lg:py-12">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#8B4513]/60" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#6A3E2E] mb-2">No news articles found</h3>
                  <p className="text-xs sm:text-sm text-[#8B4513]/80">Try a different search or filter</p>
                </div>
              )}

              {/* Mobile Pagination */}
              <div className="flex justify-center mt-6 sm:hidden">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-[#FFF7ED] text-[#6A3E2E] disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#8B4513]">
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-[#FFF7ED] text-[#6A3E2E] disabled:opacity-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-8">
              {/* Recent Highlights */}
              <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-[#6A3E2E]/10">
                <div className="flex items-center mb-4 sm:mb-5 lg:mb-6">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Recent Highlights</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {recentHighlights.map((highlight, index) => (
                    <div key={highlight.id} className="flex items-start p-2 sm:p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group cursor-pointer">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 bg-gradient-to-r ${highlight.color} bg-opacity-20`}>
                        <span className="text-xs sm:text-sm font-bold text-[#6A3E2E]">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-[#6A3E2E] text-[10px] sm:text-xs line-clamp-2 group-hover:text-[#8B4513] mb-0.5 sm:mb-1">
                          {highlight.title}
                        </div>
                        <div className="flex items-center text-[8px] sm:text-[10px] text-[#8B4513]/60">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                          {highlight.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md">
                <div className="text-center mb-4 sm:mb-5 lg:mb-6">
                  <BarChart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-white text-sm sm:text-base mb-2">News Statistics</h3>
                  <p className="text-white/80 text-[10px] sm:text-xs">Coverage insights 2023-2024</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/80 text-[10px] sm:text-xs">Model G20 Coverage</span>
                      <span className="text-white font-bold text-[10px] sm:text-xs">43%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                      <div className="bg-white w-2/3 h-1.5 sm:h-2 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/80 text-[10px] sm:text-xs">University Events</span>
                      <span className="text-white font-bold text-[10px] sm:text-xs">28%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                      <div className="bg-white w-1/2 h-1.5 sm:h-2 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/80 text-[10px] sm:text-xs">School Programs</span>
                      <span className="text-white font-bold text-[10px] sm:text-xs">19%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                      <div className="bg-white w-1/3 h-1.5 sm:h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Contact */}
              <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-[#6A3E2E]/10">
                <div className="flex items-center mb-4 sm:mb-5 lg:mb-6">
                  <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">For Media</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[#8B4513] text-[10px] sm:text-xs mb-3 sm:mb-4">
                    Media inquiries, press releases, and interview requests
                  </p>
                  
                  <button className="w-full py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg font-semibold hover:shadow-md transition-all duration-300 text-[10px] sm:text-xs">
                    Download Press Kit
                  </button>
                  
                  <button className="w-full py-2 sm:py-2.5 lg:py-3 border border-[#6A3E2E]/30 text-[#6A3E2E] rounded-lg font-semibold hover:bg-[#FFF7ED] transition-all duration-300 text-[10px] sm:text-xs">
                    Contact Press Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2 sm:mb-3 lg:mb-4">
              Nationwide Coverage
            </h2>
            <p className="text-sm sm:text-base text-[#8B4513]/80 max-w-2xl mx-auto px-4">
              Yuvamanthan events and coverage across major cities and institutions in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { city: "New Delhi", events: 12, icon: "🏛️" },
              { city: "Chandigarh", events: 8, icon: "🎓" },
              { city: "Goa", events: 6, icon: "🏖️" },
              { city: "Guwahati", events: 5, icon: "🌄" },
              { city: "Nashik", events: 4, icon: "🏫" },
              { city: "Tirupati", events: 4, icon: "🛕" },
              { city: "Ahmedabad", events: 3, icon: "🕌" },
              { city: "Pune", events: 3, icon: "📚" }
            ].map((location, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#6A3E2E]/10 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="text-xl sm:text-2xl mr-2 sm:mr-3">{location.icon}</div>
                  <div>
                    <div className="font-bold text-[#6A3E2E] text-xs sm:text-sm">{location.city}</div>
                    <div className="text-[10px] sm:text-xs text-[#8B4513]/60">{location.events} events</div>
                  </div>
                </div>
                <div className="w-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] h-1.5 sm:h-2 rounded-full"
                    style={{ width: `${(location.events / 12) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default YuvamanthanNews