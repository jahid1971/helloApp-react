// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCihh3C6SLTlaJS5Dwrte-aZzvhGpQYZk",
  authDomain: "helloapp-1a64e.firebaseapp.com",
  projectId: "helloapp-1a64e",
  storageBucket: "helloapp-1a64e.appspot.com",
  messagingSenderId: "295286433712",
  appId: "1:295286433712:web:25ec524df262ac017d1875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;