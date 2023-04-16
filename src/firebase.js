import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2bT-1BNyk7h-Tiy4301cOZexSfV-q6HU",
  authDomain: "moviehood-70970.firebaseapp.com",
  projectId: "moviehood-70970",
  storageBucket: "moviehood-70970.appspot.com",
  messagingSenderId: "212683443915",
  appId: "1:212683443915:web:fee772ddb583218ddc954e",
  measurementId: "G-GCZGZQYXDR",
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
