import React, { createContext, useState } from 'react';
export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
    const [profilePicture,setProfilePicture] = useState(null)
    // console.log("this is profile data",profilePicture)
    const [teacherFormData, setTeacherFormData] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        DateOfBirth: "",
        gender: [],
        ProfilePic: null,
        websiteUrl: "",
        instagram: "",
        facebook:"",
        twitter: "",
        linkedin: "",
        youtube: "",
    });

    // console.log("This is for Teacher data", teacherFormData);


    const handleProfileChange=(e)=>{
        const file = e.target.files[0]
        if(file){
            setProfilePicture(file)
        }
    }
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === "file") {
            setTeacherFormData({
                ...teacherFormData,
                [name]: files[0] || null
            });
        } else {
            setTeacherFormData({
                ...teacherFormData,
                [name]: value
            });
        }
    };

    return (
        <TeacherContext.Provider value={{ 
            teacherFormData,
            handleChange,
            setTeacherFormData,
            handleProfileChange,
            profilePicture,
            setProfilePicture
        }}>
            {children}
        </TeacherContext.Provider>
    );
};

export default TeacherProvider;