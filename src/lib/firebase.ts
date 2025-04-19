
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWzXD9h7ltAiOzjCwvm8i4m_8eYdLDpA0",
  authDomain: "rbxsquillweb.firebaseapp.com",
  databaseURL: "https://rbxsquillweb-default-rtdb.firebaseio.com",
  projectId: "rbxsquillweb",
  storageBucket: "rbxsquillweb.appspot.com",
  messagingSenderId: "627864828110",
  appId: "1:627864828110:web:b7d75efc8bf8efb64bf89f",
  measurementId: "G-LYK7DJ4XYK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics if in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };
