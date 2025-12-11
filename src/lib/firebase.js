import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOEjX8N4xXtWgK4EiDSdlBMSxLOneqwXg",
  authDomain: "getspotted-ai.firebaseapp.com",
  projectId: "getspotted-ai",
  storageBucket: "getspotted-ai.firebasestorage.app",
  messagingSenderId: "228969044131",
  appId: "1:228969044131:web:f29d686d14a8ae633d0716",
  measurementId: "G-XYWQSZYJMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
export const auth = getAuth(app);

// Set up Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
