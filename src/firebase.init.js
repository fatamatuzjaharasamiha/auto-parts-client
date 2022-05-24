// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq1A3vzYbYKddB4oaA-Bgc1NSfHc0PZLw",
  authDomain: "auto-parts-7a356.firebaseapp.com",
  projectId: "auto-parts-7a356",
  storageBucket: "auto-parts-7a356.appspot.com",
  messagingSenderId: "555835757300",
  appId: "1:555835757300:web:8e0c35bdc4fc5773cc04a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;