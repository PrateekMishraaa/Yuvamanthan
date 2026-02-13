import React, { useContext } from 'react'
import Sidebar from "../Components/Sidebar/Sidebar.jsx"
import Trouble from '../Components/Trouble/Trouble.jsx'
import { TeacherContext } from '../Context/TeacherContext.jsx'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
  const navigate = useNavigate()
  const { teacherFormData, handleChange } = useContext(TeacherContext)
  console.log("This is for teacher form data from the teacher context", teacherFormData)

  return (
    <section className='flex'>
      <Sidebar />
      
      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full rounded-2xl p-6'>
          
          <div className='flex justify-between items-start mb-8'>
            <section className='h-auto w-full'>
              <p className='text-3xl font-semibold text-gray-800'>About You</p>
              <p className='text-gray-600 mt-2'>Some detail about you</p>
            </section>
            <Trouble />
          </div>

          <form className='w-full bg-white rounded-2xl shadow-lg p-8'>
            {/* First Row - First Name and Last Name */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700 mb-2'>First Name</label>
                <input
                  type="text"
                  name='FirstName'
                  value={teacherFormData.FirstName || ''}
                  onChange={handleChange}
                  placeholder='First Name'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                />
              </div>
              
              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                <input
                  type="text"
                  name='LastName'
                  value={teacherFormData.LastName || ''}
                  onChange={handleChange}
                  placeholder='Last Name'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                />
              </div>
            </div>

            {/* Second Row - Phone Number and Date of Birth */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input
                  type="tel"
                  name='PhoneNumber'
                  value={teacherFormData.PhoneNumber || ''}
                  onChange={handleChange}
                  placeholder='+91 99******99'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                />
              </div>
              
              <div className='flex flex-col'>
                <label className='text-sm font-medium text-gray-700 mb-2'>Date of Birth</label>
                <input
                  type="date"
                  name='DateOfBirth'
                  value={teacherFormData.DateOfBirth || ''}
                  onChange={handleChange}
                  placeholder='mm/dd/yyyy'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                />
              </div>
            </div>

            {/* Third Row - Gender */}
            <div className='flex flex-col mb-6'>
              <label className='text-sm font-medium text-gray-700 mb-2'>Gender</label>
              <div className='flex items-center space-x-6'>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={teacherFormData.gender === 'male'}
                    onChange={handleChange}
                    className='w-4 h-4 text-orange-500 focus:ring-orange-500'
                  />
                  <span className='text-gray-700'>Male</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={teacherFormData.gender === 'female'}
                    onChange={handleChange}
                    className='w-4 h-4 text-orange-500 focus:ring-orange-500'
                  />
                  <span className='text-gray-700'>Female</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="other"
                    checked={teacherFormData.gender === 'other'}
                    onChange={handleChange}
                    className='w-4 h-4 text-orange-500 focus:ring-orange-500'
                  />
                  <span className='text-gray-700'>Other</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex justify-end'>
              <button 
                type="button"
                onClick={() => navigate('/teacher/personal-details/appearance')}
                className='px-6 py-3 bg-[#6A3E2E] cursor-pointer text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Teacher