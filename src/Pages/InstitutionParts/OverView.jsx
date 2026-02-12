import React, { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { UserContext } from '../../Context/InstitutesContext'

const OverView = () => {
  const { formData, handleChange } = useContext(UserContext)

  console.log("This is overview form context api", formData.aboutInstitution)

  return (
    <section className='flex'>
      <Sidebar currentSection="Overview" />

      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>

          {/* Header */}
          <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
            <div>
              <h1 className='text-3xl font-bold text-[#6A3E2E]'>About Institution</h1>
              <p className='text-[#8B4513]/70 mt-1'>
                Share the essence of your institution with us.
              </p>
            </div>
            <Trouble />
          </div>

          {/* Institute Name */}
          <div className='mb-8'>
            <label className='block mb-2 font-semibold text-[#6A3E2E]'>
              Name of Institute
            </label>

            <input
              type="text"
              placeholder="Enter your institution name"
              value={formData.aboutInstitution.instituteName}
              onChange={(e) =>
                handleChange(
                  "aboutInstitution",
                  "instituteName",
                  null,
                  e.target.value
                )
              }
              className='w-full md:w-2/3 lg:w-1/2 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                         focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none'
            />

            <p className='text-xs text-[#8B4513]/60 mt-2'>
              Official name as registered with educational authorities
            </p>
          </div>

          {/* About Institute */}
          <div className='mb-8'>
            <label className='block mb-2 font-semibold text-[#6A3E2E]'>
              About Institute <span className='text-red-500'>*</span>
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about your institution..."
              value={formData.aboutInstitution.aboutInstitute}
              onChange={(e) =>
                handleChange(
                  "aboutInstitution",
                  "aboutInstitute",
                  null,
                  e.target.value
                )
              }
              className='w-full md:w-4/5 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                         focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none resize-none'
            />

            <div className='text-xs text-[#8B4513]/60 mt-2'>
              {formData.aboutInstitution.aboutInstitute.length}/500 characters
            </div>
          </div>

          {/* Buttons */}
          <div className='flex justify-between pt-6 border-t border-[#8B4513]/10'>
            <button className='px-6 py-3 border rounded-lg'>
              Previous
            </button>

            <button className='px-6 py-3 bg-[#8B4513] text-white rounded-lg'>
              Next
            </button>
          </div>

        </div>
      </section>
    </section>
  )
}

export default OverView
