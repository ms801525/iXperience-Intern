// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUp5bp49cmWuxr0fYN7RHlYz_iGtwL2ms",
  authDomain: "bulukutu-tea.firebaseapp.com",
  projectId: "bulukutu-tea",
  storageBucket: "bulukutu-tea.appspot.com",
  messagingSenderId: "786649018672",
  appId: "1:786649018672:web:7e084446045379dc7a98f5",
  measurementId: "G-6Q9HS104QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
    db,
    storage,
    auth
}
