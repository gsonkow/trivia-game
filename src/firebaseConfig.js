import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVfb93lDy_AtUkH94ctNsUiuUy9WO0aCU",
    authDomain: "trivia-game-11f40.firebaseapp.com",
    projectId: "trivia-game-11f40",
    storageBucket: "trivia-game-11f40.appspot.com",
    messagingSenderId: "1017084083448",
    appId: "1:1017084083448:web:78f4ace56cda48450b4f0d"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
