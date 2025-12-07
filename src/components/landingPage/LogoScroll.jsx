import React from "react";
import Image from "next/image";

const LogoScroll = () => {
  const logos = [
    `/LandingPage/logo1.svg`,
    "/LandingPage/logo2.svg",
    "/LandingPage/logo3.svg",
    "/LandingPage/logo4.svg",
    "/LandingPage/logo5.svg",
    "/LandingPage/logo6.svg",
    "/LandingPage/logo7.svg",
    "/LandingPage/logo8.svg",
    "/LandingPage/logo9.svg",
    "/LandingPage/logo10.svg",
    "/LandingPage/logo11.svg",
  ];

  return (
    <section className="px-15 flex gap-2 items-center flex-col mb-12">
      <p className=" w-full text-center text-[18px]">
        Built for recruiters who hire at the world's most innovative companies
      </p>
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="flex scroll-animation">
          {/* First batch */}
          {logos.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt={`logo-${i}`}
              width={150}
              height={150}
              className="w-30 h-30 mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}

          {/* Duplicate batch for infinite loop */}
          {logos.map((item, i) => (
            <Image
              key={`dup-${i}`}
              src={item}
              alt={`logo-${i}`}
              width={150}
              height={150}
              className="w-30 h-30 mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;
