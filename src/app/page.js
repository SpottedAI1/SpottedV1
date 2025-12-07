"use client";

import AllInOne from "@/components/landingPage/AllInOne";
import Benefits from "@/components/landingPage/Benefits";
import Blog from "@/components/landingPage/Blog";
import FAQ from "@/components/landingPage/FAQ";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import LogoScroll from "@/components/landingPage/LogoScroll";
import Pricing from "@/components/landingPage/Pricing";
import Testimonials from "@/components/landingPage/Testimonials";
import WhySpotted from "@/components/landingPage/WhySpotted";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 font-geist ">
      {/* NAVIGATION BAR */}
      <section className="px-18 pt-5 flex justify-between items-center">
        {/* logo */}
        <Image
          src="/LandingPage/logo.svg"
          width={160}
          height={160}
          alt="logo"
        />
        {/* navigation */}
        <nav className="hidden md:flex w-[10%]  gap-4 text-[#222222] text-[15px] ">
          <p className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer">
            Benefits
          </p>
          <p className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer">
            Features
          </p>
          <p className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer">
            Pricing
          </p>
          <p className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer">
            FAQ
          </p>
        </nav>
        {/* action buttons */}
        <nav className="flex gap-2">
          <button
            className="w-[154px] text-center py-2 border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer "
            onClick={() => router.push("/signup")}
          >
            Sign in
          </button>
          {/* <button className="w-[154px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
            Start Hiring Now
          </button> */}
          <button
            className="  
              w-[154px] py-2 text-center
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
            Start Hiring Now
          </button>
        </nav>
      </section>
      <Hero />
      <LogoScroll />
      <Benefits />
      <Features />
      <WhySpotted />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <AllInOne />
      <Footer />
    </div>
  );
};

export default Page;
