import React, { useState, useEffect } from 'react'
import Logo from "../../assets/NewLogo.png"
import { useNavigate, useLocation } from 'react-router-dom'
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
  FaGlobe
} from 'react-icons/fa'

const Sidebar = ({ currentSection }) => {
    const userToken = localStorage.getItem('userData')
    const user = userToken ? JSON.parse(userToken) : null
    const navigate = useNavigate()
    const location = useLocation()
    
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

    // Map URL paths to section names
    const getSectionFromPath = (path) => {
        const sectionMap = {
            'institution': 'Institution',
            'overview': 'Overview',
            'registered-address': 'Registered Address',
            'appearance': 'Appearance',
            'social-presence': 'Social Presence',
            'about-you': 'About You',
            'documents': 'Documents',
            'mailing-address': 'Mailing Address',
          
        }
        const pathSegment = path.split('/').pop()
        return sectionMap[pathSegment] || 'Institution'
    }

    // Set active states based on URL or prop
    useEffect(() => {
        const currentSectionName = currentSection || getSectionFromPath(location.pathname)
        
        // Check if we're in Contact Details section
        if (location.pathname.includes('/contact-details')) {
            setActiveMain(1) // Contact Details is at index 1
            // Find and set active submenu item
            const submenuIndex = sideItem[1].listing.indexOf(currentSectionName)
            if (submenuIndex !== -1) {
                setActiveSub(submenuIndex)
            }
        } else if (location.pathname.includes('/institution')) {
            // Institute Details section
            setActiveMain(0)
            const submenuIndex = sideItem[0].listing.indexOf(currentSectionName)
            if (submenuIndex !== -1) {
                setActiveSub(submenuIndex)
            }
        }
    }, [location.pathname, currentSection])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        localStorage.removeItem('instituteFormData')
        localStorage.removeItem('contactFormData')
        navigate('/login')
    }

    // Handle main menu item click
    const handleMainItemClick = (mainIndex, item) => {
        setActiveMain(mainIndex)
        setActiveSub(0)
        
        // Navigate to first submenu item if it has listing
        if (item.listing.length > 0) {
            const firstSubItem = item.listing[0]
            if (mainIndex === 0) {
                // Institute Details submenu
                const path = firstSubItem.toLowerCase().replace(/\s+/g, '-')
                navigate(`/institution/${path}`)
            } else if (mainIndex === 1) {
                // Contact Details submenu
                const path = firstSubItem.toLowerCase().replace(/\s+/g, '-')
                navigate(`/contact-details/${path}`)
            }
        } else {
            // Handle other main menu items without submenu
            switch(item.title) {
                case 'Account Settings':
                    navigate('/account-settings')
                    break
                case 'Account Managers':
                    navigate('/account-managers')
                    break
                case 'Complete':
                    navigate('/complete')
                    break
                default:
                    break
            }
        }
    }

    // Handle submenu item click
    const handleSubItemClick = (subItem, subIndex, mainIndex) => {
        setActiveSub(subIndex)
        if (mainIndex === 0) {
            const path = subItem.toLowerCase().replace(/\s+/g, '-')
            navigate(`/institution/${path}`)
        } else if (mainIndex === 1) {
            const path = subItem.toLowerCase().replace(/\s+/g, '-')
            navigate(`/contact-details/${path}`)
        }
    }

    // Icons for main menu items
    const menuIcons = [
        <FaUniversity className="text-lg" />,
        <FaPhoneAlt className="text-lg" />,
        <FaCog className="text-lg" />,
        <FaUsers className="text-lg" />,
        <FaCheckCircle className="text-lg" />
    ]

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
       
    }

    const sideItem = [
        {
            title: "Institute Details",
            icon: menuIcons[0],
            listing: ["Institution", "Overview", "Registered Address", "Appearance", "Social Presence", "About You", "Documents"],
            path: "/institution"
        },
        {
            title: "Contact Details",
            icon: menuIcons[1],
            listing: ["Mailing Address"],
            path: "/contact-details"
        },
        {
            title: "Account Settings",
            icon: menuIcons[2],
            listing: [],
            path: "/account-settings"
        },
        {
            title: "Account Managers",
            icon: menuIcons[3],
            listing: [],
            path: "/account-managers"
        },
        {
            title: "Complete",
            icon: menuIcons[4],
            listing: [],
            path: "/complete"
        },
    ]

    return (
        <div className='h-screen w-80 bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5] border-r border-[#8B4513]/20 flex flex-col sticky top-0 shadow-lg'>
            {/* Logo Section with brand gradient */}
            <div className='h-auto w-full border-b border-[#8B4513]/20'>
                <img src={Logo} alt="Logo" className='w-full h-16 p-4 object-contain' />
            </div>

            {/* Progress Indicator - Only show for Institute Details */}
            {activeMain === 0 && (
                <div className='px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/10 border-b border-[#8B4513]/20'>
                    <div className='flex items-center justify-between mb-1'>
                        <span className='text-xs font-medium text-[#6A3E2E]'>Institute Setup</span>
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
                                <p className='text-xs text-[#C46200] mt-0.5'>{user?.role || 'Institution Admin'}</p>
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