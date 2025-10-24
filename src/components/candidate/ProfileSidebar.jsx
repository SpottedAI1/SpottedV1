"use client";
import React, { useState, useEffect } from 'react';

const ProfileSidebar = ({ candidateId }) => {
  const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCandidateData = async () => {
      setLoading(true);
      let candidate = null;
      if (typeof window !== 'undefined') {
        try {
          const stored = window.localStorage.getItem('selectedCandidate');
          if (stored) {
            const parsed = JSON.parse(stored);
            candidate = {
              name: parsed.name,
              title: parsed.title,
              location: parsed.location,
              education: parsed.education,
              skills: parsed.skills,
              summary: parsed.summary,
              email: parsed.email,
              phone: parsed.phone,
              matchScore: parsed.matchScore || 85,
              experience: parsed.experience || 'Experience not specified',
              previousCompanies: parsed.previousCompanies || [],
              isShortlisted: parsed.isShortlisted || false
            };
          }
        } catch {}
      }
      if (!candidate) {
        // Show loading state if no candidate data
        candidate = null;
      }
      setCandidateData(candidate);
      setLoading(false);
    };

    fetchCandidateData();
  }, [candidateId]);

  if (loading) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6">
      {/* Profile Navigation */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">Profile {candidateId} of 3000</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">Prev</button>
          <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded hover:bg-black">Next</button>
        </div>
        {/* Shortlist button (like the first image) */}
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Shortlist
        </button>
      </div>

      {/* AI Insight */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h3 className="font-semibold text-gray-900">AI Insight</h3>
        </div>
        <p className="text-sm text-gray-700">
          This candidate matches {candidateData?.matchScore || 85}% of your criteria based on previous approvals.
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
