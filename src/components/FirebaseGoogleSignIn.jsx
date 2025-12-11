"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function FirebaseGoogleSignIn({ isSignUp = false }) {
  const router = useRouter();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      // Sign in with Google popup
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      // Get Firebase token
      const token = await firebaseUser.getIdToken();

      // Verify with backend
      const apiUrl = 
        typeof window !== 'undefined' && window.location.hostname === 'localhost'
          ? 'http://localhost:5000'
          : (process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com');

      const response = await fetch(
        `${apiUrl}/api/auth/verify-firebase-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (isSignUp) {
          // New user - mark for onboarding
          localStorage.setItem("isNewUser", "true");
          router.push("/onboarding1");
        } else {
          // Existing user - go to dashboard
          router.push("/after-onboarding");
        }
      } else {
        setError("Failed to verify with backend");
      }
    } catch (err) {
      console.error("Google sign-in error:", err);
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 text-[12px] rounded">
          {error}
        </div>
      )}
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full border-[2px] border-[#cfcfcf] rounded-[4px] py-[10px] text-[13px] flex items-center justify-center gap-2 hover:cursor-pointer font-semibold text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        {loading ? "Signing in..." : isSignUp ? "Sign up with Google" : "Continue with Google"}
      </button>
    </div>
  );
}
