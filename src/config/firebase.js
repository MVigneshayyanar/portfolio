// Firebase Configuration for Global Real-Time Tracking
// Get your FREE Firebase credentials from: https://console.firebase.google.com/

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TEMPORARY PUBLIC CONFIG - Replace with your own Firebase project for production
// This is a demo database that anyone can use for testing
const firebaseConfig = {
  apiKey: "AIzaSyDemoKey-ReplaceWithYourOwn",
  authDomain: "portfolio-demo.firebaseapp.com",
  databaseURL: "https://portfolio-demo-default-rtdb.firebaseio.com",
  projectId: "portfolio-demo",
  storageBucket: "portfolio-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
let app = null;
let database = null;
let isConfigured = false;

try {
  // Only initialize if you've added your own config
  if (firebaseConfig.apiKey !== "AIzaSyDemoKey-ReplaceWithYourOwn") {
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
    isConfigured = true;
    console.log('✅ Firebase connected - Global real-time tracking active!');
  } else {
    console.log('⚠️ Using fallback mode. Add your Firebase config for global tracking.');
  }
} catch (error) {
  console.warn('Firebase initialization failed:', error);
  isConfigured = false;
}

export { database, isConfigured };
