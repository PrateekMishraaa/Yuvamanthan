import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { LuNotebookText } from "react-icons/lu";

const Institution = () => {
  const navigate = useNavigate()
  const { section } = useParams()
  
  const userData = localStorage.getItem('userData')
  const user = userData ? JSON.parse(userData) : null
  console.log("this is institute user", user?.email)

  // Color theme from YuuthCommunity
  const COLORS = {
    primary: {
      dark: "#6A3E2E",
      medium: "#8B4513",
      light: "#E07B00"
    },
    secondary: {
      dark: "#C46200",
      medium: "#FF8C00",
      light: "#FFA500"
    },
    background: {
      light: "#FFF7ED",
      lighter: "#FFEDD5",
      white: "#FFFFFF"
    }
  };

  const institutes = ["Schools", "College", "University", "Coaching Institutes"]
  const universityTypes = ["State University", "Central University", "Deemed University", "Private University", "Open University"]
  const mediumOptions = ["English", "Hindi", "Regional Language", "Bilingual", "Other"]
  
  const [formData, setFormData] = useState({
    instituteType: "",
    universityType: "",
    mediumOfEducation: ""
  })

  // Map sections to their corresponding indexes in sidebar
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
  const currentSectionIndex = sectionOrder.indexOf(section || "Institution")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      // Store form data in localStorage
      localStorage.setItem('instituteFormData', JSON.stringify(formData))
      
      // Navigate to next section
      navigate(`/institution/${sectionOrder[nextIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('instituteFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  return (
    <>
      <section className='flex'>
        <Sidebar currentSection={section || 'institution'} />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>
                  {section ? section.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ') : 'Institute Details'}
                </h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Provide information about the nature of your institution and the medium of education.
                </p>
              </div>
              <div className='bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] p-4 rounded-xl border border-[#8B4513]/20'>
                <p className='font-semibold text-sm text-[#6A3E2E]'>
                  Having Trouble? 
                  <span className='text-[#FF8C00] ml-1 cursor-pointer hover:text-[#FFA500] transition-colors'>
                    Get Help
                  </span>
                </p>
                <p className='text-[#8B4513]/60 font-lighter text-sm mt-1'>{user?.email}</p>
              </div>
            </div>

            <div className='w-full px-4'>
              {/* Only show Institution content when on institution section */}
              {(!section || section === 'institution') ? (
                <>
                  {/* Type of Institute */}
                  <div className='mb-8'>
                    <p className='font-semibold text-[#6A3E2E] mb-2'>Type of Institute</p>
                    <select 
                      name="instituteType"
                      value={formData.instituteType}
                      onChange={handleChange}
                      className='py-3 w-72 border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none transition-all'
                    >
                      <option value="" disabled>Select an institute type</option>
                      {institutes.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                    
                    {/* University Recognition Note */}
                    <div className='w-full rounded-xl flex gap-3 bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] p-4 mt-4 max-w-2xl'>
                      <LuNotebookText className='text-xl text-[#FFA500] flex-shrink-0 mt-1' />
                      <p className='text-white text-sm'>
                        Only for University recognised by statutory higher educational body
                      </p>
                    </div>
                  </div>

                  {/* Type of University and Medium of Education */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                    <div>
                      <p className='font-semibold text-[#6A3E2E] mb-2'>Type of University</p>
                      <select 
                        name="universityType"
                        value={formData.universityType}
                        onChange={handleChange}
                        className='py-3 w-full border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none transition-all'
                      >
                        <option value="" disabled>Select university type</option>
                        {universityTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <p className='font-semibold text-[#6A3E2E] mb-2'>Medium of Education</p>
                      <select 
                        name="mediumOfEducation"
                        value={formData.mediumOfEducation}
                        onChange={handleChange}
                        className='py-3 w-full border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30 focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none transition-all'
                      >
                        <option value="" disabled>Select medium of education</option>
                        {mediumOptions.map((medium, index) => (
                          <option key={index} value={medium}>{medium}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                /* Show other section content */
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold text-[#6A3E2E] mb-4'>
                    {section.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </h2>
                  <p className='text-[#8B4513]/70'>
                    {section === 'overview' && 'Overview content will appear here.'}
                    {section === 'registered-address' && 'Registered address details will appear here.'}
                    {section === 'appearance' && 'Appearance settings will appear here.'}
                    {section === 'social-presence' && 'Social media links will appear here.'}
                    {section === 'about-you' && 'About you information will appear here.'}
                    {section === 'documents' && 'Documents upload section will appear here.'}
                  </p>
                </div>
              )}

              {/* Previous and Next Buttons */}
              <div className='flex justify-between gap-4'>
                <button 
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-lg font-semibold 
                    ${currentSectionIndex === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'cursor-pointer hover:bg-[#FFF7ED] transition-all duration-300 hover:border-[#FF8C00] hover:text-[#FF8C00]'
                    }`}
                >
                  Previous
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentSectionIndex === sectionOrder.length - 1}
                  className={`px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg font-semibold
                    ${currentSectionIndex === sectionOrder.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'cursor-pointer hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300'
                    }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Institution