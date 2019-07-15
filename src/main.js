
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

document.querySelector('.user-info__btn').addEventListener('click', logout);

(function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Signed in');
            console.dir(user);
            // show logout btn
            document.querySelector('.user-info__btn').innerText = 'Logout';
            document.querySelector('.user-info__avatar').src = user.photoURL;

            document.querySelector('.user-info__sign-in').classList.add('show');

        } else {
            // No user is signed in.'
            console.log("Already signed out");
            // show login btn
            document.querySelector('.user-info__btn').innerText = 'Login';
            document.querySelector('.user-info__avatar').classList.remove('user-signed');

            document.querySelector('.user-info__sign-in').classList.remove('show');
        }
        document.querySelector('.user-info').classList.add('show')
    });
})();
