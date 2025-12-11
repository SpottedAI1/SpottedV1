"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          
          // Determine API URL
          const apiUrl = 
            typeof window !== 'undefined' && window.location.hostname === 'localhost'
              ? 'http://localhost:5000'
              : (process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com');

          // Verify token with backend and create/update user
          const response = await fetch(`${apiUrl}/api/auth/verify-firebase-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
          });

          if (response.ok) {
            const data = await response.json();
            setUser({
              id: data.user.id,
              firebaseUid: data.user.firebaseUid,
              email: data.user.email,
              name: data.user.name || ""
            });
            // Store app JWT for API calls
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
          } else {
            setUser({
              id: firebaseUser.uid,
              firebaseUid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || ""
            });
          }
        } catch (err) {
          console.error('Error verifying Firebase token:', err);
          setUser({
            id: firebaseUser.uid,
            firebaseUid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || ""
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      
      // Determine API URL
      const apiUrl = 
        typeof window !== 'undefined' && window.location.hostname === 'localhost'
          ? 'http://localhost:5000'
          : (process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com');

      // Verify with backend
      const response = await fetch(`${apiUrl}/api/auth/verify-firebase-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signup = async (email, password, name) => {
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();

      // Determine API URL
      const apiUrl = 
        typeof window !== 'undefined' && window.location.hostname === 'localhost'
          ? 'http://localhost:5000'
          : (process.env.NEXT_PUBLIC_API_URL || 'https://spottedv1-2.onrender.com');

      // Verify with backend
      const response = await fetch(`${apiUrl}/api/auth/verify-firebase-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify({
          id: result.user.uid,
          firebaseUid: result.user.uid,
          email: result.user.email,
          name: name || ""
        }));
      }

      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isNewUser");
      localStorage.removeItem("signupData");
      localStorage.removeItem("onboarding1Data");
      localStorage.removeItem("onboarding2Data");
      localStorage.removeItem("onboarding3Data");
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
