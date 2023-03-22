import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp_zUt7vuQA3ucWUok-WGbmJlNTf_Smvc",
  authDomain: "counter-firebase-551dc.firebaseapp.com",
  projectId: "counter-firebase-551dc",
  storageBucket: "counter-firebase-551dc.appspot.com",
  messagingSenderId: "113813911889",
  appId: "1:113813911889:web:44eb751f2f88937701fb70",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
