import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar.jsx"
import Trouble from "../Components/Trouble/Trouble.jsx"
import StudentPage from '../Pages/StudentParts/Student.jsx'

const Student = () => {
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'>
      <div className='flex flex-col lg:flex-row min-h-screen'>
        {/* Sidebar */}
        <div className='lg:flex-shrink-0'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='flex-1 flex flex-col w-full'>
          {/* Header */}
          <div className='p-4 sm:p-5 md:p-6 border-b border-[#8B4513]/20 bg-white/30 backdrop-blur-sm sticky top-0 z-10'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 max-w-7xl mx-auto'>
              <h1 className='text-xl sm:text-2xl font-bold text-[#6A3E2E]'>
                Student Dashboard
              </h1>
              <div className='w-full sm:w-64'>
                <Trouble />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='p-4 sm:p-5 md:p-6 lg:p-8'>
            <div className='max-w-7xl mx-auto'>
              <StudentPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Student