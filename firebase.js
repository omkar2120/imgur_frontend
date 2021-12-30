// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABQl2kVe2o5AlVXvKFdCATENJoK_B9sgg",
  authDomain: "imgur-d9a4f.firebaseapp.com",
  projectId: "imgur-d9a4f",
  storageBucket: "imgur-d9a4f.appspot.com",
  messagingSenderId: "285206754406",
  appId: "1:285206754406:web:40dcb2d50e76f660f3e9a7",
  measurementId: "G-JN90YYWFB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;