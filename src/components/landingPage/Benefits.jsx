import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="md:px-15 px-5 flex gap-2 items-center flex-col ">
      <p className="font-geist-mono">/ BENEFITS</p>
      <p className="font-semibold text-[34px] md:text-[40px] leading-[46px] md:w-[50%] text-center mb-7 md:mb-4">
        Why High-Performing Recruiting Teams Choose Spotted AI
      </p>
      {/* cards */}
      <nav className="flex flex-col md:flex-row md:gap-2 gap-8">
        <div className="flex flex-col w-[294px]">
          <div className="flex justify-center items-center bg-[#fafafa] h-[294px] mb-2 md:mb-5 rounded-[6px]">
            <Image
              src="/LandingPage/benefit1.svg"
              alt="benefit"
              width={400}
              height={400}
            />
          </div>
          <p className="font-medium text-[16px]">Qualified Talent Sourcing</p>
          <p className="text-[14px] text-[#666666] w-[95%]">
            Search millions of verified candidate profiles to instantly find
            role-matched, high-intent talent.
          </p>
        </div>
        <div className="flex flex-col w-[294px]">
          <div className="flex justify-center items-center bg-[#fafafa] h-[294px] mb-2 md:mb-5 rounded-[6px]">
            <Image
              src="/LandingPage/benefit2.svg"
              alt="benefit"
              width={100}
              height={100}
            />
          </div>
          <p className="font-medium text-[16px]">AI-Powered Shortlisting</p>
          <p className="text-[14px] text-[#666666] w-[95%]">
            AI ranks candidates by skills, experience, and job fit so recruiters
            review only top matches.
          </p>
        </div>
        <div className="flex flex-col w-[294px]">
          <div className="flex justify-center items-center bg-[#fafafa] h-[294px] mb-2 md:mb-5 rounded-[6px] ">
            <Image
              src="/LandingPage/benefit3.svg"
              alt="benefit"
              width={130}
              height={130}
            />
          </div>
          <p className="font-medium text-[16px]">
            Automated Interview Outreach
          </p>
          <p className="text-[14px] text-[#666666] w-[95%]">
            Personalized outreach and smart follow-ups convert cold candidates
            into scheduled interviews on your calendar
          </p>
        </div>
      </nav>
    </section>
  );
};

export default Benefits;
