"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";
import Image from "next/image";

import { data } from "../mock/candidates";

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultsPage />
    </Suspense>
  );
}

function SearchResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [unlockedCards, setUnlockedCards] = useState(new Set());

  //For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);

    if (query) {
      fetchResults(query);
    }
  }, [searchParams]);

  //during production set this to false to call the real APi
  const USE_MOCK_DATA = true;

  const fetchResults = async (query) => {
    setLoading(true);
    if (USE_MOCK_DATA) {
      setResults(data);
      return setLoading(false);
    }

    try {
      const qs = encodeURIComponent(query);
      const res = await fetch(
        `https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42?q=${qs}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
          body: JSON.stringify({
            query: query,
            q: query,
            searchType: "reference_candidates",
            limit: 10,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Webhook responded ${res.status}`);
      }

      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (parseError) {
        data = text;
      }

      // Use mock data if webhook returns empty response
      if (
        !data ||
        (Array.isArray(data) && data.length === 0) ||
        (typeof data === "object" && Object.keys(data).length === 0)
      ) {
        data = [
          {
            id: "1",
            name: "Radhika Jain",
            position: "Sr. Product Manager",
            company: "HealthifyMe",
            location: "Bangalore, India",
            education: "B.Tech - Manipal Institute of Tech",
            skills: "Product Strategy | A/B Testing | Figma | Agile",
            experience:
              "5+ years building mobile-first healthtech products, managing 3 squads and driving 20%+ conversion improvements. Ex-Zomato, Ex-Flipkart.",
            email: "radhika.jain@gmail.com",
            phone: "+91-98XXXXXXX",
            avatar: "RJ",
            avatarColor: "bg-red-500",
            isVerified: true,
            isLocked: true,
            // Additional data for profile page
            university: "Manipal Institute of Technology",
            experiences: [
              {
                company: "HealthifyMe",
                role: "Sr. Product Manager",
                period: "2022 - Present",
                description:
                  "Led product strategy for mobile health platform, managing 3 squads and driving 20%+ conversion improvements",
              },
              {
                company: "Zomato",
                role: "Product Manager",
                period: "2020 - 2022",
                description:
                  "Built and scaled food delivery features, improving user engagement by 35%",
              },
            ],
            highlights: [
              { label: "Product", color: "bg-blue-100 text-blue-800" },
              { label: "Healthtech", color: "bg-green-100 text-green-800" },
              { label: "Mobile", color: "bg-orange-100 text-orange-800" },
              { label: "Analytics", color: "bg-pink-100 text-pink-800" },
              { label: "Leadership", color: "bg-purple-100 text-purple-800" },
            ],
            summary:
              "Experienced product manager with 5+ years building mobile-first healthtech products, managing cross-functional teams and driving significant conversion improvements. Strong background in analytics and user-centered design.",
            aiMatch: 92,
          },
          {
            id: "2",
            name: "Pratibha Sharma",
            position: "Product Manager",
            company: "Quick Sun Technology Pvt Ltd",
            location: "Bangalore, India",
            education: "B.Tech - IIT Delhi",
            skills: "Product Strategy | User Research | Data Analytics | Agile",
            experience:
              "2+ years building B2B SaaS products with focus on user experience and conversion optimization.",
            email: "pratibha.sharma@gmail.com",
            phone: "+91-99XXXXXXX",
            avatar: "PS",
            avatarColor: "bg-purple-500",
            isVerified: false,
            isLocked: true,
            university: "Indian Institute of Technology, Delhi",
            experiences: [
              {
                company: "Quick Sun Technology",
                role: "Product Manager",
                period: "2021 - Present",
                description:
                  "Building B2B SaaS products with focus on user experience and conversion optimization",
              },
            ],
            highlights: [
              { label: "B2B SaaS", color: "bg-blue-100 text-blue-800" },
              { label: "UX", color: "bg-green-100 text-green-800" },
              { label: "Analytics", color: "bg-orange-100 text-orange-800" },
            ],
            summary:
              "Product manager with 2+ years experience in B2B SaaS, focusing on user experience and data-driven product decisions.",
            aiMatch: 78,
          },
          {
            id: "3",
            name: "Hitesh Prasad",
            position: "Senior Product Manager",
            company: "TechCorp Solutions",
            location: "Mumbai, India",
            education: "MBA - IIM Bangalore",
            skills:
              "Product Strategy | Analytics | Team Leadership | Go-to-Market",
            experience:
              "6+ years in product management with expertise in B2B SaaS, team leadership, and driving product growth.",
            email: "hitesh.prasad@gmail.com",
            phone: "+91-97XXXXXXX",
            avatar: "HP",
            avatarColor: "bg-green-500",
            isVerified: true,
            isLocked: true,
            university: "Indian Institute of Management, Bangalore",
            experiences: [
              {
                company: "TechCorp Solutions",
                role: "Senior Product Manager",
                period: "2021 - Present",
                description:
                  "Leading product strategy for enterprise SaaS platform, managing cross-functional teams and driving 30%+ growth",
              },
              {
                company: "StartupXYZ",
                role: "Product Manager",
                period: "2019 - 2021",
                description:
                  "Built and launched core product features, resulting in 50% increase in user engagement",
              },
            ],
            highlights: [
              { label: "B2B SaaS", color: "bg-blue-100 text-blue-800" },
              { label: "Leadership", color: "bg-green-100 text-green-800" },
              { label: "Analytics", color: "bg-orange-100 text-orange-800" },
              { label: "Growth", color: "bg-pink-100 text-pink-800" },
            ],
            summary:
              "Senior product manager with 6+ years experience in B2B SaaS, specializing in team leadership and driving product growth through data-driven decisions.",
            aiMatch: 88,
          },
          {
            id: "4",
            name: "Mehul Sharma",
            position: "Product Manager",
            company: "Ransh Innovations pvt ltd.",
            location: "Delhi, India",
            education: "B.Tech - NIT Trichy",
            skills:
              "Product Strategy | User Experience | Data Analysis | Scrum",
            experience:
              "1+ year in product management with strong background in analytics and user-centered design.",
            email: "mehul.sharma@gmail.com",
            phone: "+91-96XXXXXXX",
            avatar: "MS",
            avatarColor: "bg-orange-500",
            isVerified: false,
            isLocked: true,
            university: "National Institute of Technology, Trichy",
            experiences: [
              {
                company: "Ransh Innovations",
                role: "Product Manager",
                period: "2023 - Present",
                description:
                  "Leading product development for innovative tech solutions with focus on user experience and data analysis",
              },
            ],
            highlights: [
              { label: "UX Design", color: "bg-blue-100 text-blue-800" },
              { label: "Analytics", color: "bg-green-100 text-green-800" },
              { label: "Innovation", color: "bg-orange-100 text-orange-800" },
            ],
            summary:
              "Product manager with strong background in analytics and user-centered design, focusing on innovative tech solutions and data-driven product decisions.",
            aiMatch: 75,
          },
          {
            id: "5",
            name: "Jitu Gandhare",
            position: "Frontend Developer",
            company: "Independent",
            location: "Pune, India",
            education: "B.Tech - Pune University",
            skills: "React | JavaScript | HTML/CSS | Node.js",
            experience:
              "2+ years in frontend development with expertise in React and modern web technologies.",
            email: "jitu.gandhare@gmail.com",
            phone: "+91-95XXXXXXX",
            avatar: "JG",
            avatarColor: "bg-indigo-500",
            isVerified: false,
            isLocked: true,
            university: "Pune University",
            experiences: [
              {
                company: "Freelance",
                role: "Frontend Developer",
                period: "2022 - Present",
                description:
                  "Building responsive web applications using React, JavaScript, and modern frontend technologies",
              },
            ],
            highlights: [
              { label: "Frontend", color: "bg-blue-100 text-blue-800" },
              { label: "React", color: "bg-green-100 text-green-800" },
              { label: "JavaScript", color: "bg-orange-100 text-orange-800" },
            ],
            summary:
              "Frontend developer with 2+ years experience in React and modern web technologies, specializing in building responsive and user-friendly web applications.",
            aiMatch: 70,
          },
        ];
      }

      // Normalize data format
      let normalized = [];
      if (Array.isArray(data)) {
        normalized = data;
      } else if (data && typeof data === "object") {
        if (Array.isArray(data.results)) normalized = data.results;
        else if (Array.isArray(data.candidates)) normalized = data.candidates;
        else if (Array.isArray(data.data)) normalized = data.data;
        else normalized = [data];
      }

      // Ensure all candidates have required fields with proper defaults
      normalized = normalized.map((candidate, index) => {
        const name =
          candidate.name || candidate.full_name || "Unknown Candidate";

        // Generate initials from name
        const generateInitials = (fullName) => {
          if (!fullName || fullName === "Unknown Candidate") return "?";
          const words = fullName.trim().split(/\s+/);
          if (words.length >= 2) {
            return (words[0][0] + words[1][0]).toUpperCase();
          } else if (words.length === 1) {
            return words[0][0].toUpperCase();
          }
          return "?";
        };

        return {
          id: candidate.id || `candidate-${index}`,
          name: name,
          position:
            candidate.position ||
            candidate.role ||
            candidate.title ||
            "Position Not Specified",
          company:
            candidate.company ||
            candidate.organization ||
            "Company Not Specified",
          location:
            candidate.location || candidate.city || "Location Not Specified",
          education:
            candidate.education ||
            candidate.degree ||
            "Education Not Specified",
          skills:
            candidate.skills ||
            candidate.technologies ||
            "Skills Not Specified",
          experience:
            candidate.experience ||
            candidate.summary ||
            "Experience Not Specified",
          email: candidate.email || "email@example.com",
          phone: candidate.phone || candidate.contact || "+91-XXXXXXXXXX",
          avatar:
            candidate.avatar && candidate.avatar !== "?"
              ? candidate.avatar
              : generateInitials(name),
          isVerified: candidate.isVerified || candidate.verified || false,
          isLocked:
            candidate.isLocked !== undefined ? candidate.isLocked : true,
        };
      });

      setResults(normalized);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const unlockCard = (cardId) => {
    setUnlockedCards((prev) => new Set([...prev, cardId]));
  };

  //pagination
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>
        <div className="ml-[260px] min-h-screen pb-10 bg-white">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="mb-4">
              <h1 className="text-lg text-[#374151] text-[16px] px-1.5 py-2 rounded-md leading-relaxed bg-[#f8fafc] border border-[#e2e8f0] w-full">
                {searchQuery ||
                  "Senior Product Manager with 5+ years experience in B2B SaaS, preferably from Bangalore with strong analytics background and team leadership experience"}
              </h1>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 ">
                {results.length} candidates found
              </span>
              <div className="flex items-center gap-2 px-1.5 py-1 rounded-md border border-[#e5e7eb] bg-[#f8fafc]">
                <span className="text-sm text-gray-600  ">Sort by:</span>
                <select className="text-sm border-none bg-transparent text-gray-800 rounded-md focus:outline-none ">
                  <option>Relevance</option>
                  <option>Experience</option>
                  <option>Location</option>
                </select>
              </div>
            </div>
          </div>

          {/* AI Agent Banner */}
          <div className="mx-6 mt-4 mb-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Image src="/stars.svg" alt="star" width={24} height={24} />
                <span className="text-purple-800 font-medium ml-2">
                  Let Spotted AI auto-reach out to candidates and schedule
                  interviews.
                </span>
              </div>
              <button
                onClick={() => {
                  router.push("/ai-agent-results");
                }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 flex items-center gap-2"
              >
                Try AI Agent
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Candidate Cards */}
          <div className="px-6 pb-6">
            {loading && (
              <div className="text-center py-8">
                <div className="text-gray-600">Searching for candidates...</div>
              </div>
            )}

            {!loading && results.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-600">
                  No candidates found for your search.
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* pagination applied here */}
              {paginatedResults.map((candidate) => {
                const isUnlocked = unlockedCards.has(candidate.id);
                const showLockedState = candidate.isLocked && !isUnlocked;

                return (
                  <div
                    key={candidate.id}
                    className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-shadow ${
                      !showLockedState ? "cursor-pointer hover:shadow-md" : ""
                    }`}
                    onClick={() => {
                      if (!showLockedState) {
                        const candidateData = encodeURIComponent(
                          JSON.stringify(candidate)
                        );
                        router.push(
                          `/candidate/${candidate.id}?data=${candidateData}`
                        );
                      }
                    }}
                  >
                    {/* Top Section - Avatar, Name, and Action Buttons */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4 ">
                        {/* Avatar with verification */}
                        {/* <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center font-medium text-lg ${
                              showLockedState
                                ? "bg-gray-300 text-gray-500"
                                : candidate.avatarColor ||
                                  "bg-gray-800 text-white"
                            }`}
                          >
                            {showLockedState ? "?" : candidate.avatar}
                          </div>
                          {candidate.isVerified && !showLockedState && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </div> */}

                        {/* Box */}
                        <div className="p-2 border rounded-[3px] border-[#d1d5db]"></div>
                        {/* Name and Role */}
                        <div className="flex-1">
                          {showLockedState ? (
                            <div className="flex items-center gap-2">
                              <div className="h-5 bg-gray-300 rounded w-40"></div>
                              <Image
                                src="/linkedIn.svg"
                                alt="LinkedIn"
                                width={18}
                                height={18}
                              />
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 ">
                              <h3 className="text-[18px] font-bold text-gray-900">
                                {candidate.name}
                              </h3>
                              {candidate.isVerified && (
                                <Image
                                  src="/linkedIn.svg"
                                  alt="LinkedIn"
                                  width={18}
                                  height={18}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons - Top Right */}
                      <div className="flex gap-2">
                        {showLockedState ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              unlockCard(candidate.id);
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900"
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
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                            Unlock to view
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // Add candidate to shortlisted list
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
                                    candidate.avatarColor ||
                                    getAvatarColor(candidate.name),
                                  currentRole: candidate.position,
                                  shortlistedFor: candidate.position,
                                  shortlistedLocation: candidate.location,
                                  currentCompany: candidate.company,
                                  location: candidate.location,
                                  experience: "5+ yrs", // Default experience
                                  skills: [
                                    {
                                      label: "React",
                                      color: "bg-blue-100 text-blue-800",
                                    },
                                    {
                                      label: "JavaScript",
                                      color: "bg-green-100 text-green-800",
                                    },
                                  ],
                                  addedOn: new Date().toLocaleDateString(
                                    "en-US",
                                    { month: "long", day: "numeric" }
                                  ),
                                };

                                // Get existing shortlisted candidates
                                const existing = JSON.parse(
                                  localStorage.getItem(
                                    "shortlistedCandidates"
                                  ) || "[]"
                                );

                                // Check if candidate already exists
                                const exists = existing.find(
                                  (c) => c.id === candidate.id
                                );
                                if (!exists) {
                                  existing.push(shortlistedData);
                                  localStorage.setItem(
                                    "shortlistedCandidates",
                                    JSON.stringify(existing)
                                  );
                                  alert(
                                    `${candidate.name} added to shortlist!`
                                  );
                                } else {
                                  alert(
                                    `${candidate.name} already in shortlist!`
                                  );
                                }
                              }}
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-[#f3f4f6] rounded-lg hover:bg-gray-200 border border-gray-300"
                            >
                              <Image
                                src="/heart.svg"
                                alt="heart"
                                width={18}
                                height={18}
                              />
                              Shortlist
                            </button>
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 px-2.5  py-2 text-sm font-medium text-gray-700 bg-[#f3f4f6] border border-gray-300 rounded-lg hover:bg-gray-200"
                            >
                              <Image
                                src="/eye.svg"
                                alt="eye"
                                width={18}
                                height={18}
                                onClick={() => {
                                  if (!showLockedState) {
                                    const candidateData = encodeURIComponent(
                                      JSON.stringify(candidate)
                                    );
                                    router.push(
                                      `/candidate/${candidate.id}?data=${candidateData}`
                                    );
                                  }
                                }}
                              />
                            </button>
                            {/* <button
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
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
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                              Add Notes
                            </button> */}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Middle Section - Key Details */}
                    <div className="space-y-3 text-sm text-[#6b7280] mb-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src="work.svg"
                          alt="work"
                          width={16}
                          height={16}
                        />
                        {candidate.position} - {candidate.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Image
                          src="/education.svg"
                          alt="edu"
                          width={16}
                          height={16}
                        />
                        {candidate.education}
                      </div>

                      {/* <div className="flex items-center gap-2">
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
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        Skills: {candidate.skills}
                      </div> */}

                      <div className="flex items-center gap-2">
                        <Image
                          src="mailGray.svg"
                          alt="email"
                          width={16}
                          height={16}
                        />
                        {showLockedState ? (
                          <div className="h-4 bg-gray-300 rounded w-32"></div>
                        ) : (
                          candidate.email
                        )}
                      </div>
                    </div>

                    {/* Bottom Section - Contact Information */}
                    <div className="flex flex-wrap gap-6 text-sm">
                      {showLockedState ? (
                        <>
                          <div className="flex items-center gap-1 text-[#374151]">
                            <Image
                              src="/stars.svg"
                              alt="star"
                              width={16}
                              height={16}
                              className="mr-1"
                            />
                            {"This candidate is a " + candidate.experience}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* <div className="flex items-center gap-1 text-gray-700">
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
                          </div>
                          <div className="flex items-center gap-1 text-gray-700">
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
                          </div> */}
                          <div className="flex items-center gap-1 text-[#374151]">
                            <Image
                              src="/stars.svg"
                              alt="star"
                              width={16}
                              height={16}
                              className="mr-1"
                            />
                            {candidate.name + " is a " + candidate.experience}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* paginatin ui */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-4 py-1 border rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-800 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 text-gray-800"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === num
                    ? "bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-600"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 py-1 border rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-800 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 text-gray-800"
              }`}
            >
              Next
            </button>
          </div>

          {/* Sticky Footer */}
          {/* <div className="fixed bottom-0 left-[260px] right-0 bg-gray-800 text-white px-6 py-4 flex items-center justify-between z-30">
            <span className="text-sm">You're on the free trial.</span>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-black">
              Upgrade Now
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </main>
    </div>
  );
}
