// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjxn1UTJvsMwbidriIaK4QAOkn_VAJZd0",
  authDomain: "todo-react-b88cf.firebaseapp.com",
  projectId: "todo-react-b88cf",
  storageBucket: "todo-react-b88cf.appspot.com",
  messagingSenderId: "504900277757",
  appId: "1:504900277757:web:625eae52aaeced10fff594",
  measurementId: "G-31WYDB31CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    db,
    storage
}