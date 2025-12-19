import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="mb-20 md:pl-10 mt-2 md:mt-15 flex gap-13 md:gap-10  flex-col md:flex-row items-center bg-[#f7f7f7] rounded-md ">
      {/* hero texts */}
      <nav className="md:w-[45%] flex  flex-col px-4 md:px-0">
        <p className="font-geist-mono font-medium mb-3 text-[14px] mt-10">
          / FEATURED
        </p>
        <p className="text-[38px]  md:text-[40px] font-semibold leading-[44px] md:leading-[46px] mb-6">
          How to Migrate to Spotted AI in Under a Day
        </p>
        <p className=" text-[14px] text-gray-900 font-medium mb-3">
          Learn how easy it is to switch from outdated tools to Spotted AI
          witthout disrupting yout team's monentum.
        </p>
        <div className="flex gap-4 items-center mb-3">
          <p className="font-geist-mono text-[12px] font-semibold text-gray-900 ">
            IMPLEMENTATION
          </p>
          <p className=" text-[12px] px-3 py-2 bg-[#f2f2f2] text-[#616161] rounded-md">
            May 28, 2025
          </p>
        </div>

        <button
          className="text-[12px] md:text-[14px] w-[120px] py-[10px] text-center
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
          Read More
        </button>
      </nav>
      {/* hero image */}
      <nav className="md:w-[55%]">
        <Image
          src="/BlogPage/heroImage.svg"
          alt="display of our product"
          width={2100}
          height={2100}
          className="hidden md:block rounded-[6px]"
        />
        <Image
          src="/BlogPage/heroImageMobile.svg"
          alt="display of our product"
          width={2100}
          height={2100}
          className="md:hidden rounded-[6px]"
        />
      </nav>
    </section>
  );
};

export default Hero;
