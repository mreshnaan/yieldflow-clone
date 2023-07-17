import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vDLBOUyLJT04yKBxZ0Uz8T6lkoW8mKQ",
  authDomain: "purplefi-7d27d.firebaseapp.com",
  projectId: "purplefi-7d27d",
  storageBucket: "purplefi-7d27d.appspot.com",
  messagingSenderId: "379227695714",
  appId: "1:379227695714:web:44795ce53d1b8380857f3b",
  measurementId: "G-Q21SDG44LV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
