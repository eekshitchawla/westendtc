import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDvXEVHj8jIG19gVRZ5GBWChBBhZk9uwUA",
  authDomain: "westend-tc.firebaseapp.com",
  projectId: "westend-tc",
  storageBucket: "westend-tc.appspot.com",
  messagingSenderId: "539923039306",
  appId: "1:539923039306:web:9b5954217ce1c55ca552b3",
  measurementId: "G-K65TR7EZVF",
};
export const app = initializeApp(firebaseConfig);
export const db_firebase = getFirestore(app);
