"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function CandidateProfilePage({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("experiences");
  const [candidate, setCandidate] = useState(null);

  // Unwrap params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    // Get candidate data from URL params or use mock data
    const candidateData = searchParams.get("data");
    if (candidateData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(candidateData));
        // Use the dynamic data from the card but ensure consistent experience content
        const mockData = getMockCandidate(resolvedParams.id);
        setCandidate({
          ...parsedData,
          // Keep consistent experience data for all candidates
          experiences: mockData.experiences,
          highlights: mockData.highlights,
          summary: mockData.summary,
          aiMatch: mockData.aiMatch,
        });
      } catch (error) {
        console.error("Error parsing candidate data:", error);
        setCandidate(getMockCandidate(resolvedParams.id));
      }
    } else {
      setCandidate(getMockCandidate(resolvedParams.id));
    }
  }, [resolvedParams.id, searchParams]);

  const getMockCandidate = (id) => {
    // Common experience data for all candidates
    const commonExperiences = [
      {
        company: "Authentic8",
        role: "Senior Frontend Developer",
        period: "2022 - Present",
        description:
          "Led development of React-based security platform, improved performance by 40%",
      },
      {
        company: "Udemy",
        role: "Frontend Developer",
        period: "2020 - 2022",
        description:
          "Built course platform features using React, Node.js, and Python microservices",
      },
    ];

    const commonHighlights = [
      { label: "Frontend", color: "bg-purple-100 text-purple-800" },
      { label: "Fintech", color: "bg-green-100 text-green-800" },
      { label: "Remote", color: "bg-yellow-100 text-yellow-800" },
      { label: "React", color: "bg-green-100 text-green-800" },
      { label: "Python", color: "bg-pink-100 text-pink-800" },
    ];

    const commonSummary =
      "Experienced web apps developer — Front-End with ReactJS & Redux, Back-End with Node.js and Django. Strong background in fintech and security platforms with proven track record of performance improvements.";

    const mockCandidates = {
      1: {
        id: "1",
        name: "Arjun Sharma",
        avatar: "AS",
        avatarColor: "bg-blue-600",
        location: "San Francisco, USA",
        position: "Senior Frontend Developer",
        company: "Authentic8 (Series B)",
        education: "B.Tech Computer Science",
        university: "Indian Institute of Technology, Delhi",
        email: "arjun.sharma@example.com",
        phone: "+1-555-0123",
        isVerified: true,
        experiences: commonExperiences,
        skills: ["React", "JavaScript", "Node.js", "Python", "Django", "Redux"],
        highlights: commonHighlights,
        summary: commonSummary,
        aiMatch: 85,
      },
      2: {
        id: "2",
        name: "Pratibha Sharma",
        avatar: "PS",
        avatarColor: "bg-purple-600",
        location: "Bangalore, India",
        position: "Product Manager",
        company: "Quick Sun Technology Pvt Ltd",
        education: "B.Tech - IIT Delhi",
        university: "Indian Institute of Technology, Delhi",
        email: "pratibha.sharma@gmail.com",
        phone: "+91-99XXXXXXX",
        isVerified: false,
        experiences: commonExperiences,
        skills: [
          "Product Strategy",
          "User Research",
          "Data Analytics",
          "Agile",
          "UX Design",
        ],
        highlights: commonHighlights,
        summary: commonSummary,
        aiMatch: 78,
      },
    };
    return mockCandidates[id] || mockCandidates["1"];
  };

  const tabs = [
    { id: "experiences", label: "Experiences" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  if (!candidate) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading candidate profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>

        <div className="ml-[260px] min-h-screen bg-white">
          {/* Main Content Area */}
          <div className="flex">
            {/* Left Content */}
            <div className="flex-1 p-8 max-w-4xl">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 ${
                      candidate.avatarColor || "bg-blue-600"
                    } rounded-full flex items-center justify-center text-white font-bold text-2xl`}
                  >
                    {candidate.avatar}
                  </div>

                  {/* Name and Basic Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {candidate.name}
                      </h1>
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>

                    <div className="space-y-1 text-gray-600">
                      <p className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {candidate.location}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {candidate.position}
                      </p>
                      <p className="text-gray-600">{candidate.company}</p>
                      <p className="text-gray-600">
                        {candidate.education} from {candidate.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-300 rounded-lg hover:bg-blue-50">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {candidate.email}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {candidate.phone}
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-gray-800 text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "experiences" && (
                  <div className="space-y-6">
                    {(candidate.experiences || []).map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-6"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {exp.company}
                            </h3>
                            <p className="text-gray-600">{exp.role}</p>
                          </div>
                          <span className="text-sm text-gray-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                    {(!candidate.experiences ||
                      candidate.experiences.length === 0) && (
                      <div className="text-center py-8 text-gray-500">
                        <p>No experience information available</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-4">
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {candidate.education || "Education Not Specified"}
                      </h3>
                      <p className="text-gray-600">
                        {candidate.university || "University Not Specified"}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {(candidate.skills || []).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {(!candidate.skills || candidate.skills.length === 0) && (
                      <div className="text-center py-8 text-gray-500">
                        <p>No skills information available</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Highlights
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(candidate.highlights || []).map((highlight, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${highlight.color}`}
                    >
                      {highlight.label}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {candidate.summary || "No summary available"}
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
              {/* Profile Navigation */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">
                    Profile 1 of 3000
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">
                      ← Prev
                    </button>
                    <button className="px-3 py-1 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded">
                      Next →
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Add candidate to shortlisted list using actual candidate data
                    // Generate unique avatar color based on candidate name
                    const getAvatarColor = (name) => {
                      const colors = [
                        "bg-red-500",
                        "bg-purple-500",
                        "bg-green-500",
                        "bg-orange-500",
                        "bg-indigo-500",
                        "bg-pink-500",
                        "bg-teal-500",
                        "bg-yellow-500",
                        "bg-blue-500",
                      ];
                      const hash = name.split("").reduce((a, b) => {
                        a = (a << 5) - a + b.charCodeAt(0);
                        return a & a;
                      }, 0);
                      return colors[Math.abs(hash) % colors.length];
                    };

                    const shortlistedData = {
                      id: candidate.id,
                      name: candidate.name,
                      avatar: candidate.avatar,
                      avatarColor:
                        candidate.avatarColor || getAvatarColor(candidate.name),
                      currentRole: candidate.position,
                      shortlistedFor: candidate.position,
                      shortlistedLocation: candidate.location,
                      currentCompany: candidate.company,
                      location: candidate.location,
                      experience: "5+ yrs", // Default experience
                      skills: [
                        { label: "React", color: "bg-blue-100 text-blue-800" },
                        {
                          label: "JavaScript",
                          color: "bg-green-100 text-green-800",
                        },
                      ],
                      addedOn: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      }),
                    };

                    // Get existing shortlisted candidates
                    const existing = JSON.parse(
                      localStorage.getItem("shortlistedCandidates") || "[]"
                    );

                    // Check if candidate already exists
                    const exists = existing.find((c) => c.id === candidate.id);
                    if (!exists) {
                      existing.push(shortlistedData);
                      localStorage.setItem(
                        "shortlistedCandidates",
                        JSON.stringify(existing)
                      );
                      alert(`${candidate.name} added to shortlist!`);
                    } else {
                      alert(`${candidate.name} already in shortlist!`);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Shortlist
                </button>
              </div>

              {/* AI Insight */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <h3 className="font-semibold text-purple-900">AI Insight</h3>
                </div>
                <p className="text-sm text-gray-800">
                  This candidate matches {candidate.aiMatch || 85}% of your
                  criteria based on previous approvals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
