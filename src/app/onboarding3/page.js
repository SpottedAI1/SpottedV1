"use client";
import ReferralSelect from "@/components/ReferralSources";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function OnboardingPage3() {
  const router = useRouter();
  // const options = [
  //   "LinkedIn",
  //   "Twitter",
  //   "YouTube",
  //   "Instagram",
  //   "Friend",
  //   "Colleague",
  //   "Other",
  // ];
  return (
    <div className="min-h-screen w-screen flex text-gray-900 bg-white  flex-col items-center ">
      {" "}
      {/* logo */}
      <div className="flex gap-2 mt-16 py-3 mb-[22px]">
        <nav>
          <Image src="/Icon.png" alt="Spotted" width={28} height={28} />
        </nav>
        <h1 className="font-bold text-[19px] text-black ">Spotted AI</h1>
      </div>
      {/* onboarding content */}
      {/* shadow-[0_4px_16px_rgba(0,0,0,0.03)]  */}
      <div className="w-full max-w-md bg-white rounded-xl p-8 pt-10 shadow-lg shadow-gray-200/70   flex flex-col items-center px-8 mt-[102px]">
        {/* <section className="w-full flex gap-0 ">
          <hr className="w-full h-[1px] border-2 mt-5 rounded-2xl" />
          <hr className="w-full h-[1px] border-2 rounded-2xl border-[#e5e7eb] mt-5 ml-2" />
        </section> */}
        <div className="w-full bg-gray-200 h-[3.5px] rounded-2xl ">
          <div className="bg-black h-[3.5px] rounded-2xl w-[75%]"></div>
        </div>
        <div className="mt-4 w-full">
          <label className="text-[14px] font-semibold">
            How did you hear about Spotted AI? Select all that apply.
          </label>
          {/* <input
            type="text"
            placeholder="Krish's Workspace"
            className="w-full mt-4 px-[10px] py-2 border-[1px] border-[#e5e7eb] rounded-[6px] outline-none focus:border-transparent
            bg-[#f9fafb]
                focus:ring-2 focus:ring-black text-[14px] focus:bg-[#f9fafb] 
                placeholder:text-gray-700"
          /> */}
          <ReferralSelect />
        </div>
        {/* buttons */}
        <div className="w-full flex justify-between items-center">
          <button
            onClick={() => {
              router.push("/onboarding2");
            }}
            className="w-[20%] mt-6 text-[#9ca3af]  py-2  text-sm font-medium hover:opacity-90 hover:cursor-pointer flex items-center justify-center gap-1 text-[13px]"
          >
            <Image
              src="/backArrow.svg"
              alt="arrow-right"
              width={12}
              height={12}
            />
            <p>Back</p>
          </button>
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="w-[20%] mt-6 bg-black text-white py-2 px-4 rounded-[6px] text-sm font-medium hover:opacity-90 hover:cursor-pointer flex items-center justify-center gap-1 text-[13px]"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
