import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { UserContext } from '../../Context/InstitutesContext'

const OverView = () => {
  const navigate = useNavigate()
  const { formData, handleChange, setFormData } = useContext(UserContext)

  console.log("This is overview form context api", formData?.aboutInstitution?.[0])

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
  const currentSectionIndex = sectionOrder.indexOf("Overview")

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      const nextSection = sectionOrder[nextIndex]
      navigate(`/institution/${nextSection.toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  // Handle institute name change
  const handleInstituteNameChange = (e) => {
    const { value } = e.target
    
    setFormData(prev => ({
      ...prev,
      aboutInstitution: [
        {
          ...prev.aboutInstitution?.[0],
          instituteName: value
        }
      ]
    }))
  }

  // Handle about institute change
  const handleAboutInstituteChange = (e) => {
    const { value } = e.target
    
    setFormData(prev => ({
      ...prev,
      aboutInstitution: [
        {
          ...prev.aboutInstitution?.[0],
          aboutInstitute: value
        }
      ]
    }))
  }

  // Check if form is valid to enable next button
  const isFormValid = () => {
    const aboutInst = formData?.aboutInstitution?.[0] || {}
    return aboutInst.instituteName?.trim() !== "" && aboutInst.aboutInstitute?.trim() !== ""
  }

  return (
    <section className='flex'>
      <Sidebar currentSection="Overview" />

      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>

          {/* Header */}
          <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
            <div>
              <h1 className='text-3xl font-bold text-[#6A3E2E]'>About Institution</h1>
              <p className='text-[#8B4513]/70 mt-1'>
                Share the essence of your institution with us.
              </p>
            </div>
            <Trouble />
          </div>

          {/* Institute Name */}
          <div className='mb-8'>
            <label className='block mb-2 font-semibold text-[#6A3E2E]'>
              Name of Institute <span className='text-red-500'>*</span>
            </label>

            <input
              type="text"
              name="aboutInstitution.instituteName"
              placeholder="Enter your institution name"
              value={formData?.aboutInstitution?.[0]?.instituteName || ''}
              onChange={handleInstituteNameChange}
              className='w-full md:w-2/3 lg:w-1/2 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                         focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none
                         placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
            />

            <p className='text-xs text-[#8B4513]/60 mt-2'>
              Official name as registered with educational authorities
            </p>
          </div>

          {/* About Institute */}
          <div className='mb-8'>
            <label className='block mb-2 font-semibold text-[#6A3E2E]'>
              About Institute <span className='text-red-500'>*</span>
            </label>

            <textarea
              rows="6"
              name="aboutInstitution.aboutInstitute"
              placeholder="Tell us about your institution - its history, mission, values, achievements, and what makes it unique..."
              value={formData?.aboutInstitution?.[0]?.aboutInstitute || ''}
              onChange={handleAboutInstituteChange}
              maxLength="500"
              className='w-full md:w-4/5 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                         focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                         resize-none placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
            />

            <div className='flex justify-between items-center mt-2'>
              <p className='text-xs text-[#8B4513]/60'>
                Describe your institution's mission, values, and unique features
              </p>
              <div className='text-xs font-medium'>
                <span className={formData?.aboutInstitution?.[0]?.aboutInstitute?.length > 450 
                  ? 'text-orange-500' 
                  : 'text-[#8B4513]/60'
                }>
                  {formData?.aboutInstitution?.[0]?.aboutInstitute?.length || 0}
                </span>
                <span className='text-[#8B4513]/60'>/500 characters</span>
              </div>
            </div>
          </div>

          {/* Character count warning */}
          {formData?.aboutInstitution?.[0]?.aboutInstitute?.length > 450 && (
            <div className='mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg'>
              <p className='text-xs text-orange-600 flex items-center gap-1'>
                <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Approaching maximum character limit
              </p>
            </div>
          )}

          {/* Progress Indicator */}
          <div className='mt-6 bg-[#FFF7ED] p-4 rounded-lg'>
            <p className='text-sm text-[#8B4513]'>
              <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> Institution Overview
            </p>
          </div>

          {/* Buttons */}
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
              disabled={!isFormValid()}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                       flex items-center gap-2 group
                       ${!isFormValid()
                         ? 'bg-gray-400 cursor-not-allowed opacity-50'
                         : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] cursor-pointer'
                       }`}
            >
              Next
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Section Steps Indicator */}
          <div className='mt-6 flex justify-center'>
            <div className='flex gap-2'>
              {sectionOrder.map((item, index) => (
                <div
                  key={index}
                  className={`h-2 w-12 rounded-full transition-all duration-300 ${
                    index === currentSectionIndex
                      ? 'bg-[#8B4513]'
                      : index < currentSectionIndex
                      ? 'bg-[#FFA500]'
                      : 'bg-[#8B4513]/20'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </section>
  )
}

export default OverView