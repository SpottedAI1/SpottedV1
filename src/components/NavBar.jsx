"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  const [navigation, setNavigation] = useState(false);

  const viewNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <div>
      <section
        className="sticky top-0 bg-white/70 backdrop-blur-md z-50 px-5 md:px-11 pt-5 flex  items-center justify-between pb-4
        border-b border-[#f2f2f2] md:border-none
      "
      >
        {/* logo */}
        <Image
          src="/LandingPage/logo.svg"
          width={160}
          height={160}
          alt="logo"
          onClick={() => scrollToTarget(heroRef)}
          className=""
        />
        {/* navigation */}
        <nav className="hidden md:flex  gap-4 text-[#222222] text-[15px] ">
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
        <nav className="flex md:hidden" onClick={() => viewNavigation()}>
          <Image
            src="/LandingPage/hamburger.svg"
            alt="hamburger menu icon"
            width={24}
            height={24}
          />
        </nav>
        {/* action buttons */}
        <nav className="hidden md:flex gap-2 ">
          <button
            className="text-center px-5 py-2 border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer "
            onClick={() => router.push("/signin")}
          >
            Sign in
          </button>
          {/* <button className="w-[154px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
            Start Hiring Now
          </button> */}
          <button
            className="  
              px-5 py-2 text-center
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
      </section>{" "}
      {/* hamburger menu */}
      <div
        className={`fixed top-[75px] left-0 right-0 bottom-0 md:hidden transform transition-transform duration-200 bg-white overflow-y-auto
    ${navigation ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className=" bg-white flex items-center flex-col gap-4 text-[#222222] text-[15px] pt-2">
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

        <nav className="flex gap-2  flex-col bg-white p-5 ">
          <button
            className="text-center px-5 py-2 border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer "
            onClick={() => router.push("/signin")}
          >
            Sign in
          </button>
          {/* <button className="w-[154px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
            Start Hiring Now
          </button> */}
          <button
            className="  
              px-5 py-2 text-center
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
      </div>
    </div>
    // <section
    //   className="sticky top-0 bg-white/70 backdrop-blur-md z-50 px-5 md:px-11 pt-5 flex  items-center justify-between pb-4
    //     border-b border-[#f2f2f2] md:border-none
    //   "
    // >
    //   {/* logo */}
    //   <Image
    //     src="/LandingPage/logo.svg"
    //     width={160}
    //     height={160}
    //     alt="logo"
    //     onClick={() => scrollToTarget(heroRef)}
    //     className=""
    //   />
    //   {/* navigation */}
    //   <nav className="hidden md:flex  gap-4 text-[#222222] text-[15px] ">
    //     <p
    //       className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
    //       onClick={() => scrollToTarget(benefitsRef)}
    //     >
    //       Benefits
    //     </p>
    //     <p
    //       className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
    //       onClick={() => scrollToTarget(featuresRef)}
    //     >
    //       Features
    //     </p>
    //     <p
    //       className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
    //       onClick={() => scrollToTarget(pricingRef)}
    //     >
    //       Pricing
    //     </p>
    //     <p
    //       className="hover:text-[#909090] transition-colors duration-300 hover:cursor-pointer"
    //       onClick={() => scrollToTarget(faqRef)}
    //     >
    //       FAQ
    //     </p>
    //   </nav>
    //   <nav className="flex md:hidden">
    //     <Image
    //       src="/LandingPage/hamburger.svg"
    //       alt="hamburger menu icon"
    //       width={24}
    //       height={24}
    //     />
    //   </nav>
    //   {/* action buttons */}
    //   <nav className="hidden md:flex gap-2 ">
    //     <button
    //       className="text-center px-5 py-2 border border-[#f2f2f2] hover:bg-gray-50 rounded-[6px] hover:cursor-pointer "
    //       onClick={() => router.push("/signin")}
    //     >
    //       Sign in
    //     </button>
    //     {/* <button className="w-[154px] text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white">
    //         Start Hiring Now
    //       </button> */}
    //     <button
    //       className="
    //           px-5 py-2 text-center
    //           bg-black text-white
    //           border border-black
    //           rounded-[6px]
    //           transition-all duration-300

    //         hover:bg-white hover:text-black

    //           hover:-translate-x-[4px]
    //           hover:-translate-y-[4px]

    //           hover:shadow-[4px_4px_0px_#000]
    //           hover: cursor-pointer"
    //       onClick={() => router.push("/signup")}
    //     >
    //       Start Hiring Now
    //     </button>
    //   </nav>
    // </section>
  );
};

export default NavBar;
