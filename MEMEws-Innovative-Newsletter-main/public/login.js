
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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

const form=document.getElementById('login-form');
const usernameInput = document.getElementById('user-name');
const passwordInput = document.getElementById('user-password');
const statusDiv = document.getElementById('status');

function handleForm (event) {
    event.preventDefault();
    validate();
}

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', handleForm);
});

function validate(event){   

    const username = usernameInput.value;
    const password = passwordInput.value;

    const dbRef = ref(db,`user/${username}/`);
    // Check if the user exists in the database
    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.password === password) {
                // Display success status in green
                statusDiv.textContent = 'Login successful!';
                statusDiv.style.color = 'green';
                window.location.href = 'index.html'; // Redirect to index.html
            } else {
                // Display error status in red
                statusDiv.textContent = 'Incorrect password!';
                statusDiv.style.color = 'red';
            }
        } else {
            // Display error status in red
            statusDiv.textContent = 'Username does not exist!';
            statusDiv.style.color = 'red';
        }
    });
    
    localStorage.setItem('username', username); 
}

console.log(localStorage.getItem('username'));