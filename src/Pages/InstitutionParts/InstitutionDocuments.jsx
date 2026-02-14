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
      <div className="mt-4 w-full bg-white rounded-lg p-3 border border-[#8B4513]/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 truncate flex-1">
            <div className="w-8 h-8 bg-[#FFF7ED] rounded-full flex items-center justify-center flex-shrink-0">
              {docData.type?.startsWith('image/') ? (
                <svg className="w-4 h-4 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            
            <div className="truncate flex-1">
              <p className="text-sm font-medium text-[#6A3E2E] truncate">
                {docData.name || 'Uploaded file'}
              </p>
              <p className="text-xs text-[#8B4513]/50">
                {docData.size ? (docData.size / 1024).toFixed(2) : '0'} KB
              </p>
            </div>
          </div>

          <button
            onClick={() => handleDocumentRemove(docType)}
            className="p-1 hover:bg-red-50 rounded-full transition-colors duration-300 ml-2 flex-shrink-0"
            title="Remove file"
          >
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {docData.preview && (
          <div className="mt-2 pt-2 border-t border-[#8B4513]/10">
            <img 
              src={docData.preview} 
              alt="Preview" 
              className="max-h-32 rounded-lg object-contain"
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
    <section className='flex'>
      <Sidebar currentSection="Documents" />
      <section className='h-auto w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-4'>
        <div className='h-auto w-full bg-white rounded-2xl shadow-lg p-6 border border-[#8B4513]/10'>
          <div className='flex justify-between items-start border-b border-[#8B4513]/10 pb-4 mb-6'>
            <div>
              <h1 className='text-3xl font-bold text-[#6A3E2E]'>Institution Documents</h1>
              <p className='text-[#8B4513]/70 mt-1'>
                Upload required documents to verify your institution.
              </p>
            </div>
            <Trouble />
          </div>

          <div className='w-full px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Proof of Identity */}
              <div className='flex flex-col'>
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 bg-[#FFF7ED]/20 
                    transition-all duration-300 group h-full flex flex-col items-center justify-center 
                    min-h-[280px] ${institutionDocs?.proofOfIdentity 
                      ? 'border-[#4CAF50] bg-green-50' 
                      : 'border-[#8B4513]/30 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40'
                    }`}
                >
                  <div className='flex flex-col items-center text-center w-full'>
                    {!institutionDocs?.proofOfIdentity ? (
                      <>
                        <div className='w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                          <svg className='w-8 h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        
                        <div className='space-y-2'>
                          <p className='text-base text-[#6A3E2E] font-medium'>
                            Drag file here or click to
                          </p>
                          <button
                            onClick={() => triggerFileInput(poiInputRef)}
                            className='relative cursor-pointer'
                            type="button"
                          >
                            <span className='text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
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
                        
                        <div className='mt-6 pt-4 border-t border-[#8B4513]/20 w-full'>
                          <p className='text-sm font-semibold text-[#6A3E2E]'>
                            Proof of Identity (POI)
                          </p>
                          <p className='text-xs text-[#8B4513]/50 mt-1'>
                            PDF, JPG, PNG, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                          <svg className='w-8 h-8 text-green-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className='text-base text-green-700 font-medium mb-2'>
                          File uploaded successfully!
                        </p>
                        <button
                          onClick={() => triggerFileInput(poiInputRef)}
                          className='text-sm text-[#FF8C00] hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'
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
                  className={`border-2 border-dashed rounded-xl p-8 bg-[#FFF7ED]/20 
                    transition-all duration-300 group h-full flex flex-col items-center justify-center 
                    min-h-[280px] ${institutionDocs?.proofOfAddress 
                      ? 'border-[#4CAF50] bg-green-50' 
                      : 'border-[#8B4513]/30 hover:border-[#FF8C00] hover:bg-[#FFF7ED]/40'
                    }`}
                >
                  <div className='flex flex-col items-center text-center w-full'>
                    {!institutionDocs?.proofOfAddress ? (
                      <>
                        <div className='w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FFEDD5] transition-all duration-300'>
                          <svg className='w-8 h-8 text-[#8B4513]/60 group-hover:text-[#FF8C00] transition-all duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        
                        <div className='space-y-2'>
                          <p className='text-base text-[#6A3E2E] font-medium'>
                            Drag file here or click to
                          </p>
                          <button
                            onClick={() => triggerFileInput(poaInputRef)}
                            className='relative cursor-pointer'
                            type="button"
                          >
                            <span className='text-[#FF8C00] font-semibold hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'>
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
                        
                        <div className='mt-6 pt-4 border-t border-[#8B4513]/20 w-full'>
                          <p className='text-sm font-semibold text-[#6A3E2E]'>
                            Proof of Address (POA)
                          </p>
                          <p className='text-xs text-[#8B4513]/50 mt-1'>
                            PDF, JPG, PNG, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4'>
                          <svg className='w-8 h-8 text-green-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className='text-base text-green-700 font-medium mb-2'>
                          File uploaded successfully!
                        </p>
                        <button
                          onClick={() => triggerFileInput(poaInputRef)}
                          className='text-sm text-[#FF8C00] hover:text-[#6A3E2E] transition-colors duration-300 underline underline-offset-4'
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

            <div className='mt-8 p-4 bg-[#FFF7ED] rounded-lg border border-[#8B4513]/20'>
              <div className='flex items-start gap-2'>
                <svg className='w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className='text-sm text-[#8B4513]/70'>
                    Documents must be clear, legible, and not older than 6 months. The name should match your institution's registered name.
                  </p>
                  <p className='text-xs text-[#8B4513]/50 mt-1'>
                    Accepted formats: PDF, JPEG, PNG, DOC, DOCX (Max 5MB per file)
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-6 flex gap-4 justify-end'>
              <div className='flex items-center gap-2'>
                <div className={`w-3 h-3 rounded-full ${institutionDocs?.proofOfIdentity ? 'bg-green-500' : 'bg-[#8B4513]/20'}`}></div>
                <span className='text-xs text-[#6A3E2E]'>Proof of Identity {institutionDocs?.proofOfIdentity ? '✓' : 'Pending'}</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className={`w-3 h-3 rounded-full ${institutionDocs?.proofOfAddress ? 'bg-green-500' : 'bg-[#8B4513]/20'}`}></div>
                <span className='text-xs text-[#6A3E2E]'>Proof of Address {institutionDocs?.proofOfAddress ? '✓' : 'Pending'}</span>
              </div>
            </div>

            <div className='flex justify-between items-center gap-4 pt-8 mt-6 border-t border-[#8B4513]/10'>
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

              <button 
                onClick={handleSubmit}
                disabled={!areDocumentsUploaded()}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                         flex items-center gap-2 group
                         ${!areDocumentsUploaded()
                           ? 'bg-gray-400 cursor-not-allowed opacity-50'
                           : 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200] cursor-pointer'
                         }`}
              >
                Submit Registration
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InstitutionDocuments;