import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { LuNotebookText } from "react-icons/lu"
import Trouble from '../Components/Trouble/Trouble.jsx'
import { UserContext } from '../Context/InstitutesContext.jsx'

const Institution = () => {
  const { formData, setFormData, handleChange } = useContext(UserContext)
  const navigate = useNavigate()
  const { section } = useParams()

  // console.log("this is user context data", formData)

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

  // Redirect to institution page if no section is provided
  useEffect(() => {
    if (!section) {
      navigate('/institution/institution', { replace: true })
    }
  }, [section, navigate])

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
  }, [])

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      localStorage.setItem('instituteFormData', JSON.stringify(formData))
      const nextSectionDisplayName = sectionOrder[nextIndex]
      const nextPath = sectionToPath[nextSectionDisplayName]
      navigate(`/institution/${nextPath}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      const prevSectionDisplayName = sectionOrder[prevIndex]
      const prevPath = sectionToPath[prevSectionDisplayName]
      navigate(`/institution/${prevPath}`)
    }
  }

  // Handle checkbox changes for education medium
  const handleEducationMediumChange = (medium, isChecked) => {
    // Create a synthetic event object that matches what handleChange expects
    const syntheticEvent = {
      target: {
        name: 'instituteDetails.educationMedium',
        value: isChecked ? medium : '',
        type: 'checkbox',
        checked: isChecked
      }
    }
    handleChange(syntheticEvent)
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
    <section className='flex'>
      <Sidebar currentSection={section || 'institution'} />

      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>

          {/* Header */}
          <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
            <div>
              <h1 className='text-3xl font-bold text-[#6A3E2E]'>
                {formatSectionName(section || 'institution')}
              </h1>
              <p className='text-[#8B4513]/70 mt-1'>
                {getSectionDescription()}
              </p>
            </div>
            <Trouble />
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className='w-full px-4'>

              {/* Institution Section */}
              {(!section || section === 'institution') ? (
                <>

                  {/* Institute Type */}
                  <div className='mb-8'>
                    <p className='font-semibold text-[#6A3E2E] mb-2'>
                      Type of Institute <span className='text-red-500'>*</span>
                    </p>
                    <select
                      name="instituteDetails.typeOfInstitute"
                      value={formData?.instituteDetails?.[0]?.typeOfInstitute || ''}
                      onChange={handleChange}
                      className='py-3 w-72 border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30 focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]'
                      required
                    >
                      <option value="" disabled>Select an institute type</option>
                      {institutes.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <div className='w-full rounded-xl flex gap-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] p-4 mt-4 max-w-2xl'>
                      <LuNotebookText className='text-xl text-[#FFA500] flex-shrink-0 mt-1' />
                      <p className='text-white text-sm'>
                        Only for University recognised by statutory higher educational body
                      </p>
                    </div>
                  </div>

                  {/* University Type */}
                  <div className='mb-8'>
                    <p className='font-semibold text-[#6A3E2E] mb-2'>
                      Type of University
                    </p>
                    <select
                      name="instituteDetails.typeOfUniversity"
                      value={formData?.instituteDetails?.[0]?.typeOfUniversity || ''}
                      onChange={handleChange}
                      className='py-3 w-full md:w-96 border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30 focus:outline-none focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]'
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
                  <div className='mb-8'>
                    <p className='font-semibold text-[#6A3E2E] mb-2'>
                      Medium of Education <span className='text-red-500'>*</span>
                    </p>
                    <div className='flex gap-6'>
                      <label className="flex gap-2 items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="instituteDetails.educationMedium"
                          checked={formData?.instituteDetails?.[0]?.educationMedium === 'hindi' || 
                                  formData?.instituteDetails?.[0]?.educationMedium === 'Hindi'}
                          onChange={(e) => {
                            const syntheticEvent = {
                              target: {
                                name: 'instituteDetails.educationMedium',
                                value: e.target.checked ? 'Hindi' : '',
                                type: 'checkbox',
                                checked: e.target.checked
                              }
                            }
                            handleChange(syntheticEvent)
                          }}
                          className="w-4 h-4 accent-[#8B4513] rounded"
                        />
                        <span className='text-[#6A3E2E]'>Hindi</span>
                      </label>

                      <label className="flex gap-2 items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="instituteDetails.educationMedium"
                          checked={formData?.instituteDetails?.[0]?.educationMedium === 'english' || 
                                  formData?.instituteDetails?.[0]?.educationMedium === 'English'}
                          onChange={(e) => {
                            const syntheticEvent = {
                              target: {
                                name: 'instituteDetails.educationMedium',
                                value: e.target.checked ? 'English' : '',
                                type: 'checkbox',
                                checked: e.target.checked
                              }
                            }
                            handleChange(syntheticEvent)
                          }}
                          className="w-4 h-4 accent-[#8B4513] rounded"
                        />
                        <span className='text-[#6A3E2E]'>English</span>
                      </label>
                    </div>
                    <p className='text-xs text-[#8B4513]/60 mt-2'>
                      Select the primary medium of instruction
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className='mb-8 bg-[#FFF7ED] p-4 rounded-lg'>
                    <p className='text-sm text-[#8B4513]'>
                      <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> Complete the institution details to proceed to overview.
                    </p>
                  </div>

                </>
              ) : (
                /* Other Sections - Placeholder Content */
                <div className='mb-8'>
                  <div className='bg-[#FFF7ED]/30 p-8 rounded-lg border border-[#8B4513]/20 text-center'>
                    <h2 className='text-2xl font-bold text-[#6A3E2E] mb-4'>
                      {formatSectionName(section)}
                    </h2>
                    <div className='py-8'>
                      <p className='text-[#8B4513]/70 text-lg mb-2'>
                        🚧 This section is under construction
                      </p>
                      <p className='text-[#8B4513]/60'>
                        {getSectionDescription()}
                      </p>
                    </div>
                    <div className='mt-6 bg-white p-4 rounded-lg'>
                      <p className='text-sm text-[#8B4513]'>
                        <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> {currentSectionDisplayName}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className='flex justify-between gap-4 mt-8 pt-6 border-t border-[#8B4513]/10'>
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentSectionIndex <= 0}
                  className={`px-8 py-3 border-2 border-[#8B4513] rounded-lg font-semibold transition-all duration-300 ${
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
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentSectionIndex === sectionOrder.length - 1
                      ? 'opacity-50 cursor-not-allowed bg-gray-400 text-white'
                      : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg transform hover:scale-105 hover:from-[#6A3E2E] hover:to-[#FFA500]'
                  }`}
                >
                  {currentSectionIndex === sectionOrder.length - 1 ? 'Completed ✓' : 'Next →'}
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
          </form>
        </div>
      </section>
    </section>
  )
}

export default Institution