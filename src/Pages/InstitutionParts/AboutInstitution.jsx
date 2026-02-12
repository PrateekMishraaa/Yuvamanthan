import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'

const AboutInstitution = () => {
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
  const currentSectionIndex = sectionOrder.indexOf("About You")

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
        <Sidebar currentSection="About You" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>About You</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Tell us about the primary contact person for your institution.
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className='w-full px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* First Name */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>First Name</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg className='w-5 h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className='w-full py-3 pl-10 pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                  <p className='text-xs text-[#8B4513]/60 mt-2'>
                    Contact person's first name
                  </p>
                </div>

                {/* Last Name */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Last Name</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg className='w-5 h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className='w-full py-3 pl-10 pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  </div>
                  <p className='text-xs text-[#8B4513]/60 mt-2'>
                    Contact person's last name
                  </p>
                </div>

                {/* Phone Number - Full Width */}
                <div className='mb-4 md:col-span-2'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Phone Number</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='w-full sm:w-1/3 md:w-1/4'>
                      <select
                        className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                                 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                                 transition-all duration-300 text-[#6A3E2E]'
                      >
                        <option value="" disabled selected>Country Code</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+61">+61 (Australia)</option>
                        <option value="+1">+1 (Canada)</option>
                        <option value="+65">+65 (Singapore)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+81">+81 (Japan)</option>
                      </select>
                    </div>
                    <div className='relative flex-1'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <svg className='w-5 h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        maxLength="10"
                        className='w-full py-3 pl-10 pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                                 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                                 transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-4 mt-3'>
                    <p className='text-xs text-[#8B4513]/60'>
                      <span className='font-medium'>Mobile:</span> Enter 10-digit mobile number
                    </p>
                    <span className='text-xs text-[#8B4513]/40'>|</span>
                    <p className='text-xs text-[#8B4513]/60'>
                      <span className='font-medium'>Landline:</span> Include STD code
                    </p>
                  </div>
                </div>
              </div>


              {/* Additional Info */}
              <div className='mt-6 p-4 bg-[#FFF7ED]/50 rounded-lg border border-[#8B4513]/10'>
                <div className='flex items-start gap-2'>
                  <svg className='w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className='text-xs text-[#8B4513]/70'>
                    The contact details provided here will be used for official correspondence. Please ensure they are accurate and belong to an authorized representative of your institution.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className='flex justify-between items-center gap-4 pt-8 mt-6 border-t border-[#8B4513]/10'>
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

export default AboutInstitution