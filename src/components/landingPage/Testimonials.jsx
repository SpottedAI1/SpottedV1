import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="mt-35 mb-20 md:mb-50 px-5 md:px-15   flex gap-2 flex-col ">
      <div className="pr-5 md:pr-0">
        <p className="font-geist-mono mb-3 md:mb-1">/ TESTIMONIALS</p>
        <p className="hidden md:block font-semibold text-[40px] leading-[46px] mb-10">
          Recruiting Teams Love Using Spotted AI - And It Shows
        </p>
        <p className="md:hidden  font-semibold text-[40px] leading-[46px] mb-10">
          Recruiting Teams Love Using Spotted AI And It Shows
        </p>
      </div>

      {/* <nav className="grid grid-cols-3 gap-1.5 "> */}
      <nav className="flex overflow-x-auto flex-nowrap gap-3 md:grid md:grid-cols-3 md:overflow-visible">
        <div className="flex-shrink-0 w-[314px] md:w-auto  flex flex-col justify-between px-5 py-6 md:h-[470px] rounded-[10px] bg-[#f7f7f7]">
          <p className=" text-[18px] md:text-[20px] font-semibold mb-5 md:mb-0">
            What truly sets Spotted AI apart is the learning loop. We reviewed
            just five relevant profiles, and the system instantly understood our
            exact hiring preferences. From there, shortlisting and outreach ran
            on autopilot with remarkable accuracy.
          </p>
          <div className="flex gap-3 items-center">
            <Image
              src="/LandingPage/person1.svg"
              alt="person"
              width={60}
              height={60}
            />
            <div>
              <p className="text-[16px] font-medium">Maya Foster</p>
              <p className="text-[14px]">VP of Talent Acquisition, Nimbus</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[314px] md:w-auto flex flex-col justify-between px-5 py-6 md:h-[470px] rounded-[10px] bg-[#f7f7f7]">
          <p className=" text-[18px] md:text-[20px] font-semibold mb-5 md:mb-0">
            Outreach used to be our biggest bottleneck. Spotted AI now books
            qualified interviews on our calendar automatically, with better
            response rates than manual campaigns
          </p>
          <div className="flex gap-3 items-center">
            <Image
              src="/LandingPage/person2.svg"
              alt="person"
              width={60}
              height={60}
            />
            <div>
              <p className="text-[16px] font-medium">Alex Morgan</p>
              <p className="text-[14px]">
                Senior Technical Recruiter, TryMania
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[314px] md:w-auto flex flex-col justify-between px-5 py-6 md:h-[470px] rounded-[10px] bg-[#f7f7f7]">
          <p className=" text-[18px] md:text-[20px] font-semibold mb-5 md:mb-0">
            Spotted AI reduced our time-to-shortlist from days to under two
            hours. What used to take a full recruiting sprint now happens in a
            single afternoon.
          </p>
          <div className="flex gap-3 items-center">
            <Image
              src="/LandingPage/person3.svg"
              alt="person"
              width={60}
              height={60}
            />
            <div>
              <p className="text-[16px] font-medium">Emily Rodriguez</p>
              <p className="text-[14px]">Talent Operations, VectorPay</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Testimonials;
