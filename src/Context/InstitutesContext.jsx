import React, { createContext, useState } from 'react';
import axios from "axios"
import Swal from "sweetalert2"
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [institutionDocs, setInstitutionDocs] = useState({
    proofOfIdentity: null,
    proofOfAddress: null,
    
  });
console.log("This is institution docs",institutionDocs)
const [formData, setFormData] = useState({
  instituteDetails: [{
    typeOfInstitute: "",
    typeOfUniversity: "",
    educationMedium: ""
  }],
  
  aboutInstitution: [{
    instituteName: "",
    aboutInstitute: ""
  }],
  
  instituteAddress: [{
    country: "",
    state: "",
    district: "",
    streetAddress: "",
    city: "",
    pincode: ""
  }],
  
  appreance: [{
    instituteLogo: "",
    instituteWebsite: ""
  }],
  
  socialLinks: [{
    faceBook: "",
    twitter: "",
    linkedIn: "",
    instagram: "",
    youtube: ""
  }],
  
  InstitutePersonalInfo: [{
    Firstname: "",
    lastName: "",
    Phone: "",
    AssociatedWithInstitute: ""
  }],
  
  instituteDocuments: [{
    ProofOfIdentity: "",
    ProofOfAddress: ""
  }],
  
  MailingAddress: [{
    Country: "",
    State: "",
    District: "",
    StreetAddress: "",
    City: "",
    Pincode: ""
  }],
  
  StudentTeacherWithoutVerification: false,
  
  AccountManagerDetails: [{
    Fullname: "",
    Designation: "",
    Email: "",
    Phone: "",
    ManagerTpe: "Moderator" // Default value set as per schema
  }]
});
  console.log("This is all formdata", formData);

  // Handle all form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle nested paths like 'AboutYou.firstName'
    if (name.includes('.')) {
      const [section, field, subField] = name.split('.');
      
      setFormData(prev => {
        if (subField) {
          // Handle triple nested (e.g., educationMedium.hindi)
          return {
            ...prev,
            [section]: {
              ...prev[section],
              [field]: {
                ...prev[section]?.[field],
                [subField]: type === 'checkbox' ? checked : value
              }
            }
          };
        } else {
          // Handle double nested (e.g., AboutYou.firstName)
          return {
            ...prev,
            [section]: {
              ...prev[section],
              [field]: value
            }
          };
        }
      });
    } else {
      // Handle top-level fields
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };


  // Handle document upload
  const handleDocumentUpload = (docType, file) => {
    if (file) {
      // Check file type
      const validTypes = [
        'application/pdf', 
        'image/jpeg', 
        'image/png', 
        'image/jpg',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid file (PDF, JPEG, PNG, DOC, DOCX)');
        return;
      }

      // Check file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      // Create preview URL for images, otherwise just store file info
      const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      
      // Update institutionDocs state
      setInstitutionDocs(prev => ({
        ...prev,
        [docType]: {
          file,
          preview: previewUrl,
          name: file.name,
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString()
        }
      }));

      // Save to formData documents section
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docType]: {
            file,
            preview: previewUrl,
            name: file.name,
            type: file.type,
            size: file.size,
            uploadedAt: new Date().toISOString()
          }
        }
      }));
    }
  };

  // Handle multiple document upload (for other documents)
  const handleOtherDocumentsUpload = (files) => {
    const fileArray = Array.from(files);
    const uploadedFiles = [];
    
    fileArray.forEach(file => {
      // Check file type
      const validTypes = [
        'application/pdf', 
        'image/jpeg', 
        'image/png', 
        'image/jpg',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!validTypes.includes(file.type)) {
        alert(`Invalid file type: ${file.name}. Please upload PDF, JPEG, PNG, DOC, DOCX`);
        return;
      }

      // Check file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert(`File too large: ${file.name}. Size should be less than 5MB`);
        return;
      }

      const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      
      uploadedFiles.push({
        file,
        preview: previewUrl,
        name: file.name,
        type: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString()
      });
    });

    // Update institutionDocs state
    setInstitutionDocs(prev => ({
      ...prev,
      otherDocuments: [...(prev.otherDocuments || []), ...uploadedFiles]
    }));

    // Save to formData
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        otherDocuments: [...(prev.documents.otherDocuments || []), ...uploadedFiles]
      }
    }));
  };

  // Handle document removal
  const handleDocumentRemove = (docType, index = null) => {
    // Revoke object URL to prevent memory leaks
    if (docType === 'otherDocuments' && index !== null) {
      // Remove from otherDocuments array
      setInstitutionDocs(prev => {
        const docToRemove = prev.otherDocuments?.[index];
        if (docToRemove?.preview) {
          URL.revokeObjectURL(docToRemove.preview);
        }
        
        const updatedDocs = [...(prev.otherDocuments || [])];
        updatedDocs.splice(index, 1);
        
        return {
          ...prev,
          otherDocuments: updatedDocs
        };
      });

      setFormData(prev => {
        const updatedDocs = [...(prev.documents.otherDocuments || [])];
        updatedDocs.splice(index, 1);
        
        return {
          ...prev,
          documents: {
            ...prev.documents,
            otherDocuments: updatedDocs
          }
        };
      });
    } else {
      // Remove single document
      setInstitutionDocs(prev => {
        const docToRemove = prev[docType];
        if (docToRemove?.preview) {
          URL.revokeObjectURL(docToRemove.preview);
        }
        
        return {
          ...prev,
          [docType]: null
        };
      });

      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docType]: null
        }
      }));
    }
  };

  // Handle logo file upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPEG, PNG, SVG, WEBP)');
        return;
      }

      // Check file size (max 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        alert('File size should be less than 2MB');
        return;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      // Update both logo state and formData
      setLogo({
        file,
        preview: previewUrl,
        name: file.name,
        type: file.type,
        size: file.size
      });

      // Save to formData as well
      setFormData(prev => ({
        ...prev,
        appearance: {
          ...prev.appearance,
          logo: {
            file,
            preview: previewUrl,
            name: file.name,
            type: file.type,
            size: file.size
          }
        }
      }));
    }
  };

  // Handle logo removal
  const handleLogoRemove = () => {
    // Revoke object URL to prevent memory leaks
    if (logo?.preview) {
      URL.revokeObjectURL(logo.preview);
    }
    
    setLogo(null);
    
    setFormData(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        logo: null
      }
    }));
    
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Validate required fields before submission
    const validationErrors = [];
    
    // Check instituteDetails
    if (!formData.instituteDetails[0]?.typeOfInstitute) validationErrors.push("Type of Institute is required");
    if (!formData.instituteDetails[0]?.typeOfUniversity) validationErrors.push("Type of University is required");
    if (!formData.instituteDetails[0]?.educationMedium) validationErrors.push("Education Medium is required");
    
    // Check aboutInstitution
    if (!formData.aboutInstitution[0]?.instituteName) validationErrors.push("Institute Name is required");
    if (!formData.aboutInstitution[0]?.aboutInstitute) validationErrors.push("About Institute is required");
    
    // Check instituteAddress
    if (!formData.instituteAddress[0]?.country) validationErrors.push("Country is required");
    if (!formData.instituteAddress[0]?.state) validationErrors.push("State is required");
    if (!formData.instituteAddress[0]?.district) validationErrors.push("District is required");
    if (!formData.instituteAddress[0]?.streetAddress) validationErrors.push("Street Address is required");
    if (!formData.instituteAddress[0]?.city) validationErrors.push("City is required");
    if (!formData.instituteAddress[0]?.pincode) validationErrors.push("Pincode is required");
    
    // Check appearance
    if (!formData.appreance[0]?.instituteLogo) validationErrors.push("Institute Logo is required");
    if (!formData.appreance[0]?.instituteWebsite) validationErrors.push("Institute Website is required");
    
    // Check InstitutePersonalInfo
    if (!formData.InstitutePersonalInfo[0]?.Firstname) validationErrors.push("First Name is required");
    if (!formData.InstitutePersonalInfo[0]?.Phone) validationErrors.push("Phone number is required");
    if (formData.InstitutePersonalInfo[0]?.Phone && formData.InstitutePersonalInfo[0].Phone.length !== 10) {
      validationErrors.push("Phone number must be 10 digits");
    }
    
    // Check instituteDocuments
    if (!formData.instituteDocuments[0]?.ProofOfIdentity) validationErrors.push("Proof of Identity is required");
    if (!formData.instituteDocuments[0]?.ProofOfAddress) validationErrors.push("Proof of Address is required");
    
    // Check MailingAddress
    if (!formData.MailingAddress[0]?.Country) validationErrors.push("Mailing Country is required");
    if (!formData.MailingAddress[0]?.State) validationErrors.push("Mailing State is required");
    if (!formData.MailingAddress[0]?.District) validationErrors.push("Mailing District is required");
    if (!formData.MailingAddress[0]?.StreetAddress) validationErrors.push("Mailing Street Address is required");
    if (!formData.MailingAddress[0]?.City) validationErrors.push("Mailing City is required");
    if (!formData.MailingAddress[0]?.Pincode) validationErrors.push("Mailing Pincode is required");
    if (formData.MailingAddress[0]?.Pincode && formData.MailingAddress[0].Pincode.length !== 6) {
      validationErrors.push("Pincode must be 6 digits");
    }
    
    // Check AccountManagerDetails
    if (!formData.AccountManagerDetails[0]?.Fullname) validationErrors.push("Account Manager Full Name is required");
    if (!formData.AccountManagerDetails[0]?.Designation) validationErrors.push("Account Manager Designation is required");
    if (!formData.AccountManagerDetails[0]?.Email) validationErrors.push("Account Manager Email is required");
    if (!formData.AccountManagerDetails[0]?.Phone) validationErrors.push("Account Manager Phone is required");
    if (formData.AccountManagerDetails[0]?.Phone && formData.AccountManagerDetails[0].Phone.length !== 10) {
      validationErrors.push("Account Manager Phone must be 10 digits");
    }

    if (validationErrors.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        html: validationErrors.join('<br/>'),
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    // Show loading state
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Create FormData object for file uploads
    const submitData = new FormData();
    
    // Add all form fields as JSON strings
    submitData.append('instituteDetails', JSON.stringify(formData.instituteDetails));
    submitData.append('aboutInstitution', JSON.stringify(formData.aboutInstitution));
    submitData.append('instituteAddress', JSON.stringify(formData.instituteAddress));
    submitData.append('appreance', JSON.stringify(formData.appreance));
    submitData.append('socialLinks', JSON.stringify(formData.socialLinks));
    submitData.append('InstitutePersonalInfo', JSON.stringify(formData.InstitutePersonalInfo));
    submitData.append('MailingAddress', JSON.stringify(formData.MailingAddress));
    submitData.append('StudentTeacherWithoutVerification', formData.StudentTeacherWithoutVerification);
    submitData.append('AccountManagerDetails', JSON.stringify(formData.AccountManagerDetails));

    // Handle file uploads
    // Add logo file
    if (logo?.file) {
      submitData.append('logo', logo.file);
    }

    // Add document files
    if (institutionDocs?.proofOfIdentity?.file) {
      submitData.append('proofOfIdentity', institutionDocs.proofOfIdentity.file);
    }
    
    if (institutionDocs?.proofOfAddress?.file) {
      submitData.append('proofOfAddress', institutionDocs.proofOfAddress.file);
    }

    // Add other documents if any
    if (institutionDocs?.otherDocuments?.length > 0) {
      institutionDocs.otherDocuments.forEach((doc, index) => {
        submitData.append(`otherDocuments`, doc.file);
      });
    }

    // Make API call
    const response = await axios.post(
      'http://localhost:5000/api/institutions/register',
      submitData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000 // 30 seconds timeout
      }
    );

    // Handle success response
    if (response.data.success || response.status === 200 || response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.message || 'Institution registered successfully',
        confirmButtonColor: '#3085d6',
        timer: 3000
      });

      // Reset form after successful submission
      resetForm();
      
    } else {
      throw new Error(response.data.message || 'Registration failed');
    }

  } catch (error) {
    console.error('Submission error:', error);
    
    // Handle different types of errors
    let errorMessage = 'Something went wrong. Please try again.';
    
    if (error.response) {
      // Server responded with error status
      errorMessage = error.response.data.message || 
                    error.response.data.error || 
                    `Server error: ${error.response.status}`;
      
      // Handle specific error cases
      if (error.response.status === 400) {
        errorMessage = error.response.data.errors ? 
                      Object.values(error.response.data.errors).join(', ') : 
                      'Invalid data submitted';
      } else if (error.response.status === 409) {
        errorMessage = 'Institute already exists';
      } else if (error.response.status === 413) {
        errorMessage = 'Files are too large. Please reduce file sizes.';
      } else if (error.response.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      }
      
    } else if (error.request) {
      // Request was made but no response
      errorMessage = 'No response from server. Please check your connection.';
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout. Please try again.';
    }

    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: errorMessage,
      confirmButtonColor: '#3085d6'
    });
  }
};

