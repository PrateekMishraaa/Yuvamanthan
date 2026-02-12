import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { Country, State, City } from "country-state-city"

const InstitutionMailing = () => {
    // Get all countries
    const countries = Country.getAllCountries()
    
    // Get states for India (you can change this based on selected country later)
    const states = State.getStatesOfCountry("IN")
    
    // Get cities for Maharashtra (you can change this based on selected state later)
    const cities = City.getCitiesOfState("IN", "MH")

  return (
    <section className='flex'>
      <Sidebar currentSection="Mailing Address" />
      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
          {/* Header Section */}
          <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
            <div>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#FF8C00] flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>Mailing Address</h1>
              </div>
              <p className='text-[#8B4513]/70 mt-1 ml-13'>
                Please provide the complete mailing address for your institution.
              </p>
            </div>
            <Trouble />
          </div>

          {/* Form Content */}
          <div className='w-full px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Country */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  Country
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E]'
                >
                  <option value="" disabled selected>Select country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  State
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E]'
                >
                  <option value="" disabled selected>Select state</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  City
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E]'
                >
                  <option value="" disabled selected>Select city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* District - Note: country-state-city package doesn't have district data */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  District
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E]'
                >
                  <option value="" disabled selected>Select district</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Thane">Thane</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Solapur">Solapur</option>
                  <option value="Kolhapur">Kolhapur</option>
                </select>
                <p className='text-xs text-[#8B4513]/60'>
                  *District data is not available from package, please select manually
                </p>
              </div>

              {/* City/Town Manual Input (Alternative if city dropdown has no data) */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  Or Enter City/Town Manually
                </label>
                <input
                  type="text"
                  placeholder="Enter city or town name"
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                />
              </div>

              {/* Pincode */}
              <div className='space-y-2'>
                <label className='flex items-center gap-1 text-sm font-semibold text-[#6A3E2E]'>
                  Pincode
                  <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter pincode"
                  maxLength="6"
                  className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                />
                <p className='text-xs text-[#8B4513]/60'>
                  6-digit pincode
                </p>
              </div>
            </div>

         

            {/* Navigation Buttons */}
            <div className='flex justify-between items-center gap-4 pt-8 mt-6 border-t border-[#8B4513]/10'>
              <button 
                className='px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] 
                         rounded-lg font-semibold transition-all duration-300 
                         flex items-center gap-2 group hover:bg-[#FFF7ED] 
                         hover:border-[#FF8C00] hover:text-[#FF8C00] cursor-pointer'
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous
              </button>

              <button 
                className='px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                         rounded-lg font-semibold hover:shadow-lg 
                         hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                         flex items-center gap-2 group cursor-pointer'
              >
                Next: Phone Numbers
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Form Progress */}
            <div className='mt-4 flex justify-center'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-[#FF8C00] rounded-full'></span>
                <span className='text-xs text-[#8B4513]/60'>
                  Step 1 of 4 • Mailing Address
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default InstitutionMailing