import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

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

// 사용자가 로그인되어 있는지 확인하고, 그렇지 않으면 로그인 페이지로 리디렉션
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'index.html';
    } else {
        // 사용자 정보 표시
        document.getElementById('userName').textContent = user.displayName || 'No Name';
        document.getElementById('userEmail').textContent = user.email || 'No Email';
        document.getElementById('profilePic').src = user.photoURL || 'https://via.placeholder.com/100';
    }
});

// 로그아웃 버튼에 이벤트 리스너 추가
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('로그아웃 실패:', error);
    });
});
