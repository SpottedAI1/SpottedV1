"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function AIAgentsPage() {
  const router = useRouter();
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortFilter, setSortFilter] = useState("Most Recent");

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    setLoading(true);
    try {
      // Mock data - replace with actual API call
      const mockAgents = [
        {
          id: "1",
          roleTitle: "Frontend Developer",
          location: "Delhi",
          status: "Active",
          statusColor: "bg-green-500",
          outreachSent: 18,
          interviewsBooked: 4,
          lastUpdated: "2 hours ago"
        },
        {
          id: "2",
          roleTitle: "Product Designer",
          location: "Remote",
          status: "Paused",
          statusColor: "bg-orange-500",
          outreachSent: 10,
          interviewsBooked: 1,
          lastUpdated: "Yesterday"
        },
        {
          id: "3",
          roleTitle: "Backend Lead",
          location: "Mumbai",
          status: "Done",
          statusColor: "bg-gray-500",
          outreachSent: 26,
          interviewsBooked: 7,
          lastUpdated: "3 days ago"
        },
        {
          id: "4",
          roleTitle: "DevOps Engineer",
          location: "Bangalore",
          status: "Processing",
          statusColor: "bg-blue-500",
          outreachSent: 5,
          interviewsBooked: 0,
          lastUpdated: "1 hour ago"
        },
        {
          id: "5",
          roleTitle: "UX Researcher",
          location: "Hyderabad",
          status: "Active",
          statusColor: "bg-green-500",
          outreachSent: 12,
          interviewsBooked: 2,
          lastUpdated: "4 hours ago"
        }
      ];

      setAgents(mockAgents);
    } catch (err) {
      console.error('Error fetching agents:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalAgents = agents.length;
  const totalOutreach = agents.reduce((sum, agent) => sum + agent.outreachSent, 0);
  const totalInterviews = agents.reduce((sum, agent) => sum + agent.interviewsBooked, 0);

  const handleAgentClick = (agentId) => {
    // Navigate to agent details page
    router.push(`/ai-agents/${agentId}`);
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
              <div className="text-gray-600 text-lg">Loading agents...</div>
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Agents</h1>
            <p className="text-lg text-gray-600 mb-6">
              View and manage all roles where Spotted AI is working on your behalf.
            </p>
            
            {/* Summary Statistics */}
            <div className="flex gap-8 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Agents</p>
                  <p className="text-2xl font-bold text-gray-900">{totalAgents}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Outreach Sent</p>
                  <p className="text-2xl font-bold text-gray-900">{totalOutreach}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Interviews Scheduled</p>
                  <p className="text-2xl font-bold text-gray-900">{totalInterviews}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions and Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              
              {/* Filters */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Paused</option>
                <option>Done</option>
                <option>Processing</option>
              </select>
              
              <select
                value={sortFilter}
                onChange={(e) => setSortFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option>Most Recent</option>
                <option>Oldest</option>
                <option>Most Outreach</option>
                <option>Most Interviews</option>
              </select>
            </div>
            
            {/* New Agent Button */}
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Agent
            </button>
          </div>

          {/* Agents Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      ROLE TITLE
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      STATUS
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      OUTREACH
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      INTERVIEWS
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      LAST UPDATED
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAgents.map((agent) => (
                    <tr 
                      key={agent.id}
                      onClick={() => handleAgentClick(agent.id)}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div>
                          <div className="text-base font-semibold text-gray-900">
                            {agent.roleTitle} - {agent.location}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${agent.statusColor} mr-3`}></div>
                          <span className="text-base font-medium text-gray-900">{agent.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base font-medium text-gray-900">{agent.outreachSent} sent</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base font-medium text-gray-900">{agent.interviewsBooked} booked</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-500">{agent.lastUpdated}</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No agents found</div>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}