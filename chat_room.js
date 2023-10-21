
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiAyG0ayp6idFY5CM1yt5_Fdw1j-ZqqzY",
    authDomain: "p101-ab6c5.firebaseapp.com",
    projectId: "p101-ab6c5",
    storageBucket: "p101-ab6c5.appspot.com",
    messagingSenderId: "1021129295080",
    appId: "1:1021129295080:web:b3cd02dcfae414e708b55d",
    measurementId: "G-QVRDEY8Y04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "chat.html";
  }
  