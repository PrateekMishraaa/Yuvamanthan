import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Clock, 
  FileText, 
  Video, 
  Download, 
  Search, 
  Filter, 
  Bell, 
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  BarChart,
  Star,
  CheckCircle,
  XCircle,
  Eye,
  Share2,
  Bookmark,
  ExternalLink,
  MapPin,
  Globe,
  Sparkles,
  Book,
  GraduationCap,
  User,
  Settings,
  LogOut,
  Home,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  BookCheck,
  Brain,
  Trophy,
  Zap,
  TargetIcon,
  CalendarDays,
  NotebookPen,
  Library
} from 'lucide-react';

const Student = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Student Stats
  const studentStats = [
    { label: 'Courses Enrolled', value: '08', icon: <BookOpen className="w-6 h-6" />, color: 'from-[#6A3E2E] to-[#8B4513]' },
    { label: 'Assignments Due', value: '03', icon: <FileText className="w-6 h-6" />, color: 'from-[#8B4513] to-[#C46200]' },
    { label: 'Active Projects', value: '05', icon: <Target className="w-6 h-6" />, color: 'from-[#C46200] to-[#E07B00]' },
    { label: 'Study Hours', value: '46h', icon: <Clock className="w-6 h-6" />, color: 'from-[#6A3E2E] to-[#E07B00]' }
  ];

  // Upcoming Classes
  const upcomingClasses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      time: '10:00 AM - 11:30 AM',
      instructor: 'Dr. Sharma',
      room: 'Room 302',
      type: 'lecture',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Computer Science Lab',
      time: '02:00 PM - 04:00 PM',
      instructor: 'Prof. Gupta',
      room: 'Lab 101',
      type: 'lab',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Literature Seminar',
      time: '04:30 PM - 06:00 PM',
      instructor: 'Dr. Kapoor',
      room: 'Auditorium',
      type: 'seminar',
      status: 'completed'
    }
  ];

  // Courses
  const courses = [
    {
      id: 1,
      title: 'Computer Science Fundamentals',
      code: 'CS101',
      instructor: 'Dr. Rajesh Kumar',
      progress: 85,
      credits: 4,
      color: 'from-[#6A3E2E] to-[#8B4513]'
    },
    {
      id: 2,
      title: 'Advanced Calculus',
      code: 'MATH201',
      instructor: 'Prof. Meera Singh',
      progress: 70,
      credits: 3,
      color: 'from-[#8B4513] to-[#C46200]'
    },
    {
      id: 3,
      title: 'Modern Physics',
      code: 'PHY301',
      instructor: 'Dr. Arvind Patel',
      progress: 60,
      credits: 4,
      color: 'from-[#C46200] to-[#E07B00]'
    },
    {
      id: 4,
      title: 'English Literature',
      code: 'ENG102',
      instructor: 'Dr. Priya Sharma',
      progress: 90,
      credits: 3,
      color: 'from-[#6A3E2E] to-[#E07B00]'
    }
  ];

  // Assignments
  const assignments = [
    {
      id: 1,
      title: 'Data Structures Project',
      course: 'CS101',
      dueDate: '2024-03-20',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Calculus Problem Set',
      course: 'MATH201',
      dueDate: '2024-03-18',
      status: 'submitted',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Physics Lab Report',
      course: 'PHY301',
      dueDate: '2024-03-22',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Literature Essay',
      course: 'ENG102',
      dueDate: '2024-03-25',
      status: 'in-progress',
      priority: 'medium'
    }
  ];

  // Achievements
  const achievements = [
    {
      id: 1,
      title: 'Perfect Attendance',
      description: '30 consecutive days',
      icon: '🎯',
      unlocked: true
    },
    {
      id: 2,
      title: 'Top Performer',
      description: 'Academic Excellence',
      icon: '🏆',
      unlocked: true
    },
    {
      id: 3,
      title: 'Research Scholar',
      description: 'Paper Publication',
      icon: '📚',
      unlocked: false
    },
    {
      id: 4,
      title: 'Community Leader',
      description: 'Student Council',
      icon: '👥',
      unlocked: false
    }
  ];

  // Resources
  const resources = [
    {
      id: 1,
      title: 'Study Material - Calculus',
      type: 'pdf',
      size: '2.4 MB',
      course: 'MATH201'
    },
    {
      id: 2,
      title: 'CS101 Lecture Videos',
      type: 'video',
      size: '450 MB',
      course: 'CS101'
    },
    {
      id: 3,
      title: 'Physics Lab Manual',
      type: 'pdf',
      size: '1.8 MB',
      course: 'PHY301'
    },
    {
      id: 4,
      title: 'Literature References',
      type: 'link',
      size: '-',
      course: 'ENG102'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-white via-[#FFF7ED] to-[#FFEDD5] pt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6 mb-6">
                {/* Profile */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User className="w-12 h-12 text-[#6A3E2E]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#6A3E2E]">Rahul Sharma</h3>
                  <p className="text-[#8B4513]/80">Computer Science Major</p>
                  <div className="inline-flex items-center px-3 py-1 mt-2 bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 rounded-full">
                    <span className="text-sm font-semibold text-[#6A3E2E]">Year 3, Semester 5</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {[
                    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
                    { id: 'courses', label: 'My Courses', icon: <BookOpen className="w-5 h-5" /> },
                    { id: 'assignments', label: 'Assignments', icon: <FileText className="w-5 h-5" /> },
                    { id: 'schedule', label: 'Schedule', icon: <CalendarDays className="w-5 h-5" /> },
                    { id: 'grades', label: 'Grades', icon: <TrendingUp className="w-5 h-5" /> },
                    { id: 'resources', label: 'Resources', icon: <Library className="w-5 h-5" /> },
                    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white'
                          : 'text-[#6A3E2E] hover:bg-gradient-to-r hover:from-[#6A3E2E]/10 hover:to-[#8B4513]/10'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      {activeTab === item.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-[#6A3E2E]/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[#6A3E2E]">CGPA</span>
                    <span className="text-lg font-bold text-[#6A3E2E]">8.7/10</span>
                  </div>
                  <div className="w-full bg-[#6A3E2E]/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] h-2 rounded-full"
                      style={{ width: '87%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6">
                <h4 className="text-lg font-bold text-[#6A3E2E] mb-4">Upcoming Deadlines</h4>
                <div className="space-y-3">
                  {assignments.slice(0, 2).map((assignment) => (
                    <div key={assignment.id} className="p-3 rounded-lg bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-[#6A3E2E]">{assignment.course}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          assignment.priority === 'high' 
                            ? 'bg-red-100 text-red-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {assignment.priority}
                        </span>
                      </div>
                      <p className="text-sm text-[#8B4513] mb-1">{assignment.title}</p>
                      <div className="text-xs text-[#8B4513]/60">Due: {assignment.dueDate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* Header */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#6A3E2E] mb-2">
                      Welcome Back, Rahul! 👋
                    </h2>
                    <p className="text-[#8B4513]/80">
                      Track your progress, manage assignments, and excel in your academic journey.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="relative p-2">
                      <Bell className="w-6 h-6 text-[#6A3E2E]" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="relative p-2">
                      <MessageSquare className="w-6 h-6 text-[#6A3E2E]" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative mt-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B4513]/60" />
                  <input
                    type="text"
                    placeholder="Search courses, assignments, or resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 border border-[#6A3E2E]/20 rounded-xl focus:outline-none focus:border-[#8B4513] text-[#6A3E2E]"
                  />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {studentStats.map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-xl shadow-lg border border-[#6A3E2E]/10 p-5">
                      <div className={`w-12 h-12 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-r ${stat.color}`}>
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#6A3E2E] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#8B4513]/80">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Courses Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Courses Progress */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#6A3E2E]">My Courses</h3>
                    <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] flex items-center">
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="group relative p-4 rounded-lg border border-[#6A3E2E]/10 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-[#6A3E2E]">{course.title}</h4>
                            <div className="text-sm text-[#8B4513]/80">{course.code} • {course.instructor}</div>
                          </div>
                          <div className="text-sm font-semibold text-[#6A3E2E]">{course.credits} Credits</div>
                        </div>
                        
                        <div className="mb-2">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-[#8B4513]/80">Progress</span>
                            <span className="font-semibold text-[#6A3E2E]">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-[#6A3E2E]/10 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${course.color} h-2 rounded-full`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <button className="w-full mt-3 py-2 text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] flex items-center justify-center group">
                          Continue Learning
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#6A3E2E]">Today's Schedule</h3>
                    <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] flex items-center">
                      View Calendar
                      <Calendar className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingClasses.map((cls) => (
                      <div key={cls.id} className={`p-4 rounded-lg border transition-all duration-300 ${
                        cls.status === 'completed'
                          ? 'border-green-200 bg-green-50'
                          : 'border-[#6A3E2E]/20 hover:shadow-md'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-[#6A3E2E]">{cls.title}</h4>
                            <div className="flex items-center text-sm text-[#8B4513]/80 mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              {cls.time}
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            cls.type === 'lecture' ? 'bg-blue-100 text-blue-600' :
                            cls.type === 'lab' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {cls.type}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-[#8B4513]">
                            <User className="w-4 h-4 mr-1" />
                            {cls.instructor}
                          </div>
                          <div className="flex items-center text-[#8B4513]">
                            <MapPin className="w-4 h-4 mr-1" />
                            {cls.room}
                          </div>
                        </div>
                        
                        {cls.status === 'completed' && (
                          <div className="mt-3 pt-3 border-t border-green-200">
                            <div className="flex items-center text-green-600 text-sm">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Completed
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Assignments & Resources */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Assignments */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#6A3E2E]">Pending Assignments</h3>
                    <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] flex items-center">
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {assignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center justify-between p-3 rounded-lg border border-[#6A3E2E]/10 hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            assignment.status === 'submitted' 
                              ? 'bg-green-100 text-green-600'
                              : assignment.status === 'in-progress'
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-red-100 text-red-600'
                          }`}>
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#6A3E2E]">{assignment.title}</h4>
                            <div className="text-sm text-[#8B4513]/80">{assignment.course} • Due: {assignment.dueDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {assignment.status === 'submitted' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <button className="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] text-white rounded-lg hover:shadow-md transition-all duration-300">
                              Submit
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#6A3E2E]">Study Resources</h3>
                    <button className="text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513] flex items-center">
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <div key={resource.id} className="flex items-center justify-between p-3 rounded-lg border border-[#6A3E2E]/10 hover:shadow-sm transition-all duration-300 group">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            resource.type === 'pdf' 
                              ? 'bg-red-100 text-red-600'
                              : resource.type === 'video'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-green-100 text-green-600'
                          }`}>
                            {resource.type === 'pdf' ? <FileText className="w-5 h-5" /> :
                             resource.type === 'video' ? <Video className="w-5 h-5" /> :
                             <ExternalLink className="w-5 h-5" />}
                          </div>
                          <div>
                            <h4 className="font-medium text-[#6A3E2E] group-hover:text-[#8B4513]">{resource.title}</h4>
                            <div className="text-sm text-[#8B4513]/80">{resource.course} • {resource.size}</div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-[#6A3E2E]/10 rounded-lg transition-colors duration-300">
                          <Download className="w-5 h-5 text-[#6A3E2E]" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A3E2E] mb-4">
              Your Achievements
            </h2>
            <p className="text-[#8B4513]/80 max-w-2xl mx-auto">
              Track your accomplishments and unlock new milestones in your academic journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="group relative">
                <div className={`absolute -inset-2 rounded-2xl blur transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-r from-[#6A3E2E]/20 to-[#8B4513]/20 group-hover:opacity-100 opacity-50'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 opacity-30'
                }`}></div>
                <div className={`relative rounded-xl p-6 text-center border transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-white border-[#6A3E2E]/10 group-hover:shadow-lg'
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`text-4xl mb-4 transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'group-hover:scale-110'
                      : 'opacity-50'
                  }`}>
                    {achievement.icon}
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${
                    achievement.unlocked ? 'text-[#6A3E2E]' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-[#8B4513]/80' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && (
                    <div className="mt-4 text-xs text-gray-500">Locked</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <section className="w-full bg-gradient-to-b from-[#FFF7ED] to-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="bg-white rounded-2xl shadow-lg border border-[#6A3E2E]/10 p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#6A3E2E] mb-2">
                  Performance Analytics
                </h3>
                <p className="text-[#8B4513]/80">Track your academic growth and trends</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6A3E2E]/10 to-[#8B4513]/10 text-[#6A3E2E] rounded-lg">
                  This Month
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-[#6A3E2E] hover:text-[#8B4513]">
                  All Time
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Study Hours */}
              <div className="bg-gradient-to-r from-[#6A3E2E]/5 to-[#8B4513]/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-[#6A3E2E] mr-3" />
                  <h4 className="font-bold text-[#6A3E2E]">Study Hours</h4>
                </div>
                <div className="text-3xl font-bold text-[#6A3E2E] mb-2">46h</div>
                <div className="text-sm text-[#8B4513]/80">+12% from last month</div>
                <div className="mt-4 w-full bg-white rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#6A3E2E] to-[#8B4513] h-2 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              {/* Assignment Completion */}
              <div className="bg-gradient-to-r from-[#8B4513]/5 to-[#C46200]/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#8B4513] mr-3" />
                  <h4 className="font-bold text-[#8B4513]">Assignments</h4>
                </div>
                <div className="text-3xl font-bold text-[#8B4513] mb-2">85%</div>
                <div className="text-sm text-[#C46200]/80">Completion Rate</div>
                <div className="mt-4 w-full bg-white rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#8B4513] to-[#C46200] h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>

              {/* Class Attendance */}
              <div className="bg-gradient-to-r from-[#C46200]/5 to-[#E07B00]/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-[#C46200] mr-3" />
                  <h4 className="font-bold text-[#C46200]">Attendance</h4>
                </div>
                <div className="text-3xl font-bold text-[#C46200] mb-2">96%</div>
                <div className="text-sm text-[#E07B00]/80">Perfect Streak: 30 days</div>
                <div className="mt-4 w-full bg-white rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#C46200] to-[#E07B00] h-2 rounded-full"
                    style={{ width: '96%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="w-full bg-gradient-to-r from-[#6A3E2E] via-[#8B4513] to-[#E07B00] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Quick Actions</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Everything you need to stay on top of your academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center">
                <BookCheck className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Submit Assignment</span>
              </div>
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center">
                <Brain className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Study Resources</span>
              </div>
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center">
                <CalendarDays className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">View Schedule</span>
              </div>
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 group">
              <div className="flex flex-col items-center">
                <GraduationCap className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Course Progress</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;