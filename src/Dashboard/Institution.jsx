import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { LuNotebookText } from "react-icons/lu"
import Trouble from '../Components/Trouble/Trouble.jsx'
import { UserContext } from '../Context/InstitutesContext.jsx'

const Institution = () => {

  const { formData, handleChange } = useContext(UserContext)

  console.log("this is user context data", formData)

  const navigate = useNavigate()
  const { section } = useParams()

  const userData = localStorage.getItem('userData')
  const user = userData ? JSON.parse(userData) : null

  console.log("this is institute user", user?.email)

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

  const currentSectionIndex = sectionOrder.indexOf(section || "Institution")

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1

    if (nextIndex < sectionOrder.length) {

      localStorage.setItem('instituteFormData', JSON.stringify(formData))

      navigate(
        `/institution/${sectionOrder[nextIndex]
          .toLowerCase()
          .replace(/\s+/g, '-')}`
      )
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1

    if (prevIndex >= 0) {
      navigate(
        `/institution/${sectionOrder[prevIndex]
          .toLowerCase()
          .replace(/\s+/g, '-')}`
      )
    }
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
                {section
                  ? section.split('-').map(word =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')
                  : 'Institute Details'}
              </h1>

              <p className='text-[#8B4513]/70 mt-1'>
                Provide information about the nature of your institution and the medium of education.
              </p>
            </div>

            <Trouble />
          </div>

          <div className='w-full px-4'>

            {/* Institution Section */}
            {(!section || section === 'institution') ? (
              <>

                {/* Institute Type */}
                <div className='mb-8'>
                  <p className='font-semibold text-[#6A3E2E] mb-2'>
                    Type of Institute
                  </p>

                  <select
                    value={formData.institutionDetails.instituteType}
                    onChange={(e) =>
                      handleChange(
                        "institutionDetails",
                        "instituteType",
                        null,
                        e.target.value
                      )
                    }
                    className='py-3 w-72 border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30'
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
                    value={formData.institutionDetails.universityType}
                    onChange={(e) =>
                      handleChange(
                        "institutionDetails",
                        "universityType",
                        null,
                        e.target.value
                      )
                    }
                    className='py-3 w-full border border-[#8B4513]/30 rounded-lg px-3 bg-[#FFF7ED]/30'
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
                    Medium of Education
                  </p>

                  <div className='flex gap-6'>

                    <label className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        checked={formData.institutionDetails.educationMedium.hindi}
                        onChange={(e) =>
                          handleChange(
                            "institutionDetails",
                            "educationMedium",
                            "hindi",
                            e.target.checked
                          )
                        }
                      />
                      Hindi
                    </label>

                    <label className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        checked={formData.institutionDetails.educationMedium.english}
                        onChange={(e) =>
                          handleChange(
                            "institutionDetails",
                            "educationMedium",
                            "english",
                            e.target.checked
                          )
                        }
                      />
                      English
                    </label>

                  </div>
                </div>

              </>
            ) : (

              /* Other Sections */
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

            {/* Navigation Buttons */}
            <div className='flex justify-between gap-4'>
              <button
                onClick={handlePrevious}
                disabled={currentSectionIndex === 0}
                className='px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-lg font-semibold'
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={currentSectionIndex === sectionOrder.length - 1}
                className='px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg font-semibold'
              >
                Next
              </button>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default Institution
