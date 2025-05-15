// assets/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSUzWSQscxEhuLTVv2NWvSZz5b0HFZkhC4",
  authDomain: "epql-ce087.firebaseapp.com",
  projectId: "epql-ce087",
  storageBucket: "epql-ce087.appspot.com",
  messagingSenderId: "541796292978",
  appId: "1:541796292978:web:703914ac9a263bd3ff25eb",
  measurementId: "G-7RZXWB1LBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
