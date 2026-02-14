import React, { useContext } from "react";
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
  React.useEffect(() => {
    initializeAppearance();
  }, []);

  // Handle website URL change - FIXED to use correct field name and array indexing
  const handleWebsiteChange = (e) => {
    const { value } = e.target;
    
    // Use the context's handleChange with proper array indexing
    const syntheticEvent = {
      target: {
        name: 'appearance.0.instituteWebsite', // Note: using 'appearance' not 'appreance'
        value: value,
        type: 'text'
      }
    };
    handleChange(syntheticEvent);
  };

  // Check if form is valid to enable next button
  const isFormValid = () => {
    // Safely check if appearance exists and has values
    const appearanceData = formData?.appearance?.[0];
    
    // For now, only check if website URL exists and is not empty
    // Logo validation is temporarily removed
    const hasWebsite = appearanceData?.instituteWebsite?.trim() !== "";

    return hasWebsite; // Only website is required now
  };

  // Get logo preview URL - COMMENTED OUT FOR NOW
  // const getLogoPreview = () => {
  //   if (logo?.preview) return logo.preview;
  //   
  //   const appearanceData = formData?.appearance?.[0];
  //   if (appearanceData?.instituteLogo) {
  //     // If it's stored as an object with preview
  //     if (
  //       typeof appearanceData.instituteLogo === "object" &&
  //       appearanceData.instituteLogo.preview
  //     ) {
  //       return appearanceData.instituteLogo.preview;
  //     }
  //   }
  //   return null;
  // };

  // Handle logo upload with formData update - COMMENTED OUT FOR NOW
  // const handleLogoUpload = (e) => {
  //   handleLogoChange(e);
  //
  //   // Also update formData.appearance[0].instituteLogo
  //   const file = e.target.files[0];
  //   if (file) {
  //     const previewUrl = URL.createObjectURL(file);
  //     
  //     // Initialize appearance array if needed
  //     if (!formData.appearance || formData.appearance.length === 0) {
  //       setFormData(prev => ({
  //         ...prev,
  //         appearance: [{
  //           instituteLogo: {
  //             file,
  //             preview: previewUrl,
  //             name: file.name,
  //             type: file.type,
  //             size: file.size,
  //           },
  //           instituteWebsite: ""
  //         }]
  //       }));
  //     } else {
  //       setFormData((prev) => ({
  //         ...prev,
  //         appearance: [
  //           {
  //             ...prev.appearance[0],
  //             instituteLogo: {
  //               file,
  //               preview: previewUrl,
  //               name: file.name,
  //               type: file.type,
  //               size: file.size,
  //             },
  //           },
  //         ],
  //       }));
  //     }
  //   }
  // };

  // Handle logo removal with formData update - COMMENTED OUT FOR NOW
  // const handleLogoRemoval = () => {
  //   handleLogoRemove();
  //
  //   // Also clear formData.appearance[0].instituteLogo
  //   if (formData.appearance && formData.appearance.length > 0) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       appearance: [
  //         {
  //           ...prev.appearance[0],
  //           instituteLogo: "",
  //         },
  //       ],
  //     }));
  //   }
  // };

  // Safely get appearance value with fallback
  const getAppearanceValue = () => {
    return formData?.appearance?.[0]?.instituteWebsite || "";
  };

  return (
    <>
      <section className="flex">
        <Sidebar currentSection="appearance" />
        <section className="h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4">
          <div className="h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10">
            {/* Header Section */}
            <div className="flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#6A3E2E]">
                  Institute Appearance
                </h1>
                <p className="text-[#8B4513]/70 mt-1">
                  Customize how your institute appears to students and visitors.
                </p>
              </div>
              <Trouble />
            </div>

            {/* Form Content */}
            <div className="w-full px-4">
              {/* Institute Logo Upload Section - COMMENTED OUT FOR NOW */}
              {/* <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[#6A3E2E]">
                      Institute Logo
                    </h2>
                    <p className="text-sm text-[#8B4513]/60 mt-1">
                      Upload your institute's logo. Recommended size: 200x200px
                      (PNG, JPG, SVG)
                    </p>
                  </div>
                  <span className="text-red-500 text-sm">*Required</span>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl border-2 border-dashed border-[#8B4513]/30 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] flex items-center justify-center overflow-hidden">
                      {getLogoPreview() ? (
                        <img
                          src={getLogoPreview()}
                          alt="Institute Logo"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <svg
                            className="w-12 h-12 mx-auto text-[#8B4513]/40"
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
                          <p className="text-xs text-[#8B4513]/50 mt-2">
                            Logo Preview
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="relative">
                        <input
                          type="file"
                          accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
                          onChange={handleLogoUpload}
                          className="sr-only"
                        />
                        <div className="px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg font-semibold hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 cursor-pointer flex items-center gap-2">
                          <svg
                            className="w-5 h-5"
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
                          className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
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
                    <p className="text-xs text-[#8B4513]/60">
                      Supported formats: PNG, JPG, JPEG, SVG, WEBP (Max size:
                      2MB)
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Website URL Section */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[#6A3E2E]">
                      Website URL
                    </h2>
                    <p className="text-sm text-[#8B4513]/60 mt-1">
                      Enter your institute's official website address.
                    </p>
                  </div>
                  <span className="text-red-500 text-sm">*Required</span>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex items-center border border-[#8B4513]/30 rounded-lg bg-[#FFF7ED]/30 focus-within:border-[#FF8C00] focus-within:ring-2 focus-within:ring-[#FF8C00]/20 transition-all duration-300">
                    <span className="pl-4 text-[#8B4513]/60">https://</span>
                    <input
                      type="url"
                      name="appearance.0.instituteWebsite"
                      value={getAppearanceValue()}
                      onChange={handleWebsiteChange}
                      placeholder="www.yourinstitute.edu"
                      className="w-full py-3 px-2 bg-transparent border-none outline-none text-[#6A3E2E] placeholder:text-[#8B4513]/40"
                    />
                  </div>
                  <p className="text-xs text-[#8B4513]/60 mt-2">
                    Example: www.iitm.ac.in, www.delhiuniversity.edu.in
                  </p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 bg-[#FFF7ED] p-4 rounded-lg">
                <p className="text-sm text-[#8B4513]">
                  <span className="font-semibold">
                    Step {currentSectionIndex + 1} of {sectionOrder.length}:
                  </span>{" "}
                  Appearance Settings
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center gap-4 pt-8 mt-6 border-t border-[#8B4513]/10">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentSectionIndex === 0}
                  className={`px-8 py-3 border-2 border-[#8B4513] text-[#8B4513] 
                           rounded-lg font-semibold transition-all duration-300 
                           flex items-center gap-2 group
                           ${
                             currentSectionIndex === 0
                               ? "opacity-50 cursor-not-allowed"
                               : "cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]"
                           }`}
                >
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
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
                  className={`px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white 
                           rounded-lg font-semibold hover:shadow-lg 
                           hover:from-[#6A3E2E] hover:to-[#C46200] transition-all duration-300 
                           flex items-center gap-2 group
                           ${
                             currentSectionIndex === sectionOrder.length - 1 ||
                             !isFormValid()
                               ? "opacity-50 cursor-not-allowed"
                               : "cursor-pointer"
                           }`}
                >
                  Next
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <div className="mt-6 flex justify-center">
                <div className="flex gap-2">
                  {sectionOrder.map((item, index) => (
                    <div
                      key={index}
                      className={`h-2 w-12 rounded-full transition-all duration-300 ${
                        index === currentSectionIndex
                          ? "bg-[#8B4513]"
                          : index < currentSectionIndex
                            ? "bg-[#FFA500]"
                            : "bg-[#8B4513]/20"
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
  );
};

export default Appearance;