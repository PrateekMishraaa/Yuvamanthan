import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Trouble from '../../Components/Trouble/Trouble';
import { UserContext } from "../../Context/InstitutesContext.jsx";

const InstitutionDocuments = () => {
  const navigate = useNavigate();
  const { 
    formData,
    institutionDocs, 
    handleDocumentUpload, 
    handleDocumentRemove,
    handleSubmit
  } = useContext(UserContext);
  
  const poiInputRef = useRef(null);
  const poaInputRef = useRef(null);

  // Log to debug
  useEffect(() => {
    console.log("InstitutionDocs - formData:", formData);
    console.log("InstitutionDocs - institutionDocs:", institutionDocs);
  }, [formData, institutionDocs]);

  const sectionOrder = [
    "Institution",
    "Overview",
    "Registered Address",
    "Appearance",
    "Social Presence",
    "About You",
    "Documents"
  ];

  const currentSectionIndex = sectionOrder.indexOf("Documents");

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1;
    if (prevIndex >= 0) {
      navigate(`/institution/${sectionOrder[prevIndex].toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      handleDocumentUpload(docType, file);
    }
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current?.click();
  };

  const renderUploadedFile = (docType, docData) => {
    if (!docData) return null;

    return (
      <div className="mt-3 sm:mt-4 w-full bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#8B4513]/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFF7ED] rounded-full flex items-center justify-center flex-shrink-0">
              {docData.type?.startsWith('image/') ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-[#6A3E2E] truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
                {docData.name || 'Uploaded file'}
              </p>
              <p className="text-[10px] sm:text-xs text-[#8B4513]/50">
                {docData.size ? (docData.size / 1024).toFixed(2) : '0'} KB
              </p>
            </div>
          </div>

          <button
            onClick={() => handleDocumentRemove(docType)}
            className="p-1.5 sm:p-2 hover:bg-red-50 rounded-full transition-colors duration-300 flex-shrink-0 self-end sm:self-center"
            title="Remove file"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {docData.preview && (
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[#8B4513]/10">
            <img 
              src={docData.preview} 
              alt="Preview" 
              className="max-h-20 sm:max-h-24 md:max-h-32 rounded-lg object-contain mx-auto sm:mx-0"
            />
          </div>
        )}
      </div>
    );
  };

  const areDocumentsUploaded = () => {
    return institutionDocs?.proofOfIdentity && institutionDocs?.proofOfAddress;
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
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>Institution Documents</h1>
              <p className='text-sm sm:text-base text-[#8B4513]/70 mt-1'>
                Upload required documents to verify your institution.
              </p>
            </div>
            <div className='w-full sm:w-auto sm:max-w-xs'>
              <Trouble />
            </div>
          </div>

          {/* Form Content */}
          <div className='w-full p-4 sm:p-5 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
              {/* Proof of Identity */}
              <div className='flex flex-col'>
                <div 
                  className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-[#FFF7ED]/20 
                    transition-all duration-300 group h-full flex flex-col items-center justify-center 
                    min-h-[200px] sm:min-h-[240px] md:min-h-[280px] ${institutionDocs?.proofOfIdentity 
                      ? 'border-[#4CAF50] bg-green-50/50' 
                      : 'border-[#8B4513]/30 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40'
                    }`}
                >
                  <div className='flex flex-col items-center text-center w-full'>
                    {!institutionDocs?.proofOfIdentity ? (
                      <>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                          <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        
                        <div className='space-y-1 sm:space-y-2'>
                          <p className='text-sm sm:text-base text-[#6A3E2E] font-medium'>
                            Drag file here or click to
                          </p>
                          <button
                            onClick={() => triggerFileInput(poiInputRef)}
                            className='relative cursor-pointer'
                            type="button"
                          >
                            <span className='text-xs sm:text-sm text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
                              Select file to upload
                            </span>
                          </button>
                          <input
                            ref={poiInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={(e) => handleFileUpload(e, 'proofOfIdentity')}
                            className='sr-only'
                          />
                        </div>
                        
                        <div className='mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-[#8B4513]/20 w-full'>
                          <p className='text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                            Proof of Identity (POI)
                          </p>
                          <p className='text-[10px] sm:text-xs text-[#8B4513]/50 mt-1'>
                            PDF, JPG, PNG, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4'>
                          <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className='text-sm sm:text-base text-green-700 font-medium mb-2'>
                          File uploaded successfully!
                        </p>
                        <button
                          onClick={() => triggerFileInput(poiInputRef)}
                          className='text-xs sm:text-sm text-[#FF8C00] hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'
                          type="button"
                        >
                          Replace file
                        </button>
                        <input
                          ref={poiInputRef}
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, 'proofOfIdentity')}
                          className='sr-only'
                        />
                      </>
                    )}
                  </div>
                </div>
                
                {institutionDocs?.proofOfIdentity && 
                  renderUploadedFile('proofOfIdentity', institutionDocs.proofOfIdentity)
                }
              </div>

              {/* Proof of Address */}
              <div className='flex flex-col'>
                <div 
                  className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-[#FFF7ED]/20 
                    transition-all duration-300 group h-full flex flex-col items-center justify-center 
                    min-h-[200px] sm:min-h-[240px] md:min-h-[280px] ${institutionDocs?.proofOfAddress 
                      ? 'border-[#4CAF50] bg-green-50/50' 
                      : 'border-[#8B4513]/30 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40'
                    }`}
                >
                  <div className='flex flex-col items-center text-center w-full'>
                    {!institutionDocs?.proofOfAddress ? (
                      <>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                          <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        
                        <div className='space-y-1 sm:space-y-2'>
                          <p className='text-sm sm:text-base text-[#6A3E2E] font-medium'>
                            Drag file here or click to
                          </p>
                          <button
                            onClick={() => triggerFileInput(poaInputRef)}
                            className='relative cursor-pointer'
                            type="button"
                          >
                            <span className='text-xs sm:text-sm text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
                              Select file to upload
                            </span>
                          </button>
                          <input
                            ref={poaInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={(e) => handleFileUpload(e, 'proofOfAddress')}
                            className='sr-only'
                          />
                        </div>
                        
                        <div className='mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-[#8B4513]/20 w-full'>
                          <p className='text-xs sm:text-sm font-semibold text-[#6A3E2E]'>
                            Proof of Address (POA)
                          </p>
                          <p className='text-[10px] sm:text-xs text-[#8B4513]/50 mt-1'>
                            PDF, JPG, PNG, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4'>
                          <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className='text-sm sm:text-base text-green-700 font-medium mb-2'>
                          File uploaded successfully!
                        </p>
                        <button
                          onClick={() => triggerFileInput(poaInputRef)}
                          className='text-xs sm:text-sm text-[#FF8C00] hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'
                          type="button"
                        >
                          Replace file
                        </button>
                        <input
                          ref={poaInputRef}
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, 'proofOfAddress')}
                          className='sr-only'
                        />
                      </>
                    )}
                  </div>
                </div>
                
                {institutionDocs?.proofOfAddress && 
                  renderUploadedFile('proofOfAddress', institutionDocs.proofOfAddress)
                }
              </div>
            </div>

            {/* Info Box */}
            <div className='mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-[#FFF7ED] rounded-lg border border-[#8B4513]/20'>
              <div className='flex items-start gap-2'>
                <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className='text-xs sm:text-sm text-[#8B4513]/70'>
                    Documents must be clear, legible, and not older than 6 months. The name should match your institution's registered name.
                  </p>
                  <p className='text-[10px] sm:text-xs text-[#8B4513]/50 mt-1'>
                    Accepted formats: PDF, JPEG, PNG, DOC, DOCX (Max 5MB per file)
                  </p>
                </div>
              </div>
            </div>

            {/* Document Status Indicators */}
            <div className='mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-start sm:justify-end'>
              <div className='flex items-center gap-2'>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${institutionDocs?.proofOfIdentity ? 'bg-green-500' : 'bg-[#8B4513]/20'}`}></div>
                <span className='text-[10px] sm:text-xs text-[#6A3E2E]'>Proof of Identity {institutionDocs?.proofOfIdentity ? '✓' : 'Pending'}</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${institutionDocs?.proofOfAddress ? 'bg-green-500' : 'bg-[#8B4513]/20'}`}></div>
                <span className='text-[10px] sm:text-xs text-[#6A3E2E]'>Proof of Address {institutionDocs?.proofOfAddress ? '✓' : 'Pending'}</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#8B4513]/10'>
              <button 
                onClick={handlePrevious}
                disabled={currentSectionIndex === 0}
                className={`w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                         rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         ${currentSectionIndex === 0 
                           ? 'opacity-50 cursor-not-allowed' 
                           : 'cursor-pointer hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                         }`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Previous
              </button>

              <button 
                onClick={handleSubmit}
                disabled={!areDocumentsUploaded()}
                className={`w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 group text-sm sm:text-base
                         ${!areDocumentsUploaded()
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
                {sectionOrder.map((item, index) => (
                  <div
                    key={index}
                    className='group relative flex flex-col items-center'
                  >
                    <div
                      className={`h-2 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentSectionIndex
                          ? 'bg-[#8B4513]'
                          : index < currentSectionIndex
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
                Step {currentSectionIndex + 1} of {sectionOrder.length}
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
};

export default InstitutionDocuments;