import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { Country, State, City } from "country-state-city"

const RegisteredAddress = () => {
  const navigate = useNavigate()
  
  // State for dropdown data
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  
  // State for selected values
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  
  // Load all countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries()
    setCountries(allCountries)
    console.log("All countries:", allCountries)
  }, [])
  
  // Load states when country is selected
  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry)
      setStates(countryStates)
      // Reset state and city when country changes
      setSelectedState('')
      setSelectedCity('')
      setCities([])
    } else {
      setStates([])
      setSelectedState('')
      setSelectedCity('')
      setCities([])
    }
  }, [selectedCountry])
  
  // Load cities when state is selected
  useEffect(() => {
    if (selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState)
      setCities(stateCities)
      // Reset city when state changes
      setSelectedCity('')
    } else {
      setCities([])
      setSelectedCity('')
    }
  }, [selectedState, selectedCountry])
  
  // Handle country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }
  
  // Handle state change
  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
  }
  
  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value)
  }

  // Section order matching sidebar
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
  const currentSectionIndex = sectionOrder.indexOf("Registered Address")

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      navigate(`/institution/${sectionOrder[nextIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  return (
    <>
      <section className='flex'>
        <Sidebar currentSection="Registered Address" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>Institute Address</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Enter the registered address of your institute.
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className='w-full px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Country */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Country</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 text-[#6A3E2E]'
                  >
                    <option value="" disabled>Select country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>State</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <select
                    value={selectedState}
                    onChange={handleStateChange}
                    disabled={!selectedCountry}
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 text-[#6A3E2E]
                             disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <option value="" disabled>
                      {selectedCountry ? 'Select state' : 'Select country first'}
                    </option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City/District */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>City/District</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedState}
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 text-[#6A3E2E]
                             disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <option value="" disabled>
                      {selectedState ? 'Select city' : 'Select state first'}
                    </option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address (Full Width) - Moved to next row */}
                <div className='mb-4 md:col-span-2'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Street Address</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Enter complete street address, building name, landmark, etc."
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]
                             resize-none'
                  ></textarea>
                  <p className='text-xs text-[#8B4513]/60 mt-2'>
                    Include house/building number, street name, area, landmark (if any)
                  </p>
                </div>

                {/* Pincode */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Pincode</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    maxLength="6"
                    className='w-full md:w-2/3 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                  />
                </div>
              </div>

              {/* Selected Address Summary */}
              {/* {(selectedCountry || selectedState || selectedCity) && (
                <div className='mt-8 p-4 bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] rounded-lg border border-[#8B4513]/20'>
                  <h3 className='text-sm font-semibold text-[#6A3E2E] mb-2 flex items-center gap-2'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Selected Location
                  </h3>
                  <p className='text-sm text-[#8B4513]'>
                    {[
                      selectedCity,
                      selectedState && states.find(s => s.isoCode === selectedState)?.name,
                      selectedCountry && countries.find(c => c.isoCode === selectedCountry)?.name
                    ].filter(Boolean).join(', ')}
                  </p>
                </div>
              )} */}

              {/* Navigation Buttons */}
              <div className='flex justify-between items-center gap-4 pt-8 mt-6 border-t border-[#8B4513]/10'>
                {/* Previous Button */}
                <button 
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] 
                           rounded-lg font-semibold transition-all duration-300 
                           flex items-center gap-2 group
                           ${currentSectionIndex === 0 
                             ? 'opacity-50 cursor-not-allowed' 
                             : 'cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                           }`}
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Previous
                </button>

                {/* Next Button */}
                <button 
                  onClick={handleNext}
                  disabled={currentSectionIndex === sectionOrder.length - 1}
                  className={`px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center gap-2 group
                           ${currentSectionIndex === sectionOrder.length - 1
                             ? 'opacity-50 cursor-not-allowed'
                             : 'cursor-pointer'
                           }`}
                >
                  Next
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default RegisteredAddress