// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAAH4gWNxxRVIaQ9NY678Zod7qLfEOL1MQ",
    authDomain: "c100-5219d.firebaseapp.com",
    databaseURL: "https://c100-5219d-default-rtdb.firebaseio.com",
    projectId: "c100-5219d",
    storageBucket: "c100-5219d.appspot.com",
    messagingSenderId: "68289072721",
    appId: "1:68289072721:web:2e7c6b7b03c2395ded3270",
    measurementId: "G-51K3GLNPM9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



