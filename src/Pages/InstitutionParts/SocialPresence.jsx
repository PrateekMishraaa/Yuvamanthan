import React, { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/InstitutesContext'

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

  return (
    <div className='flex min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      <Sidebar />
      
      <main className='flex-1 p-8'>
        <div className='max-w-3xl mx-auto'>
          
          {/* Header Section */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-800'>Social Media</h1>
            <p className='text-gray-600 mt-2'>
              Expand your network and showcase achievements through integrated social media connections
            </p>
          </div>

          {/* Main Content Card */}
          <div className='bg-white rounded-xl shadow-sm p-8'>
            <form onSubmit={handleSubmit}>
              
              {/* Social Media Accounts Section */}
              <div className='mb-8'>
                <h2 className='text-xl font-semibold text-gray-800 mb-6'>
                  Add your Social Media Accounts <span className='text-gray-500 font-normal'>(Optional)</span>
                </h2>
                
                <div className='space-y-5'>
                  {/* Facebook */}
                  <div className='flex items-center border-b border-gray-100 pb-2'>
                    <label className='w-32 text-gray-700 font-medium'>Facebook.com/</label>
                    <input
                      type="text"
                      name="faceBook" // Note: matches context field name
                      value={socialValues.faceBook || ''}
                      onChange={handleSocialChange}
                      placeholder="username"
                      className='flex-1 px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400'
                    />
                  </div>

                  {/* Twitter */}
                  <div className='flex items-center border-b border-gray-100 pb-2'>
                    <label className='w-32 text-gray-700 font-medium'>Twitter.com/</label>
                    <input
                      type="text"
                      name="twitter"
                      value={socialValues.twitter || ''}
                      onChange={handleSocialChange}
                      placeholder="username"
                      className='flex-1 px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400'
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className='flex items-center border-b border-gray-100 pb-2'>
                    <label className='w-32 text-gray-700 font-medium'>LinkedIn.com/</label>
                    <input
                      type="text"
                      name="linkedIn" // Note: matches context field name (capital I)
                      value={socialValues.linkedIn || ''}
                      onChange={handleSocialChange}
                      placeholder="username"
                      className='flex-1 px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400'
                    />
                  </div>

                  {/* Instagram */}
                  <div className='flex items-center border-b border-gray-100 pb-2'>
                    <label className='w-32 text-gray-700 font-medium'>Instagram.com/</label>
                    <input
                      type="text"
                      name="instagram"
                      value={socialValues.instagram || ''}
                      onChange={handleSocialChange}
                      placeholder="username"
                      className='flex-1 px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400'
                    />
                  </div>

                  {/* YouTube */}
                  <div className='flex items-center border-b border-gray-100 pb-2'>
                    <label className='w-32 text-gray-700 font-medium'>Youtube.com/</label>
                    <input
                      type="text"
                      name="youtube"
                      value={socialValues.youtube || ''}
                      onChange={handleSocialChange}
                      placeholder="username"
                      className='flex-1 px-3 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400'
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className='flex justify-between items-center pt-6'>
                <button
                  type="button"
                  onClick={() => navigate('/institution/appearance')}
                  className='px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg 
                    hover:bg-gray-50 transition-colors duration-200 font-medium'
                >
                  Previous
                </button>
                
                <button
                  type="submit"
                  className='px-6 py-2.5 bg-[#8b4513] text-white rounded-lg 
                    hover:bg-orange-600 transition-colors duration-200 font-medium
                    focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                >
                  Next Step →
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SocialPresence