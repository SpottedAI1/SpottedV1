import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="mt-45 mb-50 px-15   flex gap-2 flex-col  ">
      <p className="font-geist-mono mb-1">/ BLOG</p>
      <p className="font-semibold text-[40px] leading-[46px] mb-10">
        Product Updates & Insights
      </p>
      <section className="grid grid-cols-3 gap-6 ">
        <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer">
          <div className="overflow-hidden rounded-[8px] h-[314px]">
            <Image
              src="/LandingPage/stone3.svg"
              alt="stone"
              width={20}
              height={20}
              className="w-[470px] h-[314px]  
             transition-transform duration-200 ease-out hover:scale-105 "
            />
          </div>
          <div className="px-3 pb-2">
            <p className="font-semibold text-[20px] mt-5 mb-3">
              Behind the Scenes: How we Built Flowis Automation
            </p>

            <p className="text-medium text-[14px] text-[#636363] mb-8">
              A look at the product decisions, challenges, and breakthroughs
              that shaped our automation engine
            </p>

            <div className="flex justify-between items-center">
              <p className="text-[12px] font-medium">CRM STRATEGY</p>
              <p className="text-[12px] font-medium text-[#636363]">
                May 28, 2025
              </p>
            </div>
          </div>
        </nav>
        <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer">
          <div className="rounded-[8px] overflow-hidden">
            <Image
              src="/LandingPage/stone2.svg"
              alt="stone"
              width={20}
              height={20}
              className="w-[470px] h-[314px] transition-transform duration-200 ease-out hover:scale-105 "
            />
          </div>
          <div className="px-3 pb-2 ">
            <p className="font-semibold text-[20px] mt-5 mb-3">
              3 Sales Metrics Tracking weekly That Actually Matter
            </p>

            <p className="text-medium text-[14px] text-[#636363] mb-8">
              Cut through the noise. These are the KPIs your team should be
              tracking weekly inside your CRM
            </p>

            <div className="flex justify-between items-center">
              <p className="text-[12px] font-medium">CRM STRATEGY</p>
              <p className="text-[12px] font-medium text-[#636363]">
                May 28, 2025
              </p>
            </div>
          </div>
        </nav>
        <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer">
          <div className="rounded-[8px]    overflow-hidden">
            <Image
              src="/LandingPage/stone1.svg"
              alt="stone"
              width={20}
              height={20}
              className="w-[470px] h-[314px] transition-transform duration-200 ease-out hover:scale-105 "
            />
          </div>
          <div className="px-3 pb-2 rounded-b-[8px]">
            <p className="font-semibold text-[20px] mt-5 mb-3">
              The ROI of CRM Simplicity in Sales Operations
            </p>

            <p className="text-medium text-[14px] text-[#636363] mb-8">
              Explore why less really is more when it comes to CRM desing - and
              how streamlined systems imporve productivity
            </p>

            <div className="flex justify-between items-center">
              <p className="text-[12px] font-medium">SALES OPS</p>
              <p className="text-[12px] font-medium text-[#636363]">
                May 28, 2025
              </p>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Blog;
