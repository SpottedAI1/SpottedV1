import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CandidateCard = ({ 
  name, 
  title, 
  summary, 
  id = '1',
  location = 'Bangalore, India',
  education = 'B.Tech - Manipal Institute of Tech',
  skills = 'Product Strategy | A/B Testing | Figma | Agile',
  email = 'radhika.jain@gmail.com',
  phone = '',
  isLocked = false
}) => {
  const router = useRouter();
  
  const handleShortlist = () => {
    try {
      const selected = {
        id: String(id),
        name,
        title,
        summary,
        location,
        education,
        skills,
        email,
        phone,
      };
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('selectedCandidate', JSON.stringify(selected));
      }
    } catch {}
    // Navigate to candidate detail page
    router.push(`/candidate/${id}`);
  };

  const handleScheduleCall = () => {
    // Add schedule call functionality here
    // You can add calendar integration or modal
  };

  const handleAddNotes = () => {
    // Add notes functionality here
    // You can add notes modal or form
  };
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
      <div className='flex items-start justify-between'>
        <div className='flex items-start gap-4 flex-1'>
          <div className='w-12 h-12 rounded-full bg-gray-800 text-white text-sm font-medium flex items-center justify-center'>
            {name?.split(' ').map(w=>w[0]).join('').slice(0,2) || 'RJ'}
          </div>
          
          <div className='flex-1'>
            <div className='flex items-center gap-2 mb-1'>
              <h3 className='font-semibold text-lg text-gray-900'>{name}</h3>
              {!isLocked && (
                <svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
              )}
            </div>
            
            <div className='text-sm text-gray-600 mb-1'>{title}</div>
            <div className='text-sm text-gray-500 mb-3'>{location}</div>
            <div className='text-sm text-gray-500 mb-3'>{education}</div>
            <div className='text-sm text-gray-600 mb-3'>{skills}</div>
            <div className='text-sm text-gray-700 mb-4'>{summary}</div>
            
            <div className='space-y-2'>
              <div className='flex items-center gap-4 text-sm'>
                <span className='text-gray-600'>Resume Available</span>
                <span className='text-gray-600'>LinkedIn</span>
                {isLocked ? (
                  <>
                    <span className='text-gray-400 flex items-center gap-1'>
                      Email (locked)
                      <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                      </svg>
                    </span>
                    <span className='text-gray-400 flex items-center gap-1'>
                      Phone (locked)
                      <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                      </svg>
                    </span>
                  </>
                ) : (
                  <>
                    <span className='text-blue-600'>{email}</span>
                    <span className='text-gray-600'>{phone}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col gap-2 ml-4'>
          {isLocked ? (
            <button className='bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-700'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
              </svg>
              Unlock to view
            </button>
          ) : (
            <>
              <button 
                onClick={handleShortlist}
                className='bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-green-700'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z' clipRule='evenodd' />
                </svg>
                Shortlist
              </button>
              <button 
                onClick={handleScheduleCall}
                className='bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
                </svg>
                Schedule Call
              </button>
              <button 
                onClick={handleAddNotes}
                className='bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
                Add Notes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CandidateCard


