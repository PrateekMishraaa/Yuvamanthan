import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'

const InstitutionDocuments = () => {
  const navigate = useNavigate()
  
  // Section order matching sidebar - Now includes Contact Details after Documents
  const sectionOrder = [
    "Institution",
    "Overview",
    "Registered Address",
    "Appearance",
    "Social Presence",
    "About You",
    "Documents",
    "Contact Details" // Added Contact Details after Documents
  ]

  // Get current section index
  const currentSectionIndex = sectionOrder.indexOf("Documents")

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      const nextSection = sectionOrder[nextIndex]
      // Check if next section is under Institute Details or main menu
      if (nextSection === "Contact Details") {
        navigate('/contact-details/mailing-address')
      } else {
        navigate(`/institution/${nextSection.toLowerCase().replace(/\s+/g, '-')}`)
      }
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
        <Sidebar currentSection="Documents" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>Institution Documents</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Upload required documents to verify your institution.
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className='w-full px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Proof of Identity (POI) */}
                <div className='flex flex-col'>
                  <div className='border-2 border-dashed border-[#8B4513]/30 rounded-xl p-8 bg-[#FFF7ED]/20 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40 transition-all duration-300 group h-full flex flex-col items-center justify-center min-h-[280px]'>
                    <div className='flex flex-col items-center text-center w-full'>
                      {/* Upload Icon */}
                      <div className='w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                        <svg className='w-8 h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      
                      {/* Upload Text */}
                      <div className='space-y-2'>
                        <p className='text-base text-[#6A3E2E] font-medium'>
                          Drag file here or click to
                        </p>
                        <label className='relative cursor-pointer'>
                          <span className='text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
                            Select file to upload
                          </span>
                          <input
                            type="file"
                            className='sr-only'
                          />
                        </label>
                      </div>
                      
                      {/* Document Label */}
                      <div className='mt-6 pt-4 border-t border-[#8B4513]/20 w-full'>
                        <p className='text-sm font-semibold text-[#6A3E2E]'>
                          Proof of identity (POI)
                        </p>
                        <p className='text-xs text-[#8B4513]/50 mt-1'>
                          PDF, JPG, PNG (Max 10MB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proof of Address (POA) */}
                <div className='flex flex-col'>
                  <div className='border-2 border-dashed border-[#8B4513]/30 rounded-xl p-8 bg-[#FFF7ED]/20 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40 transition-all duration-300 group h-full flex flex-col items-center justify-center min-h-[280px]'>
                    <div className='flex flex-col items-center text-center w-full'>
                      {/* Upload Icon */}
                      <div className='w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                        <svg className='w-8 h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      
                      {/* Upload Text */}
                      <div className='space-y-2'>
                        <p className='text-base text-[#6A3E2E] font-medium'>
                          Drag file here or click to
                        </p>
                        <label className='relative cursor-pointer'>
                          <span className='text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
                            Select file to upload
                          </span>
                          <input
                            type="file"
                            className='sr-only'
                          />
                        </label>
                      </div>
                      
                      {/* Document Label */}
                      <div className='mt-6 pt-4 border-t border-[#8B4513]/20 w-full'>
                        <p className='text-sm font-semibold text-[#6A3E2E]'>
                          Proof of address (POA)
                        </p>
                        <p className='text-xs text-[#8B4513]/50 mt-1'>
                          PDF, JPG, PNG (Max 10MB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Guidelines - Simplified */}
              <div className='mt-8 p-4 bg-[#FFF7ED] rounded-lg border border-[#8B4513]/20'>
                <div className='flex items-start gap-2'>
                  <svg className='w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className='text-xs text-[#8B4513]/70'>
                    Documents must be clear, legible, and not older than 6 months. The name should match your institution's registered name.
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
                  className='px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center gap-2 group cursor-pointer'
                >
                  Next: Contact Details
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

export default InstitutionDocuments