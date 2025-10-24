import React from 'react'

const ResultsHeader = ({ prompt }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between'>
      <div className='text-sm text-gray-700 truncate'>
        {prompt || 'Senior Product Manager with 5+ years experience in B2B SaaS, preferably from Bangalore with strong analytics background and team leadership experience'}
      </div>
      <div>
        <select className='text-xs border border-gray-300 rounded px-2 py-1 text-gray-700'>
          <option>Sort by: Relevance</option>
        </select>
      </div>
    </div>
  )
}

export default ResultsHeader


