"use client";
import AllinOne from "@/components/blogPage/AllinOne";
import BlogGrid from "@/components/blogPage/BlogGrid";
import Hero from "@/components/blogPage/Hero";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const Page = () => {
  const [active, setActive] = useState("All");
  const tabs = [
    "All",
    "Recruiting Strategy",
    "Hiring Automations",
    "Product Updates",
    "Talent Ops",
  ];
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 font-geist ">
      <NavBar />
      <section className="px-5 md:px-15 flex flex-col justify-center items-center gap-5 mb-5">
        <p className="font-geist-mono mb-1  mt-18 md:mt-26">/ BLOG</p>
        <p className="font-semibold text-[43px] md:text-[56px] leading-[40px] md:leading-[61px] text-center mb-[10px] md:mb-0">
          Product Updates & Insights
        </p>
        <p className="text-[15px] md:text-[16px] mb-1 leading-[24px] md:mb-0 text-center">
          Stay ahead with AI recruiting insights, hiring strategies, and product
          updates from Spotted AI.{" "}
        </p>
      </section>
      <div className=" px-5 md:px-15 mb-25">
        <Hero />
      </div>
      {/* tab bar */}

      <section className=" px-5 md:px-15 mb-10 py-2 ">
        <div className="flex gap-1 px-4 py-3  rounded-[6px] bg-[#fafafa] border border-[#f2f2f2] flex-col md:flex-row ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`w-full text-center py-3   rounded-[6px] hover:cursor-pointer  text-[14px] 
                ${
                  active === tab
                    ? "bg-black text-white"
                    : "bg-[#fafafa] text-[#727272]"
                }
                `}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>
      <div className="w-full mt-6 mb-25 md:mb-30 px-5 md:px-15">
        <BlogGrid />
      </div>
      <div className="px-5 md:px-15 mb-30">
        <AllinOne />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
