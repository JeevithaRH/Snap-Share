// firebase/config.js
// // firebase/config.js
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from "firebase/remote-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "YOUR_KEY",
  // authDomain: "YOUR_DOMAIN",
  // projectId: "YOUR_PROJECT_ID",
  // storageBucket: "YOUR_BUCKET",
  // messagingSenderId: "YOUR_SENDER_ID",
  // appId: "YOUR_APP_ID"
  apiKey: "AIzaSyA6RPjVElKcsV8GBO4YJNsZ7NSJG7Zu3gA",
  authDomain: "snapshare-6d06b.firebaseapp.com",
  projectId: "snapshare-6d06b",
  storageBucket: "snapshare-6d06b.firebasestorage.app",
  messagingSenderId: "339302956210",
  appId: "1:339302956210:web:c99604be29a48fe711ddab"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);
