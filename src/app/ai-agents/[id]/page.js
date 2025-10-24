"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function AgentDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgentDetails();
  }, [params.id]);

  const fetchAgentDetails = async () => {
    setLoading(true);
    try {
      // Mock data - replace with actual API call
      const agentsData = {
        "1": {
          id: "1",
          roleTitle: "Frontend Developer",
          location: "Delhi",
          status: "Active",
          statusColor: "bg-green-500",
          startDate: "July 11, 2025",
          outreachSent: 132,
          interviewsBooked: 9,
          avgReplyTime: "11 hrs",
          recentActivity: [
            {
              date: "July 11",
              title: "Agent Created",
              description: "Initial setup and preference learning completed",
              icon: "calendar"
            },
            {
              date: "July 11",
              title: "First 40 emails sent",
              description: "Outreach campaign launched to top matches",
              icon: "email"
            },
            {
              date: "July 12",
              title: "First 3 interviews booked",
              description: "Candidates responding positively to outreach",
              icon: "calendar"
            }
          ]
        },
        "2": {
          id: "2",
          roleTitle: "Product Designer",
          location: "Remote",
          status: "Paused",
          statusColor: "bg-orange-500",
          startDate: "July 8, 2025",
          outreachSent: 45,
          interviewsBooked: 3,
          avgReplyTime: "8 hrs",
          recentActivity: [
            {
              date: "July 8",
              title: "Agent Created",
              description: "Initial setup and preference learning completed",
              icon: "calendar"
            },
            {
              date: "July 9",
              title: "First 25 emails sent",
              description: "Outreach campaign launched to top matches",
              icon: "email"
            },
            {
              date: "July 10",
              title: "Agent Paused",
              description: "Temporarily paused for review",
              icon: "pause"
            }
          ]
        },
        "3": {
          id: "3",
          roleTitle: "Backend Lead",
          location: "Mumbai",
          status: "Done",
          statusColor: "bg-gray-500",
          startDate: "July 5, 2025",
          outreachSent: 89,
          interviewsBooked: 12,
          avgReplyTime: "6 hrs",
          recentActivity: [
            {
              date: "July 5",
              title: "Agent Created",
              description: "Initial setup and preference learning completed",
              icon: "calendar"
            },
            {
              date: "July 6",
              title: "First 50 emails sent",
              description: "Outreach campaign launched to top matches",
              icon: "email"
            },
            {
              date: "July 7",
              title: "Agent Completed",
              description: "Successfully filled the position",
              icon: "check"
            }
          ]
        },
        "4": {
          id: "4",
          roleTitle: "DevOps Engineer",
          location: "Bangalore",
          status: "Processing",
          statusColor: "bg-blue-500",
          startDate: "July 13, 2025",
          outreachSent: 23,
          interviewsBooked: 1,
          avgReplyTime: "14 hrs",
          recentActivity: [
            {
              date: "July 13",
              title: "Agent Created",
              description: "Initial setup and preference learning completed",
              icon: "calendar"
            },
            {
              date: "July 13",
              title: "First 15 emails sent",
              description: "Outreach campaign launched to top matches",
              icon: "email"
            }
          ]
        },
        "5": {
          id: "5",
          roleTitle: "UX Researcher",
          location: "Hyderabad",
          status: "Active",
          statusColor: "bg-green-500",
          startDate: "July 10, 2025",
          outreachSent: 67,
          interviewsBooked: 5,
          avgReplyTime: "9 hrs",
          recentActivity: [
            {
              date: "July 10",
              title: "Agent Created",
              description: "Initial setup and preference learning completed",
              icon: "calendar"
            },
            {
              date: "July 11",
              title: "First 30 emails sent",
              description: "Outreach campaign launched to top matches",
              icon: "email"
            },
            {
              date: "July 12",
              title: "First 2 interviews booked",
              description: "Candidates responding positively to outreach",
              icon: "calendar"
            }
          ]
        }
      };

      const agentData = agentsData[params.id];
      if (agentData) {
        setAgent(agentData);
      } else {
        // Fallback to first agent if ID not found
        setAgent(agentsData["1"]);
      }
    } catch (err) {
      console.error('Error fetching agent details:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Paused':
        return 'bg-orange-100 text-orange-800';
      case 'Done':
        return 'bg-gray-100 text-gray-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconComponent = (iconType) => {
    switch (iconType) {
      case 'calendar':
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        );
      case 'pause':
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'check':
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-white overflow-hidden">
        <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
          <div className="fixed left-0 top-0 h-full z-10">
            <SideBar />
          </div>
          <div className="ml-[260px] min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-600 text-lg">Loading agent details...</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="h-screen bg-white overflow-hidden">
        <main className="h-full bg-white overflow-y-auto overflow-x-hidden">
          <div className="fixed left-0 top-0 h-full z-10">
            <SideBar />
          </div>
          <div className="ml-[260px] min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-600 text-lg">Agent not found</div>
              <button 
                onClick={() => router.push('/ai-agents')}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                Back to Agents
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
        
        {/* Main Content Area */}
        <div className="ml-[260px] min-h-screen bg-white p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {agent.roleTitle} - {agent.location}
                </h1>
                <div className="flex items-center gap-4">
                  <p className="text-gray-600">Started {agent.startDate}</p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pause Agent
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-red-600 bg-white border border-red-300 rounded-lg hover:bg-red-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Stop Agent
                </button>
              </div>
            </div>
          </div>

          {/* Agent Status Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Spotted is reaching out to candidates for this role.
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Preferences calibrated</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Searching for relevant matches</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-gray-700">Outreach Sent: {agent.outreachSent} candidates</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Interviews Booked: {agent.interviewsBooked}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Avg. Time to First Reply: {agent.avgReplyTime}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <button 
                onClick={() => router.push('/ai-agents')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                View All Agents
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              {agent.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIconComponent(activity.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">{activity.date}</span>
                      <span className="text-sm text-gray-600">–</span>
                      <span className="text-sm font-medium text-gray-900">{activity.title}</span>
                    </div>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}




