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

  // News categories
  const categories = [
    { id: 'all', name: 'All News', count: 42 },
    { id: 'g20', name: 'Model G20', count: 18 },
    { id: 'mun', name: 'Model UN', count: 8 },
    { id: 'conference', name: 'Conferences', count: 7 },
    { id: 'campus', name: 'Campus Events', count: 9 }
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
      imageType: "conference"
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
      imageType: "university"
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
      imageType: "climate"
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
      imageType: "school"
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
      imageType: "collaboration"
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
      imageType: "goa"
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
      imageType: "dialogue"
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
      imageType: "excellence"
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
      imageType: "rural"
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
      imageType: "medical"
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
      trend: "up"
    },
    {
      id: 12,
      title: "Pune: Bharati Vidyapeeth's College Of Ayurved Hosts Model G20 Summit",
      excerpt: "Traditional medicine meets global diplomacy in unique summit.",
      source: "Pune Mirror",
      date: "2023-09-25",
      trend: "up"
    },
    {
      id: 13,
      title: "Yuvamanthan Model G20 Summit At VHMC",
      excerpt: "Successful organization of Model G20 summit at veterinary college.",
      source: "Campus News",
      date: "2023-08-04",
      trend: "stable"
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
      
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                  <Newspaper className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-sm font-semibold text-[#6A3E2E]">
                    Media Coverage & Updates
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    News & Media
                  </span>
                  <br />
                  <span className="text-[#6A3E2E] text-3xl sm:text-4xl md:text-3xl">
                    Stay Updated With Yuvamanthan
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Latest coverage from newspapers, media houses, and our campus events. 
                  Follow our journey as we engage youth across India in meaningful dialogues.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                  <input
                    type="text"
                    placeholder="Search news, locations, or sources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                  />
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#6A3E2E]/10">
                    <div className="text-2xl font-bold text-[#6A3E2E]">42+</div>
                    <div className="text-sm text-[#8B4513]/60">News Articles</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#6A3E2E]/10">
                    <div className="text-2xl font-bold text-[#6A3E2E]">28+</div>
                    <div className="text-sm text-[#8B4513]/60">Cities</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#6A3E2E]/10">
                    <div className="text-2xl font-bold text-[#6A3E2E]">15+</div>
                    <div className="text-sm text-[#8B4513]/60">Media Sources</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#6A3E2E]/10">
                    <div className="text-2xl font-bold text-[#6A3E2E]">10K+</div>
                    <div className="text-sm text-[#8B4513]/60">Participants</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <Filter className="w-5 h-5" />
                    <span className="text-lg font-semibold">Filter News</span>
                  </div>
                </button>
                
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-3">
                    <Newspaper className="w-5 h-5" />
                    <span className="text-lg font-semibold">Media Kit</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Featured News */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <Sparkles className="w-4 h-4 text-[#6A3E2E] mr-2" />
                      <span className="text-sm font-semibold text-[#6A3E2E]">BREAKING NEWS</span>
                    </div>
                    <div className="text-sm text-[#8B4513]/60">{featuredNews[0].date}</div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-4">
                    {featuredNews[0].title}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-sm text-[#8B4513]/80 mr-4">
                      <Newspaper className="w-4 h-4 mr-1" />
                      {featuredNews[0].source}
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <MapPin className="w-4 h-4 mr-1" />
                      {featuredNews[0].location}
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513] mb-6 line-clamp-3">
                    {featuredNews[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      {featuredNews[0].tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-xs text-[#6A3E2E] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredNews[0].views}
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Share2 className="w-4 h-4 mr-1" />
                        {featuredNews[0].shares}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Read Full Coverage</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="w-full bg-white border-b border-[#6A3E2E]/10 py-6">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Filter News</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="ml-auto md:hidden"
                  >
                    <X className="w-5 h-5 text-[#8B4513]/60" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white'
                          : 'bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] hover:shadow-md'
                      }`}
                    >
                      {category.name}
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
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
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
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
              
              <div className="w-full md:w-auto">
                <div className="flex items-center mb-4">
                  <Newspaper className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Top Sources</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, index) => (
                    <button
                      key={index}
                      className="flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[#6A3E2E] rounded-full text-sm hover:shadow-sm transition-all duration-300"
                    >
                      <span className="mr-2">{source.icon}</span>
                      {source.name}
                      <span className="ml-2 text-xs bg-[#6A3E2E]/10 text-[#6A3E2E] px-1.5 py-0.5 rounded-full">
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
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2">
                Top Stories
              </h2>
              <p className="text-[#8B4513]/80">Major coverage from leading media houses</p>
            </div>
            <button className="flex items-center text-[#6A3E2E] font-semibold hover:text-[#8B4513] transition-colors duration-300">
              View All Featured
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news, index) => (
              <div key={news.id} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' : 'from-[#8B4513] to-[#C46200]'
                } rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-sm font-semibold text-[#6A3E2E]">{news.category}</span>
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#6A3E2E] mb-4">{news.title}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-sm text-[#8B4513]/80 mr-4">
                      <Newspaper className="w-4 h-4 mr-1" />
                      {news.source}
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/80">
                      <MapPin className="w-4 h-4 mr-1" />
                      {news.location}
                    </div>
                  </div>
                  
                  <p className="text-[#8B4513] mb-6 line-clamp-3">{news.excerpt}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      {news.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-xs text-[#6A3E2E] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Bookmark className="w-4 h-4 text-[#8B4513]/60" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Share2 className="w-4 h-4 text-[#8B4513]/60" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#6A3E2E]/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Eye className="w-4 h-4 mr-1" />
                        {news.views}
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Share2 className="w-4 h-4 mr-1" />
                        {news.shares}
                      </div>
                    </div>
                    <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main News Grid Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* News Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                    Latest Coverage
                  </h2>
                  <p className="text-[#8B4513]/80">
                    {filteredNews.length} articles {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                    <ChevronLeft className="w-5 h-5 text-[#8B4513]/60" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 text-[#8B4513]/60" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {filteredNews.map((news, index) => (
                  <div key={news.id} className="group relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-[#6A3E2E]/10 to-[#8B4513]/10' :
                      index % 3 === 1 ? 'from-[#8B4513]/10 to-[#C46200]/10' :
                      'from-[#C46200]/10 to-[#E07B00]/10'
                    } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${
                            index % 3 === 0 ? 'from-[#6A3E2E]/20 to-[#8B4513]/20' :
                            index % 3 === 1 ? 'from-[#8B4513]/20 to-[#C46200]/20' :
                            'from-[#C46200]/20 to-[#E07B00]/20'
                          } flex items-center justify-center`}>
                            <div className="text-5xl">
                              {getImageIcon(news.imageType)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                              <span className="text-xs font-semibold text-[#6A3E2E]">{news.category}</span>
                            </div>
                            <div className="text-sm text-[#8B4513]/60">{news.date}</div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">{news.title}</h3>
                          
                          <div className="flex items-center mb-3">
                            <div className="flex items-center text-sm text-[#8B4513]/80 mr-4">
                              <Newspaper className="w-4 h-4 mr-1" />
                              {news.source}
                            </div>
                            <div className="flex items-center text-sm text-[#8B4513]/80">
                              <MapPin className="w-4 h-4 mr-1" />
                              {news.location}
                            </div>
                          </div>
                          
                          <p className="text-[#8B4513] text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {news.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span key={tagIndex} className="px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-xs text-[#6A3E2E] rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-xs text-[#8B4513]/60">
                                <Eye className="w-3 h-3 mr-1" />
                                {news.views}
                              </div>
                              <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-4">
                    <Newspaper className="w-8 h-8 text-[#8B4513]/60" />
                  </div>
                  <h3 className="text-xl font-bold text-[#6A3E2E] mb-2">No news articles found</h3>
                  <p className="text-[#8B4513]/80">Try a different search or filter</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Highlights */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Recent Highlights</h3>
                </div>
                
                <div className="space-y-4">
                  {recentHighlights.map((highlight, index) => (
                    <div key={highlight.id} className="flex items-start p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 ${
                        index === 0 ? 'bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20' :
                        index === 1 ? 'bg-gradient-to-r from-[#8B4513]/20 to-[#C46200]/20' :
                        'bg-gradient-to-r from-[#C46200]/20 to-[#E07B00]/20'
                      }`}>
                        <div className={`text-sm font-bold ${
                          index === 0 ? 'text-[#6A3E2E]' :
                          index === 1 ? 'text-[#8B4513]' :
                          'text-[#C46200]'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-[#6A3E2E] text-sm line-clamp-2 group-hover:text-[#8B4513] mb-1">
                          {highlight.title}
                        </div>
                        <div className="flex items-center text-xs text-[#8B4513]/60">
                          <Calendar className="w-3 h-3 mr-1" />
                          {highlight.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <BarChart className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">News Statistics</h3>
                  <p className="text-white/80 text-sm">Coverage insights 2023-2024</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Model G20 Coverage</span>
                    <span className="text-white font-bold">43%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-2/3 h-2 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">University Events</span>
                    <span className="text-white font-bold">28%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-1/2 h-2 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">School Programs</span>
                    <span className="text-white font-bold">19%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white w-1/3 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Press Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-6">
                  <Newspaper className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">For Media</h3>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-[#8B4513] mb-4">
                    Media inquiries, press releases, and interview requests
                  </p>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg font-semibold hover:shadow-md transition-all duration-300">
                    Download Press Kit
                  </button>
                  
                  <button className="w-full py-3 border border-[#6A3E2E]/30 text-[#6A3E2E] rounded-lg font-semibold hover:bg-[#FFF7ED] transition-all duration-300">
                    Contact Press Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4">
              Nationwide Coverage
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto">
              Yuvamanthan events and coverage across major cities and institutions in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <div key={index} className="bg-white rounded-xl p-4 border border-[#6A3E2E]/10 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">{location.icon}</div>
                  <div>
                    <div className="font-bold text-[#6A3E2E]">{location.city}</div>
                    <div className="text-sm text-[#8B4513]/60">{location.events} events</div>
                  </div>
                </div>
                <div className="w-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] h-2 rounded-full"
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