// API Configuration
export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  GET_USER: (userId) => `${API_BASE_URL}/api/auth/user/${userId}`,
  UPDATE_USER: (userId) => `${API_BASE_URL}/api/auth/user/${userId}/update`,
  ONBOARDING: `${API_BASE_URL}/api/auth/onboarding`,
};
