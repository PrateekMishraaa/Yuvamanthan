import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'

const OverView = () => {
  const navigate = useNavigate()
  const { section } = useParams()
  
  // Color theme from YuuthCommunity
  const COLORS = {
    primary: {
      dark: "#6A3E2E",
      medium: "#8B4513",
      light: "#E07B00"
    },
    secondary: {
      dark: "#C46200",
      medium: "#FF8C00",
      light: "#FFA500"
    },
    background: {
      light: "#FFF7ED",
      lighter: "#FFEDD5",
      white: "#FFFFFF"
    }
  };

  // Section order matching sidebar
  const sectionOrder = [
    "Institution",
    "Overview",
    "Registered Address",
    "Appearance",
    "Social Presence",
    "About You",
    "Documents"
  ]

  // Get current section index
  const currentSectionIndex = sectionOrder.indexOf("Overview") // Since this is Overview page

  const [formData, setFormData] = useState({
    instituteName: "",
    aboutInstitute: ""
  })

  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem('overviewFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const newData = { ...prev, [name]: value }
      // Save to localStorage on change
      localStorage.setItem('overviewFormData', JSON.stringify(newData))
      return newData
    })
  }

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      navigate(`/institution/${sectionOrder[nextIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  // Character count for about institute
  const characterCount = formData.aboutInstitute?.length || 0

  return (
    <>
      <section className='flex'>
        <Sidebar currentSection="Overview" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>About Institution</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Share the essence of your institution with us.
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className='w-full px-4'>
              {/* Name of Institute */}
              <div className='mb-8'>
                <label className='block mb-2'>
                  <span className='font-semibold text-[#6A3E2E]'>Name of Institute</span>
                  <span className='text-red-500 ml-1'>*</span>
                </label>
                <input 
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  placeholder="Enter your institution name"
                  className='w-full md:w-2/3 lg:w-1/2 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                />
                <p className='text-xs text-[#8B4513]/60 mt-2'>
                  Official name as registered with educational authorities
                </p>
              </div>

              {/* About Institute */}
              <div className='mb-8'>
                <label className='block mb-2'>
                  <span className='font-semibold text-[#6A3E2E]'>About Institute</span>
                  <span className='text-red-500 ml-1'>*</span>
                </label>
                <textarea 
                  name="aboutInstitute"
                  value={formData.aboutInstitute}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your institution - its mission, vision, history, achievements, and what makes it unique..."
                  className='w-full md:w-4/5 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]
                           resize-none'
                ></textarea>
                
                {/* Character Count */}
                <div className='flex flex-wrap justify-between items-center mt-3'>
                  <div className='flex items-center gap-4'>
                    <span className='text-xs text-[#8B4513]/60'>
                      <span className='font-semibold text-[#FF8C00]'>{characterCount}</span>/500 characters
                    </span>
                    <span className='text-xs text-[#8B4513]/40'>|</span>
                    <span className='text-xs text-[#8B4513]/60'>
                      Minimum 50 characters recommended
                    </span>
                  </div>
                  {characterCount > 500 && (
                    <span className='text-xs text-red-500'>
                      Maximum character limit exceeded
                    </span>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className='flex justify-between items-center gap-4 pt-6 border-t border-[#8B4513]/10'>
                {/* Previous Button */}
                <button 
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] 
                           rounded-lg font-semibold transition-all duration-300 
                           flex items-center gap-2 group
                           ${currentSectionIndex === 0 
                             ? 'opacity-50 cursor-not-allowed' 
                             : 'cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                           }`}
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Previous
                </button>

                {/* Next Button */}
                <button 
                  onClick={handleNext}
                  disabled={currentSectionIndex === sectionOrder.length - 1}
                  className={`px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center gap-2 group
                           ${currentSectionIndex === sectionOrder.length - 1
                             ? 'opacity-50 cursor-not-allowed'
                             : 'cursor-pointer'
                           }`}
                >
                  Next
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default OverView