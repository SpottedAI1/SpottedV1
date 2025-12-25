"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DynamicBlog = ({ props }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blogExpand/${props.id}`);
  };
  return (
    <div className="rounded-md h-full flex flex-col" onClick={handleClick}>
      <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer h-full flex flex-col">
        <div className="overflow-hidden rounded-[8px] md:h-[314px]">
          <img
            src={props["image link"]}
            alt="image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="px-3 pb-2 flex-1 flex flex-col">
          <p className="font-semibold text-[20px] mt-5 mb-3">{props.title}</p>

          <p className="line-clamp-3 text-medium text-[14px] text-[#636363] mb-8">
            {props.except}
          </p>

          <div className="flex justify-between items-center mt-auto">
            <p className="text-[12px] font-medium">{props.category}</p>
            <p className="text-[12px] font-medium text-[#636363]">
              {props.date}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DynamicBlog;
