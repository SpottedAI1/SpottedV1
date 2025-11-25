"use client";
import React, { useEffect, useState } from "react";
import ResultsHeader from "./ResultsHeader";
import { useRouter } from "next/navigation";

const SearchClient = ({ prompt }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!prompt) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        // Use the working AI webhook directly (it has proper CORS)

        const qs = encodeURIComponent(prompt);
        console.log("Searching with prompt:", prompt);
        console.log("Encoded query:", qs);

        const url = `https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42?q=${qs}`;
        console.log("Fetching URL:", url);

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
          body: JSON.stringify({
            query: prompt,
            q: prompt,
            searchType: "reference_candidates",
            limit: 10,
          }),
        });

        console.log("Response status:", res.status);
        console.log(
          "Response headers:",
          Object.fromEntries(res.headers.entries())
        );

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Error response:", errorText);
          throw new Error(`Webhook responded ${res.status}: ${errorText}`);
        }

        const text = await res.text();
        console.log("Raw response text:", text);

        let data;
        try {
          data = text ? JSON.parse(text) : null;
          console.log("Parsed data:", data);
        } catch (parseError) {
          console.log("Parse error, using raw text:", parseError);
          data = text;
        }

        // TEMPORARY: Use mock data if webhook returns empty response
        if (
          !data ||
          (Array.isArray(data) && data.length === 0) ||
          (typeof data === "object" && Object.keys(data).length === 0)
        ) {
          console.log("Webhook returned empty data, using mock candidates");
          data = [
            {
              id: "1",
              name: "John Smith",
              role: "Senior Software Engineer",
              company: "Tech Corp",
              skills: "React, Node.js, Python, AWS",
              experience: "5 years",
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Full Stack Developer",
              company: "StartupXYZ",
              skills: "JavaScript, TypeScript, MongoDB, Docker",
              experience: "3 years",
            },
            {
              id: "3",
              name: "Mike Chen",
              role: "Frontend Developer",
              company: "Design Studio",
              skills: "React, Vue.js, CSS, Figma",
              experience: "4 years",
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
        } else if (typeof data === "string" && data.trim()) {
          normalized = [{ name: "Result", title: "", summary: data }];
        }

        console.log("Normalized data before mapping:", normalized);

        // Ensure each candidate has required fields for selection
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
          ...candidate,
        }));

        console.log("Final normalized results:", normalized);
        setResults(normalized);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [prompt]);

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidates((prev) => {
      const isSelected = prev.some((c) => c.id === candidate.id);
      if (isSelected) {
        return prev.filter((c) => c.id !== candidate.id);
      } else {
        return [...prev, candidate];
      }
    });
  };

  const handleBackToSearch = () => {
    router.push("/after-onboarding");
  };

  const handleNext = () => {
    if (selectedCandidates.length === 0) {
      alert(
        "Please select at least one candidate to find similar professionals."
      );
      return;
    }

    // Navigate to similar candidates page with selected candidates
    const candidatesParam = encodeURIComponent(
      JSON.stringify(selectedCandidates)
    );
    router.push(`/similar?candidates=${candidatesParam}`);
  };

  return (
    <div className="flex-1 p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Select a Reference Candidate
          </h1>
          <div className="flex gap-3">
            <button
              onClick={handleBackToSearch}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              ← Back to Search
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Next ({selectedCandidates.length})
            </button>
          </div>
        </div>
        <p className="text-gray-600">
          Choose one or more candidates to find similar professionals.
        </p>
      </div>

      {/* Candidate List */}
      <div className="space-y-4">
        {loading && (
          <div className="text-center py-8">
            <div className="text-gray-600">Searching for candidates...</div>
          </div>
        )}

        {!loading && results.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-600">
              No candidates found for your search. Please try a different search
              term.
            </div>
          </div>
        )}

        {!loading &&
          results.length > 0 &&
          results.map((candidate) => {
            const isSelected = selectedCandidates.some(
              (c) => c.id === candidate.id
            );
            return (
              <div
                key={candidate.id}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
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
                        <h3 className="font-semibold text-gray-900">
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

                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {candidate.role}
                        {candidate.company && `, ${candidate.company}`}
                      </div>

                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Skills:</span>{" "}
                        {candidate.skills}
                      </div>

                      <div className="text-sm text-gray-500">
                        {candidate.experience}
                      </div>
                    </div>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => handleCandidateSelect(candidate)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                      isSelected
                        ? "bg-gray-600 text-white border-gray-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchClient;
