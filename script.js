import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

// Attach to window so buttons can call them
window.login = function () {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.textContent = "✅ Login successful!";
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.textContent = "❌ " + error.message;
    });
};

window.signup = function () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.textContent = "✅ Account created!";
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.textContent = "❌ " + error.message;
    });
};
