"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function ProfileReviewPage() {
  const router = useRouter();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('experiences');
  const [profiles, setProfiles] = useState([]);
  const [approvedProfiles, setApprovedProfiles] = useState([]);
  const [rejectedProfiles, setRejectedProfiles] = useState([]);

  // Mock candidate profiles for review - matching the image
  const mockProfiles = [
    {
      id: 1,
      name: "Arjun Sharma",
      title: "Senior Frontend Developer",
      company: "Authentic8",
      companyStage: "Series B",
      location: "San Francisco, USA",
      experience: "5 years",
      education: "B.Tech Computer Science",
      university: "Indian Institute of Technology, Delhi",
      skills: "Frontend, Fintech, Remote, React, Python",
      summary: "Experienced web apps developer — Front-End with ReactJS & Redux, Back-End with Node.js and Django. Strong background in fintech and security platforms with proven track record of performance improvements.",
      matchScore: 85,
      image: "/Avatar.png",
      experiences: [
        {
          company: "Authentic8",
          period: "2022 - Present",
          role: "Senior Frontend Developer",
          description: "Led development of React-based security platform, improved performance by 40%"
        },
        {
          company: "Udemy",
          period: "2020 - 2022",
          role: "Frontend Developer",
          description: "Built course platform features using React, Node.js, and Python microservices"
        }
      ],
      highlights: ["Frontend", "Fintech", "Remote", "React", "Python"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "TechCorp",
      companyStage: "Series A",
      location: "San Francisco, CA",
      experience: "5 years",
      education: "BS Computer Science, Stanford University",
      skills: "React, Node.js, Python, AWS, Docker",
      summary: "Experienced full-stack developer with expertise in modern web technologies. Led multiple successful product launches and has strong leadership skills.",
      matchScore: 92,
      image: "/Avatar.png",
      experiences: [
        {
          company: "TechCorp",
          period: "2021 - Present",
          role: "Senior Software Engineer",
          description: "Led development of scalable web applications serving millions of users"
        }
      ],
      highlights: ["React", "Node.js", "Python", "AWS", "Docker"]
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Product Manager",
      company: "InnovateLab",
      companyStage: "Seed",
      location: "New York, NY",
      experience: "7 years",
      education: "MBA, Wharton School",
      skills: "Product Strategy, Agile, Data Analysis, User Research",
      summary: "Strategic product manager with a track record of launching successful products. Strong analytical skills and user-centric approach.",
      matchScore: 88,
      image: "/Avatar.png",
      experiences: [
        {
          company: "InnovateLab",
          period: "2020 - Present",
          role: "Product Manager",
          description: "Led product strategy and roadmap for B2B SaaS platform"
        }
      ],
      highlights: ["Product Strategy", "Agile", "Data Analysis", "User Research"]
    },
    {
      id: 4,
      name: "Priya Patel",
      title: "Data Scientist",
      company: "DataFlow",
      companyStage: "Series A",
      location: "Seattle, WA",
      experience: "4 years",
      education: "MS Data Science, Carnegie Mellon University",
      skills: "Python, Machine Learning, SQL, TensorFlow, Statistics",
      summary: "Experienced data scientist with expertise in machine learning and statistical analysis. Led multiple ML projects that improved business outcomes by 30%.",
      matchScore: 91,
      image: "/Avatar.png",
      experiences: [
        {
          company: "DataFlow",
          period: "2021 - Present",
          role: "Senior Data Scientist",
          description: "Developed ML models for customer behavior prediction and recommendation systems"
        },
        {
          company: "TechCorp",
          period: "2020 - 2021",
          role: "Data Scientist",
          description: "Built predictive models for fraud detection and risk assessment"
        }
      ],
      highlights: ["Machine Learning", "Python", "Statistics", "Data Analysis", "AI"]
    },
    {
      id: 5,
      name: "David Kim",
      title: "DevOps Engineer",
      company: "CloudScale",
      companyStage: "Series B",
      location: "Austin, TX",
      experience: "6 years",
      education: "BS Computer Engineering, University of Texas",
      skills: "AWS, Docker, Kubernetes, Terraform, CI/CD, Python",
      summary: "DevOps engineer with strong background in cloud infrastructure and automation. Expert in scaling applications and implementing CI/CD pipelines.",
      matchScore: 87,
      image: "/Avatar.png",
      experiences: [
        {
          company: "CloudScale",
          period: "2022 - Present",
          role: "Senior DevOps Engineer",
          description: "Led infrastructure migration to AWS and implemented automated deployment pipelines"
        },
        {
          company: "StartupXYZ",
          period: "2020 - 2022",
          role: "DevOps Engineer",
          description: "Built and maintained cloud infrastructure for high-traffic applications"
        },
        {
          company: "TechGiant",
          period: "2019 - 2020",
          role: "Software Engineer",
          description: "Developed backend services and contributed to infrastructure automation"
        }
      ],
      highlights: ["AWS", "DevOps", "Kubernetes", "Automation", "Cloud"]
    }
  ];

  useEffect(() => {
    // Try to get data from localStorage first (from webhook)
    if (typeof window !== 'undefined') {
      try {
        const storedCandidates = localStorage.getItem('reviewCandidates');
        if (storedCandidates) {
          const candidates = JSON.parse(storedCandidates);
          // Transform webhook data to match our expected format
          const transformedCandidates = candidates.map((candidate, index) => ({
            id: candidate.id || index + 1,
            name: candidate.name || candidate.full_name || 'Unknown Candidate',
            title: candidate.title || candidate.position || candidate.role || 'Professional',
            company: candidate.company || candidate.current_company || 'Company not specified',
            companyStage: candidate.company_stage || candidate.stage || 'Unknown',
            location: candidate.location || candidate.city || 'Location not specified',
            experience: candidate.experience || candidate.years_experience || 'Experience not specified',
            education: candidate.education || candidate.degree || 'Education not specified',
            university: candidate.university || candidate.school || 'University not specified',
            skills: candidate.skills || candidate.technical_skills || 'Skills not specified',
            summary: candidate.summary || candidate.bio || candidate.description || 'No summary available',
            matchScore: candidate.match_score || candidate.score || 85,
            image: candidate.image || candidate.avatar || "/Avatar.png",
            experiences: candidate.experiences || candidate.work_experience || [
              {
                company: candidate.company || 'Current Company',
                period: candidate.period || 'Present',
                role: candidate.title || 'Current Role',
                description: candidate.summary || 'Professional experience'
              }
            ],
            highlights: candidate.highlights || candidate.tags || candidate.skills?.split(', ') || ['Professional']
          }));
          setProfiles(transformedCandidates);
          return;
        }
      } catch (error) {
        console.error('Error parsing stored candidates:', error);
      }
    }
    
    // Fallback to mock data if no webhook data
    setProfiles(mockProfiles);
  }, []);

  const currentProfile = profiles[currentProfileIndex];

  const handleApprove = async () => {
    if (currentProfile) {
      setApprovedProfiles(prev => [...prev, currentProfile]);
      
      // Send approval to webhook
      try {
        await fetch('https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'approve_candidate',
            candidate_id: currentProfile.id,
            candidate_data: currentProfile,
            profile_index: currentProfileIndex
          })
        });
      } catch (error) {
        console.error('Error sending approval:', error);
      }
      
      nextProfile();
    }
  };

  const handleReject = async () => {
    if (currentProfile) {
      setRejectedProfiles(prev => [...prev, currentProfile]);
      
      // Send rejection to webhook
      try {
        await fetch('https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'reject_candidate',
            candidate_id: currentProfile.id,
            candidate_data: currentProfile,
            profile_index: currentProfileIndex
          })
        });
      } catch (error) {
        console.error('Error sending rejection:', error);
      }
      
      nextProfile();
    }
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      // All profiles reviewed (should be exactly 5)
      handleReviewComplete();
    }
  };

  const prevProfile = () => {
    if (currentProfileIndex > 0) {
      setCurrentProfileIndex(prev => prev - 1);
    }
  };

  const handleReviewComplete = async () => {
    // Send final results to webhook
    try {
      await fetch('https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'review_complete',
          approved: approvedProfiles,
          rejected: rejectedProfiles,
          total: profiles.length,
          results: {
            approved_count: approvedProfiles.length,
            rejected_count: rejectedProfiles.length,
            total_reviewed: profiles.length
          }
        })
      });
    } catch (error) {
      console.error('Error sending review completion:', error);
    }
    
    // Store results and navigate to completion page
    localStorage.setItem('reviewResults', JSON.stringify({
      approved: approvedProfiles,
      rejected: rejectedProfiles,
      total: profiles.length
    }));
    
    // Clear the candidates data
    localStorage.removeItem('reviewCandidates');
    
    // Navigate to completion page
    router.push('/profile-review/complete');
  };

  if (!currentProfile) {
    return (
      <div className="h-screen bg-white overflow-hidden">
        <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
          <div className="fixed left-0 top-0 h-full z-10">
            <SideBar />
          </div>
          <div className="ml-[260px] min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Review Complete!</h1>
              <p className="text-gray-600 mb-6">
                You've reviewed all {profiles.length} profiles.
              </p>
              <button
                onClick={() => router.push('/ai-agent-results')}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
              >
                Return to AI Agent
              </button>
            </div>
          </div>
        </main>
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
          {/* Header */}
          <div className="border-b border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Profile Review</h1>
              </div>
              <button
                onClick={() => router.push('/ai-agent-results')}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[calc(100vh-80px)]">
            {/* Profile Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {currentProfile.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900">
                          {currentProfile.name}
                        </h2>
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {currentProfile.location}
                      </p>
                      
                      {/* Current Role */}
                      <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-900">
                          {currentProfile.title}
                        </p>
                        <p className="text-gray-600">
                          {currentProfile.company} ({currentProfile.companyStage})
                        </p>
                      </div>

                      {/* Education */}
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900">
                          {currentProfile.education}
                        </p>
                        <p className="text-sm text-gray-600">
                          {currentProfile.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-lg border border-gray-200 mb-6">
                  <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 px-6">
                      {[
                        { id: 'experiences', label: 'Experiences' },
                        { id: 'education', label: 'Education' },
                        { id: 'skills', label: 'Skills' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === tab.id
                              ? 'border-gray-900 text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  <div className="p-6">
                    {activeTab === 'experiences' && (
                      <div className="space-y-6">
                        {currentProfile.experiences.map((exp, index) => (
                          <div key={index} className="border-l-4 border-blue-500 pl-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">{exp.company}</h3>
                                <p className="text-sm text-gray-600">{exp.period}</p>
                              </div>
                            </div>
                            <p className="font-medium text-gray-900 mb-1">{exp.role}</p>
                            <p className="text-gray-700">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className="font-semibold text-gray-900">{currentProfile.education}</h3>
                          <p className="text-gray-600">{currentProfile.university}</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'skills' && (
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.highlights.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentProfile.highlights.map((highlight, index) => {
                      const colors = ['bg-purple-100 text-purple-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800', 'bg-blue-100 text-blue-800', 'bg-pink-100 text-pink-800'];
                      return (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${colors[index % colors.length]}`}
                        >
                          {highlight}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {currentProfile.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Sidebar */}
            <div className="w-80 bg-white border-l border-gray-200 p-6">
              <div className="sticky top-6">
                {/* Profile Navigation */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">Profile {currentProfileIndex + 1} of 5</p>
                  <div className="flex gap-2">
                    <button
                      onClick={prevProfile}
                      disabled={currentProfileIndex === 0}
                      className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Prev
                    </button>
                    <button
                      onClick={nextProfile}
                      disabled={currentProfileIndex === profiles.length - 1}
                      className="flex-1 px-4 py-2 text-sm bg-gray-900 text-white rounded hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                    >
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 mb-6">
                  <button
                    onClick={handleApprove}
                    className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Approve
                  </button>
                  <button
                    onClick={handleReject}
                    className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Reject
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    This only calibrates the agent and does not send emails.
                  </p>
                  <button 
                    onClick={async () => {
                      // Send skip to webhook
                      try {
                        await fetch('https://n8n.srv839690.hstgr.cloud/webhook/d3fc696e-cf8b-454e-9aa5-219fd9e44e42', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            action: 'skip_candidate',
                            candidate_id: currentProfile.id,
                            candidate_data: currentProfile,
                            profile_index: currentProfileIndex
                          })
                        });
                      } catch (error) {
                        console.error('Error sending skip:', error);
                      }
                      
                      nextProfile();
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 mx-auto block"
                  >
                    Skip
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
                    This candidate matches {currentProfile.matchScore}% of your criteria based on previous approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
