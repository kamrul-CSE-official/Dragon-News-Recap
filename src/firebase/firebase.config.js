// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-ESsEPqlstWUsLhi7D_MRbhm2XtbW10",
  authDomain: "dragon-news-auth-7723b.firebaseapp.com",
  projectId: "dragon-news-auth-7723b",
  storageBucket: "dragon-news-auth-7723b.appspot.com",
  messagingSenderId: "732528481122",
  appId: "1:732528481122:web:fb879a49cea49654b2d23b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
