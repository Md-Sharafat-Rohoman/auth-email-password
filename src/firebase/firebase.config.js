// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZml2RLjU9TP4ZrxfbS2oUbNbbUsaQ72M",
  authDomain: "auth-email-password-d0b6d.firebaseapp.com",
  projectId: "auth-email-password-d0b6d",
  storageBucket: "auth-email-password-d0b6d.appspot.com",
  messagingSenderId: "597473941290",
  appId: "1:597473941290:web:5c1c6be6519e3acc167053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth