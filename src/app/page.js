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
import { useRef } from "react";

const Page = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToTarget = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 font-geist ">
      {/* NAVIGATION BAR */}
      <section
        className="sticky top-0 bg-white/70 backdrop-blur-md z-50 px-18 pt-5 flex  items-center pb-4
      "
      >
        {/* logo */}
        <Image
          src="/LandingPage/logo.svg"
          width={160}
          height={160}
          alt="logo"
          onClick={() => scrollToTarget(heroRef)}
          className="mr-[28%]"
        />
        {/* navigation */}
        <nav className="hidden md:flex w-[18%]  gap-4 text-[#222222] text-[15px] mr-[20%]">
          <p
            className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
            onClick={() => scrollToTarget(benefitsRef)}
          >
            Benefits
          </p>
          <p
            className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
            onClick={() => scrollToTarget(featuresRef)}
          >
            Features
          </p>
          <p
            className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
            onClick={() => scrollToTarget(pricingRef)}
          >
            Pricing
          </p>
          <p
            className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
            onClick={() => scrollToTarget(faqRef)}
          >
            FAQ
          </p>
        </nav>
        {/* action buttons */}
        <nav className="flex gap-2 w-[24%]">
          <button
            className="w-[50%] text-center  py-[3%] border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer "
            onClick={() => router.push("/signin")}
          >
            Sign in
          </button>
          {/* <button className="w-[154px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
            Start Hiring Now
          </button> */}
          <button
            className="  
              w-[50%] py-[3%] text-center
              bg-black text-white 
              border border-black 
              rounded-[6px]
              transition-all duration-300
    
            hover:bg-white hover:text-black
              
              hover:-translate-x-[4px]
              hover:-translate-y-[4px]
              
              hover:shadow-[4px_4px_0px_#000]
              hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Start Hiring Now
          </button>
        </nav>
      </section>
      <div ref={heroRef}>
        <Hero />
      </div>
      <LogoScroll />
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <div ref={featuresRef} className="w-full flex justify-center">
        <Features />
      </div>
      <WhySpotted />
      <Testimonials />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Blog />
      <div ref={faqRef}>
        <FAQ />
      </div>

      <AllInOne />
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-40">
        <div
          className="w-full h-full backdrop-blur-xl"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
