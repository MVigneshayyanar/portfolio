// Firebase Configuration
// Replace these with your actual Firebase project credentials
// Get these from: https://console.firebase.google.com/

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app = null;
let database = null;

try {
  // Check if Firebase is properly configured
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
  }
} catch (error) {
  console.warn('Firebase not configured. Using fallback mode.', error);
}

export { database };
export const isFirebaseConfigured = database !== null;
