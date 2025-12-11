// API Configuration
// Use localhost for development, use deployed backend for production
export const API_BASE_URL = 
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : (process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com');

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  GOOGLE_LOGIN: `${API_BASE_URL}/api/auth/google`,
  SEND_OTP: `${API_BASE_URL}/api/auth/send-otp`,
  VERIFY_OTP: `${API_BASE_URL}/api/auth/verify-otp`,
  GET_USER: (userId) => `${API_BASE_URL}/api/auth/user/${userId}`,
  UPDATE_USER: (userId) => `${API_BASE_URL}/api/auth/user/${userId}/update`,
  ONBOARDING: `${API_BASE_URL}/api/auth/onboarding`,
};
