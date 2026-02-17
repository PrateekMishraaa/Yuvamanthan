import React, { useContext } from 'react'
import Sidebar from "../Components/Sidebar/Sidebar.jsx"
import Trouble from '../Components/Trouble/Trouble.jsx'
import { TeacherContext } from '../Context/TeacherContext.jsx'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
  const navigate = useNavigate()
  const { teacherFormData, handleChange } = useContext(TeacherContext)
  console.log("This is for teacher form data from the teacher context", teacherFormData)

  const handleNavigate = () => {
    const userId = localStorage.getItem('userId')
    console.log(`This is teacher ${userId}`)
    if (userId) {
      navigate(`/teacher/${userId}/personal-details/appearance`)
    } else {
      console.error('User ID not found')
      alert('User ID not found. Please try logging in again.')
    }
  }

  return (
    <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      {/* Sidebar */}
      <div className='lg:flex-shrink-0'>
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
        <div className='h-auto w-full max-w-7xl mx-auto'>
          
          {/* Header with Title and Trouble Component */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8'>
            <div className='w-full sm:w-auto'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>
                About You
              </h1>
              <p className='text-sm sm:text-base text-gray-600 mt-1 sm:mt-2'>
                Tell us about yourself to personalize your teaching profile
              </p>
            </div>
            <div className='w-full sm:w-auto sm:min-w-[250px]'>
              <Trouble />
            </div>
          </div>

          {/* Form Container */}
          <div className='w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
            <form className='w-full p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8'>
              
              {/* Form Sections */}
              <div className='space-y-6 sm:space-y-8'>
                
                {/* First Row - First Name and Last Name */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div className='flex flex-col space-y-2'>
                    <label className='text-sm sm:text-base font-medium text-gray-700'>
                      First Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type="text"
                      name='FirstName'
                      value={teacherFormData.FirstName || ''}
                      onChange={handleChange}
                      placeholder='Enter your first name'
                      className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-sm sm:text-base transition-all'
                      required
                    />
                  </div>
                  
                  <div className='flex flex-col space-y-2'>
                    <label className='text-sm sm:text-base font-medium text-gray-700'>
                      Last Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type="text"
                      name='LastName'
                      value={teacherFormData.LastName || ''}
                      onChange={handleChange}
                      placeholder='Enter your last name'
                      className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-sm sm:text-base transition-all'
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Phone Number and Date of Birth */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div className='flex flex-col space-y-2'>
                    <label className='text-sm sm:text-base font-medium text-gray-700'>
                      Phone Number <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base'>
                        +91
                      </span>
                      <input
                        type="tel"
                        name='PhoneNumber'
                        value={teacherFormData.PhoneNumber || ''}
                        onChange={handleChange}
                        placeholder='99********'
                        className='w-full pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-sm sm:text-base transition-all'
                        required
                      />
                    </div>
                  </div>
                  
                  <div className='flex flex-col space-y-2'>
                    <label className='text-sm sm:text-base font-medium text-gray-700'>
                      Date of Birth <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type="date"
                      name='DateOfBirth'
                      value={teacherFormData.DateOfBirth || ''}
                      onChange={handleChange}
                      className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-sm sm:text-base transition-all'
                      required
                    />
                  </div>
                </div>

                {/* Third Row - Gender */}
                <div className='flex flex-col space-y-3'>
                  <label className='text-sm sm:text-base font-medium text-gray-700'>
                    Gender <span className='text-red-500'>*</span>
                  </label>
                  <div className='flex flex-wrap gap-4 sm:gap-6'>
                    {['male', 'female', 'other'].map((gender) => (
                      <label 
                        key={gender} 
                        className='flex items-center space-x-2 sm:space-x-3 cursor-pointer p-2 hover:bg-orange-50 rounded-lg transition-colors'
                      >
                        <input 
                          type="radio" 
                          name="gender" 
                          value={gender}
                          checked={teacherFormData.gender === gender}
                          onChange={handleChange}
                          className='w-4 h-4 sm:w-5 sm:h-5 text-[#8B4513] focus:ring-[#8B4513]'
                        />
                        <span className='text-sm sm:text-base text-gray-700 capitalize'>
                          {gender}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Info - Optional Field */}
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm sm:text-base font-medium text-gray-700'>
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name='additionalInfo'
                    value={teacherFormData.additionalInfo || ''}
                    onChange={handleChange}
                    placeholder='Tell us more about yourself...'
                    rows={3}
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent text-sm sm:text-base transition-all resize-none'
                  />
                </div>
              </div>

              {/* Form Progress Indicator */}
              <div className='bg-[#FFF7ED] p-3 sm:p-4 rounded-lg'>
                <div className='flex items-center justify-between text-xs sm:text-sm text-[#8B4513] mb-2'>
                  <span className='font-semibold'>Profile Completion</span>
                  <span>25%</span>
                </div>
                <div className='w-full h-2 bg-[#FFEDD5] rounded-full overflow-hidden'>
                  <div 
                    className='h-full bg-gradient-to-r from-[#8B4513] to-[#FF8C00] rounded-full transition-all duration-500'
                    style={{ width: '25%' }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200'>
                <button 
                  type="button"
                  onClick={() => window.history.back()}
                  className='w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] font-semibold rounded-lg hover:bg-[#8B4513] hover:text-white transition-all duration-300 text-sm sm:text-base'
                >
                  ← Back
                </button>
                
                <button 
                  type="button"
                  onClick={handleNavigate}
                  className='w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base'
                >
                  Save & Continue →
                </button>
              </div>

              {/* Helper Text */}
              <p className='text-xs sm:text-sm text-gray-500 text-center'>
                Fields marked with <span className='text-red-500'>*</span> are required
              </p>

            </form>
          </div>

          {/* Tips Section */}
          <div className='mt-4 sm:mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4'>
            <h4 className='text-xs sm:text-sm font-semibold text-blue-800 mb-2'>
              📝 Tips for completing your profile:
            </h4>
            <ul className='text-xs sm:text-sm text-blue-700 space-y-1 list-disc list-inside'>
              <li>Use your legal name as it appears on official documents</li>
              <li>Provide a valid phone number for verification purposes</li>
              <li>Your date of birth helps us personalize your experience</li>
            </ul>
          </div>

        </div>
      </section>
    </section>
  )
}

export default Teacher