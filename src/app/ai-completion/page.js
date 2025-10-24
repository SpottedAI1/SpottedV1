"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function AICompletionPage() {
  const router = useRouter();

  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>
        
        {/* Main Content Area */}
        <div className="ml-[260px] min-h-screen bg-white flex flex-col items-center justify-center px-6">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks! Spotted AI now understands your ideal candidate.
            </h1>
            <p className="text-xl text-gray-600">
              We're now setting up your automated outreach and scheduling system.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="w-full max-w-2xl mb-12">
            <div className="space-y-6">
              {/* Step 1 - Done */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-900">Understanding preferences...</p>
                </div>
                <span className="text-green-600 font-medium">Done</span>
              </div>

              {/* Step 2 - In Progress */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-900">Searching top matches from our talent pool...</p>
                </div>
                <span className="text-gray-500 font-medium">In Progress</span>
              </div>

              {/* Step 3 - Queued */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-900">Sending personalized outreach emails...</p>
                </div>
                <span className="text-gray-500 font-medium">Queued</span>
              </div>

              {/* Step 4 - Upcoming */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-900">Scheduling interviews with interested candidates...</p>
                </div>
                <span className="text-gray-500 font-medium">Upcoming</span>
              </div>
            </div>
          </div>

          {/* Information Box */}
          <div className="w-full max-w-2xl">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-purple-800 text-lg font-medium">
                  Expect interviews to be scheduled within 24-48 hours
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex gap-4">
            <button 
              onClick={() => router.push('/search-results')}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Back to Search
            </button>
            <button 
              onClick={() => router.push('/ai-agents')}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              View AI Agents
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}


