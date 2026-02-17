import React from 'react'

const Trouble = () => {
  const userData = localStorage.getItem('userData')
  const user = userData ? JSON.parse(userData) : null
  
  return (
    <div className='bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] p-3 sm:p-4 rounded-xl border border-[#8B4513]/20 w-full'>
      <p className='font-semibold text-xs sm:text-sm text-[#6A3E2E]'>
        Having Trouble?{' '}
        <span className='text-[#FF8C00] cursor-pointer hover:text-[#FFA500] transition-colors whitespace-nowrap'>
          Get Help
        </span>
      </p>
      {user?.email && (
        <p className='text-[#8B4513]/60 text-xs sm:text-sm mt-1 truncate max-w-full' title={user.email}>
          {user.email}
        </p>
      )}
    </div>
  )
}

export default Trouble