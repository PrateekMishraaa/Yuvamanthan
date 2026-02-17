import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Trouble from '../../Components/Trouble/Trouble';
import { Country, State, City } from "country-state-city";
import { UserContext } from "../../Context/InstitutesContext.jsx";

const InstitutionMailing = () => {
  const navigate = useNavigate();
  const { formData, setFormData, handleSubmit } = useContext(UserContext);
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  
  const countries = Country.getAllCountries();
  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];
  
  useEffect(() => {
    // Initialize if empty
    if (!formData.MailingAddress || formData.MailingAddress.length === 0) {
      setFormData(prev => ({
        ...prev,
        MailingAddress: [{
          Country: "",
          State: "",
          District: "",
          StreetAddress: "",
          City: "",
          Pincode: ""
        }]
      }));
    } else {
      // Set selected values from formData
      const countryName = formData.MailingAddress[0]?.Country;
      if (countryName) {
        const country = countries.find(c => c.name === countryName);
        if (country) setSelectedCountry(country.isoCode);
      }
    }
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState("");
    
    const country = countries.find(c => c.isoCode === countryCode);
    
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        Country: country?.name || "",
        State: "",
        District: "",
        City: "",
        Pincode: prev.MailingAddress[0]?.Pincode || ""
      }]
    }));
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    
    const state = states.find(s => s.isoCode === stateCode);
    
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        State: state?.name || "",
        District: "",
        City: ""
      }]
    }));
  };

  const handleDistrictChange = (e) => {
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        District: e.target.value
      }]
    }));
  };

  const handleCityChange = (e) => {
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        City: e.target.value
      }]
    }));
  };

  const handleStreetAddressChange = (e) => {
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        StreetAddress: e.target.value
      }]
    }));
  };

  const handlePincodeChange = (e) => {
    let pincode = e.target.value.replace(/\D/g, '').slice(0, 6);
    
    setFormData(prev => ({
      ...prev,
      MailingAddress: [{
        ...prev.MailingAddress[0],
        Pincode: pincode
      }]
    }));
  };

  const isFormValid = () => {
    const mailing = formData?.MailingAddress?.[0] || {};
    return (
      mailing.Country?.trim() &&
      mailing.State?.trim() &&
      mailing.District?.trim() &&
      mailing.StreetAddress?.trim() &&
      mailing.City?.trim() &&
      mailing.Pincode?.length === 6
    );
  };

  return (
    <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      {/* Sidebar */}
      <div className='lg:flex-shrink-0'>
        <Sidebar currentSection="Documents" />
      </div>

      {/* Main Content Area */}
      <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
        <div className='h-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
          
          {/* Header Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[#8B4513]/10 p-4 sm:p-5 md:p-6'>
            <div>
              <div className='flex items-center gap-2 sm:gap-3 mb-2'>
                <div className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#FF8C00] flex items-center justify-center flex-shrink-0'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#6A3E2E]'>Mailing Address</h1>
              </div>
              <p className='text-sm sm:text-base text-[#8B4513]/70 mt-1 ml-10 sm:ml-12'>
                Please provide the complete mailing address for your institution.
              </p>
            </div>
            <div className='w-full sm:w-auto sm:max-w-xs'>
              <Trouble />
            </div>
          </div>

          {/* Form Content */}
          <div className='w-full p-4 sm:p-5 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6'>
              {/* Country */}
              <div className='space-y-1 sm:space-y-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  Country <span className='text-red-500'>*</span>
                </label>
                <select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E] text-sm sm:text-base'
                >
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className='space-y-1 sm:space-y-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  State <span className='text-red-500'>*</span>
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  disabled={!selectedCountry}
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 text-[#6A3E2E] text-sm sm:text-base
                           disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <option value="">Select state</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div className='space-y-1 sm:space-y-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  District <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  value={formData?.MailingAddress?.[0]?.District || ''}
                  onChange={handleDistrictChange}
                  placeholder="Enter district"
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                />
              </div>

              {/* City */}
              <div className='space-y-1 sm:space-y-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  City <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  value={formData?.MailingAddress?.[0]?.City || ''}
                  onChange={handleCityChange}
                  placeholder="Enter city name"
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                />
              </div>

              {/* Street Address */}
              <div className='space-y-1 sm:space-y-2 md:col-span-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  Street Address <span className='text-red-500'>*</span>
                </label>
                <textarea
                  value={formData?.MailingAddress?.[0]?.StreetAddress || ''}
                  onChange={handleStreetAddressChange}
                  placeholder="House/Shop/Flat No., Building Name, Road/Street, Area/Locality"
                  rows="3"
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base resize-none'
                />
              </div>

              {/* Pincode */}
              <div className='space-y-1 sm:space-y-2'>
                <label className='flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                  Pincode <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  value={formData?.MailingAddress?.[0]?.Pincode || ''}
                  onChange={handlePincodeChange}
                  placeholder="Enter 6-digit pincode"
                  maxLength="6"
                  className='w-full py-2.5 sm:py-3 px-3 sm:px-4 border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 
                           focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 outline-none 
                           transition-all duration-300 placeholder:text-[#8B4513]/40 text-[#6A3E2E] text-sm sm:text-base'
                />
              </div>
            </div>

            {/* Address Preview */}
            {isFormValid() && (
              <div className='mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-[#FFF7ED] rounded-lg border border-[#8B4513]/20'>
                <div className='flex items-start gap-2'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs sm:text-sm font-semibold text-[#6A3E2E]'>Address Preview</p>
                    <p className='text-xs sm:text-sm text-[#8B4513]/70 mt-1 break-words'>
                      {formData.MailingAddress[0].StreetAddress}, {formData.MailingAddress[0].City}, 
                      {formData.MailingAddress[0].District && ` ${formData.MailingAddress[0].District},`} 
                      {formData.MailingAddress[0].State && ` ${formData.MailingAddress[0].State},`} 
                      {formData.MailingAddress[0].Country} - {formData.MailingAddress[0].Pincode}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#8B4513]/10'>
              <button 
                onClick={() => navigate('/institution/about-you')}
                className='w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                         rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00] cursor-pointer'
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous
              </button>

              <button 
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         ${!isFormValid()
                           ? 'bg-gray-400 cursor-not-allowed opacity-50'
                           : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] cursor-pointer'
                         }`}
              >
                Submit Registration
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Section Steps Indicator */}
            <div className='mt-4 sm:mt-5 md:mt-6 flex justify-center overflow-x-auto px-2 py-2'>
              <div className='flex gap-1 sm:gap-2 min-w-max'>
                {[
                  "Institution",
                  "Overview",
                  "Registered Address",
                  "Appearance",
                  "Social Presence",
                  "About You",
                  "Documents"
                ].map((item, index) => (
                  <div
                    key={index}
                    className='group relative flex flex-col items-center'
                  >
                    <div
                      className={`h-2 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 cursor-pointer ${
                        index === 6
                          ? 'bg-[#8B4513]'
                          : index < 6
                            ? 'bg-[#FFA500]'
                            : 'bg-[#8B4513]/20'
                      }`}
                    />
                    <span className='absolute -bottom-5 text-[8px] sm:text-[10px] text-[#8B4513]/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Step Indicator */}
            <div className='sm:hidden text-center mt-3'>
              <p className='text-xs text-[#8B4513]/60'>
                Step 7 of 7
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
};

export default InstitutionMailing;