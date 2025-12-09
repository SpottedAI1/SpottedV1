"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const AllInOne = () => {
  const router = useRouter();
  return (
    <div className=" mb-20 mx-5 md:mx-15   flex gap-2 flex-col bg-black text-white rounded-[8px] md:rounded-[4px]">
      <main className="mx-4 md:px-10 flex justify-between items-center flex-col md:flex-row pt-4 md:pt-0  py-8 ">
        <section className="md:w-[654px]">
          <p className="font-geist-mono mb-3 md:mb-1 text-[14px] md:text-[16px] ">
            / ALL-IN-ONE
          </p>
          <p className="font-semibold text-[40px] leading-[46px] ">
            Accelerate Hiring Performance.
          </p>
          <p className="font-semibold text-[40px] leading-[46px] mb-8 md:mb-5">
            Book Better Candidates Faster.
          </p>
          <p className="text-[16px] mb-15 md:mb-5 text-[#cccccc]">
            Spotted AI automates sourcing, shortlisting, and outreach so your
            team spends time interviewing-not searching for candidates.
          </p>
          <div className="flex flex-col md:flex-row md:w-[270px] gap-3">
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
        </section>
        <section className="hidden md:flex">
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
