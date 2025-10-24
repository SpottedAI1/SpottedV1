"use client";
import React, { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function ShortlistedPage() {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [sortBy, setSortBy] = useState("addedOn");

  // Load shortlisted candidates from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('shortlistedCandidates');
    if (saved) {
      setShortlistedCandidates(JSON.parse(saved));
    } else {
      // Default mock data
      const defaultShortlisted = [
        {
          id: "1",
          name: "Radhika Jain",
          avatar: "RJ",
          avatarColor: "bg-red-500",
          currentRole: "Sr. Product Manager",
          shortlistedFor: "Frontend Developer",
          shortlistedLocation: "Delhi",
          currentCompany: "CRED",
          location: "Bangalore",
          experience: "4.5 yrs",
          skills: [
            { label: "React", color: "bg-blue-100 text-blue-800" },
            { label: "TypeScript", color: "bg-blue-50 text-blue-700" }
          ],
          addedOn: "July 11"
        },
        {
          id: "2",
          name: "Ankit Verma",
          avatar: "AV",
          avatarColor: "bg-green-500",
          currentRole: "Backend Lead",
          shortlistedFor: "Backend Lead",
          shortlistedLocation: "Mumbai",
          currentCompany: "Razorpay",
          location: "Bangalore",
          experience: "6.2 yrs",
          skills: [
            { label: "Node.js", color: "bg-green-50 text-green-700" },
            { label: "Go", color: "bg-green-100 text-green-800" }
          ],
          addedOn: "July 9"
        },
        {
          id: "3",
          name: "Priya Sharma",
          avatar: "PS",
          avatarColor: "bg-purple-500",
          currentRole: "UX Designer",
          shortlistedFor: "Product Designer",
          shortlistedLocation: "Remote",
          currentCompany: "Swiggy",
          location: "Mumbai",
          experience: "3.8 yrs",
          skills: [
            { label: "Figma", color: "bg-yellow-100 text-yellow-800" },
            { label: "Prototyping", color: "bg-orange-100 text-orange-800" }
          ],
          addedOn: "July 8"
        }
      ];
      setShortlistedCandidates(defaultShortlisted);
      localStorage.setItem('shortlistedCandidates', JSON.stringify(defaultShortlisted));
    }
  }, []);

  const removeFromShortlist = (candidateId) => {
    const updated = shortlistedCandidates.filter(c => c.id !== candidateId);
    setShortlistedCandidates(updated);
    localStorage.setItem('shortlistedCandidates', JSON.stringify(updated));
  };

  const filteredCandidates = shortlistedCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.shortlistedFor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !filterRole || candidate.shortlistedFor === filterRole;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>
        
        <div className="ml-[260px] min-h-screen bg-white">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shortlisted Profiles</h1>
              <p className="text-gray-600">All candidates you've shortlisted from search or AI results.</p>
            </div>

            {/* Search and Filter Bar */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search name or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <span>Filter by Role</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <span>Sort by</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export CSV
              </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-8 gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <div>CANDIDATE NAME</div>
                  <div>ROLE SHORTLISTED FOR</div>
                  <div>CURRENT COMPANY</div>
                  <div>LOCATION</div>
                  <div>EXPERIENCE</div>
                  <div>SKILLS</div>
                  <div>ADDED ON</div>
                  <div>ACTIONS</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredCandidates.map((candidate) => (
                  <div key={candidate.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="grid grid-cols-8 gap-4 items-center">
                      {/* Candidate Name */}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${candidate.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {candidate.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-gray-900 truncate">{candidate.name}</div>
                          <div className="text-sm text-gray-500 truncate">{candidate.currentRole}</div>
                        </div>
                      </div>

                      {/* Role Shortlisted For */}
                      <div className="min-w-0">
                        <div className="font-bold text-gray-900 truncate">{candidate.shortlistedFor}</div>
                        <div className="text-sm text-gray-500 truncate">{candidate.shortlistedLocation}</div>
                      </div>

                      {/* Current Company */}
                      <div className="font-bold text-gray-900 truncate">{candidate.currentCompany}</div>

                      {/* Location */}
                      <div className="text-gray-500 truncate">{candidate.location}</div>

                      {/* Experience */}
                      <div className="font-bold text-gray-900">{candidate.experience}</div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs font-medium rounded-full ${skill.color}`}
                          >
                            {skill.label}
                          </span>
                        ))}
                      </div>

                      {/* Added On */}
                      <div className="text-gray-500">{candidate.addedOn}</div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/candidate/${candidate.id}`}
                          className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => removeFromShortlist(candidate.id)}
                          className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredCandidates.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No shortlisted candidates found</div>
                <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
