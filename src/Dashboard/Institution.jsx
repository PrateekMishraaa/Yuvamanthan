import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { LuNotebookText } from "react-icons/lu"
import Trouble from '../Components/Trouble/Trouble.jsx'
import { UserContext } from '../Context/InstitutesContext.jsx'

const Institution = () => {
  const { id, section } = useParams()
  console.log("User ID from params:", id)
  console.log("Section from params:", section)
  
  const { formData, setFormData, handleChange } = useContext(UserContext)
  const navigate = useNavigate()

  const institutes = ["Schools", "College", "University", "Coaching Institutes"]
  const universityTypes = [
    "State University",
    "Central University",
    "Deemed University",
    "Private University",
    "Open University"
  ]

  const sectionOrder = [
    "Institution",
    "Overview",
    "Registered Address",
    "Appearance",
    "Social Presence",
    "About You",
    "Documents"
  ]

  // Convert display names to URL paths
  const sectionToPath = {
    "Institution": "institution",
    "Overview": "overview",
    "Registered Address": "registered-address",
    "Appearance": "appearance",
    "Social Presence": "social-presence",
    "About You": "about-you",
    "Documents": "documents"
  }

  // Convert URL paths to display names
  const pathToSection = {
    "institution": "Institution",
    "overview": "Overview",
    "registered-address": "Registered Address",
    "appearance": "Appearance",
    "social-presence": "Social Presence",
    "about-you": "About You",
    "documents": "Documents"
  }

  // Get current section display name
  const getCurrentSectionDisplayName = () => {
    if (!section) return "Institution"
    return pathToSection[section] || "Institution"
  }

  const currentSectionDisplayName = getCurrentSectionDisplayName()
  const currentSectionIndex = sectionOrder.indexOf(currentSectionDisplayName)

  // Fetch user data based on ID
  useEffect(() => {
    if (id) {
      console.log("Loading data for user:", id)
      // You can fetch user/institution data based on ID here
      // Example: fetchUserData(id);
      
      // Load saved form data from localStorage if available
      const savedData = localStorage.getItem(`instituteFormData_${id}`)
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setFormData(parsedData)
        } catch (error) {
          console.error("Error parsing saved data:", error)
        }
      }
    }
  }, [id, setFormData])

  // Redirect to institution page if no section is provided
  useEffect(() => {
    if (!section && id) {
      navigate(`/institution/${id}/institution`, { replace: true })
    }
  }, [section, id, navigate])

  // Initialize instituteDetails array if it doesn't exist
  useEffect(() => {
    if (!formData.instituteDetails || formData.instituteDetails.length === 0) {
      setFormData(prev => ({
        ...prev,
        instituteDetails: [{
          typeOfInstitute: "",
          typeOfUniversity: "",
          educationMedium: ""
        }]
      }))
    }
  }, [formData.instituteDetails, setFormData])

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      // Save data with user-specific key
      localStorage.setItem(`instituteFormData_${id}`, JSON.stringify(formData))
      
      const nextSectionDisplayName = sectionOrder[nextIndex]
      const nextPath = sectionToPath[nextSectionDisplayName]
      navigate(`/institution/${id}/${nextPath}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      const prevSectionDisplayName = sectionOrder[prevIndex]
      const prevPath = sectionToPath[prevSectionDisplayName]
      navigate(`/institution/${id}/${prevPath}`)
    }
  }

  // Handle checkbox changes for education medium (single select)
  const handleEducationMediumChange = (medium) => {
    const syntheticEvent = {
      target: {
        name: 'instituteDetails.0.educationMedium',
        value: medium,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }

  // Handle select/input changes for array fields
  const handleArrayFieldChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'typeOfInstitute' || name === 'typeOfUniversity' || name === 'educationMedium') {
      const syntheticEvent = {
        target: {
          name: `instituteDetails.0.${name}`,
          value: value,
          type: 'text'
        }
      }
      handleChange(syntheticEvent)
    } else {
      handleChange(e)
    }
  }

  // Format section name for display
  const formatSectionName = (sectionName) => {
    if (!sectionName) return 'Institute Details'
    return sectionName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Get section description
  const getSectionDescription = () => {
    if (!section || section === 'institution') {
      return 'Provide information about the nature of your institution and the medium of education.'
    }
    
    const descriptions = {
      'overview': 'Overview and summary information about your institution.',
      'registered-address': 'Please provide your complete institutional address details.',
      'appearance': 'Customize how your institution profile looks and appears to others.',
      'social-presence': 'Add your social media profiles and online presence links.',
      'about-you': 'Tell us more about yourself and your role in the institution.',
      'documents': 'Upload required institutional documents for verification.'
    }
    
    return descriptions[section] || `Manage your ${formatSectionName(section)} settings here.`
  }

  return (
    <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className='lg:flex-shrink-0'>
        <Sidebar currentSection={section || 'institution'} userId={id} />
      </div>

      {/* Main Content Area */}
      <section className='flex-1 w-full p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden'>
        <div className='h-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
          
          {/* Header Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[#8B4513]/10 p-4 sm:p-6 md:p-8'>
            <div className='w-full sm:w-auto'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E] break-words'>
                {formatSectionName(section || 'institution')}
              </h1>
              <p className='text-sm sm:text-base text-[#8B4513]/70 mt-1 max-w-2xl'>
                {getSectionDescription()}
              </p>
              {id && (
                <p className='text-xs sm:text-sm text-[#8B4513]/50 mt-2 break-all'>
                  <span className='font-semibold'>User ID:</span> {id}
                </p>
              )}
            </div>
            <div className='w-full sm:w-auto sm:flex-shrink-0'>
              <Trouble />
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className='w-full p-4 sm:p-6 md:p-8'>

              {/* Institution Section */}
              {(!section || section === 'institution') ? (
                <div className='space-y-6 sm:space-y-8'>

                  {/* Institute Type */}
                  <div className='space-y-3'>
                    <p className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>
                      Type of Institute <span className='text-red-500'>*</span>
                    </p>
                    <select
                      name="typeOfInstitute"
                      value={formData?.instituteDetails?.[0]?.typeOfInstitute || ''}
                      onChange={handleArrayFieldChange}
                      className='w-full sm:w-96 py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] text-sm sm:text-base'
                      required
                    >
                      <option value="" disabled>Select an institute type</option>
                      {institutes.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    {/* Info Box */}
                    <div className='w-full max-w-2xl rounded-xl flex flex-col sm:flex-row gap-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] p-4 sm:p-5 mt-4'>
                      <LuNotebookText className='text-xl sm:text-2xl text-[#FFA500] flex-shrink-0' />
                      <p className='text-white text-xs sm:text-sm leading-relaxed'>
                        Only for University recognised by statutory higher educational body
                      </p>
                    </div>
                  </div>

                  {/* University Type */}
                  <div className='space-y-3'>
                    <p className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>
                      Type of University
                    </p>
                    <select
                      name="typeOfUniversity"
                      value={formData?.instituteDetails?.[0]?.typeOfUniversity || ''}
                      onChange={handleArrayFieldChange}
                      className='w-full sm:w-96 py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] text-sm sm:text-base'
                    >
                      <option value="" disabled>Select university type</option>
                      {universityTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Education Medium */}
                  <div className='space-y-3'>
                    <p className='font-semibold text-[#6A3E2E] text-sm sm:text-base'>
                      Medium of Education <span className='text-red-500'>*</span>
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                      <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-[#FFF7ED] rounded-lg transition-colors">
                        <input
                          type="radio"
                          name="educationMedium"
                          checked={formData?.instituteDetails?.[0]?.educationMedium === 'Hindi'}
                          onChange={() => handleEducationMediumChange('Hindi')}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-[#8B4513]"
                        />
                        <span className='text-sm sm:text-base text-[#6A3E2E]'>Hindi</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-[#FFF7ED] rounded-lg transition-colors">
                        <input
                          type="radio"
                          name="educationMedium"
                          checked={formData?.instituteDetails?.[0]?.educationMedium === 'English'}
                          onChange={() => handleEducationMediumChange('English')}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-[#8B4513]"
                        />
                        <span className='text-sm sm:text-base text-[#6A3E2E]'>English</span>
                      </label>
                    </div>
                    <p className='text-xs sm:text-sm text-[#8B4513]/60 mt-2'>
                      Select the primary medium of instruction
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className='bg-[#FFF7ED] p-4 sm:p-5 rounded-lg mt-6'>
                    <p className='text-sm sm:text-base text-[#8B4513]'>
                      <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> Complete the institution details to proceed to overview.
                    </p>
                  </div>

                </div>
              ) : (
                /* Other Sections - Placeholder Content */
                <div className='space-y-6'>
                  <div className='bg-[#FFF7ED]/30 p-6 sm:p-8 md:p-10 rounded-lg border border-[#8B4513]/20 text-center'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-4'>
                      {formatSectionName(section)}
                    </h2>
                    
                    <div className='py-6 sm:py-8 md:py-10'>
                      <div className='text-4xl sm:text-5xl md:text-6xl mb-4'>🚧</div>
                      <p className='text-base sm:text-lg md:text-xl text-[#8B4513]/70 mb-2'>
                        This section is under construction
                      </p>
                      <p className='text-sm sm:text-base text-[#8B4513]/60 max-w-md mx-auto'>
                        {getSectionDescription()}
                      </p>
                    </div>
                    
                    <div className='mt-6 bg-white p-4 sm:p-5 rounded-lg'>
                      <p className='text-sm sm:text-base text-[#8B4513]'>
                        <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> {currentSectionDisplayName}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 border-t border-[#8B4513]/10'>
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentSectionIndex <= 0}
                  className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    currentSectionIndex <= 0
                      ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-500'
                      : 'text-[#8B4513] hover:bg-[#8B4513] hover:text-white hover:shadow-md'
                  }`}
                >
                  ← Previous
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentSectionIndex === sectionOrder.length - 1}
                  className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    currentSectionIndex === sectionOrder.length - 1
                      ? 'opacity-50 cursor-not-allowed bg-gray-400 text-white'
                      : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg transform hover:scale-105 hover:from-[#6A3E2E] hover:to-[#FFA500]'
                  }`}
                >
                  {currentSectionIndex === sectionOrder.length - 1 ? 'Completed ✓' : 'Next →'}
                </button>
              </div>

              {/* Section Steps Indicator */}
              <div className='mt-6 sm:mt-8 flex justify-center overflow-x-auto px-2 py-2'>
                <div className='flex gap-1 sm:gap-2 min-w-max'>
                  {sectionOrder.map((item, index) => (
                    <div
                      key={index}
                      className={`group relative flex flex-col items-center`}
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
                      <span className='absolute -bottom-5 text-[10px] sm:text-xs text-[#8B4513]/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Step Indicator */}
              <div className='sm:hidden text-center mt-4'>
                <p className='text-xs text-[#8B4513]/60'>
                  Step {currentSectionIndex + 1} of {sectionOrder.length}
                </p>
              </div>

            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Institution