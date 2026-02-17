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
  FaEdit,
  FaHome,
  FaBookOpen,
  FaClipboardCheck,
  FaChartLine,
  FaMoneyBillWave,
  FaBus,
  FaUtensils,
  FaGamepad,
  FaMedal,
  FaStar,
  FaVideo,
  FaBars,
  FaTimes
} from 'react-icons/fa'

const Sidebar = ({ currentSection }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    
    // State for mobile sidebar toggle
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    
    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsOpen(true) // Auto open on desktop
            } else {
                setIsOpen(false) // Auto close on mobile
            }
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    
    // Close sidebar when route changes on mobile
    useEffect(() => {
        if (isMobile) {
            setIsOpen(false)
        }
    }, [location.pathname, isMobile])
    
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
        // Student menu items (based on image)
        if (userRole === 'student') {
            return [
                {
                    title: "Personal Details",
                    icon: <FaUser className="text-lg" />,
                    listing: ["About You", "Appearance", "Social Presence"],
                    path: "/student/personal-details",
                    basePath: `/student/${effectiveUserId}`
                },
                {
                    title: "Academics Details",
                    icon: <FaBook className="text-lg" />,
                    listing: [
                        "Class & Section",
                        "Subjects",
                        "Attendance",
                        "Assignments",
                        "Exam Schedule",
                        "Results",
                        "Time Table"
                    ],
                    path: "/student/academics",
                    basePath: `/student/academics/${effectiveUserId}`
                },
                {
                    title: "Additional Details",
                    icon: <FaPlusCircle className="text-lg" />,
                    listing: [
                        "Contact Details",
                        "Address Details",
                        "Parent/Guardian Details",
                        "Medical Information",
                        "Documents",
                        "Achievements",
                        "Extra Curricular"
                    ],
                    path: "/student/additional",
                    basePath: `/student/additional/${effectiveUserId}`
                },
                {
                    title: "Fees & Payments",
                    icon: <FaMoneyBillWave className="text-lg" />,
                    listing: [
                        "Fee Structure",
                        "Payment History",
                        "Due Payments",
                        "Scholarships",
                        "Concessions"
                    ],
                    path: "/student/fees",
                    basePath: `/student/fees/${effectiveUserId}`
                },
                {
                    title: "Library",
                    icon: <FaBookOpen className="text-lg" />,
                    listing: [
                        "Books Issued",
                        "Due Date",
                        "Library History",
                        "Request Book",
                        "E-Library"
                    ],
                    path: "/student/library",
                    basePath: `/student/library/${effectiveUserId}`
                },
                {
                    title: "Transport",
                    icon: <FaBus className="text-lg" />,
                    listing: [
                        "Route Details",
                        "Pickup/Drop Points",
                        "Transport Fees",
                        "Driver Details",
                        "Track Bus"
                    ],
                    path: "/student/transport",
                    basePath: `/student/transport/${effectiveUserId}`
                },
                {
                    title: "Hostel",
                    icon: <FaHome className="text-lg" />,
                    listing: [
                        "Room Details",
                        "Mess Menu",
                        "Hostel Fees",
                        "Warden Details",
                        "Leave Application"
                    ],
                    path: "/student/hostel",
                    basePath: `/student/hostel/${effectiveUserId}`
                },
                {
                    title: "Attendance",
                    icon: <FaClipboardList className="text-lg" />,
                    listing: [
                        "Daily Attendance",
                        "Monthly Report",
                        "Leave History",
                        "Apply Leave"
                    ],
                    path: "/student/attendance",
                    basePath: `/student/attendance/${effectiveUserId}`
                },
                {
                    title: "Exams & Results",
                    icon: <FaChartLine className="text-lg" />,
                    listing: [
                        "Upcoming Exams",
                        "Exam Results",
                        "Marksheet",
                        "Rank/Grade",
                        "Performance Graph"
                    ],
                    path: "/student/exams",
                    basePath: `/student/exams/${effectiveUserId}`
                },
                {
                    title: "Assignments",
                    icon: <FaTasks className="text-lg" />,
                    listing: [
                        "Pending Assignments",
                        "Submitted Work",
                        "Grades",
                        "Due Date Calendar"
                    ],
                    path: "/student/assignments",
                    basePath: `/student/assignments/${effectiveUserId}`
                },
                {
                    title: "Events & Activities",
                    icon: <FaGamepad className="text-lg" />,
                    listing: [
                        "Upcoming Events",
                        "Cultural Activities",
                        "Sports Events",
                        "Workshops",
                        "Clubs & Societies"
                    ],
                    path: "/student/events",
                    basePath: `/student/events/${effectiveUserId}`
                },
                {
                    title: "Achievements",
                    icon: <FaTrophy className="text-lg" />,
                    listing: [
                        "Academic Awards",
                        "Sports Achievements",
                        "Cultural Awards",
                        "Certifications",
                        "Badges"
                    ],
                    path: "/student/achievements",
                    basePath: `/student/achievements/${effectiveUserId}`
                },
                {
                    title: "Downloads",
                    icon: <FaDownload className="text-lg" />,
                    listing: [
                        "Study Material",
                        "Previous Papers",
                        "Syllabus",
                        "Notes",
                        "Recorded Lectures"
                    ],
                    path: "/student/downloads",
                    basePath: `/student/downloads/${effectiveUserId}`
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
                    path: "/student/settings",
                    basePath: `/student/settings/${effectiveUserId}`
                }
            ]
        }
        
        // Institute/Admin menu items
        else if (userRole === 'institution' || userRole === 'admin') {
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
            // Student sections
            'about-you': 'About You',
            'appearance': 'Appearance',
            'social-presence': 'Social Presence',
            'class-section': 'Class & Section',
            'subjects': 'Subjects',
            'attendance': 'Attendance',
            'assignments': 'Assignments',
            'exam-schedule': 'Exam Schedule',
            'results': 'Results',
            'time-table': 'Time Table',
            'contact-details': 'Contact Details',
            'address-details': 'Address Details',
            'parent-guardian-details': 'Parent/Guardian Details',
            'medical-information': 'Medical Information',
            'documents': 'Documents',
            'achievements': 'Achievements',
            'extra-curricular': 'Extra Curricular',
            'fee-structure': 'Fee Structure',
            'payment-history': 'Payment History',
            'due-payments': 'Due Payments',
            'scholarships': 'Scholarships',
            'concessions': 'Concessions',
            'books-issued': 'Books Issued',
            'due-date': 'Due Date',
            'library-history': 'Library History',
            'request-book': 'Request Book',
            'e-library': 'E-Library',
            'route-details': 'Route Details',
            'pickup-drop-points': 'Pickup/Drop Points',
            'transport-fees': 'Transport Fees',
            'driver-details': 'Driver Details',
            'track-bus': 'Track Bus',
            'room-details': 'Room Details',
            'mess-menu': 'Mess Menu',
            'hostel-fees': 'Hostel Fees',
            'warden-details': 'Warden Details',
            'leave-application': 'Leave Application',
            'daily-attendance': 'Daily Attendance',
            'monthly-report': 'Monthly Report',
            'leave-history': 'Leave History',
            'apply-leave': 'Apply Leave',
            'upcoming-exams': 'Upcoming Exams',
            'exam-results': 'Exam Results',
            'marksheet': 'Marksheet',
            'rank-grade': 'Rank/Grade',
            'performance-graph': 'Performance Graph',
            'pending-assignments': 'Pending Assignments',
            'submitted-work': 'Submitted Work',
            'grades': 'Grades',
            'due-date-calendar': 'Due Date Calendar',
            'upcoming-events': 'Upcoming Events',
            'cultural-activities': 'Cultural Activities',
            'sports-events': 'Sports Events',
            'workshops': 'Workshops',
            'clubs-societies': 'Clubs & Societies',
            'academic-awards': 'Academic Awards',
            'sports-achievements': 'Sports Achievements',
            'cultural-awards': 'Cultural Awards',
            'certifications': 'Certifications',
            'badges': 'Badges',
            'study-material': 'Study Material',
            'previous-papers': 'Previous Papers',
            'syllabus': 'Syllabus',
            'notes': 'Notes',
            'recorded-lectures': 'Recorded Lectures',
            'profile-settings': 'Profile Settings',
            'privacy': 'Privacy',
            'notifications': 'Notifications',
            'language': 'Language',
            'theme': 'Theme',
            'security': 'Security',
            
            // Institute sections
            'institution': 'Institution',
            'overview': 'Overview',
            'registered-address': 'Registered Address',
            'mailing-address': 'Mailing Address',
            
            // Teacher sections
            'teaching-subjects': 'Teaching Subjects',
            'class-teacher': 'Class Teacher',
            'experience': 'Experience',
            'qualification': 'Qualification',
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
            'create-exam': 'Create Exam',
            'enter-marks': 'Enter Marks',
            'report-cards': 'Report Cards'
        }
        
        // Extract the last meaningful segment (skip user ID)
        const pathSegments = path.split('/').filter(segment => 
            segment && 
            !segment.match(/^[0-9a-fA-F]{24}$/) && // Skip MongoDB ObjectId
            !segment.match(/^[0-9]+$/) // Skip numeric IDs
        )
        const lastSegment = pathSegments[pathSegments.length - 1] || ''
        
        return sectionMap[lastSegment] || (userRole === 'student' ? 'About You' : (userRole === 'teacher' ? 'About You' : 'Institution'))
    }

    // Set active states based on URL or prop
    useEffect(() => {
        const currentSectionName = currentSection || getSectionFromPath(location.pathname)
        
        // Check which main section we're in based on URL
        if (location.pathname.includes('/student/')) {
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
        } else if (location.pathname.includes('/teacher/')) {
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
        localStorage.removeItem('studentFormData')
        localStorage.removeItem(`studentFormData_${effectiveUserId}`)
        
        navigate('/login')
    }

    // Handle main menu item click
    const handleMainItemClick = (mainIndex, item) => {
        setActiveMain(mainIndex)
        setActiveSub(0)
        
        // On mobile, close sidebar after selection
        if (isMobile) {
            setIsOpen(false)
        }
        
        // Navigate to first submenu item if it has listing
        if (item.listing.length > 0) {
            const firstSubItem = item.listing[0]
            const path = firstSubItem.toLowerCase().replace(/\s+/g, '-')
            
            if (userRole === 'student') {
                navigate(`${item.basePath}/${path}`)
            } else if (userRole === 'teacher') {
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
        
        // On mobile, close sidebar after selection
        if (isMobile) {
            setIsOpen(false)
        }
        
        navigate(`${item.basePath}/${path}`)
    }

    // Icons for submenu items
    const submenuIcons = {
        // Student Personal Details icons
        "About You": <FaUser />,
        "Appearance": <FaEye />,
        "Social Presence": <FaShareAlt />,
        
        // Student Academics Details icons
        "Class & Section": <FaUserGraduate />,
        "Subjects": <FaBook />,
        "Attendance": <FaClipboardList />,
        "Assignments": <FaTasks />,
        "Exam Schedule": <FaCalendarAlt />,
        "Results": <FaChartLine />,
        "Time Table": <FaClock />,
        
        // Student Additional Details icons
        "Contact Details": <FaAddressBook />,
        "Address Details": <FaMapMarkerAlt />,
        "Parent/Guardian Details": <FaUsers />,
        "Medical Information": <FaHeart />,
        "Documents": <FaFileAlt />,
        "Achievements": <FaTrophy />,
        "Extra Curricular": <FaGamepad />,
        
        // Fees & Payments icons
        "Fee Structure": <FaMoneyBillWave />,
        "Payment History": <FaClock />,
        "Due Payments": <FaExclamationTriangle />,
        "Scholarships": <FaStar />,
        "Concessions": <FaMedal />,
        
        // Library icons
        "Books Issued": <FaBookOpen />,
        "Due Date": <FaCalendarAlt />,
        "Library History": <FaClock />,
        "Request Book": <FaPlusCircle />,
        "E-Library": <FaDownload />,
        
        // Transport icons
        "Route Details": <FaMapMarkerAlt />,
        "Pickup/Drop Points": <FaMapMarkerAlt />,
        "Transport Fees": <FaMoneyBillWave />,
        "Driver Details": <FaUserTie />,
        "Track Bus": <FaBus />,
        
        // Hostel icons
        "Room Details": <FaHome />,
        "Mess Menu": <FaUtensils />,
        "Hostel Fees": <FaMoneyBillWave />,
        "Warden Details": <FaUserTie />,
        "Leave Application": <FaFileAlt />,
        
        // Attendance icons
        "Daily Attendance": <FaClipboardCheck />,
        "Monthly Report": <FaChartLine />,
        "Leave History": <FaClock />,
        "Apply Leave": <FaPlusCircle />,
        
        // Exams & Results icons
        "Upcoming Exams": <FaCalendarAlt />,
        "Exam Results": <FaCheckCircle />,
        "Marksheet": <FaFileAlt />,
        "Rank/Grade": <FaMedal />,
        "Performance Graph": <FaChartLine />,
        
        // Assignments icons
        "Pending Assignments": <FaClock />,
        "Submitted Work": <FaCheckCircle />,
        "Grades": <FaStar />,
        "Due Date Calendar": <FaCalendarAlt />,
        
        // Events & Activities icons
        "Upcoming Events": <FaCalendarAlt />,
        "Cultural Activities": <FaGamepad />,
        "Sports Events": <FaTrophy />,
        "Workshops": <FaUsers />,
        "Clubs & Societies": <FaUsers />,
        
        // Achievements icons
        "Academic Awards": <FaGraduationCap />,
        "Sports Achievements": <FaTrophy />,
        "Cultural Awards": <FaMedal />,
        "Certifications": <FaCertificate />,
        "Badges": <FaStar />,
        
        // Downloads icons
        "Study Material": <FaDownload />,
        "Previous Papers": <FaFileAlt />,
        "Syllabus": <FaBook />,
        "Notes": <FaFileAlt />,
        "Recorded Lectures": <FaVideo />,
        
        // Settings icons
        "Profile Settings": <FaUser />,
        "Privacy": <FaLock />,
        "Notifications": <FaBell />,
        "Language": <FaLanguage />,
        "Theme": <FaMoon />,
        "Security": <FaLock />,
        
        // Institute Details icons
        "Institution": <FaUniversity />,
        "Overview": <FaGraduationCap />,
        "Registered Address": <FaMapMarkerAlt />,
        "Mailing Address": <FaEnvelope />,
        
        // Teacher Academics Details icons
        "Teaching Subjects": <FaBook />,
        "Class Teacher": <FaChalkboardTeacher />,
        "Experience": <FaClock />,
        "Qualification": <FaGraduationCap />,
        "Certifications": <FaCertificate />,
        
        // Teacher Additional Details icons
        "Bank Details": <FaCreditCard />,
        "Emergency Contact": <FaPhone />,
        
        // Teacher Time Table icons
        "Class Schedule": <FaCalendarAlt />,
        "Exam Duty": <FaClipboardList />,
        "Meeting Schedule": <FaUsers />,
        
        // Teacher Assignments icons
        "Create Assignment": <FaPlusCircle />,
        "Pending Review": <FaClock />,
        "Completed": <FaCheckCircle />,
        "Drafts": <FaFileAlt />,
        
        // Teacher Attendance icons
        "Mark Attendance": <FaClipboardList />,
        "Attendance Report": <FaFileAlt />,
        "Defaulter List": <FaExclamationTriangle />,
        
        // Teacher Students icons
        "My Class Students": <FaUserGraduate />,
        "All Students": <FaUsers />,
        "Student Reports": <FaFileAlt />,
        
        // Teacher Leave Management icons
        "Leave Balance": <FaCalendarAlt />,
        
        // Teacher Exam & Results icons
        "Create Exam": <FaPlusCircle />,
        "Enter Marks": <FaEdit />,
        "Report Cards": <FaFileAlt />
    }

    return (
        <>
            {/* Mobile Menu Button */}
            {isMobile && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            )}

            {/* Overlay for mobile */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:static top-0 left-0 z-50
                h-screen bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5] 
                border-r border-[#8B4513]/20 
                flex flex-col shadow-lg
                transition-all duration-300 ease-in-out
                ${isOpen ? 'w-80 translate-x-0' : 'w-80 -translate-x-full md:translate-x-0'}
                ${isMobile ? 'w-80' : 'w-80'}
                overflow-hidden
            `}>
                {/* Logo Section */}
                <div className='h-auto w-full border-b border-[#8B4513]/20 flex-shrink-0'>
                    <img src={Logo} alt="Logo" className='w-full h-16 p-4 object-contain' />
                </div>

                {/* User ID Indicator */}
                {effectiveUserId && (
                    <div className='px-4 py-1 bg-[#8B4513]/10 border-b border-[#8B4513]/20 flex-shrink-0'>
                        <p className='text-xs text-[#6A3E2E] truncate' title={effectiveUserId}>
                            <span className='font-semibold'>ID:</span> {effectiveUserId.substring(0, 8)}...
                        </p>
                    </div>
                )}

                {/* Progress Indicator */}
                {activeMain === 0 && sideItem[0] && sideItem[0].listing.length > 0 && (
                    <div className='px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/10 border-b border-[#8B4513]/20 flex-shrink-0'>
                        <div className='flex items-center justify-between mb-1'>
                            <span className='text-xs font-medium text-[#6A3E2E]'>
                                {userRole === 'student' ? 'Profile Setup' : (userRole === 'teacher' ? 'Profile Setup' : 'Institute Setup')}
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
                <div className='px-4 py-2 bg-[#8B4513]/5 border-b border-[#8B4513]/20 flex-shrink-0'>
                    <span className='text-xs font-semibold text-[#8B4513] uppercase tracking-wider'>
                        {userRole === 'student' && '👨‍🎓 Student Portal'}
                        {userRole === 'teacher' && '👨‍🏫 Teacher Portal'}
                        {userRole === 'institution' && '🏫 Institution Portal'}
                        {userRole === 'admin' && '👑 Admin Portal'}
                    </span>
                </div>

                {/* Navigation Items - Scrollable */}
                <div className='flex-1 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B4513]/30 scrollbar-track-[#FFEDD5]'>
                    <ul className='space-y-2 px-3'>
                        {sideItem.map((item, mainIndex) => (
                            <li key={mainIndex} className='mb-2'>
                                <button
                                    onClick={() => handleMainItemClick(mainIndex, item)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base
                                        ${activeMain === mainIndex 
                                            ? 'bg-gradient-to-r from-[#8B4513] to-[#FF8C00] text-white shadow-md' 
                                            : 'text-[#6A3E2E] hover:bg-[#8B4513]/10 hover:text-[#8B4513]'
                                        }`}
                                >
                                    <span className={`${activeMain === mainIndex ? 'text-white' : 'text-[#C46200]'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="flex-1 text-left truncate">{item.title}</span>
                                    {item.listing.length > 0 && (
                                        <svg 
                                            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${activeMain === mainIndex ? 'rotate-180' : ''}`} 
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
                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs md:text-sm rounded-lg transition-all duration-200
                                                        ${activeMain === mainIndex && activeSub === subIndex
                                                            ? 'bg-gradient-to-r from-[#FFEDD5] to-[#FFF7ED] text-[#8B4513] font-medium border-l-2 border-[#FF8C00] shadow-sm'
                                                            : 'text-[#8B4513]/70 hover:bg-[#FFEDD5] hover:text-[#6A3E2E]'
                                                        }`}
                                                >
                                                    <span className={`text-sm md:text-base flex-shrink-0 ${activeSub === subIndex ? 'text-[#FF8C00]' : 'text-[#C46200]/60'}`}>
                                                        {submenuIcons[subItem] || <FaFileAlt />}
                                                    </span>
                                                    <span className="flex-1 text-left truncate">{subItem}</span>
                                                    {activeSub === subIndex && (
                                                        <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full animate-pulse flex-shrink-0"></span>
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
                <div className='border-t border-[#8B4513]/20 bg-white flex-shrink-0'>
                    {user && (
                        <div className='px-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5'>
                            <div className='flex items-center gap-3'>
                                <div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#8B4513] to-[#FF8C00] flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0'>
                                    {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-xs md:text-sm font-medium text-[#8B4513] truncate'>{user?.name || 'User'}</p>
                                    <p className='text-xs text-[#6A3E2E]/60 truncate'>{user?.email || ''}</p>
                                    <p className='text-xs text-[#C46200] mt-0.5 capitalize truncate'>
                                        {user?.role || (userRole === 'student' ? 'Student' : (userRole === 'teacher' ? 'Teacher' : 'Institution Admin'))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='p-4'>
                        <button 
                            onClick={handleLogout} 
                            className='w-full h-10 md:h-11 px-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-600 font-medium rounded-lg border border-red-200 hover:border-red-300 transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base'
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span className="truncate">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar