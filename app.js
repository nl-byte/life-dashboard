import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNFME-mcMvkkHqsGTiqSR1Hy_NJULn50g",
  authDomain: "life-dashboard-9cf16.firebaseapp.com",
  projectId: "life-dashboard-9cf16",
  storageBucket: "life-dashboard-9cf16.firebasestorage.app",
  messagingSenderId: "213933088943",
  appId: "1:213933088943:web:70a5c4677ef62a060e345a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});