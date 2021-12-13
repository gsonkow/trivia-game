import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB81yhdjCLxHSIwF3eGx_WGMob3GsyOz5E",
  authDomain: "trivia-game-fa775.firebaseapp.com",
  projectId: "trivia-game-fa775",
  storageBucket: "trivia-game-fa775.appspot.com",
  messagingSenderId: "938195644229",
  appId: "1:938195644229:web:0a850d2b3d89e53b9c182c"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
