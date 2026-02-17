import React, { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/InstitutesContext'
import Trouble from '../../Components/Trouble/Trouble'

const SocialPresence = () => {
  const navigate = useNavigate()
  const { formData, handleChange } = useContext(UserContext)
  
  console.log("This is social media links", formData?.socialLinks?.[0])

  // Handle social media field changes with proper array indexing
  const handleSocialChange = (e) => {
    const { name, value } = e.target
    
    // Create a synthetic event that matches the context's expected format
    // Since socialLinks is an array, we need to target the first element
    const syntheticEvent = {
      target: {
        name: `socialLinks.0.${name}`, // This will create path like 'socialLinks.0.facebook'
        value: value,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Save to localStorage if needed
    localStorage.setItem('instituteFormData', JSON.stringify(formData))
    
    // Navigate to next step
    navigate('/institution/about-you')
  }

  // Get current values from context
  const socialValues = formData?.socialLinks?.[0] || {
    faceBook: '',
    twitter: '',
    linkedIn: '',
    instagram: '',
    youtube: ''
  }

  // Section order for progress steps
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
  const currentSectionIndex = sectionOrder.indexOf("Social Presence")

  return (
    <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      {/* Sidebar */}
      <div className='lg:flex-shrink-0'>
        <Sidebar currentSection="social-presence" />
      </div>

      {/* Main Content Area */}
      <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
        <div className='h-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
          
          {/* Header Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[#8B4513]/10 p-4 sm:p-5 md:p-6'>
            <div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>Social Media</h1>
              <p className='text-sm sm:text-base text-[#8B4513]/70 mt-1'>
                Expand your network and showcase achievements through integrated social media connections
              </p>
            </div>
            <div className='w-full sm:w-auto sm:max-w-xs'>
              <Trouble />
            </div>
          </div>

          {/* Form Content */}
          <div className='w-full p-4 sm:p-5 md:p-6'>
            
            {/* Social Media Accounts Section */}
            <div className='mb-6 sm:mb-8'>
              <h2 className='text-lg sm:text-xl font-semibold text-[#6A3E2E] mb-4 sm:mb-6'>
                Add your Social Media Accounts <span className='text-[#8B4513]/60 font-normal text-sm sm:text-base'>(Optional)</span>
              </h2>
              
              <div className='space-y-4 sm:space-y-5'>
                {/* Facebook */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-[#8B4513]/10 pb-3 sm:pb-2 gap-2 sm:gap-0'>
                  <label className='w-full sm:w-32 text-[#6A3E2E] font-medium text-sm sm:text-base mb-1 sm:mb-0'>
                    Facebook.com/
                  </label>
                  <input
                    type="text"
                    name="faceBook"
                    value={socialValues.faceBook || ''}
                    onChange={handleSocialChange}
                    placeholder="username"
                    className='w-full sm:flex-1 px-3 py-2 bg-[#FFF7ED]/30 border border-[#8B4513]/20 rounded-lg sm:border-none focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 text-[#6A3E2E] placeholder-[#8B4513]/40 text-sm sm:text-base'
                  />
                </div>

                {/* Twitter */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-[#8B4513]/10 pb-3 sm:pb-2 gap-2 sm:gap-0'>
                  <label className='w-full sm:w-32 text-[#6A3E2E] font-medium text-sm sm:text-base mb-1 sm:mb-0'>
                    Twitter.com/
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={socialValues.twitter || ''}
                    onChange={handleSocialChange}
                    placeholder="username"
                    className='w-full sm:flex-1 px-3 py-2 bg-[#FFF7ED]/30 border border-[#8B4513]/20 rounded-lg sm:border-none focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 text-[#6A3E2E] placeholder-[#8B4513]/40 text-sm sm:text-base'
                  />
                </div>

                {/* LinkedIn */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-[#8B4513]/10 pb-3 sm:pb-2 gap-2 sm:gap-0'>
                  <label className='w-full sm:w-32 text-[#6A3E2E] font-medium text-sm sm:text-base mb-1 sm:mb-0'>
                    LinkedIn.com/
                  </label>
                  <input
                    type="text"
                    name="linkedIn"
                    value={socialValues.linkedIn || ''}
                    onChange={handleSocialChange}
                    placeholder="username"
                    className='w-full sm:flex-1 px-3 py-2 bg-[#FFF7ED]/30 border border-[#8B4513]/20 rounded-lg sm:border-none focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 text-[#6A3E2E] placeholder-[#8B4513]/40 text-sm sm:text-base'
                  />
                </div>

                {/* Instagram */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-[#8B4513]/10 pb-3 sm:pb-2 gap-2 sm:gap-0'>
                  <label className='w-full sm:w-32 text-[#6A3E2E] font-medium text-sm sm:text-base mb-1 sm:mb-0'>
                    Instagram.com/
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={socialValues.instagram || ''}
                    onChange={handleSocialChange}
                    placeholder="username"
                    className='w-full sm:flex-1 px-3 py-2 bg-[#FFF7ED]/30 border border-[#8B4513]/20 rounded-lg sm:border-none focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 text-[#6A3E2E] placeholder-[#8B4513]/40 text-sm sm:text-base'
                  />
                </div>

                {/* YouTube */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-[#8B4513]/10 pb-3 sm:pb-2 gap-2 sm:gap-0'>
                  <label className='w-full sm:w-32 text-[#6A3E2E] font-medium text-sm sm:text-base mb-1 sm:mb-0'>
                    Youtube.com/
                  </label>
                  <input
                    type="text"
                    name="youtube"
                    value={socialValues.youtube || ''}
                    onChange={handleSocialChange}
                    placeholder="username"
                    className='w-full sm:flex-1 px-3 py-2 bg-[#FFF7ED]/30 border border-[#8B4513]/20 rounded-lg sm:border-none focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/20 text-[#6A3E2E] placeholder-[#8B4513]/40 text-sm sm:text-base'
                  />
                </div>
              </div>
              
              {/* Helper text */}
              <p className='text-xs sm:text-sm text-[#8B4513]/60 mt-4'>
                Enter only your username, not the full URL. All fields are optional.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className='mt-4 sm:mt-5 md:mt-6 bg-[#FFF7ED] p-3 sm:p-4 rounded-lg'>
              <p className='text-xs sm:text-sm text-[#8B4513]'>
                <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> Social Media Presence
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#8B4513]/10'>
              <button
                type="button"
                onClick={() => navigate('/institution/appearance')}
                className='w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                         rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00] cursor-pointer'
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous
              </button>
              
              <button
                type="submit"
                onClick={handleSubmit}
                className='w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] cursor-pointer'
              >
                Next Step
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Section Steps Indicator */}
            <div className='mt-4 sm:mt-5 md:mt-6 flex justify-center overflow-x-auto px-2 py-2'>
              <div className='flex gap-1 sm:gap-2 min-w-max'>
                {sectionOrder.map((item, index) => (
                  <div
                    key={index}
                    className='group relative flex flex-col items-center'
                  >
                    <div
                      className={`h-2 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentSectionIndex
                          ? 'bg-[#8B4513]'
                          : index < currentSectionIndex
                          ? 'bg-[#FFA500]'
                          : 'bg-[#8B4513]/20'
                      }`}
                    />
                    <span className='absolute -bottom-5 text-[8px] sm:text-[10px] text-[#8B4513]/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Step Indicator */}
            <div className='sm:hidden text-center mt-3'>
              <p className='text-xs text-[#8B4513]/60'>
                Step {currentSectionIndex + 1} of {sectionOrder.length}
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default SocialPresence