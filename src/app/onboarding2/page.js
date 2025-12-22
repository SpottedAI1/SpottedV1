"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Roles from "@/components/Roles";
export default function OnboardingPage2() {
  const router = useRouter();
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
          <div className="bg-black h-[3.5px] rounded-2xl w-[45%]"></div>
        </div>
        <div className="mt-4 w-full">
          <label className="text-[14px] font-semibold">
            What role best describes you?
          </label>
          <section className="mt-4">
            <div className="flex flex-wrap gap-3">
              <Roles props={{ role: "Recruiter (In-house)" }} />
              <Roles props={{ role: "Recruiter (Agency)" }} />
              <Roles props={{ role: "Founder" }} />
              <Roles props={{ role: "Hiring Manager" }} />
              <Roles props={{ role: "VC Talent Team" }} />
              <Roles props={{ role: "Other" }} />
            </div>
          </section>
        </div>
        {/* buttons */}
        <div className="w-full flex justify-between items-center">
          <button
            onClick={() => {
              router.push("/onboarding1");
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
              router.push("/onboarding3");
            }}
            className="w-[30%] mt-6 bg-black text-white py-2 px-4 rounded-[6px] text-sm font-medium hover:opacity-90 hover:cursor-pointer flex items-center justify-center gap-1 text-[13px]"
          >
            <p>Continue</p>
            <Image
              src="/frontArrow.svg"
              alt="arrow-right"
              width={12}
              height={12}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
