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
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import NavBar from "@/components/NavBar";

const Page = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const [show, setShow] = useState(false);

  const controlVisibility = () => {
    setShow(!show);
  };

  const scrollToTarget = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 font-geist ">
      {/* NAVIGATION BAR */}
      <NavBar />
      <div ref={heroRef}>
        <Hero />
      </div>
      <LogoScroll />
      <div ref={benefitsRef} className="scroll-mt-28">
        <Benefits />
      </div>
      <div ref={featuresRef} className="w-full flex justify-center scroll-mt-5">
        <Features />
      </div>
      <WhySpotted />
      <Testimonials />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Blog />
      <div ref={faqRef} className="scroll-mt-25">
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
