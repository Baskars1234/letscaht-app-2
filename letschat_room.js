//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBjpku69vMQoUnaWSpMseFRIiDgS-9m2p4",
  authDomain: "kwitter-1-2649d.firebaseapp.com",
  databaseURL: "https://kwitter-1-2649d-default-rtdb.firebaseio.com",
  projectId: "kwitter-1-2649d",
  storageBucket: "kwitter-1-2649d.appspot.com",
  messagingSenderId: "931244706902",
  appId: "1:931244706902:web:573eebf5e6efa6275c3ff7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();