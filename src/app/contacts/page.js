import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function ContactsPage() {
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
    },
  ];

  return (
    <main className="min-h-screen flex text-gray-900">
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
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] ">
              <p>Filter by Role</p>
              <Image alt="dropdown" src="dropDown.svg" width={18} height={18} />
            </button>
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] ">
              <p>Sort by</p>
              <Image alt="dropdown" src="dropDown.svg" width={18} height={18} />
            </button>
            <button className="px-3 py-2 border border-[#d1d5db] flex gap-2 items-center text-[#374151] rounded-[8px] ">
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
              <div className="">
                <p className="text-[14px] font-semibold">{candidate.name}</p>
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
            <div className="flex justify-center flex-col w-[50px] mr-8">
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
            <div className="flex justify-center flex-col w-[90px] mr-8 ">
              <p className="text-[14px] text-[#6b7280]">{candidate.date}</p>
            </div>
            <div className="flex items-center  w-[90px] gap-2">
              <div className="p-2 border border-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/mailGray.svg"
                  alt="more options"
                  width={19}
                  height={19}
                />
              </div>
              <div className="p-2 border border-gray-200 rounded-md flex justify-center items-center text-[12px]">
                View
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
