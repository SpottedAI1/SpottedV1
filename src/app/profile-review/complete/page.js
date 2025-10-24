"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function ProfileReviewCompletePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [reviewResults, setReviewResults] = useState(null);

  useEffect(() => {
    // Get review results from localStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('reviewResults');
        if (stored) {
          setReviewResults(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error parsing review results:', error);
      }
    }

    // Simulate progress through steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(stepInterval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Understanding preferences...",
      icon: "✓",
      status: currentStep >= 1 ? "done" : "pending",
      description: "Done"
    },
    {
      id: 2,
      title: "Searching top matches from our talent pool...",
      icon: "🔍",
      status: currentStep >= 2 ? "in-progress" : currentStep > 2 ? "done" : "pending",
      description: currentStep >= 2 ? "In Progress" : "Queued"
    },
    {
      id: 3,
      title: "Sending personalized outreach emails...",
      icon: "✉️",
      status: currentStep >= 3 ? "in-progress" : currentStep > 3 ? "done" : "pending",
      description: currentStep >= 3 ? "In Progress" : "Queued"
    },
    {
      id: 4,
      title: "Scheduling interviews with interested candidates...",
      icon: "📅",
      status: currentStep >= 4 ? "in-progress" : "pending",
      description: currentStep >= 4 ? "In Progress" : "Upcoming"
    }
  ];

  const getStepIcon = (step) => {
    if (step.status === "done") {
      return (
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      );
    } else if (step.status === "in-progress") {
      return (
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">{step.icon}</span>
        </div>
      );
    }
  };

  const getStepTextColor = (step) => {
    if (step.status === "done") return "text-green-600";
    if (step.status === "in-progress") return "text-gray-600";
    return "text-gray-400";
  };

  return (
    <div className="h-screen bg-white overflow-hidden">
      <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
        <div className="fixed left-0 top-0 h-full z-10">
          <SideBar />
        </div>
        <div className="ml-[260px] h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Completion Message */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Thanks! Spotted AI now understands your ideal candidate.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're now setting up your automated outreach and scheduling system.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="w-full max-w-2xl mb-8 flex-1 flex items-center justify-center">
            <div className="space-y-5 w-full">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-4">
                  {getStepIcon(step)}
                  <div className="flex-1 pt-1">
                    <h3 className={`text-lg font-semibold ${getStepTextColor(step)} mb-1`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium ${getStepTextColor(step)}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Information */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-md mb-6">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-800 font-semibold text-base text-center">
                Expect interviews to be scheduled within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
