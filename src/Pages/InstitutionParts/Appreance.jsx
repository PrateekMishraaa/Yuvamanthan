import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Trouble from "../../Components/Trouble/Trouble";
import { UserContext } from "../../Context/InstitutesContext.jsx";

const Appearance = () => {
  const navigate = useNavigate();
  const { formData, handleChange, logo, handleLogoChange, handleLogoRemove, setFormData } =
    useContext(UserContext);
  
  console.log("Form data appearance:", formData?.appearance); // Check what's in context

  const sectionOrder = [
    "Institution",
    "Overview",
    "Registered Address",
    "Appearance",
    "Social Presence",
    "About You",
    "Documents",
  ];

  // Convert display names to URL paths
  const sectionToPath = {
    Institution: "institution",
    Overview: "overview",
    "Registered Address": "registered-address",
    Appearance: "appearance",
    "Social Presence": "social-presence",
    "About You": "about-you",
    Documents: "documents",
  };

  // Get current section index
  const currentSectionIndex = sectionOrder.indexOf("Appearance");

  const handleNext = () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sectionOrder.length) {
      // Save to localStorage before navigating
      localStorage.setItem('instituteFormData', JSON.stringify(formData));
      const nextSection = sectionOrder[nextIndex];
      const nextPath = sectionToPath[nextSection];
      navigate(`/institution/${nextPath}`);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1;
    if (prevIndex >= 0) {
      const prevSection = sectionOrder[prevIndex];
      const prevPath = sectionToPath[prevSection];
      navigate(`/institution/${prevPath}`);
    }
  };

  // Initialize appearance array if it doesn't exist
  const initializeAppearance = () => {
    if (!formData.appearance || formData.appearance.length === 0) {
      setFormData(prev => ({
        ...prev,
        appearance: [{
          instituteLogo: "",
          instituteWebsite: ""
        }]
      }));
    }
  };

  // Call initialization on component mount
  useEffect(() => {
    initializeAppearance();
  }, []);

  // Handle website URL change
  const handleWebsiteChange = (e) => {
    const { value } = e.target;
    
    const syntheticEvent = {
      target: {
        name: 'appearance.0.instituteWebsite',
        value: value,
        type: 'text'
      }
    };
    handleChange(syntheticEvent);
  };

  // Check if form is valid to enable next button
  const isFormValid = () => {
    const appearanceData = formData?.appearance?.[0];
    const hasWebsite = appearanceData?.instituteWebsite?.trim() !== "";
    return hasWebsite;
  };

  // Get logo preview URL
  const getLogoPreview = () => {
    if (logo?.preview) return logo.preview;
    
    const appearanceData = formData?.appearance?.[0];
    if (appearanceData?.instituteLogo) {
      if (
        typeof appearanceData.instituteLogo === "object" &&
        appearanceData.instituteLogo.preview
      ) {
        return appearanceData.instituteLogo.preview;
      }
    }
    return null;
  };

  // Handle logo upload with formData update
  const handleLogoUpload = (e) => {
    handleLogoChange(e);

    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      
      if (!formData.appearance || formData.appearance.length === 0) {
        setFormData(prev => ({
          ...prev,
          appearance: [{
            instituteLogo: {
              file,
              preview: previewUrl,
              name: file.name,
              type: file.type,
              size: file.size,
            },
            instituteWebsite: ""
          }]
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          appearance: [
            {
              ...prev.appearance[0],
              instituteLogo: {
                file,
                preview: previewUrl,
                name: file.name,
                type: file.type,
                size: file.size,
              },
            },
          ],
        }));
      }
    }
  };

  // Handle logo removal with formData update
  const handleLogoRemoval = () => {
    handleLogoRemove();

    if (formData.appearance && formData.appearance.length > 0) {
      setFormData((prev) => ({
        ...prev,
        appearance: [
          {
            ...prev.appearance[0],
            instituteLogo: "",
          },
        ],
      }));
    }
  };

  // Safely get appearance value with fallback
  const getAppearanceValue = () => {
    return formData?.appearance?.[0]?.instituteWebsite || "";
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]">
        {/* Sidebar */}
        <div className="lg:flex-shrink-0">
          <Sidebar currentSection="appearance" />
        </div>

        {/* Main Content Area */}
        <section className="flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden">
          <div className="h-auto w-full bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden">
            
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-[#8B4513]/10 p-4 sm:p-5 md:p-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]">
                  Institute Appearance
                </h1>
                <p className="text-sm sm:text-base text-[#8B4513]/70 mt-1">
                  Customize how your institute appears to students and visitors.
                </p>
              </div>
              <div className="w-full sm:w-auto sm:max-w-xs">
                <Trouble />
              </div>
            </div>

            {/* Form Content */}
            <div className="w-full p-4 sm:p-5 md:p-6">
              {/* Institute Logo Upload Section */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#6A3E2E]">
                      Institute Logo
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8B4513]/60 mt-1">
                      Upload your institute's logo. Recommended size: 200x200px
                      (PNG, JPG, SVG)
                    </p>
                  </div>
                  <span className="text-red-500 text-xs sm:text-sm">*Required</span>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl sm:rounded-2xl border-2 border-dashed border-[#8B4513]/30 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] flex items-center justify-center overflow-hidden">
                      {getLogoPreview() ? (
                        <img
                          src={getLogoPreview()}
                          alt="Institute Logo"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-center p-3 sm:p-4">
                          <svg
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-[#8B4513]/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-[10px] sm:text-xs text-[#8B4513]/50 mt-1 sm:mt-2">
                            Logo Preview
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow space-y-3 sm:space-y-4 w-full">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <label className="relative w-full sm:w-auto">
                        <input
                          type="file"
                          accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
                          onChange={handleLogoUpload}
                          className="sr-only"
                        />
                        <div className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg font-semibold hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          </svg>
                          Upload Logo
                        </div>
                      </label>

                      {(logo || formData?.appearance?.[0]?.instituteLogo) && (
                        <button
                          onClick={handleLogoRemoval}
                          className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Remove
                        </button>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs text-[#8B4513]/60">
                      Supported formats: PNG, JPG, JPEG, SVG, WEBP (Max size: 2MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Website URL Section */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#6A3E2E]">
                      Website URL
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8B4513]/60 mt-1">
                      Enter your institute's official website address.
                    </p>
                  </div>
                  <span className="text-red-500 text-xs sm:text-sm">*Required</span>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex items-center border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 focus-within:border-[#FF8C00] focus-within:ring-2 focus-within:ring-[#FF8C00]/20 transition-all duration-300">
                    <span className="pl-3 sm:pl-4 text-xs sm:text-sm text-[#8B4513]/60">https://</span>
                    <input
                      type="url"
                      name="appearance.0.instituteWebsite"
                      value={getAppearanceValue()}
                      onChange={handleWebsiteChange}
                      placeholder="www.yourinstitute.edu"
                      className="w-full py-2.5 sm:py-3 px-2 bg-transparent border-none outline-none text-[#6A3E2E] placeholder:text-[#8B4513]/40 text-sm sm:text-base"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#8B4513]/60 mt-2">
                    Example: www.iitm.ac.in, www.delhiuniversity.edu.in
                  </p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 sm:mt-5 md:mt-6 bg-[#FFF7ED] p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-[#8B4513]">
                  <span className="font-semibold">
                    Step {currentSectionIndex + 1} of {sectionOrder.length}:
                  </span>{" "}
                  Appearance Settings
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#8B4513]/10">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                           rounded-lg font-semibold transition-all duration-300 
                           flex items-center justify-center gap-2 group text-sm sm:text-base
                           ${
                             currentSectionIndex === 0
                               ? "opacity-50 cursor-not-allowed"
                               : "cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]"
                           }`}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Previous
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={
                    currentSectionIndex === sectionOrder.length - 1 ||
                    !isFormValid()
                  }
                  className={`w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center justify-center gap-2 group text-sm sm:text-base
                           ${
                             currentSectionIndex === sectionOrder.length - 1 ||
                             !isFormValid()
                               ? "opacity-50 cursor-not-allowed"
                               : "cursor-pointer"
                           }`}
                >
                  Next
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Section Steps Indicator */}
              <div className="mt-4 sm:mt-5 md:mt-6 flex justify-center overflow-x-auto px-2 py-2">
                <div className="flex gap-1 sm:gap-2 min-w-max">
                  {sectionOrder.map((item, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center"
                    >
                      <div
                        className={`h-2 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentSectionIndex
                            ? "bg-[#8B4513]"
                            : index < currentSectionIndex
                              ? "bg-[#FFA500]"
                              : "bg-[#8B4513]/20"
                        }`}
                      />
                      <span className="absolute -bottom-5 text-[8px] sm:text-[10px] text-[#8B4513]/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Step Indicator */}
              <div className="sm:hidden text-center mt-3">
                <p className="text-xs text-[#8B4513]/60">
                  Step {currentSectionIndex + 1} of {sectionOrder.length}
                </p>
              </div>

            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Appearance;