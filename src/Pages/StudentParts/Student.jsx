import React from 'react'

const Student = () => {
  return (
    <>
      <section className='py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8'>
        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          
          {/* Header Section */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Institution
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              Provide information about the nature of your institution and the medium of education.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 break-all">
              User ID: dashboard699294bfe3cde93137951120
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Form Section */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Type of Institute */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Type of Institute <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent bg-white text-sm sm:text-base transition-all duration-200"
                defaultValue=""
              >
                <option value="" disabled>Select an institute type</option>
                <option value="university">University</option>
                <option value="college">College</option>
                <option value="school">School</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Info Text */}
            <div className="text-xs sm:text-sm text-gray-500 italic bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100">
              <span className="block sm:inline">Only for University recognised by statutory higher educational body</span>
            </div>

            {/* Type of University */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Type of University
              </label>
              <select 
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent bg-white text-sm sm:text-base transition-all duration-200"
                defaultValue=""
              >
                <option value="" disabled>Select university type</option>
                <option value="central">Central University</option>
                <option value="state">State University</option>
                <option value="deemed">Deemed University</option>
                <option value="private">Private University</option>
              </select>
            </div>

            {/* Medium of Education */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Medium of Education <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent bg-white text-sm sm:text-base transition-all duration-200"
                defaultValue=""
              >
                <option value="" disabled>Select medium of education</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="regional">Regional Language</option>
                <option value="bilingual">Bilingual</option>
              </select>
            </div>

            {/* Form Footer with Action Buttons */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 border-t border-gray-200">
              <button className="w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm sm:text-base">
                Cancel
              </button>
              <button className="w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B4513] to-[#E07B00] text-white rounded-lg font-medium hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-200 text-sm sm:text-base">
                Save Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Student