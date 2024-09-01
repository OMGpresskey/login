import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // User is not signed in, redirect to login page
        window.location.href = 'index.html';
    }
});
