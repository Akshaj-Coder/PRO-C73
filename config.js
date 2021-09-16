import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC1CMvbgXR78rK8gLot8QadRztEepdLOJI",
  authDomain: "pro-c73-154dc.firebaseapp.com",
  projectId: "pro-c73-154dc",
  storageBucket: "pro-c73-154dc.appspot.com",
  messagingSenderId: "216854700965",
  appId: "1:216854700965:web:091e4f594c966f8477be4c",
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
