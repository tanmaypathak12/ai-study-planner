// firebase.js (must be in same folder as index.html)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// Firebase Config (from your project)
const firebaseConfig = {
  apiKey: "AIzaSyD_NKY1UkgsGWKdbVCISFRaADuXtbG4-Ys",
  authDomain: "ai-study-planner-f2a0f.firebaseapp.com",
  projectId: "ai-study-planner-f2a0f",
  storageBucket: "ai-study-planner-f2a0f.firebasestorage.app",
  messagingSenderId: "211749204675",
  appId: "1:211749204675:web:8877ab086c461f78f4a876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth
export const auth = getAuth(app);
