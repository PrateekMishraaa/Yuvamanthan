import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'

const SocialPresence = () => {
  const navigate = useNavigate()
  
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
  const currentSectionIndex = sectionOrder.indexOf("Social Presence")

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

  return (
    <>
      <section className='flex'>
        <Sidebar currentSection="Social Presence" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>Social Presence</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                Expand your network and showcase achievements through integrated <br/>social media connections
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className='w-full px-4'>
              <div className='space-y-6'>
                {/* Facebook */}
                <div className='group'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Facebook</span>
                    <span className='text-[#8B4513]/60 text-sm ml-2'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#1877F2]/10 rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-[#1877F2]' fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://facebook.com/yourinstitute"
                      className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                </div>

                {/* Twitter/X */}
                <div className='group'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Twitter / X</span>
                    <span className='text-[#8B4513]/60 text-sm ml-2'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-black' fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://twitter.com/yourinstitute"
                      className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div className='group'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Instagram</span>
                    <span className='text-[#8B4513]/60 text-sm ml-2'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://instagram.com/yourinstitute"
                      className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className='group'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>LinkedIn</span>
                    <span className='text-[#8B4513]/60 text-sm ml-2'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#0A66C2]/10 rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-[#0A66C2]' fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/school/yourinstitute"
                      className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                </div>

                {/* YouTube */}
                <div className='group'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>YouTube</span>
                    <span className='text-[#8B4513]/60 text-sm ml-2'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#FF0000]/10 rounded-lg flex items-center justify-center'>
                      <svg className='w-5 h-5 text-[#FF0000]' fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://youtube.com/@yourinstitute"
                      className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                </div>

                {/* Additional Links Section */}
                <div className='mt-8 pt-6 border-t border-[#8B4513]/10'>
                  <h3 className='text-lg font-semibold text-[#6A3E2E] mb-4'>Additional Links</h3>
                  
                  {/* Custom Link 1 */}
                  <div className='mb-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex-shrink-0 w-10 h-10 bg-[#8B4513]/10 rounded-lg flex items-center justify-center'>
                        <svg className='w-5 h-5 text-[#8B4513]' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <input
                        type="url"
                        placeholder="https://..."
                        className='flex-1 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                                 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                                 transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                      />
                      <button className='p-3 text-[#8B4513]/60 hover:text-red-500 transition-colors duration-300'>
                        <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Add More Link Button */}
                  <button className='mt-2 px-4 py-2 border-2 border-dashed border-[#8B4513]/30 text-[#8B4513]/70 rounded-lg hover:border-[#FF8C00] hover:text-[#FF8C00] transition-all duration-300 flex items-center gap-2'>
                    <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Another Link
                  </button>
                  <p className='text-xs text-[#8B4513]/60 mt-3'>
                    Add your institute's other social media profiles or important links
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className='flex justify-between items-center gap-4 pt-8 mt-8 border-t border-[#8B4513]/10'>
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

export default SocialPresence