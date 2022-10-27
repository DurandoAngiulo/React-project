import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Copy most of this file from Google Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxTt-k3ZTM3-yhoDPVE6EPP014sHHIhow",
    authDomain: "react-database-238ce.firebaseapp.com",
    projectId: "react-database-238ce",
    storageBucket: "react-database-238ce.appspot.com",
    messagingSenderId: "850357251972",
    appId: "1:850357251972:web:fd7bfaee5d12346adab7d1",
    measurementId: "G-Q26WE5YTLJ"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)