// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "app";

// Initialize Firestore using the Databutton Firebase app
const db = getFirestore(firebaseApp);

export { db };