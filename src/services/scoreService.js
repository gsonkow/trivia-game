import { db } from "../firebaseConfig"
import { collection, query, doc, deleteDoc, getDocs, addDoc, orderBy, limit, Timestamp } from "firebase/firestore"

export async function fetchScore() {
    const snapshot = await getDocs(query(collection(db, "highscore"), limit(1)));
    const snapData = snapshot.docs.map(doc => doc.data());
    return snapData.score;
}