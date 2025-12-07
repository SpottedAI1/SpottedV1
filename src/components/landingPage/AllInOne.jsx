import Image from "next/image";
import React from "react";

const AllInOne = () => {
  return (
    <div className=" mb-20 mx-15   flex gap-2 flex-col bg-black text-white rounded-[4px]">
      <main className="px-10 flex justify-between items-center py-8">
        <section className="w-[654px]">
          <p className="font-geist-mono mb-1">/ ALL-IN-ONE</p>
          <p className="font-semibold text-[40px] ">
            Accelerate Hiring Performance.
          </p>
          <p className="font-semibold text-[40px] leading-[46px] mb-5">
            Book Better Candidates Faster.
          </p>
          <p className="text-[16px] mb-5 text-[#cccccc]">
            Spotted AI automates sourcing, shortlisting, and outreach so your
            team spends time interviewing-not searching for candidates.
          </p>
          <div className="flex w-[270px] gap-3">
            <button className="w-full text-center py-3 border border-white bg-white hover:bg-gray-50 rounded-[6px] hover:cursor-pointer text-black text-[14px] font-medium">
              Get Started
            </button>
            <button className="w-full text-center py-3 border  bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]  border-white">
              Book a Demo
            </button>
          </div>
        </section>
        <section>
          <Image
            src="/LandingPage/abstract.svg"
            width={20}
            height={20}
            alt="abstract image"
            className="w-[447px] h-[520px]"
          />
        </section>
      </main>
    </div>
  );
};

export default AllInOne;
