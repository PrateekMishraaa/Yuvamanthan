import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    institutionDetails: {
      instituteType: "",        // ← should be SINGLE value (important)
      universityType: "",
      educationMedium: {
        hindi: false,
        english: false
      }
    }
  });

  /*
    Generic deep updater
    section = "institutionDetails"
    field   = "educationMedium"
    name    = "hindi"
    value   = true
  */
  const handleChange = (section, field, name, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: name
          ? {
              ...prev[section][field],
              [name]: value
            }
          : value
      }
    }));
  };

  return (
    <UserContext.Provider value={{ formData, setFormData, handleChange }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
