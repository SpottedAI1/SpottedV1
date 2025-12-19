"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import LogoSec from "@/components/LogoSec";
import { API_ENDPOINTS } from "@/utils/api";

function OTPPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const tempToken = searchParams.get("tempToken");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Redirect if missing params
  useEffect(() => {
    if (!email || !tempToken) {
      router.push("/email-signup");
    }
  }, [email, tempToken, router]);

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isNewUser", "true");

        // Redirect to onboarding
        router.push("/onboarding1");
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setError("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError("");
    setLoading(true);

    try {
      // Get signup data from localStorage
      const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

      const response = await fetch(API_ENDPOINTS.SEND_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: signupData.name,
          password: signupData.password
        })
      });

      if (response.ok) {
        setTimeLeft(600); // Reset timer
        setOtp("");
        setError("");
      } else {
        setError("Failed to resend OTP");
      }
    } catch (err) {
      console.error("Resend OTP error:", err);
      setError("Error resending OTP");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Logo */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-black to-gray-900 items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Spotted</h1>
          <p className="text-gray-400">Find your next great hire</p>
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <LogoSec />

          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h1>
            <p className="text-gray-600 text-sm mb-6">
              We've sent a 6-digit OTP to <strong>{email}</strong>
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleVerifyOTP}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(val);
                  }}
                  maxLength="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-4">
                OTP expires in{" "}
                <span className="font-semibold text-red-600">{formatTime(timeLeft)}</span>
              </p>

              <button
                onClick={handleResendOTP}
                disabled={loading || timeLeft > 540} // Allow resend after 1 minute
                className="text-blue-600 hover:text-blue-700 text-sm font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Resend OTP
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Wrong email?{" "}
                <button
                  onClick={() => router.push("/email-signup")}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Go back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <OTPPageContent />
    </Suspense>
  );
}
