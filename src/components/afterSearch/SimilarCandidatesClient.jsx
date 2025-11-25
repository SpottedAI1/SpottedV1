"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SimilarCandidatesClient = ({ selectedCandidates }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!selectedCandidates || selectedCandidates.length === 0) {
      router.push("/search");
      return;
    }

    const fetchSimilarCandidates = async () => {
      setLoading(true);
      try {
        // Create query based on selected candidates
        const candidateNames = selectedCandidates.map((c) => c.name).join(", ");
        const candidateSkills = selectedCandidates
          .map((c) => c.skills)
          .join(" | ");
        const query = `Find 20 similar candidates to: ${candidateNames}. Skills: ${candidateSkills}. Return exactly 20 candidates with detailed profiles.`;

        // Use the working AI webhook directly (it has proper CORS)

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
              referenceCandidates: selectedCandidates,
              candidateNames: candidateNames,
              candidateSkills: candidateSkills,
              searchType: "similar_candidates",
              limit: 20,
              count: 20,
            }),
          }
        );

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Webhook responded ${res.status}: ${errorText}`);
        }

        const text = await res.text();

        let data;
        try {
          data = text ? JSON.parse(text) : null;
        } catch (parseError) {
          data = text;
        }

        // Normalize data format
        let normalized = [];
        if (Array.isArray(data)) {
          normalized = data;
        } else if (data && typeof data === "object") {
          if (Array.isArray(data.results)) normalized = data.results;
          else if (Array.isArray(data.candidates)) normalized = data.candidates;
          else if (Array.isArray(data.data)) normalized = data.data;
          else if (data.candidates && Array.isArray(data.candidates))
            normalized = data.candidates;
          else normalized = [data];
        } else if (typeof data === "string" && data.trim()) {
          normalized = [{ name: "Result", title: "", summary: data }];
        }

        // Ensure each candidate has required fields
        normalized = normalized.map((candidate, index) => ({
          id: candidate.id || String(index + 1),
          name: candidate.name || candidate.fullName || "Unknown",
          role: candidate.role || candidate.title || candidate.position || "",
          company: candidate.company || candidate.organization || "",
          skills:
            candidate.skills ||
            candidate.technologies ||
            candidate.techStack ||
            "",
          experience:
            candidate.experience ||
            candidate.yearsOfExperience ||
            candidate.experienceYears ||
            "",
          linkedin: candidate.linkedin || candidate.linkedIn || false,
          ...candidate,
        }));

        // Ensure we have at least some results, or show appropriate message
        if (normalized.length < 20 && normalized.length > 0) {
          // You could implement pagination or additional requests here
        }

        setResults(normalized);
      } catch (err) {
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarCandidates();
  }, [selectedCandidates, router]);

  const handleNewSearch = () => {
    router.push("/after-onboarding");
  };

  const handleShortlist = (candidate) => {
    // Store candidate data in localStorage for the candidate page
    try {
      localStorage.setItem("selectedCandidate", JSON.stringify(candidate));
    } catch (error) {
      // Handle error silently
    }

    // Navigate to candidate detail page
    router.push(`/candidate/${candidate.id}`);
  };

  const handleScheduleCall = (candidate) => {
    // Add schedule call functionality
  };

  const handleAddNotes = (candidate) => {
    // Add notes functionality
  };

  const referenceNames = selectedCandidates.map((c) => c.name).join(", ");

  return (
    <div className="flex-1 p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Similar Candidates
            </h1>
            <p className="text-gray-600 mt-1">Based on: {referenceNames}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {loading
                ? "Loading..."
                : `Showing 1-${results.length} of ${results.length} candidates`}
            </span>
            <button
              onClick={handleNewSearch}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              ← New Search
            </button>
          </div>
        </div>
      </div>

      {/* Candidate List - Scrollable Container */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="space-y-4 pr-2">
          {loading && (
            <div className="text-center py-8">
              <div className="text-gray-600">Finding similar candidates...</div>
            </div>
          )}

          {!loading && results.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-600">
                No similar candidates found. Please try selecting different
                reference candidates.
              </div>
            </div>
          )}

          {!loading &&
            results.length > 0 &&
            results.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-medium">
                      {candidate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    {/* Candidate Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {candidate.name}
                        </h3>
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <div className="text-sm text-gray-600 mb-1">
                        {candidate.role}
                        {candidate.company && `, ${candidate.company}`}
                      </div>

                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Skills:</span>{" "}
                        {candidate.skills}
                      </div>

                      <div className="text-sm text-gray-500 mb-2">
                        {candidate.experience}
                      </div>

                      {candidate.linkedin && (
                        <div className="flex items-center gap-1 text-sm text-blue-600">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          LinkedIn
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      onClick={() => handleShortlist(candidate)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-green-700"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Shortlist
                    </button>
                    <button
                      onClick={() => handleScheduleCall(candidate)}
                      className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Schedule Call
                    </button>
                    <button
                      onClick={() => handleAddNotes(candidate)}
                      className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Add Notes
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarCandidatesClient;
