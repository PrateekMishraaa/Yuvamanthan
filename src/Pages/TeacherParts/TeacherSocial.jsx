import React, { useContext, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { TeacherContext } from '../../Context/TeacherContext'
const TeacherSocial = () => {
  const navigate = useNavigate()
    const {teacherFormData,handleChange} = useContext(TeacherContext)
  return (
    <>
      <section className='flex min-h-screen bg-gray-50'>
        <Sidebar />
        
        <section className='flex-1 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-6'>
          <div className='max-w-3xl mx-auto'>
            
            {/* Header Section */}
            <div className='mb-8'>
              <h1 className='text-3xl font-bold text-gray-800'>Social Media</h1>
              <p className='text-gray-600 mt-2'>
                Expand your network and showcase achievements through integrated social media connections.
              </p>
            </div>

            {/* Main Content Card */}
            <div className='bg-white rounded-xl shadow-sm p-8'>
              <form onSubmit={''}>
                
                {/* Social Media Accounts Section */}
                <div className='mb-8'>
                  <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                    Add your Social Media Accounts <span className='text-gray-500 font-normal'>(Optional)</span>
                  </h2>
                  
                  <div className='space-y-4'>
                    {/* Facebook */}
                    <div className='flex items-center'>
                      <label className='w-32 text-gray-700 font-medium'>Facebook.com/</label>
                      <input
                        type="text"
                        name="facebook"
                        value={teacherFormData.facebook}
                        onChange={handleChange}
                        placeholder="username"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          outline-none transition-all duration-200
                          bg-gray-50 focus:bg-white'
                      />
                    </div>

                    {/* Twitter */}
                    <div className='flex items-center'>
                      <label className='w-32 text-gray-700 font-medium'>Twitter.com/</label>
                      <input
                        type="text"
                        name="twitter"
                        value={teacherFormData.twitter}
                        onChange={handleChange}
                        placeholder="username"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          outline-none transition-all duration-200
                          bg-gray-50 focus:bg-white'
                      />
                    </div>

                    {/* LinkedIn */}
                    <div className='flex items-center'>
                      <label className='w-32 text-gray-700 font-medium'>LinkedIn.com/</label>
                      <input
                        type="text"
                        name="linkedin"
                        value={teacherFormData.linkedin}
                        onChange={handleChange}
                        placeholder="username"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          outline-none transition-all duration-200
                          bg-gray-50 focus:bg-white'
                      />
                    </div>

                    {/* Instagram */}
                    <div className='flex items-center'>
                      <label className='w-32 text-gray-700 font-medium'>Instagram.com/</label>
                      <input
                        type="text"
                        name="instagram"
                        value={teacherFormData.instagram}
                        onChange={handleChange}
                        placeholder="username"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          outline-none transition-all duration-200
                          bg-gray-50 focus:bg-white'
                      />
                    </div>

                    {/* YouTube */}
                    <div className='flex items-center'>
                      <label className='w-32 text-gray-700 font-medium'>Youtube.com/</label>
                      <input
                        type="text"
                        name="youtube"
                        value={teacherFormData.youtube}
                        onChange={handleChange}
                        placeholder="username"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          outline-none transition-all duration-200
                          bg-gray-50 focus:bg-white'
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className='flex justify-between items-center pt-4 border-t border-gray-200'>
                  <button
                    type="button"
                    // onClick={() => navigate('/teacher/appearance')}
                    className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg 
                      hover:bg-gray-50 transition-colors duration-200 font-medium'
                  >
                    Previous
                  </button>
                  
                  <button
                    type="submit"
                    className='px-6 py-2 bg-orange-500 text-white rounded-lg 
                      hover:bg-orange-600 transition-colors duration-200 font-medium
                      focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  >
                    Next Step →
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default TeacherSocial