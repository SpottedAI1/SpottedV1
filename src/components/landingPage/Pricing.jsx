import React, { useState } from "react";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <section className="bg-[#fafafa] px-15  flex gap-2 flex-col pt-[96px] pb-10 items-center">
      <p className="font-geist-mono mb-1 ">/ PRICING</p>
      <p className="font-semibold text-[40px] leading-[46px]  ">
        Simple, Scalable Pricing for Modern Hiring Teams
      </p>
      <p className="text-[16px]">Choose a plan that fits your hiring volume</p>
      <div className="bg-[#f5f5f5] p-1 rounded-[12px] mt-1 mb-5">
        <button
          className={`w-[100px] h-[40px] rounded-[10px] font-semibold text-[14px] transition-all duration-300
            ${
              monthly
                ? "bg-white text-black "
                : "bg-transparent text-[#666666] hover:cursor-pointer"
            }
            `}
          onClick={() => setMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`w-[100px] h-[40px] rounded-[10px] font-semibold text-[14px] transition-all duration-300 
            ${
              !monthly
                ? "bg-white text-black "
                : "bg-transparent text-[#666666] hover:cursor-pointer"
            }`}
          onClick={() => setMonthly(false)}
        >
          Yearly
        </button>
      </div>
      {monthly ? (
        <section className="grid grid-cols-3 gap-2">
          <nav>
            <div className="px-4 py-6 bg-white rounded-[6px] mb-6">
              <p className="text-[20px] font-semibold mb-4">Starter</p>
              <p className="text-[#666666] text-[16px] mb-4">
                <span className="text-[40px] font-semibold text-gray-900">
                  $250
                </span>
                per month
              </p>
              <p className=" text-[14px] mb-13">
                For founders and small tems hiring their first few roles fast.
              </p>
              <button className="w-full text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]">
                Get Started
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>Up to 2 active roles at a time</li>
              <li>AI-driven shortlisting and outreach automation</li>
              <li>250 "unlock credits" to reveal verified contact details</li>
              <li>1 recruiter / fonder seat</li>
              <li>Access to 500M+ global profiles</li>
            </ul>
          </nav>
          <nav>
            <div className="px-4 py-6 bg-white rounded-[6px] mb-6">
              <div className="flex  justify-between">
                <p className="text-[20px] font-semibold mb-4">Growth</p>
                <button className="w-[100px]        h-6  text-center py-0.5 border border-black bg-black  rounded-[4px]  text-white text-[12px]">
                  Most Popular
                </button>
              </div>
              <p className="text-[#666666] text-[16px] mb-4">
                <span className="text-[40px] font-semibold text-gray-900">
                  $600
                </span>
                per month
              </p>
              <p className=" text-[14px] mb-8">
                For teams scaling multiple roles across the year with automated
                sourcing and outreach.
              </p>
              <button className="w-full text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]">
                Get Started
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>Up to 5 active roles at a time</li>
              <li>Up to 3 recruiter seats</li>
              <li>800 "unlock credits" to reveal candidate details</li>
              <li>AI-driven shortlisting and outreact automation</li>
              <li>Access to 500M+ global profiles</li>
              <li>Priority support & onboarding assistance</li>
            </ul>
          </nav>
          <nav>
            <div className="px-4 py-6 bg-black rounded-[6px] mb-6">
              <p className="text-[20px] font-semibold mb-4 text-white">
                Enterprise
              </p>
              <p className="text-white text-[40px] mb-4">Talk to us</p>
              <p className=" text-[14px] text-gray-50 mb-8">
                For agencies or enterprise hiring teams running ongoing,
                high-volume recruitment pipelines.
              </p>
              <button className="w-full text-center py-2 border border-white bg-white hover:bg-gray-50 rounded-[6px] hover:cursor-pointer text-black text-[14px]">
                Get in Touch
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>6+ active reoles and custom recruiter seats</li>
              <li>Unlimited "unlock credits" & bulk data access</li>
              <li>Dedicated account manager</li>
            </ul>
          </nav>
        </section>
      ) : (
        <section className="grid grid-cols-3 gap-2">
          <nav>
            <div className="px-4 py-6 bg-white rounded-[6px] mb-6">
              <p className="text-[20px] font-semibold mb-4">Starter</p>
              <p className="text-[#666666] text-[16px] mb-4">
                <span className="text-[40px] font-semibold text-gray-900">
                  $2500
                </span>
                per year
              </p>
              <p className=" text-[14px] mb-13">
                For founders and small tems hiring their first few roles fast.
              </p>
              <button className="w-full text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]">
                Get Started
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>Up to 2 active roles at a time</li>
              <li>AI-driven shortlisting and outreach automation</li>
              <li>3000 "unlock credits" to reveal verified contact details</li>
              <li>1 recruiter / fonder seat</li>
              <li>Access to 500M+ global profiles</li>
            </ul>
          </nav>
          <nav>
            <div className="px-4 py-6 bg-white rounded-[6px] mb-6">
              <div className="flex  justify-between">
                <p className="text-[20px] font-semibold mb-4">Growth</p>
                <button className="w-[100px]        h-6  text-center py-0.5 border border-black bg-black hover:bg-gray-800 rounded-[4px] hover:cursor-pointer text-white text-[12px]">
                  Most Popular
                </button>
              </div>
              <p className="text-[#666666] text-[16px] mb-4">
                <span className="text-[40px] font-semibold text-gray-900">
                  $6000
                </span>
                per year
              </p>
              <p className=" text-[14px] mb-8">
                For teams scaling multiple roles across the year with automated
                sourcing and outreach.
              </p>
              <button className="w-full text-center py-2 border border-black bg-black hover:bg-gray-800 rounded-[6px] hover:cursor-pointer text-white text-[14px]">
                Get Started
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>Up to 5 active roles at a time</li>
              <li>Up to 3 recruiter seats</li>
              <li>9600 "unlock credits" to reveal candidate details</li>
              <li>AI-driven shortlisting and outreact automation</li>
              <li>Access to 500M+ global profiles</li>
              <li>Priority support & onboarding assistance</li>
            </ul>
          </nav>
          <nav>
            <div className="px-4 py-6 bg-black rounded-[6px] mb-6">
              <p className="text-[20px] font-semibold mb-4 text-white">
                Enterprise
              </p>
              <p className="text-white text-[40px] mb-4">Talk to us</p>
              <p className=" text-[14px] text-gray-50 mb-8">
                For agencies or enterprise hiring teams running ongoing,
                high-volume recruitment pipelines.
              </p>
              <button className="w-full text-center py-2 border border-white bg-white hover:bg-gray-50 rounded-[6px] hover:cursor-pointer text-black text-[14px]">
                Get in Touch
              </button>
            </div>
            <p className="text-[16px] mb-3">What's included?</p>
            <ul className="list-disc text-[#646464] text-[16px] ml-6 space-y-1">
              <li>6+ active reoles and custom recruiter seats</li>
              <li>Unlimited "unlock credits" & bulk data access</li>
              <li>Dedicated account manager</li>
            </ul>
          </nav>
        </section>
      )}
    </section>
  );
};

export default Pricing;
