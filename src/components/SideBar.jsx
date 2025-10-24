import React from 'react'
import LogoSec from './LogoSec.jsx'
import NavigationSec from './NavigationSec.jsx'
import UserProfile from './UserProfile.jsx'

const SideBar = () => {
  return (
    <div className='w-[260px] border-r border-gray-200 bg-white min-h-screen flex flex-col justify-between p-3'>
      <div className='flex flex-col'>
        <LogoSec/>
        <NavigationSec/>
        <UserProfile/>
      </div>
    </div>
  )
}

export default SideBar


