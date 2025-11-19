// src/services/authService.js
import { auth } from "../../firebase/config";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);

export const register = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);

export const logout = () => signOut(auth);
