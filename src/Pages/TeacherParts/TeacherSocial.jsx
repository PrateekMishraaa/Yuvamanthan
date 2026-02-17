import React, { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { TeacherContext } from '../../Context/TeacherContext'
import Trouble from '../../Components/Trouble/Trouble'

const TeacherSocial = () => {
  const navigate = useNavigate()
  const { teacherFormData, handleChange, handleSubmit } = useContext(TeacherContext)

  // Section order for progress steps
  const sectionOrder = [
    "Personal Details",
    "Academics Details",
    "Additional Details",
    "Time Table",
    "Assignments",
    "Attendance",
    "Students",
    "Leave Management",
    "Exam & Results",
    "Settings"
  ]

  // Get current section index (Social Media is under Personal Details)
  const currentSectionIndex = 0 // Personal Details section

  return (
    <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      {/* Sidebar */}
      <div className='lg:flex-shrink-0'>
        <Sidebar currentSection="social-presence" />
      </div>

      {/* Main Content Area */}
      <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
        <div className='max-w-4xl mx-auto w-full'>

          {/* Header Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-5 md:mb-6'>
            <div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>Social Media</h1>
              <p className='text-sm sm:text-base text-gray-600 mt-1'>
                Expand your network and showcase achievements through integrated social media connections.
              </p>
            </div>
            <div className='w-full sm:w-auto sm:max-w-xs'>
              <Trouble />
            </div>
          </div>

          {/* Main Content Card */}
          <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
            <div className='p-4 sm:p-5 md:p-6 lg:p-8 space-y-5 sm:space-y-6 md:space-y-8'>
              <form onSubmit={handleSubmit}>
                
                {/* Social Media Accounts Section */}
                <div className='mb-5 sm:mb-6 md:mb-8'>
                  <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-[#6A3E2E] mb-3 sm:mb-4'>
                    Add your Social Media Accounts <span className='text-gray-500 font-normal text-sm sm:text-base'>(Optional)</span>
                  </h2>
                  
                  <div className='space-y-3 sm:space-y-4'>
                    {/* Facebook */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-3 sm:pb-4 gap-2 sm:gap-0'>
                      <label className='w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0'>
                        Facebook.com/
                      </label>
                      <input
                        type="text"
                        name="facebook"
                        value={teacherFormData.facebook || ''}
                        onChange={handleChange}
                        placeholder="username"
                        className='w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                          outline-none transition-all duration-200
                          bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base'
                      />
                    </div>

                    {/* Twitter */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-3 sm:pb-4 gap-2 sm:gap-0'>
                      <label className='w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0'>
                        Twitter.com/
                      </label>
                      <input
                        type="text"
                        name="twitter"
                        value={teacherFormData.twitter || ''}
                        onChange={handleChange}
                        placeholder="username"
                        className='w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                          outline-none transition-all duration-200
                          bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base'
                      />
                    </div>

                    {/* LinkedIn */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-3 sm:pb-4 gap-2 sm:gap-0'>
                      <label className='w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0'>
                        LinkedIn.com/
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        value={teacherFormData.linkedin || ''}
                        onChange={handleChange}
                        placeholder="username"
                        className='w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                          outline-none transition-all duration-200
                          bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base'
                      />
                    </div>

                    {/* Instagram */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-3 sm:pb-4 gap-2 sm:gap-0'>
                      <label className='w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0'>
                        Instagram.com/
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        value={teacherFormData.instagram || ''}
                        onChange={handleChange}
                        placeholder="username"
                        className='w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                          outline-none transition-all duration-200
                          bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base'
                      />
                    </div>

                    {/* YouTube */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-3 sm:pb-4 gap-2 sm:gap-0'>
                      <label className='w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0'>
                        Youtube.com/
                      </label>
                      <input
                        type="text"
                        name="youtube"
                        value={teacherFormData.youtube || ''}
                        onChange={handleChange}
                        placeholder="username"
                        className='w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                          outline-none transition-all duration-200
                          bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base'
                      />
                    </div>
                  </div>

                  {/* Helper Text */}
                  <p className='text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4'>
                    Enter only your username, not the full URL. All fields are optional.
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className='mt-4 sm:mt-5 md:mt-6 bg-[#FFF7ED] p-3 sm:p-4 rounded-lg'>
                  <p className='text-xs sm:text-sm text-[#8B4513]'>
                    <span className='font-semibold'>Step 5 of 10:</span> Social Media Presence
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200'>
                  <button
                    type="button"
                    onClick={() => {
                      const userId = localStorage.getItem('userId')
                      navigate(`/teacher/${userId}/personal-details/appearance`)
                    }}
                    className='w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                             rounded-lg font-semibold transition-all duration-300 
                             flex items-center justify-center gap-2 group text-sm sm:text-base
                             hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Previous
                  </button>

                  <button
                    type="submit"
                    className='w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                             flex items-center justify-center gap-2 group text-sm sm:text-base
                             bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200]'
                  >
                    Submit
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
                            index === 0
                              ? 'bg-[#8B4513]'
                              : index < 0
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
                    Step 5 of 10: Social Media
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default TeacherSocial