var firebaseConfig = {
      apiKey: "AIzaSyBbMlxKMN_PCxdVReBMbK9ODkM7jMOvzac",
      authDomain: "eager-9105f.firebaseapp.com",
      projectId: "eager-9105f",
      storageBucket: "eager-9105f.appspot.com",
      messagingSenderId: "773948419545",
      appId: "1:773948419545:web:bf8cf94cee645a09633dc8",
      measurementId: "G-QXJ2C30N4P"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
