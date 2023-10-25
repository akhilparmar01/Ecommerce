// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA1_1t0s9GAltvdTooI0wuSkt0wL3tnGEg",
  authDomain: "ecommercepr-1243c.firebaseapp.com",
  projectId: "ecommercepr-1243c",
  storageBucket: "ecommercepr-1243c.appspot.com",
  messagingSenderId: "872948772765",
  appId: "1:872948772765:web:f5a056575399a9f442c974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)
export {fireDB, auth};