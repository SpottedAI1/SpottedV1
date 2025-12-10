"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const AllinOne = () => {
  const router = useRouter();
  return (
    <div className="">
      <section className="relative w-full  rounded-md overflow-hidden h-[630px] md:h-[600px]">
        <Image
          src="/BlogPage/background.png"
          alt="bg"
          fill
          className="w-full h-auto object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="absolute inset-0 flex items-center justify-center z-10 flex-col text-white pt-15 md:pt-0 px-2 ">
          <p className="font-geist-mono mb-3 md:mb-1 text-[14px] md:text-[16px] ">
            / ALL-IN-ONE
          </p>
          <p className="font-semibold text-[40px] leading-[46px] text-center">
            Accelerate Hiring Performance.
          </p>
          <p className="font-semibold text-[40px] leading-[46px] mb-8 md:mb-5 text-center">
            Book Better Candidates Faster.
          </p>
          <p className="text-[16px] mb-15 md:mb-5 text-[#cccccc] text-center">
            Spotted AI automates sourcing, shortlisting, and outreach so your
            team spends time interviewing-not searching for candidates.
          </p>
          <div className="flex flex-col md:flex-row md:w-[270px] w-full gap-3">
            <button
              className="w-full text-center py-3 border border-white bg-white hover:bg-gray-50 rounded-[6px] hover:cursor-pointer text-black text-[14px] font-medium "
              onClick={() => router.push("/signup")}
            >
              Get Started
            </button>

            <button className="w-full text-center py-3 border  bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]  border-white">
              <a
                href="https://calendly.com/iamkrishkishore/spottedai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllinOne;
