import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { UserContext } from '../../Context/InstitutesContext'

const AboutInstitution = () => {
  const { formData, setFormData, handleChange,handleSubmit } = useContext(UserContext)
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

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  // Handle field changes for InstitutePersonalInfo array
  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      InstitutePersonalInfo: [
        {
          ...prev.InstitutePersonalInfo?.[0] || {},
          [field]: value
        }
      ]
    }))
  }

  // Check if form has required fields filled
  const isFormValid = () => {
    const info = formData?.InstitutePersonalInfo?.[0] || {}
    return (
      info.Firstname?.trim() !== "" &&
      info.Phone?.trim() !== "" &&
      info.Phone?.length === 10
    )
  }

  return (
    <>
      <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
        {/* Sidebar */}
        <div className='lg:flex-shrink-0'>
          <Sidebar currentSection="About You" />
        </div>

        {/* Main Content Area */}
        <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
          <div className='h-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
            
            {/* Header Section */}
            <div className='flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[#8B4513]/10 p-4 sm:p-5 md:p-6'>
              <div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>About You</h1>
                <p className='text-sm sm:text-base text-[#8B4513]/70 mt-1'>
                  Tell us about the primary contact person for your institution.
                </p>
              </div>
              <div className='w-full sm:w-auto sm:max-w-xs'>
                <Trouble />
              </div>
            </div>

            {/* Form Content */}
            <div className='w-full p-4 sm:p-5 md:p-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6'>
                {/* First Name */}
                <div className='space-y-2'>
                  <label className='block'>
                    <span className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>First Name</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={formData.InstitutePersonalInfo?.[0]?.Firstname || ''}
                      onChange={(e) => handleFieldChange('Firstname', e.target.value)}
                      placeholder="Enter first name"
                      className='w-full py-2.5 sm:py-3 pl-9 sm:pl-10 pr-3 sm:pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                    />
                  </div>
                  <p className='text-xs text-[#8B4513]/60'>
                    Contact person's first name
                  </p>
                </div>

                {/* Last Name */}
                <div className='space-y-2'>
                  <label className='block'>
                    <span className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>Last Name</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={formData.InstitutePersonalInfo?.[0]?.lastName || ''}
                      onChange={(e) => handleFieldChange('lastName', e.target.value)}
                      placeholder="Enter last name"
                      className='w-full py-2.5 sm:py-3 pl-9 sm:pl-10 pr-3 sm:pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                    />
                  </div>
                  <p className='text-xs text-[#8B4513]/60'>
                    Contact person's last name
                  </p>
                </div>

                {/* Phone Number - Full Width */}
                <div className='md:col-span-2 space-y-2'>
                  <label className='block'>
                    <span className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>Phone Number</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                    <div className='w-full sm:w-1/3 md:w-1/4'>
                      <select
                        className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                                 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                                 transition-all duration-300 text-[#6A3E2E] text-sm sm:text-base'
                      >
                        <option value="">Country Code</option>
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
                        <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        value={formData.InstitutePersonalInfo?.[0]?.Phone || ''}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                          handleFieldChange('Phone', value)
                        }}
                        placeholder="Enter 10-digit phone number"
                        maxLength="10"
                        className='w-full py-2.5 sm:py-3 pl-9 sm:pl-10 pr-3 sm:pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                                 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                                 transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-2 sm:gap-4 mt-2'>
                    <p className='text-xs text-[#8B4513]/60'>
                      <span className='font-medium'>Mobile:</span> Enter 10-digit mobile number
                    </p>
                    <span className='text-xs text-[#8B4513]/40 hidden sm:inline'>|</span>
                    <p className='text-xs text-[#8B4513]/60'>
                      <span className='font-medium'>Landline:</span> Include STD code
                    </p>
                  </div>
                  {formData.InstitutePersonalInfo?.[0]?.Phone && 
                   formData.InstitutePersonalInfo[0].Phone.length < 10 && (
                    <p className='text-xs text-red-500 mt-2'>
                      Phone number must be exactly 10 digits
                    </p>
                  )}
                </div>

                {/* Associated With Institute */}
                <div className='md:col-span-2 space-y-2'>
                  <label className='block'>
                    <span className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>Associated With Institute</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513]/40' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={formData.InstitutePersonalInfo?.[0]?.AssociatedWithInstitute || ''}
                      onChange={(e) => handleFieldChange('AssociatedWithInstitute', e.target.value)}
                      placeholder="e.g., Director, Principal, Administrator"
                      className='w-full py-2.5 sm:py-3 pl-9 sm:pl-10 pr-3 sm:pr-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                    />
                  </div>
                  <p className='text-xs text-[#8B4513]/60'>
                    Your designation or role at the institution
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className='mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-[#FFF7ED]/50 rounded-lg border border-[#8B4513]/10'>
                <div className='flex items-start gap-2'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className='text-xs sm:text-sm text-[#8B4513]/70'>
                    The contact details provided here will be used for official correspondence. Please ensure they are accurate and belong to an authorized representative of your institution.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#8B4513]/10'>
                {/* Previous Button */}
                <button 
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                           rounded-lg font-semibold transition-all duration-300 
                           flex items-center justify-center gap-2 group text-sm sm:text-base
                           ${currentSectionIndex === 0 
                             ? 'opacity-50 cursor-not-allowed' 
                             : 'cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                           }`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Previous
                </button>

                {/* Next Button */}
                <button 
                  onClick={handleSubmit}
                  type='submit'
                  disabled={!isFormValid()}
                  className={`w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center justify-center gap-2 group text-sm sm:text-base
                           ${!isFormValid()
                             ? 'opacity-50 cursor-not-allowed'
                             : 'cursor-pointer'
                           }`}
                >
                  Next
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
    </>
  )
}

export default AboutInstitution