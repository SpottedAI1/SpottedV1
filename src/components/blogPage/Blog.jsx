import React from "react";
import Image from "next/image";

const Blog = ({ props }) => {
  return (
    <div className=" rounded-md ">
      {/* <img src={props["image link"]} alt="image" className="w-full h-auto" /> */}

      <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer">
        <div className="overflow-hidden rounded-[8px] md:h-[314px]">
          <Image
            src="/LandingPage/stone3.svg"
            alt="stone"
            width={20}
            height={20}
            className="w-full md:h-[314px]  
                   transition-transform duration-200 ease-out hover:scale-105 "
          />
        </div>
        <div className="px-3 pb-2">
          <p className="font-semibold text-[20px] mt-5 mb-3">
            Behind the Scenes: How we Built Flowis Automation
          </p>

          <p className="text-medium text-[14px] text-[#636363] mb-8">
            A look at the product decisions, challenges, and breakthroughs that
            shaped our automation engine
          </p>

          <div className="flex justify-between items-center">
            <p className="text-[12px] font-medium">CRM STRATEGY</p>
            <p className="text-[12px] font-medium text-[#636363]">
              May 28, 2025
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Blog;
