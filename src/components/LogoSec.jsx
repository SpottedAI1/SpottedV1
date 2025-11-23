import React from "react";
import Image from "next/image";

const LogoSec = () => {
  return (
    <div className="w-full mb-2">
      <div className="flex items-center gap-3 px-1 pl-3 py-3 ">
        <Image src="/Icon.png" alt="Spotted" width={28} height={28} />
        <h1 className="font-bold text-2xl text-black">Spotted</h1>
      </div>
    </div>
  );
};

export default LogoSec;
