"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationSec = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();

  const isSettingsActive = pathname.startsWith('/settings');
  const isSubscriptionActive = pathname === '/settings/subscription';

  return (
    <div className='flex flex-col gap-4 px-1 mt-2'>

      <div className='flex  gap-3 '>
        <Link href="/" className='flex  items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer'>
          <Image src="/Search.png" alt="Search Candidates" width={20} height={20} />
          <span className='text-gray-700 truncate'>Search Candidates</span>
        </Link>
      </div>

        <Link href="/ai-agents" className='flex items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer'>
          <Image src="/Brain.png" alt="AI Agents" width={20} height={20} />
          <span className='text-gray-700'>AI Agents</span>
        </Link>
        <Link href="/shortlisted" className={`flex items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer ${pathname === '/shortlisted' ? 'bg-purple-100' : ''}`}>
          <Image src="/Folder.png" alt="Shortlisted Profiles" width={20} height={20} />
          <span className='text-gray-700'>Shortlisted Profiles</span>
        </Link>
        <div className='flex items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer'>
          <Image src="/Users.png" alt="Contacts" width={20} height={20} />
          <span className='text-gray-700'>Contacts</span>
        </div>
        <div className='flex items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer'>
          <Image src="/Calendar.png" alt="Calendar" width={20} height={20} />
          <span className='text-gray-700'>Calendar</span>
        </div>
        
        {/* Settings with Dropdown */}
        <div className="relative">
          <div 
            className={`flex items-center gap-3 p-2 hover:bg-purple-200 rounded-lg cursor-pointer ${isSettingsActive ? 'bg-purple-100' : ''}`}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            <Image src="/Settings.png" alt="Settings" width={20} height={20} />
            <span className='text-gray-700'>Settings</span>
            <svg 
              className={`w-4 h-4 transition-transform ${isSettingsOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {isSettingsOpen && (
            <div className="ml-6 mt-2 space-y-1">
              <Link 
                href="/settings" 
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm ${
                  pathname === '/settings' ? 'bg-purple-200 text-purple-700' : 'hover:bg-purple-100 text-gray-600'
                }`}
              >
                <span>Settings</span>
              </Link>
              <Link 
                href="/settings/subscription" 
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm ${
                  isSubscriptionActive ? 'bg-purple-200 text-purple-700' : 'hover:bg-purple-100 text-gray-600'
                }`}
              >
                <span>Manage Subscription</span>
              </Link>
            </div>
          )}
        </div>

        
      </div>
    
  )
}

export default NavigationSec


