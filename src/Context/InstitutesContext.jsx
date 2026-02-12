import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    institutionDetails: {
      instituteType: "",
      universityType: "",
      educationMedium: {
        hindi: false,
        english: false
      }
    },

    aboutInstitution: {
      instituteName: "",
      aboutInstitute: ""
    }
  });

  /*
    Universal change handler

    section → institutionDetails / aboutInstitution
    field   → instituteType / educationMedium / instituteName
    name    → hindi / english (ONLY for nested objects)
    value   → new value
  */
  const handleChange = (section, field, name, value) => {
    setFormData(prev => {

      const sectionData = prev[section];

      return {
        ...prev,
        [section]: {
          ...sectionData,

          [field]: name
            ? {
                ...(sectionData[field] || {}),   // ✅ SAFE SPREAD
                [name]: value
              }
            : value
        }
      };
    });
  };

  return (
    <UserContext.Provider value={{ formData, setFormData, handleChange }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
