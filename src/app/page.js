"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FirebaseGoogleSignIn from "@/components/FirebaseGoogleSignIn";

export default function SignupPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen flex text-gray-900 bg-gray-50 items-center justify-center ">
      <main className="text-center w-[400px] flex   items-center justify-center flex-col">
        {/* <LogoSec /> */}
        <div className="flex items-center gap-2   py-3 mb-[22px]">
          <Image src="/Icon.png" alt="Spotted" width={28} height={28} />
          <h1 className="font-bold text-[19px] text-black ">Spotted AI</h1>
        </div>
        <h1 className="font-sans font-semibold text-[18px] text-gray-800 mb-[20px]">
          Get started for free
        </h1>
        <div className="w-full mb-[8px]">
          <FirebaseGoogleSignIn isSignUp={true} />
        </div>
        <button
          onClick={() => {
            router.push("/email-signup");
          }}
          className="w-full border-[2px] border-[#cfcfcf] rounded-[4px] py-[10px] text-[13px]  flex items-center justify-center gap-2 mb-[18px] hover:cursor-pointer font-semibold text-gray-800"
        >
          <Image src="/email.svg" alt="email" width={18} height={18} />
          Continue with Email
        </button>
        <nav className="text-[#4d4d4d] text-[10px] flex gap-1">
          <p>By proceeding, you agree to our </p>{" "}
          <p className="underline decoration-[#dbdbdb] hover:cursor-pointer">
            {" "}
            Terms of Service
          </p>
        </nav>
      </main>
    </div>
  );
}
