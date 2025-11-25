// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Uses environment variables if available, falls back to hardcoded values for development
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBnPOEPpaVl_Po0nauj9PRFCPnEoXzVnHM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "versedrop-f5c3e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "versedrop-f5c3e",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "versedrop-f5c3e.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "561745968222",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:561745968222:web:88ceb01c6fc3b9aa5c08cf",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-HDK2CD5TTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (only in browser environment)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
export { analytics };

