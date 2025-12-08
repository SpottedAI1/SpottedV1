import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <section className="mb-20 px-15 mt-15 flex gap-2 items-center">
      {/* hero texts */}
      <nav className="flex flex-col ">
        <p className="font-geist-mono mb-2 text-[14px]">
          / WELCOME TO SPOTTED AI
        </p>
        <p className="text-[56px] font-semibold leading-[61px] mb-6">
          AI recruiting that delivers interview ready candidates
        </p>
        <p className=" text-[16px] text-[#333333]">
          Spotted AI automates candidate sourcing, shortlisting and outreach so
          recruiters meet only pre-qualified, high-intent, interview-ready
          talent.
        </p>
        <div className="flex gap-3 mt-5">
          {/* <button className="w-[168px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
                  Start Hiring Now
                </button>  */}

          <button
            className="w-[168px] text-center
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
          <button className="w-[168px] text-center py-2 border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer ">
            <a
              href="https://calendly.com/iamkrishkishore/spottedai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </a>
          </button>
        </div>
      </nav>
      {/* hero image */}
      <nav className="">
        <Image
          src="/LandingPage/image1.png"
          alt="display of our product"
          width={2100}
          height={2100}
        />
      </nav>
    </section>
  );
};

export default Hero;