// Reset form function
const resetForm = () => {
  // Clear logo
  if (logo?.preview) {
    URL.revokeObjectURL(logo.preview);
  }
  setLogo(null);
  
  // Clear document previews
  if (institutionDocs.proofOfIdentity?.preview) {
    URL.revokeObjectURL(institutionDocs.proofOfIdentity.preview);
  }
  if (institutionDocs.proofOfAddress?.preview) {
    URL.revokeObjectURL(institutionDocs.proofOfAddress.preview);
  }
  if (institutionDocs.otherDocuments) {
    institutionDocs.otherDocuments.forEach(doc => {
      if (doc.preview) URL.revokeObjectURL(doc.preview);
    });
  }

  // Reset institution docs
  setInstitutionDocs({
    proofOfIdentity: null,
    proofOfAddress: null,
    otherDocuments: []
  });

  // Reset form data to initial state
  setFormData({
    instituteDetails: [{ typeOfInstitute: "", typeOfUniversity: "", educationMedium: "" }],
    aboutInstitution: [{ instituteName: "", aboutInstitute: "" }],
    instituteAddress: [{ country: "", state: "", district: "", streetAddress: "", city: "", pincode: "" }],
    appreance: [{ instituteLogo: "", instituteWebsite: "" }],
    socialLinks: [{ faceBook: "", twitter: "", linkedIn: "", instagram: "", youtube: "" }],
    InstitutePersonalInfo: [{ Firstname: "", lastName: "", Phone: "", AssociatedWithInstitute: "" }],
    instituteDocuments: [{ ProofOfIdentity: "", ProofOfAddress: "" }],
    MailingAddress: [{ Country: "", State: "", District: "", StreetAddress: "", City: "", Pincode: "" }],
    StudentTeacherWithoutVerification: false,
    AccountManagerDetails: [{ Fullname: "", Designation: "", Email: "", Phone: "", ManagerTpe: "Moderator" }]
  });

  // Reset file inputs
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    if (input) input.value = '';
  });
};
  return (
    <UserContext.Provider value={{ 
      formData, 
      setFormData, 
      handleChange,
      logo,
      setLogo,
      handleLogoChange,
      handleLogoRemove,
      institutionDocs,
      setInstitutionDocs,
      handleDocumentUpload,
      handleOtherDocumentsUpload,
      handleDocumentRemove,
      handleSubmit
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;