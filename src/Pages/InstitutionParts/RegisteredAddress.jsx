import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { Country, State, City } from "country-state-city"
import { UserContext } from '../../Context/InstitutesContext.jsx'

const RegisteredAddress = () => {
  const navigate = useNavigate()
  const { formData, setFormData, handleChange } = useContext(UserContext)
  
  // Debug log to check formData structure
  console.log("Institute Address from context:", formData?.instituteAddress?.[0])
  
  // State for dropdown data
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  
  // Initialize instituteAddress structure if it doesn't exist
  useEffect(() => {
    if (!formData.instituteAddress || formData.instituteAddress.length === 0) {
      setFormData(prev => ({
        ...prev,
        instituteAddress: [
          {
            country: "",
            state: "",
            district: "",
            streetAddress: "",
            city: "",
            pincode: ""
          }
        ]
      }))
    }
  }, [formData.instituteAddress, setFormData])
  
  // Load all countries on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries()
    setCountries(allCountries)
  }, [])
  
  // Load states when country is selected
  useEffect(() => {
    const countryCode = formData?.instituteAddress?.[0]?.country
    if (countryCode) {
      const countryStates = State.getStatesOfCountry(countryCode)
      setStates(countryStates)
    } else {
      setStates([])
    }
  }, [formData?.instituteAddress?.[0]?.country])
  
  // Load cities when state is selected
  useEffect(() => {
    const countryCode = formData?.instituteAddress?.[0]?.country
    const stateCode = formData?.instituteAddress?.[0]?.state
    
    if (countryCode && stateCode) {
      const stateCities = City.getCitiesOfState(countryCode, stateCode)
      setCities(stateCities)
    } else {
      setCities([])
    }
  }, [formData?.instituteAddress?.[0]?.country, formData?.instituteAddress?.[0]?.state])
  
  // Handle country change
  const handleCountryChange = (e) => {
    const countryCode = e.target.value
    const country = countries.find(c => c.isoCode === countryCode)
    
    // Create synthetic event for context handleChange
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.country',
        value: countryCode,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
    
    // Clear dependent fields
    const clearStateEvent = {
      target: {
        name: 'instituteAddress.0.state',
        value: '',
        type: 'text'
      }
    }
    handleChange(clearStateEvent)
    
    const clearCityEvent = {
      target: {
        name: 'instituteAddress.0.city',
        value: '',
        type: 'text'
      }
    }
    handleChange(clearCityEvent)
    
    const clearDistrictEvent = {
      target: {
        name: 'instituteAddress.0.district',
        value: '',
        type: 'text'
      }
    }
    handleChange(clearDistrictEvent)
  }
  
  // Handle state change
  const handleStateChange = (e) => {
    const stateCode = e.target.value
    
    // Create synthetic event for context handleChange
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.state',
        value: stateCode,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
    
    // Clear dependent fields
    const clearCityEvent = {
      target: {
        name: 'instituteAddress.0.city',
        value: '',
        type: 'text'
      }
    }
    handleChange(clearCityEvent)
    
    const clearDistrictEvent = {
      target: {
        name: 'instituteAddress.0.district',
        value: '',
        type: 'text'
      }
    }
    handleChange(clearDistrictEvent)
  }
  
  // Handle city change
  const handleCityChange = (e) => {
    const cityName = e.target.value
    
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.city',
        value: cityName,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }
  
  // Handle district change
  const handleDistrictChange = (e) => {
    const districtName = e.target.value
    
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.district',
        value: districtName,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }
  
  // Handle street address change
  const handleStreetAddressChange = (e) => {
    const streetAddress = e.target.value
    
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.streetAddress',
        value: streetAddress,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }
  
  // Handle pincode change
  const handlePincodeChange = (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, '')
    
    const syntheticEvent = {
      target: {
        name: 'instituteAddress.0.pincode',
        value: value,
        type: 'text'
      }
    }
    handleChange(syntheticEvent)
  }

  // Get country name from ISO code (for display)
  const getCountryName = (isoCode) => {
    if (!isoCode) return ''
    const country = countries.find(c => c.isoCode === isoCode)
    return country ? `${country.flag} ${country.name}` : isoCode
  }

  // Get state name from ISO code (for display)
  const getStateName = (isoCode) => {
    if (!isoCode) return ''
    const state = states.find(s => s.isoCode === isoCode)
    return state?.name || isoCode
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

  // Get current section index
  const currentSectionIndex = sectionOrder.indexOf("Registered Address")

  const handleNext = () => {
    // Save to localStorage before navigating
    localStorage.setItem('instituteFormData', JSON.stringify(formData))
    
    const nextIndex = currentSectionIndex + 1
    if (nextIndex < sectionOrder.length) {
      const nextSection = sectionOrder[nextIndex]
      const nextPath = sectionToPath[nextSection]
      navigate(`/institution/${nextPath}`)
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1
    if (prevIndex >= 0) {
      const prevSection = sectionOrder[prevIndex]
      const prevPath = sectionToPath[prevSection]
      navigate(`/institution/${prevPath}`)
    }
  }

  // Check if form is valid to enable next button
  const isFormValid = () => {
    const address = formData?.instituteAddress?.[0] || {}
    return (
      address.country &&
      address.country.trim() !== "" &&
      address.state &&
      address.state.trim() !== "" &&
      address.district &&
      address.district.trim() !== "" &&
      address.city &&
      address.city.trim() !== "" &&
      address.streetAddress &&
      address.streetAddress.trim() !== "" &&
      address.pincode &&
      address.pincode.length === 6
    )
  }

  // Get display value for country select
  const getCountryDisplayValue = () => {
    const countryCode = formData?.instituteAddress?.[0]?.country
    const country = countries.find(c => c.isoCode === countryCode)
    return countryCode ? `${country?.flag || ''} ${country?.name || countryCode}` : ''
  }

  return (
    <>
      <section className='flex'>
        <Sidebar currentSection="registered-address" />
        <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
          <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
            {/* Header Section */}
            <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-[#6A3E2E]'>Institute Registered Address</h1>
                <p className='text-[#8B4513]/70 mt-1'>
                  Enter the registered address of your institute as per official documents.
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
                    value={formData?.instituteAddress?.[0]?.country || ''}
                    onChange={handleCountryChange}
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 text-[#6A3E2E]'
                  >
                    <option value="" disabled>Select country</option>
                    {countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.flag} {country.name}
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
                    value={formData?.instituteAddress?.[0]?.state || ''}
                    onChange={handleStateChange}
                    disabled={!formData?.instituteAddress?.[0]?.country}
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 text-[#6A3E2E]
                             disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <option value="" disabled>
                      {formData?.instituteAddress?.[0]?.country ? 'Select state' : 'Select country first'}
                    </option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>District</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData?.instituteAddress?.[0]?.district || ''}
                    onChange={handleDistrictChange}
                    placeholder="Enter district"
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                  />
                </div>

                {/* City */}
                <div className='mb-4'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>City</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  {cities.length > 0 ? (
                    <select
                      value={formData?.instituteAddress?.[0]?.city || ''}
                      onChange={handleCityChange}
                      disabled={!formData?.instituteAddress?.[0]?.state}
                      className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 text-[#6A3E2E]
                               disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      <option value="" disabled>
                        {formData?.instituteAddress?.[0]?.state ? 'Select city' : 'Select state first'}
                      </option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={formData?.instituteAddress?.[0]?.city || ''}
                      onChange={handleCityChange}
                      placeholder="Enter city name"
                      className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                               focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                               transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                    />
                  )}
                  {cities.length === 0 && formData?.instituteAddress?.[0]?.state && (
                    <p className='text-xs text-[#8B4513]/60 mt-1'>
                      No cities found in dropdown. Please enter manually.
                    </p>
                  )}
                </div>

                {/* Street Address (Full Width) */}
                <div className='mb-4 md:col-span-2'>
                  <label className='block mb-2'>
                    <span className='font-semibold text-[#6A3E2E]'>Street Address</span>
                    <span className='text-red-500 ml-1'>*</span>
                  </label>
                  <textarea
                    rows="3"
                    value={formData?.instituteAddress?.[0]?.streetAddress || ''}
                    onChange={handleStreetAddressChange}
                    placeholder="Enter complete street address, building name, landmark, etc."
                    className='w-full py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]
                             resize-none'
                  />
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
                    value={formData?.instituteAddress?.[0]?.pincode || ''}
                    onChange={handlePincodeChange}
                    placeholder="Enter 6-digit pincode"
                    maxLength="6"
                    className='w-full md:w-2/3 py-3 px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                             focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                             transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E]'
                  />
                  <p className='text-xs text-[#8B4513]/60 mt-2'>
                    6-digit pincode (required)
                  </p>
                </div>
              </div>

              {/* Address Preview */}
              {isFormValid() && (
                <div className='mt-6 p-4 bg-[#FFF7ED] rounded-lg border border-[#8B4513]/20'>
                  <div className='flex items-start gap-2'>
                    <svg className='w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className='text-sm font-semibold text-[#6A3E2E]'>Address Preview</p>
                      <p className='text-sm text-[#8B4513]/70 mt-1'>
                        {formData.instituteAddress[0].streetAddress}, {formData.instituteAddress[0].city}, 
                        {formData.instituteAddress[0].district && ` ${formData.instituteAddress[0].district},`} 
                        {getStateName(formData.instituteAddress[0].state)}, 
                        {getCountryName(formData.instituteAddress[0].country)} - {formData.instituteAddress[0].pincode}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Progress Indicator */}
              <div className='mt-6 bg-[#FFF7ED] p-4 rounded-lg'>
                <p className='text-sm text-[#8B4513]'>
                  <span className='font-semibold'>Step {currentSectionIndex + 1} of {sectionOrder.length}:</span> Registered Address
                </p>
              </div>

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
                  disabled={!isFormValid()}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                           flex items-center gap-2 group
                           ${!isFormValid()
                             ? 'bg-gray-400 cursor-not-allowed opacity-50'
                             : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] cursor-pointer'
                           }`}
                >
                  Next
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
          </div>
        </section>
      </section>
    </>
  )
}

export default RegisteredAddress