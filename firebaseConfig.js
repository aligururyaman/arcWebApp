import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5OW9EwM5wtv94uVlzgt0aXhefRY1eIrM",
  authDomain: "glamarc-9fea4.firebaseapp.com",
  projectId: "glamarc-9fea4",
  storageBucket: "glamarc-9fea4.appspot.com",
  messagingSenderId: "292962190182",
  appId: "1:292962190182:web:7af8b8b33ec0590b41fea7",
  measurementId: "G-02DFQJQ49K",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const db = getFirestore(FIREBASE_APP);
const storage = getStorage(FIREBASE_APP);

export { db, storage };
