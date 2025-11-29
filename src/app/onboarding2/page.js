"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Roles from "@/components/Roles";
import { useEffect, useState } from "react";

export default function OnboardingPage2() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles] = useState([
    "Recruiter (In-house)",
    "Recruiter (Agency)",
    "Founder",
    "Hiring Manager",
    "VC Talent Team",
    "Other"
  ]);

  useEffect(() => {
    // Only allow onboarding for new users (first-time signup)
    const isNewUser = localStorage.getItem("isNewUser");
    if (!isNewUser) {
      // If not a new user, redirect to dashboard
      router.push("/after-onboarding");
    }
  }, [router]);

  const handleContinue = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    // Update onboarding data with role
    const existingData = JSON.parse(localStorage.getItem("onboardingData") || "{}");
    localStorage.setItem("onboardingData", JSON.stringify({
      ...existingData,
      role: selectedRole
    }));
    router.push("/onboarding3");
  };
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
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`border rounded-sm text-center py-2 px-4 text-[12px] font-medium whitespace-nowrap hover:cursor-pointer transition-colors ${
                    selectedRole === role
                      ? "bg-[#e0e1e2] border-[#2d2d2d]"
                      : "border-[#e5e7eb] text-[#2d2d2d]"
                  }`}
                >
                  {role}
                </button>
              ))}
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
            onClick={handleContinue}
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
