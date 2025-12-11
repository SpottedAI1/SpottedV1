"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import FirebaseGoogleSignIn from "@/components/FirebaseGoogleSignIn";

export default function EmailSignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Sign up with Firebase
      await signup(email, password, name);
      
      // Mark as new user for onboarding
      localStorage.setItem("isNewUser", "true");
      
      // Redirect to onboarding
      router.push("/onboarding1");
    } catch (err) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex text-gray-900 bg-gray-50 items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl p-8 pt-10 shadow-lg border-[1.5px] border-[#e5e7eb] flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl font-[700] text-center">Sign up with email</h2>
        <p className="text-center text-[13px] mt-1 text-gray-500">
          Already have an account?{" "}
          <b
            onClick={() => {
              router.push("/signin");
            }}
            className="hover:cursor-pointer text-black font-medium"
          >
            Sign in
          </b>
        </p>
        <div className=" w-[93%]">
          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 text-[13px] rounded">
              {error}
            </div>
          )}

          {/* Name */}
          <div className="mt-8">
            <label className="text-[13px] font-semibold">Your Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-[10px] py-2 border-[2px] border-[#d1d5db]  rounded-lg outline-none 
            focus:border-transparent
            focus:ring-2 focus:ring-black text-[14px] focus:bg-[#f9fafb]"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="text-[13px] font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-[10px] py-2 border-[2px] border-[#d1d5db] rounded-lg outline-none focus:border-transparent
            focus:ring-2 focus:ring-black text-[14px] focus:bg-[#f9fafb]"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="text-[13px] font-semibold">Password</label>
            <div className="relative">
              <input
                type={!showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-[10px] py-2 border-[2px] border-[#d1d5db]  rounded-lg outline-none
              focus:border-transparent
              focus:ring-2 focus:ring-black text-[14px] focus:bg-[#f9fafb] tracking-widest placeholder:tracking-normal"
              />
              <span
                className="absolute right-3 top-[14px] text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Image
                    src="/visibilityOn.svg"
                    alt="eye-open"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/visibilityOff.svg"
                    alt="eye-closed"
                    width={20}
                    height={20}
                  />
                )}
              </span>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-xs text-gray-500">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <div className="mt-4">
            <FirebaseGoogleSignIn isSignUp={true} />
          </div>

          {/* Terms */}
          <p className="text-center text-[12px] text-[#6b7280] mt-4 leading-relaxed">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
