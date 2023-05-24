

  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  import { getDatabase, ref, set,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
  const analytics = getAnalytics(app);
const db = getDatabase(app);
window.onload = function() {


const dbRef = ref(db,'memes/');

console.log(dbRef);


onValue(dbRef, (snapshot) => {



  snapshot.forEach((childSnapshot) => {
    const title = childSnapshot.key;
    const childData = childSnapshot.val();
    if(childData.type=='sports'){
      console.log(childData);
      const home=document.getElementById('home');



      var l1=document.createElement('div');
      l1.className='tech-box-container';


      var l2=document.createElement('div');
      l2.className='image';
      var imgdata=document.createElement('img');
      imgdata.src=childData.img;
      imgdata.alt=childData.title;

      l2.appendChild(imgdata);

      l1.appendChild(l2);


      var l3=document.createElement('div');
      
      l3.className='content';

            var titl=document.createElement('h3');
            titl.className='headline';
            titl.innerHTML=title;
            var desc=document.createElement('p');
            desc.className='desc';
            desc.innerHTML='<a href="'+ childData.link+'"> Read More Here </a>';

        l3.appendChild(titl);
        l3.appendChild(desc);

        l1.appendChild(l3);

        console.log(l1);   
        home.append(l1);
   
     
    }
  });
}, {
  onlyOnce: true
});


}


