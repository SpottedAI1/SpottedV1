"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SigninPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Existing users go directly to dashboard without onboarding
        router.push("/after-onboarding");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex text-gray-900 bg-gray-50 items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl p-8 pt-10 shadow-lg border-[1.5px] border-[#e5e7eb] flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl font-[700] text-center">
          Sign in to your account
        </h2>
        <p className="text-center text-[13px] mt-1 text-gray-500">
          Don't have an account?{" "}
          <b
            onClick={() => {
              router.push("/email-signup");
            }}
            className="hover:cursor-pointer text-black font-medium"
          >
            Sign up
          </b>
        </p>
        <div className=" w-[93%]">
          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 text-[13px] rounded">
              {error}
            </div>
          )}

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
            <section className="flex justify-between items-center">
              <label className="text-[13px] font-semibold">Password</label>
              <p className="text-[12px] font-medium hover:cursor-pointer">
                Forgot password?
              </p>
            </section>
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
            onClick={handleSignin}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:cursor-pointer disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* Terms */}
          <p className="text-center text-[11px] text-[#6b7280] mt-4 leading-relaxed">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
