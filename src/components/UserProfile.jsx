import React from 'react'
import Image from 'next/image'

const UserProfile = () => {
  return (
    <div className='px-2 pt-2 pb-2 '>
      <div className='w-[232px] rounded-lg border border-gray-200 p-3 h-20 flex items-center gap-3 bg-gray-100 mt-6'>
        <Image src="/Avatar.png" alt="Rahul Kumar" width={40} height={40} className='rounded-full' />
        <div className='min-w-0'>
          <h1 className='text-sm font-semibold text-gray-900 leading-5 truncate'>Rahul Kumar</h1>
          <h2 className='text-xs text-gray-500 leading-4 truncate'>Senior Recruiter</h2>
        </div>
      </div>
    </div>
  )
}

export default UserProfile


