import * as firebase from "firebase/app";

function initUser() {
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
}

export default initUser;
