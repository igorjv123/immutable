import * as firebase from "firebase/app";



function initUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Signed in');
            console.dir(user);
            // show logout btn
            $('.user-info__btn').text('Logout');
            $('.user-info__avatar').attr('src', user.photoURL);

            $('.user-info__sign-in').addClass('show');

        } else {
            // No user is signed in.'
            console.log("Already signed out");
            // show login btn
            $('.user-info__btn').text('Login') ;
            $('.user-info__avatar').removeClass('user-signed');

            $('.user-info__sign-in').removeClass('show');
        }
        $('.user-info').addClass('show')
    });
}

export default initUser;
