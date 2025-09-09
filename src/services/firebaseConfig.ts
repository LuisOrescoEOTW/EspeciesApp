import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNfCbkfTMf-0clRKxj_Ajc2YcsX_y2Jpo",
  authDomain: "especies-feb82.firebaseapp.com",
  projectId: "especies-feb82",
  storageBucket: "especies-feb82.appspot.com",
  messagingSenderId: "1034800743706",
  appId: "1:1034800743706:web:a525c7629b0993d4b098a3",
  measurementId: "G-JS99V68MWX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);