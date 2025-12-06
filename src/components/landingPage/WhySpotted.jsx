import Image from "next/image";
import React from "react";

function WhySpotted() {
  return (
    <section className="mt-30 px-15 py-25 flex gap-2 bg-gray-50 items-center">
      <nav className="w-[678px]">
        <p className="font-geist-mono mb-1">/ WHY SPOTTED AI</p>
        <p className="font-semibold text-[40px] leading-[46px] mb-4">
          More Qualified Candidates. Less Effort. Faster Hiring.
        </p>
        <p className="text-[16px]">
          <span className="font-semibold">Spotted AI</span> is built for
          recruiters and talent acquisition teams to automate sourcing,
          shortlisting, and outreach—delivering interview-ready candidates
          without manual workflows.
        </p>
        <nav className="flex gap-0 flex-col my-10">
          <div className="flex gap-2 py-4 border-t border-b border-[#ededed]">
            <Image
              src="/LandingPage/tick.svg"
              alt="man"
              width={20}
              height={20}
            />{" "}
            <p className="text-[14px]">
              Instant Talent Discovery Recruiters Actually Trust
            </p>
          </div>
          <div className="flex gap-2 py-4  border-b border-[#ededed]">
            <Image
              src="/LandingPage/tick.svg"
              alt="man"
              width={20}
              height={20}
            />{" "}
            <p className="text-[14px]">
              Human-Guided AI That Learns Your Exact Hiring Preferences
            </p>
          </div>
          <div className="flex gap-2 py-4  border-b border-[#ededed]">
            <Image
              src="/LandingPage/tick.svg"
              alt="man"
              width={20}
              height={20}
            />{" "}
            <p className="text-[14px]">
              Outreach That Automatically Books Real Interviews
            </p>
          </div>
        </nav>
        <button
          className=" text-center py-3 px-8
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
          See Spotted AI in Action
        </button>
      </nav>
      <nav className="flex flex-col gap-5 ">
        <div>
          <Image
            src="/LandingPage/testimonial1.svg"
            alt="testimonial"
            width={200}
            height={200}
            className="w-[98%]"
          />
        </div>
        <div className="flex gap-2">
          <div>
            <Image
              src="/LandingPage/testimonial2.svg"
              alt="testimonial"
              width={200}
              height={200}
              className="w-[98%]"
            />
          </div>
          <div>
            <Image
              src="/LandingPage/testimonial3.svg"
              alt="testimonial"
              width={200}
              height={200}
              className="w-[98%]"
            />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default WhySpotted;
