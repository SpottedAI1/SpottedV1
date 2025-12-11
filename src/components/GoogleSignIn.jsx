"use client";
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/utils/api';

export default function GoogleSignIn({ isSignUp = false }) {
  const router = useRouter();

  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch(API_ENDPOINTS.GOOGLE_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // If signup, mark as new user for onboarding
        if (isSignUp) {
          localStorage.setItem('isNewUser', 'true');
          router.push('/onboarding1');
        } else {
          // Signin - go directly to dashboard
          router.push('/after-onboarding');
        }
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (err) {
      console.error('Google login error:', err);
      alert('Error during Google login');
    }
  };

  const handleError = () => {
    alert('Google login failed');
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        text="signin_with"
        width="100%"
      />
    </div>
  );
}
