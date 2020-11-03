import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCyYylUHxK1suVa170dcyxrtEITKUFXB4U",
    authDomain: "skl-properties-63bfc.firebaseapp.com",
    databaseURL: "https://skl-properties-63bfc.firebaseio.com",
    projectId: "skl-properties-63bfc",
    storageBucket: "skl-properties-63bfc.appspot.com",
    messagingSenderId: "990923268574",
    appId: "1:990923268574:web:077c1ec6c62dc0f101bd4f",
    measurementId: "G-NH4KG8TVSV"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;