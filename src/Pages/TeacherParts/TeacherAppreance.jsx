import React, { useContext, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { useNavigate } from 'react-router-dom'
import { TeacherContext } from '../../Context/TeacherContext'

const TeacherAppearance = () => {
    const navigate = useNavigate()
    const { profilePicture, setProfilePicture, teacherFormData, handleProfileChange, handleChange } = useContext(TeacherContext)
    console.log("this is form data appreance", teacherFormData)

    const handleNavigate = () => {
        const userId = localStorage.getItem('userId')
        navigate(`/teacher/${userId}/social-media`)
    }

    // Handle file input separately - don't use value binding
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Call your context handler
            handleProfileChange(e);
        }
    };

    // Section order for progress steps
    const sectionOrder = [
        "Personal Details",
        "Academics Details",
        "Additional Details",
        "Time Table",
        "Assignments",
        "Attendance",
        "Students",
        "Leave Management",
        "Exam & Results",
        "Settings"
    ]

    // Get current section index (Appearance is under Personal Details)
    const currentSectionIndex = 0 // Personal Details section

    return (
        <section className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
            {/* Sidebar */}
            <div className='lg:flex-shrink-0'>
                <Sidebar currentSection="appearance" />
            </div>

            {/* Main Content Area */}
            <section className='flex-1 w-full p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-hidden'>
                <div className='max-w-4xl mx-auto w-full'>

                    {/* Header Section */}
                    <div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-5 md:mb-6'>
                        <div>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A3E2E]'>Appearance</h1>
                            <p className='text-sm sm:text-base text-gray-600 mt-1'>Personalize your institute account</p>
                        </div>
                        <div className='w-full sm:w-auto sm:max-w-xs'>
                            <Trouble />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[#8B4513]/10 overflow-hidden'>
                        <div className='p-4 sm:p-5 md:p-6 lg:p-8 space-y-5 sm:space-y-6 md:space-y-8'>

                            {/* Profile Picture Upload */}
                            <div className='space-y-3 sm:space-y-4'>
                                <label className='block text-sm sm:text-base font-medium text-[#6A3E2E]'>
                                    Upload your profile picture
                                </label>

                                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="profilePicture"
                                        onChange={handleFileChange}
                                        className="w-full sm:w-auto text-xs sm:text-sm text-gray-500
                                            file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4
                                            file:rounded-lg file:border-0
                                            file:text-xs sm:file:text-sm file:font-semibold
                                            file:bg-orange-50 file:text-orange-700
                                            hover:file:bg-orange-100
                                            file:cursor-pointer cursor-pointer
                                            border border-gray-200 rounded-lg p-1"
                                    />
                                    
                                    {/* Preview button (optional) */}
                                    {profilePicture && profilePicture.name && (
                                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-all duration-300">
                                            Preview
                                        </button>
                                    )}
                                </div>

                                {/* Show selected filename */}
                                {profilePicture && profilePicture.name && (
                                    <div className='flex items-center gap-2 mt-2'>
                                        <div className='w-1.5 h-1.5 bg-green-500 rounded-full'></div>
                                        <p className='text-xs sm:text-sm text-green-600 break-all'>
                                            ✓ {profilePicture.name} selected
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Image Quality Note */}
                            <div className='p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg'>
                                <div className='flex items-start gap-2'>
                                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className='text-xs sm:text-sm text-amber-800'>
                                        <span className='font-medium'>Image Quality:</span> To avoid issues during uploading, ensure your profile picture does not exceed the 1MB file size limit. A smaller image will work perfectly.
                                    </p>
                                </div>
                            </div>

                            {/* Institute Website */}
                            <div className='space-y-2 sm:space-y-3'>
                                <label className='block text-sm sm:text-base font-medium text-[#6A3E2E]'>
                                    Add a Institute's Website
                                </label>
                                <div className='relative'>
                                    <input
                                        type="url"
                                        name='websiteUrl'
                                        value={teacherFormData.websiteUrl || ''}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg 
                                            focus:ring-2 focus:ring-[#FF8C00] focus:border-[#FF8C00] 
                                            outline-none transition-all duration-200
                                            bg-[#FFF7ED]/30 focus:bg-white text-sm sm:text-base"
                                        placeholder="https://example.com"
                                    />
                                </div>
                                <p className='text-xs text-gray-500 mt-1'>
                                    Enter your institution's official website URL
                                </p>
                            </div>

                            {/* Progress Indicator */}
                            <div className='mt-4 sm:mt-5 md:mt-6 bg-[#FFF7ED] p-3 sm:p-4 rounded-lg'>
                                <p className='text-xs sm:text-sm text-[#8B4513]'>
                                    <span className='font-semibold'>Step 4 of 10:</span> Appearance Settings
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200'>
                                <button
                                    onClick={() => {
                                        const userId = localStorage.getItem('userId')
                                        navigate(`/teacher/${userId}/personal-details/about-you`)
                                    }}
                                    className='w-full sm:w-auto order-2 sm:order-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-[#8B4513] text-[#8B4513] 
                                             rounded-lg font-semibold transition-all duration-300 
                                             flex items-center justify-center gap-2 group text-sm sm:text-base
                                             hover:bg-[#FFF7ED] hover:border-[#FF8C00] hover:text-[#FF8C00]'
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Previous
                                </button>

                                <button
                                    onClick={handleNavigate}
                                    className='w-full sm:w-auto order-1 sm:order-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 
                                             flex items-center justify-center gap-2 group text-sm sm:text-base
                                             bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white hover:shadow-lg hover:from-[#6A3E2E] hover:to-[#C46200]'
                                >
                                    Next
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
                                                    index === 0
                                                        ? 'bg-[#8B4513]'
                                                        : index < 0
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
                                    Step 4 of 10: Appearance
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default TeacherAppearance