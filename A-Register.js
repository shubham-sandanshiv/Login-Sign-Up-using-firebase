 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
apiKey: "AIzaSyARD5qlx6vek67gDN0ySZAJbImt6PLrP2U",
authDomain: "admin-db-66823.firebaseapp.com",
projectId: "admin-db-66823",
storageBucket: "admin-db-66823.appspot.com",
messagingSenderId: "45329655506",
appId: "1:45329655506:web:005e5f05052669e898ef0b",
measurementId: "G-6G0BN1L6DY"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 console.log(app);

 

 //----- New Registration code start     
 document.getElementById("register").addEventListener("click", function() {
     var email =  document.getElementById("email").value;
     var password = document.getElementById("password").value;
     //For new registration
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       location.replace("admin-login.html")
       alert("Registration successfully!!");
       
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       console.log(errorMessage);
       alert(error);
     });                 
 });
 //----- End


 //----- Logout code start   
 document.getElementById("logout").addEventListener("click", function() {
     signOut(auth).then(() => {
         // Sign-out successful.
         console.log('Sign-out successful.');
         alert('Sign-out successful.');
         document.getElementById('logout').style.display = 'none';
       }).catch((error) => {
         // An error happened.
         console.log('An error happened.');
       });               
 });
 //----- End