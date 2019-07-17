import * as firebase from "firebase/app";
import {InitUserObserver, InitUserObservable} from './InitUserObserver'

const userInfoButtonObserver = new InitUserObserver(userInfoBtnBehavior),
      userInfoAvatarObserver = new InitUserObserver(userInfoAvatarBehavior),
      userInfoSignInObserver = new InitUserObserver(userInfoSignInBehavior),
      userErrorLoginBtnObserver = new InitUserObserver(userErrorLoginBtnBehavior),
      userErrorAvatarObserver = new InitUserObserver(userErrorAvatarBehavior),
      userErrorinfoObserver = new InitUserObserver(userErrorHideBehavior);

const userInfoObservable = new InitUserObservable(),
      userErrorObservable = new InitUserObservable();

userInfoObservable.addObserver(userInfoButtonObserver);
userInfoObservable.addObserver(userInfoAvatarObserver);
userInfoObservable.addObserver(userInfoSignInObserver);

userErrorObservable.addObserver(userErrorAvatarObserver);
userErrorObservable.addObserver(userErrorLoginBtnObserver);
userErrorObservable.addObserver(userErrorinfoObserver);

function initUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Signed in');
            console.dir(user);

            userInfoObservable.notify(user.photoURL)


        } else {
            // No user is signed in.'
            console.log("Already signed out");
            // show login btn

            userErrorObservable.notify();

        }
        $('.user-info').addClass('show')
    });
}

function userErrorLoginBtnBehavior() {
    $('.user-info__btn').text('Login');
}

function userErrorAvatarBehavior() {
    $('.user-info__avatar').removeClass('user-signed');
}

function userErrorHideBehavior() {
    $('.user-info__sign-in').removeClass('show');
}



function userInfoBtnBehavior() {
    $('.user-info__btn').text('Logout');
}
function userInfoAvatarBehavior(url) {
    console.log(url)
    $('.user-info__avatar').attr('src', url);
}
function userInfoSignInBehavior() {
    $('.user-info__sign-in').addClass('show');
}

export default initUser;
