
// import './sass/app-features.sass';
import './sass/style.sass';

// import firebaseConfig from './scripts/firebase.config'

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from './scripts/firebase.config'

import userLogin from './scripts/userLogin'
import userRegistrarion from './scripts/userRegistrarion'
import logout from './scripts/userSingOut'
import './scripts/loginModal'

firebase.initializeApp(firebaseConfig);

document.querySelector('.header__login').addEventListener('click', logout);

(function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Signed in');
            console.dir(user);
        } else {
            // No user is signed in.'
            console.log("Already signed out");
        }
    });
})();
