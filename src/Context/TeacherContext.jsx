import React, { createContext, useState } from "react";
export const TeacherContext = createContext();
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TeacherProvider = ({ children }) => {
  // const navigate= useNavigate()
  const [profilePicture, setProfilePicture] = useState(null);
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
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });

  console.log("This is for Teacher data from context api", teacherFormData);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setTeacherFormData({
        ...teacherFormData,
        [name]: files[0] || null,
      });
    } else {
      setTeacherFormData({
        ...teacherFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !teacherFormData.FirstName ||
      !teacherFormData.DateOfBirth ||
      !teacherFormData.LastName ||
      !teacherFormData.facebook ||
      !teacherFormData.gender ||
      !teacherFormData.instagram ||
      !teacherFormData.linkedin ||
      !teacherFormData.twitter ||
      !teacherFormData.websiteUrl ||
      !teacherFormData.youtube
    ) {
      return Swal.fire("All fields are required");
    }
    try {
      const response = await axios.post(
        `https://yuvamanthanbackend.onrender.com

/api/teacher/${id}`,
        teacherFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("response", response);
      Swal.fire("Teacher Completed their profile ");
    } catch (error) {
      console.log("error", error);
      Swal.fire("Internal server error");
    }
  };

  return (
    <TeacherContext.Provider
      value={{
        teacherFormData,
        handleChange,
        setTeacherFormData,
        handleProfileChange,
        profilePicture,
        setProfilePicture,
        handleSubmit,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherProvider;
