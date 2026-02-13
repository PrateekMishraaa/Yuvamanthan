import React from 'react'

const Trouble = () => {
      const userData = localStorage.getItem('userData')
  const user = userData ? JSON.parse(userData) : null
  // console.log("this is institute user", user?.email)
  return (
   <>
   <div className='bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] p-4 rounded-xl border border-[#8B4513]/20'>
                <p className='font-semibold text-sm text-[#6A3E2E]'>
                  Having Trouble? 
                  <span className='text-[#FF8C00] ml-1 cursor-pointer hover:text-[#FFA500] transition-colors'>
                    Get Help
                  </span>
                </p>
                <p className='text-[#8B4513]/60 font-lighter text-sm mt-1'>{user?.email}</p>
              </div>
   </>
  )
}

export default Trouble
