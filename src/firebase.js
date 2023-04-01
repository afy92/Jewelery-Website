import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCm2U5kNSQYVhJWVTogTMfu7uNhm8dSoow",
  authDomain: "jewelery-website.firebaseapp.com",
  projectId: "jewelery-website",
  storageBucket: "jewelery-website.appspot.com",
  messagingSenderId: "1020822370243",
  appId: "1:1020822370243:web:041753e2e6bb38fdf86f76",
  measurementId: "G-NDCBB5HERE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
export default app;
