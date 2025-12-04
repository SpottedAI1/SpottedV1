"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useState } from "react";

const CandidateProfile = ({ props, onClose }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Experience", "Education", "Skill Map"];

  // for navigation
  const overviewRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillMapRef = useRef(null);

  return (
    <div className="text-gray-900 fixed top-0 right-0 h-full w-[590px] bg-white shadow-2xl z-50 border border-[#dcdcdc] flex flex-col">
      {/* Top button secton */}
      {/* make this main sticky to the top */}
      <main className="sticky top-0 bg-white z-8">
        <div className="flex justify-between items-center pl-8 pt-4 pr-4">
          <div
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-gray-200 hover:cursor-pointer"
          >
            <Image
              src="/CandidateProfile/X.png"
              alt="cross"
              width={20}
              height={20}
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/CandidateProfile/ShareButton.png"
              alt="cross"
              width={34}
              height={34}
              className="hover:cursor-pointer"
            />
            <Image
              src="/CandidateProfile/ListButton.png"
              alt="cross"
              width={34}
              height={34}
              className="hover:cursor-pointer"
            />
            <Image
              src="/CandidateProfile/DownloadButton.png"
              alt="cross"
              width={34}
              height={34}
              className="hover:cursor-pointer"
            />
            <Image
              src="/CandidateProfile/PrevButton.png"
              alt="cross"
              width={34}
              height={34}
              className="hover:cursor-pointer"
            />
            <Image
              src="/CandidateProfile/NextButton.png"
              alt="cross"
              width={34}
              height={34}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        {/*  */}
        <div className="w-full mt-[20px] bg-white px-8 ">
          <section className="">
            <div className="flex gap-1.5 ">
              <h1 className="text-[25px] font-bold text-gray-900 mb-2">
                {props.name}
              </h1>
              <div className="pt-[2px] hover:cursor-pointer">
                <Image
                  src="/linkedIn.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <p className="text-lg text-[#6b7280] mb-3 text-[16px]">
              {props.profileLocation}
            </p>
          </section>

          {/* navigation tab */}
          <section className="pb-3 border-b border-gray-600 flex gap-6 mb-3">
            {tabs.map((tab) => (
              <p
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Overview") {
                    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
                  }
                  if (tab === "Experience")
                    experienceRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  if (tab === "Education")
                    educationRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  if (tab === "Skill Map")
                    skillMapRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`font-medium cursor-pointer transition-all duration-200 border-b-2 text-[14px]
              ${
                activeTab === tab
                  ? "border-gray-700 text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
              >
                {tab}
              </p>
            ))}
          </section>
        </div>
      </main>

      {/* body */}
      <div className="w-full mt-[20px] bg-white px-8  overflow-y-auto no-scrollbar">
        {/* email */}
        <section ref={overviewRef} className="mb-5">
          <div className="flex justify-between items-center px-5 py-4 border border-black rounded-2xl">
            <nav className="flex gap-2 items-center ">
              <Image
                src="/CandidateProfile/Mail.png"
                alt="mail"
                width={20}
                height={20}
              />
              <p className="font-semibold text-[14px]">{props.email}</p>
            </nav>
            <nav
              className="flex gap-2 items-center justify-around
              px-4 py-3 border border-black rounded-xl hover:cursor-pointer hover:bg-gray-100
            "
            >
              <Image
                src="/CandidateProfile/Bookmark.png"
                alt="mail"
                width={20}
                height={20}
              />
              <p className="text-medium text-[14px]">Add to Shortlist</p>
              <Image
                src="/CandidateProfile/down.png"
                alt="mail"
                width={16}
                height={16}
              />{" "}
            </nav>
          </div>
        </section>
        {/* tags */}
        <section className="mb-6">
          <p className="font-semibold mb-3">Tags</p>
          <div className="flex gap-3 flex-wrap">
            <nav className="flex gap-2 items-center px-3.5 py-1.5 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[14px]">
              <Image
                src="/CandidateProfile/Trending.png"
                alt="mail"
                width={16}
                height={16}
              />
              <p>Growth Stage</p>
            </nav>
            <nav className="flex gap-2 items-center px-3 py-1.5 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[14px]">
              <Image
                src="/CandidateProfile/Zap.png"
                alt="mail"
                width={16}
                height={16}
              />
              <p>Startup + Big Tech</p>
            </nav>
            <nav className="flex gap-2 items-center px-3 py-1.5 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[14px]">
              <Image
                src="/CandidateProfile/Globe.png"
                alt="mail"
                width={16}
                height={16}
              />
              <p>International Exp.</p>
            </nav>
            <nav className="flex gap-2 items-center px-3 py-1.5 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[14px]">
              <Image
                src="/CandidateProfile/Home.png"
                alt="mail"
                width={16}
                height={16}
              />
              <p>Remote Work</p>
            </nav>
            <nav className="flex gap-2 items-center px-3 py-1.5 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[14px]">
              <Image
                src="/CandidateProfile/Users.png"
                alt="mail"
                width={16}
                height={16}
              />
              <p>Team Lead</p>
            </nav>
          </div>
        </section>
        {/* work experience */}
        <section ref={experienceRef} className="mb-6">
          <p className="font-semibold  text-[20px]   mb-4">Work Experience</p>
          {/* tenures */}
          <div className="w-full flex justify-between gap-2 mb-4">
            <nav className="flex-1 py-3.5 pl-4 border border-black  rounded-[8px]">
              <p className="text-[9px] text-[#6b7280]  ">AVERAGE TENURE</p>
              <p className="text-[16px] font-bold">
                {props.tenureStats.averageTenure}
              </p>
            </nav>
            <nav className="flex-1 py-3.5 pl-4 border border-black  rounded-[8px]">
              <p className="text-[9px] text-[#6b7280]  ">CURRENT TENURE</p>
              <p className="text-[16px] font-bold">
                {props.tenureStats.currentTenure}
              </p>
            </nav>
            <nav className="flex-1 py-3.5 pl-4 border border-black  rounded-[8px]">
              <p className="text-[9px] text-[#6b7280]  ">TOTAL EXPERIENCE</p>
              <p className="text-[16px] font-bold">
                {props.tenureStats.totalExperience}
              </p>
            </nav>
          </div>
          {/* experiences */}
          <div className="flex flex-col gap-2">
            {props.workHistory.map((work) => (
              <div
                key={work.title}
                className="flex items-center border border-black rounded-[10px] px-4 py-4 gap-3"
              >
                <nav
                  key={work.title}
                  className="p-3 bg-black rounded-md flex justify-center items-center w-11 h-11"
                >
                  <p className="font-bold text-white text-[18px]">
                    {work.company.charAt(0).toUpperCase()}
                  </p>
                </nav>
                <nav key={work.company}>
                  <p className="font-semibold ">{work.title}</p>
                  <p className="text-[14px] text-[#6b7280]">{work.company}</p>
                  <div className="flex gap-1 text-[12px] text-[#6b7280]">
                    <p>{work.startDate + " -"}</p>
                    <p>
                      {work.endDate}{" "}
                      <span className="font-extrabold ">&middot;</span>
                    </p>

                    <p>{work.duration}</p>
                  </div>
                </nav>
              </div>
            ))}
          </div>
        </section>
        {/* technical skills */}
        <section ref={skillMapRef} className="mb-6 w-full">
          <p className="font-semibold  text-[20px]   mb-3">Technical Skills</p>{" "}
          <div className="flex flex-wrap gap-2">
            {props.technicalSkills.map((skill) => (
              <p
                key={skill}
                className="flex gap-2 items-center px-2.5 py-1 border border-black rounded-3xl hover:bg-gray-100 hover:cursor-default text-[13px]"
              >
                {skill}
              </p>
            ))}
          </div>
        </section>
        {/* education */}
        <section ref={educationRef} className="mb-6 w-full">
          <p className="font-semibold  text-[20px]   mb-3">Education</p>{" "}
          <div className="flex items-center border border-black rounded-[10px] px-4 py-4 gap-3">
            <nav className="p-3 bg-black rounded-md flex justify-center items-center w-11 h-11">
              <p className="font-bold text-white text-[18px]">
                {props.education.school.charAt(0).toUpperCase()}
              </p>
            </nav>
            <nav>
              <p className="font-semibold ">{props.education.degree}</p>
              <p className="text-[14px] text-[#6b7280]">
                {props.education.school}
              </p>
              <div className="flex gap-1 text-[12px] text-[#6b7280]">
                <p>{props.education.startYear + " -"}</p>

                <p>{props.education.endYear}</p>
              </div>
            </nav>
          </div>
        </section>
        {/* contact info */}
        <section className="mb-6 w-full">
          <p className="font-semibold  text-[20px]   mb-3">
            Contact Information
          </p>{" "}
          <div className="flex items-center border border-black rounded-[10px] px-4 py-4 gap-2 mb-3">
            <nav className="p-3  flex justify-center items-center w-11 h-11">
              <Image
                src="/CandidateProfile/Mail.png"
                alt="mail"
                width={20}
                height={20}
              />
            </nav>
            <nav>
              <p className="font-semibold text-[15px]">Email Address</p>
              <p className="text-[13px] text-[#6b7280]">
                {props.contactInfo.email}
              </p>
            </nav>
          </div>
          <div className="flex items-center border border-black rounded-[10px] px-4 py-4 gap-2">
            <nav className="p-3  flex justify-center items-center w-11 h-11">
              <Image
                src="/CandidateProfile/mapPin.png"
                alt="mail"
                width={20}
                height={20}
              />
            </nav>
            <nav>
              <p className="font-semibold text-[15px]">Current Location</p>
              <p className="text-[13px] text-[#6b7280]">
                {props.contactInfo.currentLocation}
              </p>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CandidateProfile;
