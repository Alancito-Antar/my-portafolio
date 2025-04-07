import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBV6tmE_ZwG_dgUi3dkacAYXXql0_V8LS8",
  authDomain: "my-portafolio-c66b0.firebaseapp.com",
  projectId: "my-portafolio-c66b0",
  storageBucket: "my-portafolio-c66b0.firebasestorage.app",
  messagingSenderId: "716702863650",
  appId: "1:716702863650:web:98b0a405c9c23082e9957b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
