import AllinOne from "@/components/blogPage/AllinOne";
import BlogGrid from "@/components/blogPage/BlogGrid";
import Hero from "@/components/blogPage/Hero";
import { TabBar } from "@/components/blogPage/TabBar";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-gray-900 font-geist ">
      <div className="sticky top-0 z-[100]">
        <NavBar />
      </div>
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
      <TabBar />
      <div className="w-full mt-6 mb-25 md:mb-30 px-5 md:px-15">
        <BlogGrid />
      </div>
      <div className="px-5 md:px-15 mb-30">
        <AllinOne />
      </div>
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
