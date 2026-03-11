
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD7Fmhdz_plnnHfnam2YOS6WXsLYNgfJV0",
  authDomain: "sm-creations-web.firebaseapp.com",
  projectId: "sm-creations-web",
  storageBucket: "sm-creations-web.firebasestorage.app",
  messagingSenderId: "967000114933",
  appId: "1:967000114933:web:b5e10738b7b4891ed427bc",
  measurementId: "G-63PC82VWKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
