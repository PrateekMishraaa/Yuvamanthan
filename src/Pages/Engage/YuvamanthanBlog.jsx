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

  // Blog categories
  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'economics', name: 'Economics & Finance', count: 8 },
    { id: 'climate', name: 'Climate Change', count: 5 },
    { id: 'innovation', name: 'Innovation & Tech', count: 6 },
    { id: 'leadership', name: 'Youth Leadership', count: 5 }
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
      comments: "42"
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
      comments: "31"
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
      comments: "25"
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
      comments: "38"
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
      comments: "19"
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
      comments: "16"
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
      comments: "21"
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
      comments: "14"
    }
  ]

  // Trending Blogs
  const trendingBlogs = [
    {
      id: 9,
      title: "The Future of Digital Economy in India",
      rank: 1,
      trend: "up",
      views: "3.2K"
    },
    {
      id: 10,
      title: "Sustainable Development Goals 2030",
      rank: 2,
      trend: "up",
      views: "2.9K"
    },
    {
      id: 3,
      title: "Youth Perception On Climate Change",
      rank: 3,
      trend: "up",
      views: "1.5K"
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

  // All blogs (featured + filtered)
  const allBlogs = [...featuredBlogs, ...filteredBlogs]

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
                  <BookOpen className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <span className="text-sm font-semibold text-[#6A3E2E]">
                    Insights & Analysis
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] bg-clip-text text-transparent">
                    Yuvamanthan
                  </span>
                  <br />
                  <span className="text-[#6A3E2E] text-3xl sm:text-4xl md:text-3xl">
                    Thought Leadership Blog
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                  Explore in-depth analysis, expert opinions, and youth perspectives on global 
                  economics, climate action, innovation, and sustainable development.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] focus:shadow-lg transition-all duration-300"
                  />
                </div>
                
                {/* Quick Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.slice(0, 5).map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] text-sm rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </button>
                  ))}
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
                    <span className="text-lg font-semibold">Filter Articles</span>
                  </div>
                </button>
                
                <button className="group relative h-14 w-full sm:w-auto px-8 overflow-hidden rounded-xl border-2 border-[#6A3E2E]/30 text-[#6A3E2E] shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-[#FFF7ED]">
                  <div className="relative flex items-center justify-center space-x-3">
                    <Bookmark className="w-5 h-5" />
                    <span className="text-lg font-semibold">Bookmarks</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Featured Blog */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-sm font-semibold text-[#6A3E2E]">FEATURED ARTICLE</span>
                    </div>
                    <div className="text-sm text-[#8B4513]/60">{featuredBlogs[0].date}</div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-4">
                    {featuredBlogs[0].title}
                  </h3>
                  
                  <p className="text-[#8B4513] mb-6 line-clamp-3">
                    {featuredBlogs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-[#6A3E2E]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#6A3E2E]">{featuredBlogs[0].author}</div>
                        <div className="text-sm text-[#8B4513]/60">{featuredBlogs[0].readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredBlogs[0].views}
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredBlogs[0].likes}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-center space-x-2">
                      <span>Read Full Article</span>
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
                  <h3 className="font-bold text-[#6A3E2E]">Filter Articles</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="ml-auto md:hidden"
                  >
                    <X className="w-5 h-5 text-[#8B4513]/60" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
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
              </div>
              
              <div className="w-full md:w-auto">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
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
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-2">
                Featured Insights
              </h2>
              <p className="text-[#8B4513]/80">Deep dives into critical global issues</p>
            </div>
            <button className="flex items-center text-[#6A3E2E] font-semibold hover:text-[#8B4513] transition-colors duration-300">
              View All Featured
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, index) => (
              <div key={blog.id} className="group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  index === 0 ? 'from-[#6A3E2E] to-[#8B4513]' : 'from-[#8B4513] to-[#C46200]'
                } rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300 h-full border border-[#6A3E2E]/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                      <span className="text-sm font-semibold text-[#6A3E2E]">{blog.category}</span>
                    </div>
                    <div className="flex items-center text-sm text-[#8B4513]/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#6A3E2E] mb-4">{blog.title}</h3>
                  
                  <p className="text-[#8B4513] mb-6 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-[#6A3E2E]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#6A3E2E]">{blog.author}</div>
                        <div className="text-sm text-[#8B4513]/60">{blog.readTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Heart className="w-4 h-4 text-[#8B4513]/60" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#6A3E2E]/5 transition-colors duration-300">
                        <Bookmark className="w-4 h-4 text-[#8B4513]/60" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#6A3E2E]/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Eye className="w-4 h-4 mr-1" />
                        {blog.views}
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {blog.comments}
                      </div>
                      <div className="flex items-center text-sm text-[#8B4513]/80">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
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

      {/* Main Blog Grid Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Blog Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-[#8B4513]/80">
                    {filteredBlogs.length} articles {selectedCategory !== 'all' && `in ${categories.find(c => c.id === selectedCategory)?.name}`}
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
                {filteredBlogs.map((blog, index) => (
                  <div key={blog.id} className="group relative">
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
                            <div className={`text-4xl ${
                              index % 3 === 0 ? 'text-[#6A3E2E]/40' :
                              index % 3 === 1 ? 'text-[#8B4513]/40' :
                              'text-[#C46200]/40'
                            }`}>
                              {index % 3 === 0 ? '📈' : index % 3 === 1 ? '🌍' : '💡'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                              <span className="text-xs font-semibold text-[#6A3E2E]">{blog.category}</span>
                            </div>
                            <div className="text-sm text-[#8B4513]/60">{blog.date}</div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#6A3E2E] mb-3">{blog.title}</h3>
                          
                          <p className="text-[#8B4513] text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 flex items-center justify-center mr-2">
                                <User className="w-4 h-4 text-[#6A3E2E]" />
                              </div>
                              <div className="text-sm text-[#6A3E2E]">{blog.author}</div>
                              <div className="mx-2 text-[#8B4513]/40">•</div>
                              <div className="flex items-center text-xs text-[#8B4513]/60">
                                <Clock className="w-3 h-3 mr-1" />
                                {blog.readTime}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <button className="flex items-center text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] group">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {blog.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 text-xs text-[#6A3E2E] rounded">
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
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-[#8B4513]/60" />
                  </div>
                  <h3 className="text-xl font-bold text-[#6A3E2E] mb-2">No articles found</h3>
                  <p className="text-[#8B4513]/80">Try a different search or filter</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Trending Now</h3>
                </div>
                
                <div className="space-y-4">
                  {trendingBlogs.map((blog, index) => (
                    <div key={blog.id} className="flex items-center p-3 rounded-lg hover:bg-[#FFF7ED] transition-colors duration-300 group cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        index === 0 ? 'bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 text-[#6A3E2E]' :
                        index === 1 ? 'bg-gradient-to-r from-[#8B4513]/20 to-[#C46200]/20 text-[#8B4513]' :
                        'bg-gradient-to-r from-[#C46200]/20 to-[#E07B00]/20 text-[#C46200]'
                      }`}>
                        <div className="font-bold">{blog.rank}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-[#6A3E2E] text-sm line-clamp-2 group-hover:text-[#8B4513]">
                          {blog.title}
                        </div>
                        <div className="flex items-center text-xs text-[#8B4513]/60 mt-1">
                          <Eye className="w-3 h-3 mr-1" />
                          {blog.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#6A3E2E]/10">
                <div className="flex items-center mb-6">
                  <Tag className="w-5 h-5 text-[#6A3E2E] mr-2" />
                  <h3 className="font-bold text-[#6A3E2E]">Categories</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10'
                          : 'hover:bg-[#FFF7ED]'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          category.id === 'all' ? 'bg-[#6A3E2E]' :
                          category.id === 'economics' ? 'bg-[#8B4513]' :
                          category.id === 'climate' ? 'bg-[#C46200]' :
                          category.id === 'innovation' ? 'bg-[#E07B00]' :
                          'bg-[#FFA500]'
                        }`}></div>
                        <span className={`font-medium ${
                          selectedCategory === category.id ? 'text-[#6A3E2E]' : 'text-[#8B4513]'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                      <span className={`text-sm px-2 py-0.5 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-[#6A3E2E] text-white'
                          : 'bg-[#6A3E2E]/10 text-[#6A3E2E]'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#6A3E2E] to-[#8B4513] rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-white/80 text-sm">Get weekly insights delivered to your inbox</p>
                </div>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <button className="w-full py-3 bg-white text-[#6A3E2E] rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
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