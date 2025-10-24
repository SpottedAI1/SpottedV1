"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function AIAgentResultsPage() {
  const router = useRouter();

  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>
        <div className="ml-[260px] min-h-screen bg-white flex flex-col">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            {/* AI Agent Title */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Spotted AI Agent
                <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Active
                </span>
              </h1>
            </div>

            {/* Instructions */}
            <div className="text-center mb-10 max-w-3xl">
              <p className="text-xl text-gray-800 mb-4 leading-relaxed">
                I've found initial matches. Please review these profiles and share your feedback.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Approve all profiles to help Spotted learn your preferences and begin outreach.
              </p>
            </div>

            {/* Review Profiles Button */}
            <div className="mb-8">
              <button 
                onClick={async () => {
                  try {
                    // Call webhook to fetch candidate data
                    const response = await fetch('https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        action: 'get_candidates',
                        count: 5
                      })
                    });
                    
                    if (response.ok) {
                      const responseData = await response.json();
                      console.log('Webhook response:', responseData);
                      
                      // The webhook should return an array of candidates
                      let candidates = [];
                      
                      if (Array.isArray(responseData)) {
                        // Direct array of candidates
                        candidates = responseData;
                      } else if (responseData.candidates && Array.isArray(responseData.candidates)) {
                        // Candidates in a wrapper object
                        candidates = responseData.candidates;
                      } else if (responseData.data && Array.isArray(responseData.data)) {
                        // Candidates in data field
                        candidates = responseData.data;
                      } else {
                        console.error('Unexpected webhook response format:', responseData);
                        // Fallback to navigate without data
                        router.push('/profile-review');
                        return;
                      }
                      
                      // Store candidates data in localStorage
                      localStorage.setItem('reviewCandidates', JSON.stringify(candidates));
                      console.log('Stored candidates:', candidates);
                      
                      // Navigate to profile review page
                      router.push('/profile-review');
                    } else {
                      console.error('Failed to fetch candidates, status:', response.status);
                      // Fallback to navigate without data
                      router.push('/profile-review');
                    }
                  } catch (error) {
                    console.error('Error fetching candidates:', error);
                    // Fallback to navigate without data
                    router.push('/profile-review');
                  }
                }}
                className="bg-gray-800 text-white px-10 py-5 rounded-lg text-xl font-medium hover:bg-gray-900 flex items-center gap-4 transition-colors shadow-lg"
              >
                Review Profiles
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Edit Search Link */}
            <div className="mb-24">
              <button 
                onClick={() => {
                  router.push('/search');
                }}
                className="text-gray-500 hover:text-gray-700 text-base flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Edit search
              </button>
            </div>
          </div>

          {/* Information Box - Fixed at bottom */}
          <div className="px-6 pb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-blue-500 rounded mr-4"></div>
                <span className="text-blue-800 text-base">
                  No emails will be sent during the review process. This helps calibrate the AI agent.
                </span>
              </div>
              <button 
                onClick={() => {
                  // Clear agent functionality
                  if (confirm('Are you sure you want to clear the AI agent?')) {
                    router.push('/search-results');
                  }
                }}
                className="text-blue-600 hover:text-blue-800 text-base underline"
              >
                Clear Agent
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}