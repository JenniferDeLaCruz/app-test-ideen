
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth }  from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAB3eUTcsvPHB4GgpV7vdT4JZjgQkVKlsA",
  authDomain: "assignmentone-8a59b.firebaseapp.com",
  projectId: "assignmentone-8a59b",
  storageBucket: "assignmentone-8a59b.appspot.com",
  messagingSenderId: "772280137886",
  appId: "1:772280137886:web:d7513c897581dcd8e6e38f",
  measurementId: "G-FHSWSCWJB5"
};

initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth()
