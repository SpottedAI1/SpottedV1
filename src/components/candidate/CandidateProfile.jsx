"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CandidateProfile = ({ candidateId }) => {
  const [activeTab, setActiveTab] = useState('experiences');
  const [candidate, setCandidate] = useState(null);


  useEffect(() => {
    // Read selected candidate from localStorage if available
    if (typeof window !== 'undefined') {
      try {
        const stored = window.localStorage.getItem('selectedCandidate');
        if (stored) {
          const parsed = JSON.parse(stored);
          
          // Map the candidate data from SimilarCandidatesClient format
          setCandidate({
            name: parsed.name || 'Unknown Candidate',
            location: parsed.location || 'Location not specified',
            title: parsed.role || parsed.title || 'Professional',
            company: parsed.company || 'Company not specified',
            education: parsed.education || 'Education not specified',
            university: parsed.university || 'University not specified',
            experiences: parsed.experiences || [{ role: 'Professional', company: 'Various', duration: 'N/A', description: 'Professional experience' }],
            highlights: parsed.skills ? parsed.skills.split(' | ').slice(0, 5) : ['Skills not specified'],
            summary: parsed.summary || `Experienced ${parsed.role || 'professional'} with ${parsed.experience || 'relevant'} experience. Skills include ${parsed.skills || 'various technologies'}.`,
            skills: parsed.skills || '',
            experience: parsed.experience || '',
            linkedin: parsed.linkedin || false
          });
          return;
        }
      } catch (error) {
        // Handle error silently
      }
    }
    // Show loading state if no candidate data
    setCandidate(null);
  }, [candidateId]);

  if (!candidate) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-bold text-xl">
            {candidate.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">{candidate.name}</h1>
            <div className="flex gap-1">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">in</span>
              </div>
              <div className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">↗</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-1">{candidate.location}</p>
          <p className="font-semibold text-gray-900 mb-1">{candidate.title}</p>
          <p className="text-gray-600 mb-1">{candidate.company}</p>
          <p className="text-sm text-gray-600">{candidate.education}</p>
          <p className="text-sm text-gray-600">{candidate.university}</p>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex gap-4 mb-6 text-sm">
        <a href="#" className="text-blue-600 hover:underline">Download Resume</a>
        {candidate.linkedin ? (
          <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        ) : (
          <span className="text-gray-400">LinkedIn (not available)</span>
        )}
        <span className="text-gray-400">Email (locked)</span>
        <span className="text-gray-400">Phone (locked)</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-200">
        {[
          { id: 'experiences', label: 'Experiences' },
          { id: 'education', label: 'Education' },
          { id: 'skills', label: 'Skills' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'experiences' && (
        <div className="space-y-4">
          {candidate.experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
              <p className="font-medium text-gray-700 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div>
          <p className="text-gray-700">{candidate.education}</p>
          <p className="text-gray-600">{candidate.university}</p>
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {candidate.highlights.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm ${
                  idx % 4 === 0 ? 'bg-purple-100 text-purple-700' :
                  idx % 4 === 1 ? 'bg-green-100 text-green-700' :
                  idx % 4 === 2 ? 'bg-orange-100 text-orange-700' :
                  'bg-pink-100 text-pink-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
          {candidate.skills && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">All Skills:</h4>
              <p className="text-gray-700">{candidate.skills}</p>
            </div>
          )}
          {candidate.experience && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Experience:</h4>
              <p className="text-gray-700">{candidate.experience}</p>
            </div>
          )}
          <p className="text-gray-700">{candidate.summary}</p>
        </div>
      )}
    </div>
  );
};

export default CandidateProfile;
