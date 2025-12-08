"use client";
import React, { useState } from "react";
import Image from "next/image";

const QnA = ({ qna }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#fafafa] rounded-[8px] p-4 mb-2 cursor-pointer transition-all border border-transparent duration-200 ${
        !open && "hover:px-6"
      } hover:cursor-pointer `}
      onClick={() => setOpen(!open)}
    >
      {/* Question */}
      <div className="flex justify-between items-center">
        <p className="">{qna.question}</p>

        <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2] ">
          <Image
            src="LandingPage/plus.svg"
            alt="toggle"
            width={25}
            height={25}
          />
        </div>
      </div>

      {/* ANIMATED ANSWER CONTAINER */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <p className="text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">
          {qna.answer}
        </p>
      </div>
    </div>
  );
};

export default QnA;
