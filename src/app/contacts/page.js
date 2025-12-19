"use client";
import SideBar from "@/components/SideBar";
import Image from "next/image";

import CandidateProfile from "@/components/CandidateProfile";
import { useState } from "react";

export default function ContactsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      subRole: "Sr. Frontend Engineer",
      company: "Google",
      location: "San Francisco",
      experience: "5.2 yrs",
      skills: ["React", "TypeScript"],
      date: "July 15",
      initials: "SJ",
      color: "#F94144",

      // extra fields
      profileLocation: "San Francisco, California, United States",
      headline:
        "Senior Frontend Engineer focused on scalable design systems and high-performance React apps.",
      tags: ["Growth Stage", "Startup + Big Tech", "Remote Work", "Team Lead"],
      email: "sarah.johnson@example.com",
      tenureStats: {
        averageTenure: "1 yr 1 mo",
        currentTenure: "2 yrs 4 mos",
        totalExperience: "5 yrs 2 mos",
      },
      workHistory: [
        {
          title: "Senior Frontend Engineer",
          company: "Google",
          startDate: "Mar 2022",
          endDate: "Present",
          duration: "2 yrs 4 mos",
          summary:
            "Leading the UI for internal analytics tools, owning design system migration to TypeScript + React.",
        },
        {
          title: "Frontend Engineer",
          company: "Airbnb",
          startDate: "Jan 2019",
          endDate: "Feb 2022",
          duration: "3 yrs 2 mos",
          summary:
            "Built booking flows and A/B tested UI experiments that improved conversion in the guest funnel.",
        },
      ],
      technicalSkills: [
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "Redux",
        "Jest",
        "Cypress",
      ],
      education: {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Washington",
        startYear: 2013,
        endYear: 2017,
      },
      contactInfo: {
        email: "sarah.johnson@example.com",
        currentLocation: "San Francisco, CA",
      },
    },
    {
      id: 2,
      name: "Michael Kumar",
      role: "Backend Lead",
      subRole: "Backend Engineer",
      company: "Meta",
      location: "New York",
      experience: "7.1 yrs",
      skills: ["Node.js", "Python"],
      date: "July 12",
      initials: "MK",
      color: "#43AA8B",

      // extra fields
      profileLocation: "New York, New York, United States",
      headline:
        "Backend Lead specialising in distributed systems, APIs, and high-throughput data pipelines.",
      tags: ["Startup + Big Tech", "International Exp.", "Remote Work"],
      email: "michael.kumar@example.com",
      tenureStats: {
        averageTenure: "1 yr 5 mos",
        currentTenure: "3 yrs 0 mos",
        totalExperience: "7 yrs 1 mo",
      },
      workHistory: [
        {
          title: "Backend Lead",
          company: "Meta",
          startDate: "Jun 2021",
          endDate: "Present",
          duration: "3 yrs 0 mos",
          summary:
            "Owning core services for messaging reliability; designed gRPC-based microservices handling millions of requests per minute.",
        },
        {
          title: "Senior Backend Engineer",
          company: "Spotify",
          startDate: "Apr 2018",
          endDate: "May 2021",
          duration: "3 yrs 2 mos",
          summary:
            "Built recommendation APIs and caching layers that reduced latency on personalized playlists.",
        },
        {
          title: "Backend Engineer",
          company: "Gojek",
          startDate: "Feb 2016",
          endDate: "Mar 2018",
          duration: "2 yrs 2 mos",
          summary:
            "Worked on payments microservices, focusing on transactional integrity and fraud checks.",
        },
      ],
      technicalSkills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Kafka",
        "Docker",
        "Kubernetes",
      ],
      education: {
        degree: "Bachelor of Engineering in Information Technology",
        school: "Indian Institute of Technology, Delhi",
        startYear: 2010,
        endYear: 2014,
      },
      contactInfo: {
        email: "michael.kumar@example.com",
        currentLocation: "New York, NY",
      },
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      role: "DevOps Lead",
      subRole: "DevOps Engineer",
      company: "Netflix",
      location: "Austin",
      experience: "6.8 yrs",
      skills: ["AWS", "Docker"],
      date: "July 10",
      initials: "AR",
      color: "#577590",

      // extra fields
      profileLocation: "Austin, Texas, United States",
      headline:
        "DevOps Lead driving CI/CD, observability, and cloud cost optimisation across large-scale platforms.",
      tags: ["Growth Stage", "Remote Work", "Platform Eng."],
      email: "alex.rodriguez@example.com",
      tenureStats: {
        averageTenure: "1 yr 3 mos",
        currentTenure: "2 yrs 7 mos",
        totalExperience: "6 yrs 8 mos",
      },
      workHistory: [
        {
          title: "DevOps Lead",
          company: "Netflix",
          startDate: "Jan 2022",
          endDate: "Present",
          duration: "2 yrs 7 mos",
          summary:
            "Leading reliability initiatives for streaming infrastructure, with a focus on incident response and SLOs.",
        },
        {
          title: "Senior DevOps Engineer",
          company: "Atlassian",
          startDate: "Oct 2018",
          endDate: "Dec 2021",
          duration: "3 yrs 3 mos",
          summary:
            "Implemented Kubernetes-based deployment platform and GitOps workflows for multiple product teams.",
        },
        {
          title: "Site Reliability Engineer",
          company: "DigitalOcean",
          startDate: "Jun 2016",
          endDate: "Sep 2018",
          duration: "2 yrs 4 mos",
          summary:
            "Built monitoring dashboards and on-call runbooks, reducing mean time to recovery across core services.",
        },
      ],
      technicalSkills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Prometheus",
        "Grafana",
        "Linux",
        "CI/CD (GitHub Actions, ArgoCD)",
      ],
      education: {
        degree: "Bachelor of Science in Software Engineering",
        school: "University of Texas at Austin",
        startYear: 2012,
        endYear: 2016,
      },
      contactInfo: {
        email: "alex.rodriguez@example.com",
        currentLocation: "Austin, TX",
      },
    },
    {
      id: 4,
      name: "Priya Lakshmi",
      role: "UX Designer",
      subRole: "Product Designer",
      company: "Adobe",
      location: "Bangalore",
      experience: "4.3 yrs",
      skills: ["Figma", "Sketch"],
      date: "July 8",
      initials: "PL",
      color: "#F9C74F",

      // extra fields
      profileLocation: "Bangalore, Karnataka, India",
      headline:
        "Product Designer creating user-centred experiences for SaaS tools and creative workflows.",
      tags: ["Growth Stage", "International Exp.", "Remote Work"],
      email: "priya.lakshmi@example.com",
      tenureStats: {
        averageTenure: "1 yr 0 mos",
        currentTenure: "2 yrs 1 mo",
        totalExperience: "4 yrs 3 mos",
      },
      workHistory: [
        {
          title: "Product Designer",
          company: "Adobe",
          startDate: "Jun 2022",
          endDate: "Present",
          duration: "2 yrs 1 mo",
          summary:
            "Designing collaboration features for creative-cloud experiences, partnering closely with PMs and engineers.",
        },
        {
          title: "UX Designer",
          company: "Freshworks",
          startDate: "Apr 2020",
          endDate: "May 2022",
          duration: "2 yrs 2 mos",
          summary:
            "Led end-to-end design for onboarding flows, improving activation metrics for B2B customers.",
        },
        {
          title: "UX Intern",
          company: "Zoho",
          startDate: "Jan 2019",
          endDate: "Mar 2020",
          duration: "1 yr 3 mos",
          summary:
            "Prototyped dashboards and interaction patterns for internal admin tools using Figma.",
        },
      ],
      technicalSkills: [
        "Figma",
        "Sketch",
        "Adobe XD",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      education: {
        degree: "Bachelor of Design in Communication Design",
        school: "National Institute of Design",
        startYear: 2014,
        endYear: 2018,
      },
      contactInfo: {
        email: "priya.lakshmi@example.com",
        currentLocation: "Bangalore, India",
      },
    },
  ];

  return (
    <main className="min-h-screen flex text-gray-900 relative">
      <SideBar />
      <div className="w-full pt-[50px] bg-white p-8 ">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Unlocked Profiles
          </h1>
          <p className="text-lg text-[#6b7280] mb-6 text-[16px]">
            All candidates you've unlocked - access their emails and contact
            info.
          </p>
        </section>
        <section className=" flex justify-between">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search name or role..."
              className="border border-[#d1d5db] rounded-[6px] px-[10px] pl-10 w-[50%] py-[10px] placeholder: text-[#9ca3af]"
            />
            <Image
              src="/Search.png"
              width={20}
              height={20}
              alt="search icon"
              className="absolute top-3 left-3"
            />
          </div>
          <div className="flex gap-3 text-[14px]">
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] hover:cursor-pointer hover:bg-gray-50 ">
              <p>Filter by Role</p>
              <Image alt="dropdown" src="dropDown.svg" width={18} height={18} />
            </button>
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] hover:cursor-pointer hover:bg-gray-50">
              <p>Sort by</p>
              <Image alt="dropdown" src="dropDown.svg" width={18} height={18} />
            </button>
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] hover:cursor-pointer hover:bg-gray-50">
              <Image
                src="/download.svg"
                alt="download"
                width={16}
                height={16}
              />
              <p>Export CSV</p>
            </button>
          </div>
        </section>
        <section className="bg-[#f9fafb] text-[#6b7280] flex text-[12px] font-semibold px-4 py-4 mt-5 border-b border-gray-200">
          <p className="mr-35">CANDIDATE NAME</p>
          <p className="mr-20">ROLE UNLOCKED FOR</p>
          <p className="mr-10">CURRENT COMPANY</p>
          <p className="mr-15">LOCATION</p>
          <p className="mr-8">EXPERIENCE</p>
          <p className="mr-20">SKILLS</p>
          <p className="mr-10">UNLOCKED ON</p>
          <p className="">ACTIONS</p>
        </section>
        {candidates.map((candidate, index) => (
          <section
            key={index}
            className="pl-4 py-4 flex border-b border-gray-200"
          >
            <div className="w-[230px] flex items-center gap-2 mr-4">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-medium text-[14px] text-white`}
                style={{ backgroundColor: candidate.color }}
              >
                {candidate.initials}
              </div>
              <div className="hover:cursor-pointer">
                <p className="text-[14px] font-semibold ">{candidate.name}</p>
                <p className="text-[11px] text-[#6b7280]">
                  {candidate.subRole}
                </p>
              </div>
            </div>
            <div className="w-[200px] flex justify-center flex-col mr-5">
              <p className="text-[14px] font-medium">{candidate.role}</p>
              <p className="text-[11px] text-[#6b7280]">{candidate.location}</p>
            </div>
            <div className="flex justify-center flex-col w-[100px] mr-13 ">
              <p className="text-[14px] font-medium">{candidate.company}</p>
            </div>
            <div className="flex justify-center flex-col w-[100px] mr-8 ">
              <p className="text-[14px] text-[#6b7280]">{candidate.location}</p>
            </div>
            <div className="flex justify-center flex-col w-[50px] mr-12">
              <p className="text-[14px] font-medium">{candidate.experience}</p>
            </div>
            <div className="flex  w-[150px] items-center gap-1">
              <p className="text-[10px] px-2 py-1 rounded-2xl text-[#1e40af] bg-[#dbeafe] font-medium">
                {candidate.skills[0]}
              </p>
              <p className="text-[10px] px-2 py-1 rounded-2xl text-[#92400e] bg-[#fef3c7] font-medium">
                {candidate.skills[1]}
              </p>
            </div>
            <div className="flex justify-center flex-col w-[90px] mr-2 ">
              <p className="text-[14px] text-[#6b7280]">{candidate.date}</p>
            </div>
            <div className="flex items-center  w-[90px] gap-2">
              <div className="p-2 border border-gray-200 rounded-md flex justify-center items-center hover:cursor-pointer hover:bg-gray-50">
                <Image
                  src="/mailGray.svg"
                  alt="more options"
                  width={19}
                  height={19}
                />
              </div>
              <div
                className="p-2 border border-gray-200 rounded-md flex justify-center items-center text-[12px] hover:cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedCandidate(candidate)}
              >
                View
              </div>
            </div>
          </section>
        ))}
      </div>
      {selectedCandidate && (
        <CandidateProfile
          props={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </main>
  );
}
