"use client";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" mb-50 px-15 flex gap-20">
      <section className="w-[66%] flex flex-col justify-between">
        <nav>
          <p className="font-geist-mono mb-2">/ FAQ</p>
          <p className="font-semibold text-[40px] leading-[46px] mb-5">
            Everything You Need to Know - Upfront
          </p>
          <p className="text-[16px]">
            From setup to support and pricing, here are quick answer to the most
            common questions we get from teams considering Spotted AI
          </p>
        </nav>
        <nav
          className="relative hover:cursor-pointer"
          onClick={() => setShow(true)}
        >
          <Image
            src="/LandingPage/youtube.svg"
            alt="bg"
            width={300}
            height={300}
            className="rounded-[8px] z-1"
          />
          <div className="absolute inset-0 text-white font-semibold z-10  left-22 flex gap-2 items-center ">
            <Image
              src="/LandingPage/play.svg"
              alt="bg"
              width={20}
              height={20}
            />
            <p className="text-[16px] font-medium">Watch Demo</p>
          </div>
        </nav>
      </section>
      <section className="w-full">
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
        hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>What is spotted AI and how is it different from LinkedIn ?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>
            How does the Spotted AI agent learn what "good" looks like for each
            role?
          </p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Where does Spotted AI get candidate from,and is it compliant?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Which roles and locations does Spotted AI work best for?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Do we need complex integrations to get value from Spotted AI?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>How is pricing structured, and what are "unlock credits"?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
      </section>
      {show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-black text-2xl z-50 hover:cursor-pointer"
            >
              ✕
            </button>

            {/* YOUTUBE IFRAME */}
            <iframe
              src="https://youtube.com/embed/ApMt8bRp1Fs?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
