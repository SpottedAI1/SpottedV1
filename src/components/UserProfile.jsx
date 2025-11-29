"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const UserProfile = () => {
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");
  const [userInitials, setUserInitials] = useState("U");

  useEffect(() => {
    // Get user data from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || "User");
        setUserEmail(userData.email || "");
        // Get first letter of first name for initials
        const initials = (userData.name || "U").split(" ")[0][0].toUpperCase();
        setUserInitials(initials);
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  return (
    <div className='px-2 pt-2 pb-2 '>
      <div className='w-[232px] rounded-lg border border-gray-200 p-3 h-20 flex items-center gap-3 bg-gray-100 mt-6'>
        {/* Avatar with user initials */}
        <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-sm'>
          {userInitials}
        </div>
        <div className='min-w-0'>
          <h1 className='text-sm font-semibold text-gray-900 leading-5 truncate'>{userName}</h1>
          <h2 className='text-xs text-gray-500 leading-4 truncate'>{userEmail}</h2>
        </div>
      </div>
    </div>
  )
}

export default UserProfile


