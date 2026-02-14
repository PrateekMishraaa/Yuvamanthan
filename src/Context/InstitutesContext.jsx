import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [logo, setLogo] = useState(null);
  const [userId, setUserId] = useState(null); // Changed from institutionId to userId for clarity
  const [institutionDocId, setInstitutionDocId] = useState(null); // To store the actual institution _id
  const [institutionDocs, setInstitutionDocs] = useState({
    proofOfIdentity: null,
    proofOfAddress: null,
    otherDocuments: []
  });

  // Get user ID from multiple sources
  useEffect(() => {
    // Try to get ID from multiple storage keys
    const storedId = localStorage.getItem('userId') || 
                     localStorage.getItem('id') ||
                     localStorage.getItem('institutionId');
    
    // Also try to get from URL params if available
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlId = urlParams.get('id');
      if (urlId) {
        setUserId(urlId);
        localStorage.setItem('userId', urlId);
      } else if (storedId) {
        setUserId(storedId);
        localStorage.setItem('userId', storedId);
      }
    } catch (error) {
      console.error('Error parsing URL:', error);
      if (storedId) {
        setUserId(storedId);
      }
    }
  }, []);

  // Function to update ID from props or params
  const updateUserId = (id) => {
    if (id) {
      setUserId(id);
      localStorage.setItem('userId', id);
    }
  };

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
    
    appearance: [{
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
      ManagerType: "Moderator"
    }]
  });

  console.log("Form data from context:", formData);
  console.log("Current userId:", userId);

  // Load saved form data when ID changes
  useEffect(() => {
    if (userId) {
      const savedData = localStorage.getItem(`instituteFormData_${userId}`);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(prev => ({
            ...prev,
            ...parsedData
          }));
        } catch (error) {
          console.error('Error parsing saved form data:', error);
        }
      }
    }
  }, [userId]);

  // Handle all form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const parts = name.split('.');
      
      if (parts.length === 3) {
        const [section, indexStr, field] = parts;
        const index = parseInt(indexStr);
        
        setFormData(prev => {
          const newData = {
            ...prev,
            [section]: prev[section].map((item, i) => 
              i === index ? { ...item, [field]: value } : item
            )
          };
          
          if (userId) {
            localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
          }
          
          return newData;
        });
      } else if (parts.length === 2) {
        const [section, field] = parts;
        setFormData(prev => {
          const newData = {
            ...prev,
            [section]: {
              ...prev[section],
              [field]: type === 'checkbox' ? checked : value
            }
          };
          
          if (userId) {
            localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
          }
          
          return newData;
        });
      }
    } else {
      setFormData(prev => {
        const newData = {
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        };
        
        if (userId) {
          localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
        }
        
        return newData;
      });
    }
  };

  // Handle document upload
  const handleDocumentUpload = (docType, file) => {
    if (file) {
      const validTypes = [
        'application/pdf', 
        'image/jpeg', 
        'image/png', 
        'image/jpg',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!validTypes.includes(file.type)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File',
          text: 'Please upload a valid file (PDF, JPEG, PNG, DOC, DOCX)'
        });
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'File size should be less than 5MB'
        });
        return;
      }

      const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      
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

      const fieldName = docType === 'proofOfIdentity' ? 'ProofOfIdentity' : 'ProofOfAddress';
      
      setFormData(prev => {
        const newData = {
          ...prev,
          instituteDocuments: [
            {
              ...prev.instituteDocuments[0],
              [fieldName]: file.name
            }
          ]
        };
        
        if (userId) {
          localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
        }
        
        return newData;
      });
    }
  };

  // Handle document removal
  const handleDocumentRemove = (docType) => {
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

    const fieldName = docType === 'proofOfIdentity' ? 'ProofOfIdentity' : 'ProofOfAddress';
    
    setFormData(prev => {
      const newData = {
        ...prev,
        instituteDocuments: [
          {
            ...prev.instituteDocuments[0],
            [fieldName]: ""
          }
        ]
      };
      
      if (userId) {
        localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
      }
      
      return newData;
    });
  };

  // Handle logo change
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File',
          text: 'Please upload a valid image file (JPEG, PNG, SVG, WEBP)'
        });
        return;
      }

      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'File size should be less than 2MB'
        });
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      
      setLogo({
        file,
        preview: previewUrl,
        name: file.name,
        type: file.type,
        size: file.size
      });

      setFormData(prev => {
        const newData = {
          ...prev,
          appearance: [
            {
              ...prev.appearance[0],
              instituteLogo: file.name
            }
          ]
        };
        
        if (userId) {
          localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
        }
        
        return newData;
      });
    }
  };

  // Handle logo removal
  const handleLogoRemove = () => {
    if (logo?.preview) {
      URL.revokeObjectURL(logo.preview);
    }
    setLogo(null);
    
    setFormData(prev => {
      const newData = {
        ...prev,
        appearance: [
          {
            ...prev.appearance[0],
            instituteLogo: ""
          }
        ]
      };
      
      if (userId) {
        localStorage.setItem(`instituteFormData_${userId}`, JSON.stringify(newData));
      }
      
      return newData;
    });
  };

  // Handle form submission - UPDATED to work with your backend
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    try {
      // Get userId (not institution _id)
      const id = userId || localStorage.getItem('userId') || localStorage.getItem('id');
      
      console.log("Attempting to submit with userId:", id);
      
      if (!id) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'User ID not found. Please login again.',
          confirmButtonColor: '#3085d6'
        });
        return;
      }

      // Update userId in state
      setUserId(id);
      localStorage.setItem('userId', id);

      // Show loading
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Prepare the update data
      const updatedData = {
        instituteDetails: formData.instituteDetails,
        aboutInstitution: formData.aboutInstitution,
        instituteAddress: formData.instituteAddress,
        appearance: formData.appearance,
        socialLinks: formData.socialLinks,
        InstitutePersonalInfo: formData.InstitutePersonalInfo,
        instituteDocuments: formData.instituteDocuments,
        MailingAddress: formData.MailingAddress,
        StudentTeacherWithoutVerification: formData.StudentTeacherWithoutVerification,
        AccountManagerDetails: formData.AccountManagerDetails
      };

      console.log("Submitting data for userId:", id);
      console.log("Updated data:", updatedData);

      // Make API call - using the PUT endpoint that handles both userId and _id
      const response = await axios.put(
        `http://localhost:5000/api/institutions/institution-profile/${id}`,
        updatedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 30000
        }
      );

      console.log("Submission response:", response);

      if (response.status === 200 || response.status === 201) {
        // Save the institution document ID if returned
        if (response.data.data && response.data.data._id) {
          setInstitutionDocId(response.data.data._id);
          localStorage.setItem('institutionDocId', response.data.data._id);
        }
        
        // Clear saved form data after successful submission
        localStorage.removeItem(`instituteFormData_${id}`);
        
        const message = response.status === 201 
          ? 'Institution profile created successfully' 
          : 'Institution profile updated successfully';
        
        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.message || message,
          confirmButtonColor: '#3085d6',
          timer: 3000
        });
        

        setFormData({
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
    
    appearance: [{
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
      ManagerType: "Moderator"
    }]
        })
        // Navigate to dashboard
        // navigate('/institution/dashboard');
      }
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.response) {
        console.log("Error response data:", error.response.data);
        errorMessage = error.response.data.message || 
                      error.response.data.error || 
                      `Server error: ${error.response.status}`;
        
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.join(', ');
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please try again.';
      }

      Swal.fire({
        icon: 'error',
        title: 'Operation Failed',
        text: errorMessage,
        confirmButtonColor: '#3085d6'
      });
    }
  };

  // Reset form
  const resetForm = () => {
    if (logo?.preview) {
      URL.revokeObjectURL(logo.preview);
    }
    setLogo(null);
    
    Object.values(institutionDocs).forEach(doc => {
      if (doc?.preview) {
        URL.revokeObjectURL(doc.preview);
      }
    });

    setInstitutionDocs({
      proofOfIdentity: null,
      proofOfAddress: null,
      otherDocuments: []
    });

    const emptyFormData = {
      instituteDetails: [{ typeOfInstitute: "", typeOfUniversity: "", educationMedium: "" }],
      aboutInstitution: [{ instituteName: "", aboutInstitute: "" }],
      instituteAddress: [{ country: "", state: "", district: "", streetAddress: "", city: "", pincode: "" }],
      appearance: [{ instituteLogo: "", instituteWebsite: "" }],
      socialLinks: [{ faceBook: "", twitter: "", linkedIn: "", instagram: "", youtube: "" }],
      InstitutePersonalInfo: [{ Firstname: "", lastName: "", Phone: "", AssociatedWithInstitute: "" }],
      instituteDocuments: [{ ProofOfIdentity: "", ProofOfAddress: "" }],
      MailingAddress: [{ Country: "", State: "", District: "", StreetAddress: "", City: "", Pincode: "" }],
      StudentTeacherWithoutVerification: false,
      AccountManagerDetails: [{ Fullname: "", Designation: "", Email: "", Phone: "", ManagerType: "Moderator" }]
    };

    setFormData(emptyFormData);
    
    if (userId) {
      localStorage.removeItem(`instituteFormData_${userId}`);
    }
  };

  // Fetch institution data - UPDATED to work with your backend
  const fetchInstitutionData = async (id) => {
    try {
      const fetchId = id || userId || localStorage.getItem('userId');
      
      if (!fetchId) {
        console.error('No ID provided for fetching institution data');
        return;
      }

      console.log("Fetching institution data for userId:", fetchId);

      const response = await axios.get(
        `http://localhost:5000/api/institutions/institution/${fetchId}`
      );
      
      if (response.data.success && response.data.data) {
        const data = response.data.data;
        
        // Save the institution document ID
        if (data._id) {
          setInstitutionDocId(data._id);
          localStorage.setItem('institutionDocId', data._id);
        }
        
        const fetchedData = {
          instituteDetails: data.instituteDetails || [{ typeOfInstitute: "", typeOfUniversity: "", educationMedium: "" }],
          aboutInstitution: data.aboutInstitution || [{ instituteName: "", aboutInstitute: "" }],
          instituteAddress: data.instituteAddress || [{ country: "", state: "", district: "", streetAddress: "", city: "", pincode: "" }],
          appearance: data.appearance || [{ instituteLogo: "", instituteWebsite: "" }],
          socialLinks: data.socialLinks || [{ faceBook: "", twitter: "", linkedIn: "", instagram: "", youtube: "" }],
          InstitutePersonalInfo: data.InstitutePersonalInfo || [{ Firstname: "", lastName: "", Phone: "", AssociatedWithInstitute: "" }],
          instituteDocuments: data.instituteDocuments || [{ ProofOfIdentity: "", ProofOfAddress: "" }],
          MailingAddress: data.MailingAddress || [{ Country: "", State: "", District: "", StreetAddress: "", City: "", Pincode: "" }],
          StudentTeacherWithoutVerification: data.StudentTeacherWithoutVerification || false,
          AccountManagerDetails: data.AccountManagerDetails || [{ Fullname: "", Designation: "", Email: "", Phone: "", ManagerType: "Moderator" }]
        };
        
        setFormData(fetchedData);
        
        // Save to localStorage
        localStorage.setItem(`instituteFormData_${fetchId}`, JSON.stringify(fetchedData));
        
        console.log("Institution data fetched successfully:", fetchedData);
      }
    } catch (error) {
      console.error('Error fetching institution data:', error);
      
      // If 404, that's fine - means no institution exists yet
      if (error.response?.status === 404) {
        console.log('No institution found for this user. Please create one.');
        // Don't show error for 404, just log it
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to load institution data',
          confirmButtonColor: '#3085d6'
        });
      }
    }
  };

  // Upload files separately
  const uploadFiles = async () => {
    console.log("File upload functionality would go here");
  };

  // Check if institution exists
  const checkInstitutionExists = async () => {
    try {
      const id = userId || localStorage.getItem('userId');
      if (!id) return false;
      
      const response = await axios.get(
        `http://localhost:5000/api/institutions/institution/${id}`
      );
      
      return response.data.success && response.data.data;
    } catch (error) {
      return false;
    }
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
      handleDocumentRemove,
      handleSubmit,
      userId, // Changed from institutionId to userId
      setUserId: updateUserId, // Changed from setInstitutionId
      institutionDocId, // Added to expose the actual institution _id
      fetchInstitutionData,
      resetForm,
      uploadFiles,
      checkInstitutionExists // Added helper function
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;