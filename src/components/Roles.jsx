import { useState } from "react";
export default function Roles({ props }) {
  const [brColor, setBrColor] = useState("border-[#e5e7eb]");
  return (
    <button
      className={`${brColor} border border-[#e5e7eb] text-[#2d2d2d] rounded-sm text-center w-fit whitespace-nowrap text-[12px] py-[8px] font-medium px-4 min-w-[80px] hover:cursor-pointer`}
      onClick={() => {
        setBrColor("bg-[#e0e1e2]");
      }}
    >
      {props.role}
    </button>
  );
}
