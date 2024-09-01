import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_hAZ7WXBrJF_rNLAzJpaohtyEtn6W09k",
    authDomain: "login-a9fa2.firebaseapp.com",
    projectId: "login-a9fa2",
    storageBucket: "login-a9fa2.appspot.com",
    messagingSenderId: "144571069147",
    appId: "1:144571069147:web:4d6f3a768e9d34be2952fe",
    measurementId: "G-SSPC0WD2RW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } catch (error) {
        document.getElementById('message').textContent = 'Invalid email or password.';
        document.getElementById('message').style.color = 'red';
    }
});
