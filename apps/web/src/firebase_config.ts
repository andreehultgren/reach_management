// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCszyVgbyPbj3wTJeg8mAO4X-bheewVhmA",
  authDomain: "planova-ab.firebaseapp.com",
  projectId: "planova-ab",
  storageBucket: "planova-ab.firebasestorage.app",
  messagingSenderId: "252671480751",
  appId: "1:252671480751:web:85d43c55b213dd4c40d55a",
  measurementId: "G-8QLKPRN8MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
