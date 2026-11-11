import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*connectAuthEmulator*/ } from "firebase/auth";
import { getFirestore, /*connectFirestoreEmulator*/  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiCoHcLL9_FFasjhhHAzgQ_YnyrsSLlU8",
  authDomain: "fir-react-auth-db-project.firebaseapp.com",
  projectId: "fir-react-auth-db-project",
  storageBucket: "fir-react-auth-db-project.firebasestorage.app",
  messagingSenderId: "642227680152",
  appId: "1:642227680152:web:0b2ef265d3b5e6513e71ed"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Only connect to emulators when running locally
/*if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}*/

export { auth, provider };
export  { db };
