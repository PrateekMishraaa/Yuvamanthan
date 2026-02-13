import React, { useContext, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Trouble from '../../Components/Trouble/Trouble'
import { useNavigate } from 'react-router-dom'
import { TeacherContext } from '../../Context/TeacherContext'

const TeacherAppearance = () => {
    const navigate = useNavigate()
    const { profilePicture, setProfilePicture,teacherFormData, handleProfileChange,handleChange } = useContext(TeacherContext)
 

    // Handle file input separately - don't use value binding
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Call your context handler
            handleProfileChange(e);
        }
    };

    return (
        <>
            <section className='flex min-h-screen bg-gray-50'>
                <Sidebar />

                <section className='flex-1 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-6'>
                    <div className='max-w-3xl mx-auto'>

                        {/* Header Section */}
                        <div className='flex justify-between items-start mb-6'>
                            <div>
                                <h1 className='text-3xl font-bold text-gray-800'>Appearance</h1>
                                <p className='text-gray-600 mt-1'>Personalize your institute account</p>
                            </div>
                            <Trouble />
                        </div>

                        {/* Main Content */}
                        <div className='bg-white rounded-xl shadow-sm p-6'>

                            {/* Profile Picture Upload */}
                            <div className='mb-6'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Upload your profile picture
                                </label>

                                <div className='flex items-center gap-4'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="profilePicture"
                                        // REMOVE the value attribute completely
                                        // value={profilePicture} ← THIS CAUSES THE ERROR
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-lg file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-orange-50 file:text-orange-700
                                            hover:file:bg-orange-100
                                            file:cursor-pointer cursor-pointer"
                                    />
                                </div>

                                {/* Show selected filename */}
                                {profilePicture && profilePicture.name && (
                                    <p className='mt-2 text-sm text-green-600'>
                                        ✓ {profilePicture.name} selected
                                    </p>
                                )}
                            </div>

                            {/* Image Quality Note */}
                            <div className='mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
                                <p className='text-sm text-amber-800'>
                                    <span className='font-medium'>Image Quality:</span> To avoid issues during uploading, ensure your profile picture does not exceed the 1MB file size limit. A smaller image will work perfectly.
                                </p>
                            </div>

                            {/* Institute Website */}
                            <div className='mb-6'>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Add a Institute's Website
                                </label>
                                <input
                                    type="url"
                                    name='websiteUrl'
                                    value={teacherFormData.websiteUrl}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                        focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                                        outline-none transition-all duration-200
                                        bg-gray-50 focus:bg-white"
                                    placeholder="https://example.com"
                                />
                            </div>

                            {/* Save Button */}
                            <div className='flex justify-end'>
                                <button 
                                    onClick={() => navigate('/teacher/social-media')} 
                                    className='px-6 py-2 bg-orange-500 text-white rounded-lg 
                                        hover:bg-orange-600 transition-colors duration-200 font-medium
                                        focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                                >
                                    Save Changes
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default TeacherAppearance