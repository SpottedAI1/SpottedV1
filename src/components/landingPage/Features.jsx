import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    // px-15
    <section className=" mt-20 w-[90%]  flex gap-2 flex-col ">
      <p className="font-geist-mono">/ FEATURES</p>
      <nav className="flex justify-between items-center mb-4">
        <p className="font-semibold text-[40px] leading-[46px] mb-4">
          All-In-One AI Hiring Platform
        </p>
        <button
          className="w-[125px] py-2 text-center
                  bg-black text-white 
                  border border-black 
                  rounded-[6px]
                  transition-all duration-300
        
                hover:bg-white hover:text-black
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#000]
                  hover: cursor-pointer"
        >
          All Features
        </button>
      </nav>
      <nav className="grid grid-cols-[1fr_1fr_1fr] grid-rows-2 w-full gap-2">
        <div className="row-span-3  ">
          <Image
            src="/LandingPage/man.svg"
            alt="man"
            width={130}
            height={130}
            // className="w-[472px] "
            className="w-[100%]"
          />
        </div>
        <div className="flex px-4 pt-3 flex-col bg-gray-50 h-auto rounded-[4px]">
          <p className="font-medium text-[18px] mb-1.5">
            Smart Candidate Pipelines
          </p>
          <p className="text-[#646464] text-[16px] mb-3">
            Automatically organize, score, and prioritize candidates into
            dynamic pipelines using AI relevance, skills matching, and hiring
            intent for faster shortlist decisions.
          </p>
          <nav className="flex gap-3 items-center">
            <p className="text-[16px] font-medium">Learn More </p>
            <div className="p-3 rounded-[6px] bg-white border border-[#f2f2f2] hover:cursor-pointer">
              <Image
                src="/LandingPage/rightArrow.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </div>
          </nav>
          <div className="p-5 ">
            <Image
              src="/LandingPage/feature1.png"
              alt="feature 1"
              width={920}
              height={920}
              // className="w-[550px]"
            />
          </div>
        </div>
        <div className="flex px-4 pt-3 flex-col bg-gray-50 h-auto rounded-[4px]">
          <p className="font-medium text-[18px] mb-1.5">Human-Guided AI </p>
          <p className="text-[#646464] text-[16px] mb-3">
            Spotted AI shows five relevant profiles, learns from recruiter
            feedback, then autonomously shortlists and outreaches candidates
            with increasing precision.
          </p>
          <nav className="flex gap-3 items-center">
            <p className="text-[16px] font-medium">Learn More </p>
            <div className="p-3 rounded-[6px] bg-white border border-[#f2f2f2] hover:cursor-pointer">
              <Image
                src="/LandingPage/rightArrow.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </div>
          </nav>
          <div className="p-5 ">
            <Image
              src="/LandingPage/feature2.png"
              alt="feature 1"
              width={920}
              height={920}
              // className="w-[550px]"
            />
          </div>
        </div>
        <div className="flex px-4 pt-3 flex-col bg-gray-50 h-auto rounded-[4px]">
          <p className="font-medium text-[18px] mb-1.5">
            Interview Scheduling Automation{" "}
          </p>
          <p className="text-[#646464] text-[16px] mb-3">
            AI personalizes multi-channel outreach, schedules follow-ups,
            optimizes send times, to maximize response rates from passive and
            active candidates automatically.
          </p>
          <nav className="flex gap-3 items-center">
            <p className="text-[16px] font-medium">Learn More </p>
            <div className="p-3 rounded-[6px] bg-white border border-[#f2f2f2] hover:cursor-pointer">
              <Image
                src="/LandingPage/rightArrow.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </div>
          </nav>
          <div className="p-5 ">
            <Image
              src="/LandingPage/feature3.png"
              alt="feature 1"
              width={920}
              height={920}
              // className="w-[550px]"
            />
          </div>
        </div>
        <div className="flex px-4 pt-3 flex-col bg-gray-50 h-auto rounded-[4px]">
          <p className="font-medium text-[18px] mb-1.5">
            Real-Time Hiring Analytics{" "}
          </p>
          <p className="text-[#646464] text-[16px] mb-3">
            Monitor sourcing performance, outreach effectiveness, response
            rates, interviews booked in real time to prove ROI and optimize
            hiring operations.
          </p>
          <nav className="flex gap-3 items-center">
            <p className="text-[16px] font-medium">Learn More </p>
            <div className="p-3 rounded-[6px] bg-white border border-[#f2f2f2] hover:cursor-pointer">
              <Image
                src="/LandingPage/rightArrow.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </div>
          </nav>
          <div className="p-5 ">
            <Image
              src="/LandingPage/feature4.png"
              alt="feature 1"
              width={920}
              height={920}
              // className="w-[550px]"
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Features;
