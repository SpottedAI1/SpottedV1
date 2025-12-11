"use client";
import React from "react";
import { useState } from "react";
export const TabBar = () => {
  const [active, setActive] = useState("All");
  const tabs = [
    "All",
    "Recruiting Strategy",
    "Hiring Automations",
    "Product Updates",
    "Talent Ops",
  ];
  return (
    <section className=" px-5 md:px-15 mb-10 py-2 ">
      <div className="flex gap-1 px-4 py-3  rounded-[6px] bg-[#fafafa] border border-[#f2f2f2] flex-col md:flex-row ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`w-full text-center py-3   rounded-[6px] hover:cursor-pointer  text-[14px] 
                ${
                  active === tab
                    ? "bg-black text-white"
                    : "bg-[#fafafa] text-[#727272]"
                }
                `}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};
