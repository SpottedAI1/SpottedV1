"use client";
import { useState } from "react";
import Image from "next/image";
export default function ReferralSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "LinkedIn",
    "Twitter",
    "YouTube",
    "Instagram",
    "Friend",
    "Colleague",
    "Other",
  ];

  return (
    <div className="relative w-full mt-4">
      {/* Select box */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full bg-[#f7f8f9] border border-[#e5e7eb] 
          rounded-lg px-4 py-2 text-left 
          text-[#a4a4a8] text-[13px] flex items-center justify-between
        "
      >
        <span>{selected || "Select referral sources"}</span>

        {/* Unicode arrow */}
        <span
          className={`text-gray-400 text-[12px] transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Image src="/dropDown.svg" alt="arrow-down" width={22} height={22} />
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
            absolute top-full left-0 mt-2 w-full 
            bg-white border border-gray-200 shadow-md 
            rounded-lg z-50
          "
        >
          {options.map((opt) => (
            <div
              key={opt}
              className="
                px-4 py-2 text-[14px] cursor-pointer text-gray-700
                hover:bg-gray-100
              "
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
