import { db } from "../firebaseConfig";
import {
  collection,
  query,
  doc,
  deleteDoc,
  getDocs,
  setDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

export async function fetchScore() {
  const snapshot = await getDocs(query(collection(db, "highscore"), limit(1)));
  const snapData = snapshot.docs.map((doc) => doc.data());
  console.log(`Fetched ${snapData[0].score} from db as high score`);
  return snapData[0].score;
}

export async function updateHighScore(newHighScore) {
  await setDoc(doc(db, "highscore", "onlyHighScore"), {
    score: newHighScore,
  });
}
