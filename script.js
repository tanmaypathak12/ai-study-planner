import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

export function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.textContent = "✅ Login successful!";
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.textContent = "❌ " + error.message;
    });
}

export function signup() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.textContent = "✅ Account created!";
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.textContent = "❌ " + error.message;
    });
}
