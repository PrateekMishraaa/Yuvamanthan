import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { 
  Search, 
  Calendar, 
  User, 
  ChevronRight,
  BookOpen,
  TrendingUp,
  Globe,
  Target,
  Users,
  Filter,
  Clock,
  Heart,
  MessageSquare,
  Share2,
  ArrowRight,
  Tag,
  Bookmark,
  Eye,
  BarChart,
  Lightbulb,
  FileText,
  Clock as ClockIcon,
  ChevronLeft,
  ChevronDown,
  X
} from 'lucide-react'

const YuvamanthanBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const postsPerPage = 4

  // Blog categories
  const categories = [
    { id: 'all', name: 'All Articles', count: 24, color: 'from-[#6A3E2E] to-[#8B4513]' },
    { id: 'economics', name: 'Economics & Finance', count: 8, color: 'from-[#8B4513] to-[#C46200]' },
    { id: 'climate', name: 'Climate Change', count: 5, color: 'from-[#C46200] to-[#E07B00]' },
    { id: 'innovation', name: 'Innovation & Tech', count: 6, color: 'from-[#E07B00] to-[#FFA500]' },
    { id: 'leadership', name: 'Youth Leadership', count: 5, color: 'from-[#FFA500] to-[#FF8C00]' }
  ]

  // Tags for filtering
  const tags = [
    'G20', 'Finance', 'Climate Action', 'Startups', 'Globalization', 
    'Sustainability', 'Innovation', 'Youth Empowerment', 'Policy'
  ]

  // Featured Blogs (Main highlight)
  const featuredBlogs = [
    {
      id: 1,
      title: "2008 Financial Crisis And How G20 Emerged As A Solution",
      excerpt: "The 2008 financial crisis is said to be one of mankind's biggest economic mistakes. The Global Financial Crisis was a result of pure greed and regulatory failure that shook the world economy.",
      author: "YuvaManthan",
      date: "02/16/2023",
      readTime: "8 min read",
      category: "Economics & Finance",
      tags: ["Finance", "G20", "Global Economy"],
      featured: true,
      views: "2.4K",
      likes: "128",
      comments: "42",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 2,
      title: "Model G20: Not Just A Simulation But An Experience Not To Be Missed",
      excerpt: "Before one dives into how a Model G20 will benefit the students on campus, it is important to understand the essence of the summit.",
      author: "YuvaManthan",
      date: "02/06/2023",
      readTime: "6 min read",
      category: "Youth Leadership",
      tags: ["G20", "Youth Empowerment", "Leadership"],
      featured: true,
      views: "1.8K",
      likes: "96",
      comments: "31",
      color: "from-[#8B4513] to-[#C46200]"
    }
  ]

  // Regular Blogs
  const regularBlogs = [
    {
      id: 3,
      title: "Youth Perception On Climate Change In The G20",
      excerpt: "Climate change is defined as drastic temperature shifts and unpredictable weather patterns. These drastic patterns are due to natural reasons like the warmth and rainfall in certain regions.",
      author: "YuvaManthan",
      date: "02/01/2023",
      readTime: "5 min read",
      category: "Climate Change",
      tags: ["Climate Action", "G20", "Sustainability"],
      views: "1.5K",
      likes: "84",
      comments: "25",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      id: 4,
      title: "How India Became A Unicorn Nation?",
      excerpt: "The term 'unicorn' was first coined by Aileen Lee, the founder of Cowboy Ventures, in 2013. In the world of startups, a unicorn is a privately-owned company valued at over $1 billion.",
      author: "YuvaManthan",
      date: "01/25/2023",
      readTime: "7 min read",
      category: "Innovation & Tech",
      tags: ["Startups", "Innovation", "Economy"],
      views: "2.1K",
      likes: "112",
      comments: "38",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      id: 5,
      title: "India Rise And Its Global Implications",
      excerpt: "The most common definition of globalization follows that the world is getting excessively interlinked, and networks of interdependence are increasing rapidly across nations.",
      author: "Amit Kapoor",
      date: "01/20/2023",
      readTime: "6 min read",
      category: "Economics & Finance",
      tags: ["Globalization", "Economy", "Policy"],
      views: "1.2K",
      likes: "67",
      comments: "19",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 6,
      title: "Making Cities Smart And Sustainable",
      excerpt: "As the world is becoming more urban than ever, it is crucial to place cities at the centre of the development agenda to try to enhance the quality of life.",
      author: "Amit Kapoor & Bibek Debroy",
      date: "01/09/2023",
      readTime: "5 min read",
      category: "Climate Change",
      tags: ["Sustainability", "Urban Development", "Climate Action"],
      views: "980",
      likes: "54",
      comments: "16",
      color: "from-[#C46200] to-[#E07B00]"
    },
    {
      id: 7,
      title: "Cross-Border Innovation: Growth Through Collaboration",
      excerpt: "The COVID-19 pandemic has shown how the interconnectedness of countries may have made the world more vulnerable to common threats, and how collaboration is essential.",
      author: "YuvaManthan",
      date: "03/10/2023",
      readTime: "4 min read",
      category: "Innovation & Tech",
      tags: ["Innovation", "Collaboration", "Global"],
      views: "1.1K",
      likes: "59",
      comments: "21",
      color: "from-[#E07B00] to-[#FFA500]"
    },
    {
      id: 8,
      title: "Gender Equity, Diversity And Inclusivity In The G20",
      excerpt: "The G20 forum with its 19 member nations and the European Union collectively represents two-thirds of the world's population, 85% of global GDP and over 75% of global trade.",
      author: "YuvaManthan",
      date: "03/13/2023",
      readTime: "5 min read",
      category: "Youth Leadership",
      tags: ["G20", "Diversity", "Inclusion"],
      views: "890",
      likes: "48",
      comments: "14",
      color: "from-[#FFA500] to-[#FF8C00]"
    }
  ]

  // Trending Blogs
  const trendingBlogs = [
    {
      id: 9,
      title: "The Future of Digital Economy in India",
      rank: 1,
      trend: "up",
      views: "3.2K",
      color: "from-[#6A3E2E] to-[#8B4513]"
    },
    {
      id: 10,
      title: "Sustainable Development Goals 2030",
      rank: 2,
      trend: "up",
      views: "2.9K",
      color: "from-[#8B4513] to-[#C46200]"
    },
    {
      id: 3,
      title: "Youth Perception On Climate Change",
      rank: 3,
      trend: "up",
      views: "1.5K",
      color: "from-[#C46200] to-[#E07B00]"
    }
  ]

  // Filter blogs based on category and search
  const filteredBlogs = regularBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)

  const handleTagClick = (tag) => {
    setSearchQuery(tag)
    if (window.innerWidth < 768) {
      setShowMobileFilters(false)
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
        <Filter className="w-6 h-6" />
      </button>

      {/* Mobile Filters Sidebar */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-[#6A3E2E] text-lg">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-5 h-5 text-[#8B4513]/60" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#6A3E2E] mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setShowMobileFilters(false)
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'hover:bg-[#FFF7ED] text-[#8B4513]'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${
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

            {/* Mobile Tags */}
            <div>
              <h4 className="font-semibold text-[#6A3E2E] mb-3">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                      searchQuery === tag
                        ? 'bg-gradient-to-r from-[#C46200] to-[#E07B00] text-white'
                        : 'bg-[#FFF7ED] text-[#6A3E2E] hover:shadow-md'
                    }`}
                  >
                    {tag}
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
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-[#6A3E2E]">
                    Insights & Analysis
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Yuvamanthan
                  </span>
                  <br />
                  <span className="text-[#6A3E2E] text-xl sm:text-2xl md:text-3xl">
                    Thought Leadership Blog
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Explore in-depth analysis, expert opinions, and youth perspectives on global 
                  economics, climate action, innovation, and sustainable development.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white border border-[#6A3E2E]/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                {/* Quick Tags */}
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                  {tags.slice(0, 3).map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="inline-flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] text-xs sm:text-sm rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button 
                  onClick={() => window.innerWidth >= 768 ? setShowFilters(!showFilters) : setShowMobileFilters(true)}
                  className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Filter Articles</span>
                  </div>
                </button>
                
                <button className="group relative h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-2">
                    <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">Bookmarks</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Featured Blog */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-xs font-semibold text-[#6A3E2E]">FEATURED ARTICLE</span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#8B4513]/60">{featuredBlogs[0].date}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6A3E2E] mb-3 sm:mb-4">
                    {featuredBlogs[0].title}
                  </h3>
                  
                  <p className="text-[#8B4513] text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                    {featuredBlogs[0].excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-2 sm:mr-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#6A3E2E] text-sm sm:text-base">{featuredBlogs[0].author}</div>
                        <div className="text-xs sm:text-sm text-[#8B4513]/60">{featuredBlogs[0].readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredBlogs[0].views}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredBlogs[0].likes}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm sm:text-base">Read Full Article</span>
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
        <section className="hidden lg:block w-full bg-white border-b border-[#6A3E2E]/10 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Filter className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Filter Articles</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="ml-4 text-[#8B4513]/60 hover:text-[#6A3E2E]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white`
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
              </div>
              
              <div className="w-full lg:w-auto">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 ${
                        searchQuery === tag
                          ? 'bg-gradient-to-r from-[#C46200] to-[#E07B00] text-white'
                          : 'bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-[#6A3E2E] hover:shadow-sm'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Blogs Section */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2">
                Featured Insights
              </h2>
              <p className="text-sm sm:text-base text-[#8B4513]/80">Deep dives into critical global issues</p>
            </div>
            <button className="flex items-center text-[#6A3E2E] font-semibold hover:text-[#8B4513] transition-colors duration-300 text-sm sm:text-base">
              View All Featured
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {featuredBlogs.map((blog, index) => (
              <div key={blog.id} className="group relative">
                <div className={`absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r ${blog.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-xs font-semibold text-[#6A3E2E]">{blog.category}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/60">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6A3E2E] mb-3 sm:mb-4">{blog.title}</h3>
                  
                  <p className="text-[#8B4513] text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-2 sm:mr-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#6A3E2E] text-sm sm:text-base">{blog.author}</div>
                        <div className="text-xs sm:text-sm text-[#8B4513]/60">{blog.readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button className="p-1.5 sm:p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]/60" />
                      </button>
                      <button className="p-1.5 sm:p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Bookmark className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B4513]/60" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-4 border-t border-[#6A3E2E]/10 gap-4">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {blog.views}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {blog.comments}
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-[#8B4513]/80">
                        <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="hidden sm:inline">Share</span>
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

      {/* Main Blog Grid Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Blog Articles */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-xs sm:text-sm text-[#8B4513]/80">
                    {filteredBlogs.length} articles {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      currentPage === 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#6A3E2E]/5'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  </button>
                  <span className="text-sm text-[#8B4513]/60">
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      currentPage === totalPages 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#6A3E2E]/5'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/60" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {currentPosts.map((blog, index) => (
                  <div key={blog.id} className="group relative">
                    <div className={`absolute -inset-3 sm:-inset-4 bg-gradient-to-r ${blog.color} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#6A3E2E]/10 transform group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        <div className="md:w-1/3">
                          <div className={`w-full h-32 sm:h-40 md:h-48 rounded-lg sm:rounded-xl bg-gradient-to-br ${blog.color.replace('to-', '/20 to-')}/20 flex items-center justify-center`}>
                            <div className={`text-2xl sm:text-3xl md:text-4xl ${
                              index % 3 === 0 ? 'text-[#6A3E2E]/40' :
                              index % 3 === 1 ? 'text-[#8B4513]/40' :
                              'text-[#C46200]/40'
                            }`}>
                              {index % 3 === 0 ? '📈' : index % 3 === 1 ? '🌍' : '💡'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                              <span className="text-xs font-semibold text-[#6A3E2E]">{blog.category}</span>
                            </div>
                            <div className="text-xs sm:text-sm text-[#8B4513]/60">{blog.date}</div>
                          </div>
                          
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#6A3E2E] mb-2 sm:mb-3">{blog.title}</h3>
                          
                          <p className="text-[#8B4513] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{blog.excerpt}</p>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                              <div className="flex items-center">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-1 sm:mr-2">
                                  <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#6A3E2E]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#6A3E2E]">{blog.author}</span>
                              </div>
                              <div className="hidden sm:block text-[#8B4513]/40">•</div>
                              <div className="flex items-center text-xs text-[#8B4513]/60">
                                <Clock className="w-3 h-3 mr-1" />
                                {blog.readTime}
                              </div>
                            </div>
                            
                            <button className="flex items-center text-xs sm:text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                              Read More
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                            {blog.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-xs text-[#6A3E2E] rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredBlogs.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <FileText className="w-5 h-5 sm:w-8 sm:h-8 text-[#8B4513]/60" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#6A3E2E] mb-2">No articles found</h3>
                  <p className="text-sm sm:text-base text-[#8B4513]/80">Try a different search or filter</p>
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
                  <span className="text-sm text-[#8B4513]">
                    Page {currentPage} of {totalPages}
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
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Trending Articles */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Trending Now</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {trendingBlogs.map((blog, index) => (
                    <div key={blog.id} className="flex items-center p-2 sm:p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group cursor-pointer">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 bg-gradient-to-r ${blog.color} bg-opacity-20 text-white`}>
                        <span className="text-xs sm:text-sm font-bold">{blog.rank}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-[#6A3E2E] text-xs sm:text-sm line-clamp-2 group-hover:text-[#8B4513]">
                          {blog.title}
                        </div>
                        <div className="flex items-center text-xs text-[#8B4513]/60 mt-1">
                          <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                          {blog.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories - Desktop */}
              <div className="hidden lg:block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E] text-sm sm:text-base">Categories</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white`
                          : 'hover:bg-[#FFF7ED] text-[#8B4513]'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
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

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-center mb-3 sm:mb-4">
                  <Lightbulb className="w-5 h-5 sm:w-8 sm:h-8 text-white mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-white text-sm sm:text-base mb-2">Stay Updated</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Get weekly insights delivered to your inbox</p>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white text-xs sm:text-sm"
                  />
                  <button className="w-full py-2 sm:py-3 bg-white text-[#6A3E2E] rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-xs sm:text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default YuvamanthanBlog