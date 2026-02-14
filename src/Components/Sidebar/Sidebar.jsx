import React, { useState, useEffect } from 'react'
import Logo from "../../assets/NewLogo.png"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { 
  FaUniversity, 
  FaPhoneAlt, 
  FaCog, 
  FaUsers, 
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPalette,
  FaShareAlt,
  FaUserTie,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaGlobe,
  FaUser,
  FaBook,
  FaCalendarAlt,
  FaClock,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardList,
  FaTasks,
  FaQuestionCircle,
  FaCreditCard,
  FaBell,
  FaLock,
  FaLanguage,
  FaMoon,
  FaEye,
  FaDownload,
  FaTrash,
  FaAddressBook,
  FaIdCard,
  FaCertificate,
  FaBirthdayCake,
  FaVenusMars,
  FaHeart,
  FaQuoteRight,
  FaTshirt,
  FaRuler,
  FaWeight,
  FaPlusCircle,
  FaTrophy,
  FaExclamationTriangle,
  FaEdit
} from 'react-icons/fa'

const Sidebar = ({ currentSection }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    
    // Get user ID from params or localStorage
    const urlUserId = params.id
    const storedUserId = localStorage.getItem('userId')
    const effectiveUserId = urlUserId || storedUserId
    
    // Get user data
    const userToken = localStorage.getItem('userData')
    const user = userToken ? JSON.parse(userToken) : null
    const userRole = user?.role?.toLowerCase() || 'institution'
    
    console.log('Sidebar - User ID:', effectiveUserId)
    console.log('Sidebar - User Role:', userRole)
    
    // YuuthCommunity color theme
    const COLORS = {
        primary: {
            dark: "#6A3E2E",
            medium: "#8B4513",
            light: "#E07B00"
        },
        secondary: {
            dark: "#C46200",
            medium: "#FF8C00",
            light: "#FFA500"
        },
        background: {
            light: "#FFF7ED",
            lighter: "#FFEDD5",
            white: "#FFFFFF"
        }
    }

    const [activeMain, setActiveMain] = useState(0)
    const [activeSub, setActiveSub] = useState(0)

    // Get menu items based on user role
    const getSidebarItems = () => {
        // Institute/Admin menu items
        if (userRole === 'institution' || userRole === 'admin') {
            return [
                {
                    title: "Institute Details",
                    icon: <FaUniversity className="text-lg" />,
                    listing: ["Institution", "Overview", "Registered Address", "Appearance", "Social Presence", "About You", "Documents"],
                    path: "/institution",
                    basePath: `/institution/${effectiveUserId}`
                },
                {
                    title: "Contact Details",
                    icon: <FaPhoneAlt className="text-lg" />,
                    listing: ["Mailing Address"],
                    path: "/contact-details",
                    basePath: `/contact-details/${effectiveUserId}`
                },
                {
                    title: "Account Settings",
                    icon: <FaCog className="text-lg" />,
                    listing: [],
                    path: `/account-settings/${effectiveUserId}`,
                    basePath: `/account-settings/${effectiveUserId}`
                },
                {
                    title: "Account Managers",
                    icon: <FaUsers className="text-lg" />,
                    listing: [],
                    path: `/account-managers/${effectiveUserId}`,
                    basePath: `/account-managers/${effectiveUserId}`
                },
                {
                    title: "Complete",
                    icon: <FaCheckCircle className="text-lg" />,
                    listing: [],
                    path: `/complete/${effectiveUserId}`,
                    basePath: `/complete/${effectiveUserId}`
                },
            ]
        }
        
        // Teacher menu items
        else if (userRole === 'teacher' || userRole === 'faculty') {
            return [
                {
                    title: "Personal Details",
                    icon: <FaUser className="text-lg" />,
                    listing: ["About You", "Appearance", "Social Presence"],
                    path: "/teacher/personal-details",
                    basePath: `/teacher/personal-details/${effectiveUserId}`
                },
                {
                    title: "Academics Details",
                    icon: <FaBook className="text-lg" />,
                    listing: [
                        "Teaching Subjects",
                        "Class Teacher",
                        "Experience",
                        "Qualification",
                        "Certifications",
                        "Achievements"
                    ],
                    path: "/teacher/academics",
                    basePath: `/teacher/academics/${effectiveUserId}`
                },
                {
                    title: "Additional Details",
                    icon: <FaPlusCircle className="text-lg" />,
                    listing: [
                        "Contact Details",
                        "Address Details",
                        "Bank Details",
                        "Emergency Contact",
                        "Documents",
                        "Medical Information"
                    ],
                    path: "/teacher/additional",
                    basePath: `/teacher/additional/${effectiveUserId}`
                },
                {
                    title: "Time Table",
                    icon: <FaCalendarAlt className="text-lg" />,
                    listing: ["Class Schedule", "Exam Duty", "Meeting Schedule"],
                    path: "/teacher/timetable",
                    basePath: `/teacher/timetable/${effectiveUserId}`
                },
                {
                    title: "Assignments",
                    icon: <FaTasks className="text-lg" />,
                    listing: ["Create Assignment", "Pending Review", "Completed", "Drafts"],
                    path: "/teacher/assignments",
                    basePath: `/teacher/assignments/${effectiveUserId}`
                },
                {
                    title: "Attendance",
                    icon: <FaClipboardList className="text-lg" />,
                    listing: ["Mark Attendance", "Attendance Report", "Defaulter List"],
                    path: "/teacher/attendance",
                    basePath: `/teacher/attendance/${effectiveUserId}`
                },
                {
                    title: "Students",
                    icon: <FaUserGraduate className="text-lg" />,
                    listing: ["My Class Students", "All Students", "Student Reports"],
                    path: "/teacher/students",
                    basePath: `/teacher/students/${effectiveUserId}`
                },
                {
                    title: "Leave Management",
                    icon: <FaClock className="text-lg" />,
                    listing: ["Apply Leave", "Leave History", "Leave Balance"],
                    path: "/teacher/leave",
                    basePath: `/teacher/leave/${effectiveUserId}`
                },
                {
                    title: "Exam & Results",
                    icon: <FaChalkboardTeacher className="text-lg" />,
                    listing: ["Create Exam", "Enter Marks", "Results", "Report Cards"],
                    path: "/teacher/exams",
                    basePath: `/teacher/exams/${effectiveUserId}`
                },
                {
                    title: "Settings",
                    icon: <FaCog className="text-lg" />,
                    listing: [
                        "Profile Settings",
                        "Privacy",
                        "Notifications",
                        "Language",
                        "Theme",
                        "Security"
                    ],
                    path: "/teacher/settings",
                    basePath: `/teacher/settings/${effectiveUserId}`
                }
            ]
        }
        
        // Default to institute menu
        return [
            {
                title: "Institute Details",
                icon: <FaUniversity className="text-lg" />,
                listing: ["Institution", "Overview", "Registered Address", "Appearance", "Social Presence", "About You", "Documents"],
                path: "/institution",
                basePath: `/institution/${effectiveUserId}`
            },
            {
                title: "Contact Details",
                icon: <FaPhoneAlt className="text-lg" />,
                listing: ["Mailing Address"],
                path: "/contact-details",
                basePath: `/contact-details/${effectiveUserId}`
            },
            {
                title: "Account Settings",
                icon: <FaCog className="text-lg" />,
                listing: [],
                path: `/account-settings/${effectiveUserId}`,
                basePath: `/account-settings/${effectiveUserId}`
            },
            {
                title: "Account Managers",
                icon: <FaUsers className="text-lg" />,
                listing: [],
                path: `/account-managers/${effectiveUserId}`,
                basePath: `/account-managers/${effectiveUserId}`
            },
            {
                title: "Complete",
                icon: <FaCheckCircle className="text-lg" />,
                listing: [],
                path: `/complete/${effectiveUserId}`,
                basePath: `/complete/${effectiveUserId}`
            },
        ]
    }

    const sideItem = getSidebarItems()

    // Map URL paths to section names
    const getSectionFromPath = (path) => {
        const sectionMap = {
            // Institute sections
            'institution': 'Institution',
            'overview': 'Overview',
            'registered-address': 'Registered Address',
            'appearance': 'Appearance',
            'social-presence': 'Social Presence',
            'about-you': 'About You',
            'documents': 'Documents',
            'mailing-address': 'Mailing Address',
            
            // Teacher sections
            'teaching-subjects': 'Teaching Subjects',
            'class-teacher': 'Class Teacher',
            'experience': 'Experience',
            'qualification': 'Qualification',
            'certifications': 'Certifications',
            'achievements': 'Achievements',
            'contact-details': 'Contact Details',
            'address-details': 'Address Details',
            'bank-details': 'Bank Details',
            'emergency-contact': 'Emergency Contact',
            'medical-information': 'Medical Information',
            'class-schedule': 'Class Schedule',
            'exam-duty': 'Exam Duty',
            'meeting-schedule': 'Meeting Schedule',
            'create-assignment': 'Create Assignment',
            'pending-review': 'Pending Review',
            'completed': 'Completed',
            'drafts': 'Drafts',
            'mark-attendance': 'Mark Attendance',
            'attendance-report': 'Attendance Report',
            'defaulter-list': 'Defaulter List',
            'my-class-students': 'My Class Students',
            'all-students': 'All Students',
            'student-reports': 'Student Reports',
            'apply-leave': 'Apply Leave',
            'leave-history': 'Leave History',
            'leave-balance': 'Leave Balance',
            'create-exam': 'Create Exam',
            'enter-marks': 'Enter Marks',
            'results': 'Results',
            'report-cards': 'Report Cards',
            'profile-settings': 'Profile Settings',
            'privacy': 'Privacy',
            'notifications': 'Notifications',
            'language': 'Language',
            'theme': 'Theme',
            'security': 'Security'
        }
        
        // Extract the last meaningful segment (skip user ID)
        const pathSegments = path.split('/').filter(segment => 
            segment && 
            !segment.match(/^[0-9a-fA-F]{24}$/) && // Skip MongoDB ObjectId
            !segment.match(/^[0-9]+$/) // Skip numeric IDs
        )
        const lastSegment = pathSegments[pathSegments.length - 1] || ''
        
        return sectionMap[lastSegment] || (userRole === 'teacher' ? 'About You' : 'Institution')
    }

    // Set active states based on URL or prop
    useEffect(() => {
        const currentSectionName = currentSection || getSectionFromPath(location.pathname)
        
        // Check which main section we're in based on URL
        if (location.pathname.includes('/teacher/')) {
            // Find which main menu item contains this submenu item
            const mainIndex = sideItem.findIndex(item => 
                item.listing.includes(currentSectionName)
            )
            if (mainIndex !== -1) {
                setActiveMain(mainIndex)
                const submenuIndex = sideItem[mainIndex].listing.indexOf(currentSectionName)
                if (submenuIndex !== -1) {
                    setActiveSub(submenuIndex)
                }
            }
        } else if (location.pathname.includes('/institution') || location.pathname.includes('/contact-details')) {
            setActiveMain(0)
            const submenuIndex = sideItem[0]?.listing.indexOf(currentSectionName)
            if (submenuIndex !== -1) {
                setActiveSub(submenuIndex)
            }
        }
    }, [location.pathname, currentSection, userRole, sideItem])

    const handleLogout = () => {
        // Clear all user-specific data
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('userData')
        localStorage.removeItem('instituteFormData')
        localStorage.removeItem(`instituteFormData_${effectiveUserId}`)
        localStorage.removeItem('contactFormData')
        localStorage.removeItem(`contactFormData_${effectiveUserId}`)
        localStorage.removeItem('teacherFormData')
        localStorage.removeItem(`teacherFormData_${effectiveUserId}`)
        
        navigate('/login')
    }

    // Handle main menu item click
    const handleMainItemClick = (mainIndex, item) => {
        setActiveMain(mainIndex)
        setActiveSub(0)
        
        // Navigate to first submenu item if it has listing
        if (item.listing.length > 0) {
            const firstSubItem = item.listing[0]
            const path = firstSubItem.toLowerCase().replace(/\s+/g, '-')
            
            if (userRole === 'teacher') {
                navigate(`${item.basePath}/${path}`)
            } else {
                navigate(`${item.basePath}/${path}`)
            }
        } else {
            navigate(item.basePath || item.path)
        }
    }

    // Handle submenu item click
    const handleSubItemClick = (subItem, subIndex, mainIndex) => {
        setActiveSub(subIndex)
        const path = subItem.toLowerCase().replace(/\s+/g, '-')
        const item = sideItem[mainIndex]
        
        navigate(`${item.basePath}/${path}`)
    }

    // Icons for submenu items
    const submenuIcons = {
        // Institute Details icons
        "Institution": <FaUniversity />,
        "Overview": <FaGraduationCap />,
        "Registered Address": <FaMapMarkerAlt />,
        "Appearance": <FaPalette />,
        "Social Presence": <FaShareAlt />,
        "About You": <FaUserTie />,
        "Documents": <FaFileAlt />,
        "Mailing Address": <FaEnvelope />,
        
        // Teacher Personal Details icons
        "About You": <FaUser />,
        "Appearance": <FaEye />,
        "Social Presence": <FaShareAlt />,
        
        // Teacher Academics Details icons
        "Teaching Subjects": <FaBook />,
        "Class Teacher": <FaChalkboardTeacher />,
        "Experience": <FaClock />,
        "Qualification": <FaGraduationCap />,
        "Certifications": <FaCertificate />,
        "Achievements": <FaTrophy />,
        
        // Teacher Additional Details icons
        "Contact Details": <FaAddressBook />,
        "Address Details": <FaMapMarkerAlt />,
        "Bank Details": <FaCreditCard />,
        "Emergency Contact": <FaPhone />,
        "Medical Information": <FaHeart />,
        
        // Time Table icons
        "Class Schedule": <FaCalendarAlt />,
        "Exam Duty": <FaClipboardList />,
        "Meeting Schedule": <FaUsers />,
        
        // Assignments icons
        "Create Assignment": <FaPlusCircle />,
        "Pending Review": <FaClock />,
        "Completed": <FaCheckCircle />,
        "Drafts": <FaFileAlt />,
        
        // Attendance icons
        "Mark Attendance": <FaClipboardList />,
        "Attendance Report": <FaFileAlt />,
        "Defaulter List": <FaExclamationTriangle />,
        
        // Students icons
        "My Class Students": <FaUserGraduate />,
        "All Students": <FaUsers />,
        "Student Reports": <FaFileAlt />,
        
        // Leave Management icons
        "Apply Leave": <FaPlusCircle />,
        "Leave History": <FaClock />,
        "Leave Balance": <FaCalendarAlt />,
        
        // Exam & Results icons
        "Create Exam": <FaPlusCircle />,
        "Enter Marks": <FaEdit />,
        "Results": <FaCheckCircle />,
        "Report Cards": <FaFileAlt />,
        
        // Settings icons
        "Profile Settings": <FaUser />,
        "Privacy": <FaLock />,
        "Notifications": <FaBell />,
        "Language": <FaLanguage />,
        "Theme": <FaMoon />,
        "Security": <FaLock />
    }

    return (
        <div className='h-screen w-80 bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5] border-r border-[#8B4513]/20 flex flex-col sticky top-0 shadow-lg'>
            {/* Logo Section with brand gradient */}
            <div className='h-auto w-full border-b border-[#8B4513]/20'>
                <img src={Logo} alt="Logo" className='w-full h-16 p-4 object-contain' />
            </div>

            {/* User ID Indicator */}
            {effectiveUserId && (
                <div className='px-4 py-1 bg-[#8B4513]/10 border-b border-[#8B4513]/20'>
                    <p className='text-xs text-[#6A3E2E] truncate' title={effectiveUserId}>
                        <span className='font-semibold'>ID:</span> {effectiveUserId.substring(0, 8)}...
                    </p>
                </div>
            )}

            {/* Progress Indicator - Only show for Institute Details or Personal Details */}
            {activeMain === 0 && sideItem[0] && sideItem[0].listing.length > 0 && (
                <div className='px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/10 border-b border-[#8B4513]/20'>
                    <div className='flex items-center justify-between mb-1'>
                        <span className='text-xs font-medium text-[#6A3E2E]'>
                            {userRole === 'teacher' ? 'Profile Setup' : 'Institute Setup'}
                        </span>
                        <span className='text-xs font-bold text-[#FF8C00]'>
                            {activeSub + 1}/{sideItem[0].listing.length}
                        </span>
                    </div>
                    <div className='w-full bg-[#FFEDD5] rounded-full h-1.5'>
                        <div 
                            className='bg-gradient-to-r from-[#8B4513] to-[#FF8C00] h-1.5 rounded-full transition-all duration-500'
                            style={{ width: `${((activeSub + 1) / sideItem[0].listing.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Role Indicator */}
            <div className='px-4 py-2 bg-[#8B4513]/5 border-b border-[#8B4513]/20'>
                <span className='text-xs font-semibold text-[#8B4513] uppercase tracking-wider'>
                    {userRole === 'teacher' ? '👨‍🏫 Teacher Portal' : '🏫 Institution Portal'}
                </span>
            </div>

            {/* Navigation Items */}
            <div className='flex-1 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B4513]/30 scrollbar-track-[#FFEDD5]'>
                <ul className='space-y-2 px-3'>
                    {sideItem.map((item, mainIndex) => (
                        <li key={mainIndex} className='mb-2'>
                            <button
                                onClick={() => handleMainItemClick(mainIndex, item)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300
                                    ${activeMain === mainIndex 
                                        ? 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white shadow-md' 
                                        : 'text-[#6A3E2E] hover:bg-[#8B4513]/10 hover:text-[#8B4513]'
                                    }`}
                            >
                                <span className={`${activeMain === mainIndex ? 'text-white' : 'text-[#C46200]'}`}>
                                    {item.icon}
                                </span>
                                <span className="flex-1 text-left">{item.title}</span>
                                {item.listing.length > 0 && (
                                    <svg 
                                        className={`w-4 h-4 transition-transform duration-300 ${activeMain === mainIndex ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>

                            {item.listing.length > 0 && activeMain === mainIndex && (
                                <ul className='mt-2 space-y-1 ml-6 pl-2 border-l-2 border-[#FF8C00]/30'>
                                    {item.listing.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <button
                                                onClick={() => handleSubItemClick(subItem, subIndex, mainIndex)}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200
                                                    ${activeMain === mainIndex && activeSub === subIndex
                                                        ? 'bg-gradient-to-r from-[#FFEDD5] to-[#FFF7ED] text-[#8B4513] font-medium border-l-2 border-[#FF8C00] shadow-sm'
                                                        : 'text-[#8B4513]/70 hover:bg-[#FFEDD5] hover:text-[#6A3E2E]'
                                                    }`}
                                            >
                                                <span className={`text-base ${activeSub === subIndex ? 'text-[#FF8C00]' : 'text-[#C46200]/60'}`}>
                                                    {submenuIcons[subItem] || <FaFileAlt />}
                                                </span>
                                                <span className="flex-1 text-left">{subItem}</span>
                                                {activeSub === subIndex && (
                                                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full animate-pulse"></span>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* User Info & Logout */}
            <div className='border-t border-[#8B4513]/20 bg-white'>
                {user && (
                    <div className='px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#FF8C00] flex items-center justify-center text-white font-bold'>
                                {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                            </div>
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-medium text-[#8B4513] truncate'>{user?.name || 'User'}</p>
                                <p className='text-xs text-[#6A3E2E]/60 truncate'>{user?.email || ''}</p>
                                <p className='text-xs text-[#C46200] mt-0.5 capitalize'>
                                    {user?.role || (userRole === 'teacher' ? 'Teacher' : 'Institution Admin')}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='p-4'>
                    <button 
                        onClick={handleLogout} 
                        className='w-full h-11 px-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-600 font-medium rounded-lg border border-red-200 hover:border-red-300 transition-all duration-300 flex items-center justify-center gap-2 group'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar