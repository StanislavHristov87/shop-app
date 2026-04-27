// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLyw75Kv7ZH-VQ7zrjA2kA6XSeekwk9Tk",
  authDomain: "shop-online-12b66.firebaseapp.com",
  databaseURL: "https://shop-online-12b66-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-online-12b66",
  storageBucket: "shop-online-12b66.firebasestorage.app",
  messagingSenderId: "155888269302",
  appId: "1:155888269302:web:88c797583585450100b9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);