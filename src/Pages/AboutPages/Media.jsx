import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { FaNewspaper, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'

const Media = () => {
  // Featured news from first screenshot
  const featuredNews = [
    {
      title: "Yuva Manthan Model G-20 started in Goa, youth will get opportunity",
      date: "2023-01-29",
      source: "Jagran News",
      description: "Youth will get opportunity to discuss global issues"
    },
    {
      title: "Y20, YuvaManthan join hands to organize G20 summit across India",
      date: "2023-03-12",
      source: "Jantaserishta",
      description: "Collaboration to conduct G20 summits across the nation"
    },
    {
      title: "Yuva Manthan Model G-20 starts in Goa, global issues will be discussed",
      date: "2023-01-28",
      source: "Aajtak",
      description: "Global issues take center stage at Yuva Manthan Model G-20"
    }
  ]

  // Top news from the table
  const topNews = [
    {
      date: "17-02-2024",
      title: "CUSB: Organization of Yuvamathan Model United Nations Dialogue",
      source: "Hindustan",
      sourceDate: "2024-02-21",
      description: "Conference on Yuvamathan India@2047 held at USTM",
      secondSource: "The Shillong Times",
      secondSourceDate: "2024-02-22"
    },
    {
      date: "17-02-2024",
      title: "Yuvamathan Model G20 held at Army Public School",
      source: "Times of India",
      sourceDate: "2023-09-13",
      description: "Y20, Yuvamathan join hands to conduct 10,000 model G20 summits",
      secondSource: "ANI",
      secondSourceDate: "2024-03-12"
    }
  ]

  // Additional news
  const additionalNews = [
    {
      date: "17-02-2024",
      title: "Panjab University Yuvamathan Model United Nations (PUYMUN) organized",
      source: "India News",
      sourceDate: "2023-11-12"
    },
    {
      date: "17-02-2024",
      title: "G20: Y20 and Yuva Manthan join hands to discuss global issues",
      source: "Amar Ujala",
      sourceDate: "2023-03-13"
    }
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Media <span className="text-[#E07B00]">Coverage</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            YuvaManthan in the news - Making headlines across the nation
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Featured News Section - From first screenshot */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-[#E07B00] rounded-full mr-3"></span>
            Top News
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-b-4 border-[#E07B00]"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="text-[#E07B00]" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#8B4513] mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#E07B00]">{news.source}</span>
                    <FaNewspaper className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage Tables Section */}
        <div className="space-y-12">
          
          {/* Top News Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#8B4513] to-[#E07B00] px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaNewspaper />
                Top News Coverage
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#FFF7ED]">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Event</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topNews.map((news, index) => (
                    <tr key={index} className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {news.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <p className="font-semibold text-[#8B4513]">{news.title}</p>
                          <p className="text-xs text-gray-500">
                            <span className="text-[#E07B00]">{news.source}</span> • {news.sourceDate}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-700">{news.description}</p>
                          {news.secondSource && (
                            <p className="text-xs text-gray-500">
                              <span className="text-[#E07B00]">{news.secondSource}</span> • {news.secondSourceDate}
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* See All Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaNewspaper />
                See All Coverage
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#FFF7ED]">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Event</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#8B4513]">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {additionalNews.map((news, index) => (
                    <tr key={index} className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {news.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-[#8B4513]">{news.title}</p>
                          <p className="text-xs text-gray-500">
                            Published: {news.sourceDate}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 text-[#E07B00] font-medium">
                          {news.source}
                          <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Media Coverage Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#E07B00]">50+</p>
              <p className="text-gray-700 mt-2">Media Mentions</p>
            </div>
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#E07B00]">25+</p>
              <p className="text-gray-700 mt-2">News Publications</p>
            </div>
            <div className="bg-gradient-to-br from-[#FFF7ED] to-orange-100 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#E07B00]">10+</p>
              <p className="text-gray-700 mt-2">National Outlets</p>
            </div>
          </div>

       

        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Media