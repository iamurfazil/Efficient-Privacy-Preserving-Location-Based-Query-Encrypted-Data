import { auth } from './firebase.js'; // adjust path relative to this file
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js';

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registered successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => alert(error.message));
});
