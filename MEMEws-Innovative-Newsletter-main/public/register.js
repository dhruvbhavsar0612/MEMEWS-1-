
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_xqBO_8kiI3VHaKUnsERnOn1REZ1fzP8",
    authDomain: "memews-60907.firebaseapp.com",
    databaseURL: "https://memews-60907-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "memews-60907",
    storageBucket: "memews-60907.appspot.com",
    messagingSenderId: "703331295756",
    appId: "1:703331295756:web:3240c06edbfc7703d60429",
    measurementId: "G-RSB0PWJPK1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 
const db = getDatabase(app);

const form=document.getElementById('meme-form')
function handleForm(event) {
  event.preventDefault();
  save();
}

form.addEventListener('submit', handleForm);

function save() {
  const email = document.getElementById("user-email").value;
  const name = document.getElementById("user-name").value;
  const password = document.getElementById("user-password").value;
  const statusDiv = document.getElementById("status")
  
  set(ref(getDatabase(), 'user/'+name), {
    email:email,
    name:name,
    password:password
  });

  statusDiv.textContent = "Register successful, ";
  statusDiv.innerHTML+= '<a href="./login.html">login here</a>';
}