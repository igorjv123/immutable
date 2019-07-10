// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeB34nGl1iWZ4F8BPcWd5rujoyFwBWw4U",
    authDomain: "immutable-cb710.firebaseapp.com",
    databaseURL: "https://immutable-cb710.firebaseio.com",
    projectId: "immutable-cb710",
    storageBucket: "",
    messagingSenderId: "866051381429",
    appId: "1:866051381429:web:30da06b1290b4a99"
};

//<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->
//
// <script>

// Initialize Firebase
firebase.initializeApp(firebaseConfig);