"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 px-20 pt-20">
      <nav className="mb-30 flex gap-30">
        <section className="w-[220px]">
          <p className="font-geist-mono text-[16px]">PRODUCT</p>
          <ul className="mt-8 ">
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              AI Talent Discovery
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Human-Guided AI
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium ">
              Automated Outreach
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Interview Scheduling
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Pricing
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Features
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Why Spotted AI
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              FAQ
            </li>
          </ul>
        </section>
        <section className="w-[260px]">
          <p className="font-geist-mono text-[16px]">USE CASES</p>
          <ul className="mt-8 ">
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Hiring Software Engineer
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Hiring Product Managers
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Startup Hiring Automation
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Agency Recruitment Automation
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              High Volume Hiring
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Global Talent Sourcing
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Plan
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Blog
            </li>
          </ul>
        </section>
        <section className="w-[220px]">
          <p className="font-geist-mono text-[16px]">ACCOUNT & UTILITY</p>
          <ul className="mt-8 ">
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Terms & Conditions
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Sign in
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Sign up
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Forgot Password
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Demo
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              404
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Password Protected
            </li>
          </ul>
        </section>
        <section className="w-[220px]">
          <p className="font-geist-mono text-[16px]">COMPANY</p>
          <ul className="mt-8 mb-8">
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              About Us
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Careers
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Contact
            </li>
            <li className="mb-1 hover:ml-2 hover:cursor-pointer hover:list-disc hover:text-[#7d7d7d] transition-all duration-200 font-medium">
              Press
            </li>
          </ul>
          <nav className="w-full">
            <p className="text-[14px] font-medium">
              Subscribe to our newsletter
            </p>
            <div className=" flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-[#f2f2f2] bg-white py-2 pl-4 rounded-[8px] w-[100%] text-[14px]"
              />
              <button
                className="w-[50%] py-2 bg-black text-white rounded-[8px] border border-black hover:cursor-pointer text-[14px]
              
               transition-all duration-300
        
                hover:bg-white hover:text-black
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#000]
                  hover: cursor-pointer
              "
              >
                Send
              </button>
            </div>
          </nav>
        </section>
      </nav>
      <nav className="flex justify-between">
        <p className="text-[12px] font-medium">
          © 2025 Spotted AI. All rights reserved.
        </p>
        <section className="flex gap-3 mb-3">
          <a
            href="https://www.linkedin.com/company/spottedai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LandingPage/linkedin.svg"
              width={15}
              height={20}
              alt="linkedin logo"
            />
          </a>
          <a
            href="https://www.instagram.com/getspotted.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LandingPage/instagram.svg"
              width={15}
              height={24}
              alt="instagram logo"
            />
          </a>
          <a
            href="https://x.com/getSpottedAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LandingPage/twitter.svg"
              width={15}
              height={13}
              alt="twitter logo"
            />
          </a>
        </section>
      </nav>
    </div>
  );
};

export default Footer;
